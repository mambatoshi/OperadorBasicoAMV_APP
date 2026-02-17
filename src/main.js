import './style.css';
import { questions, flashcards, CATEGORIES } from './data/questions.js';
import { loadData, recordAnswer, saveExamResult } from './modules/storage.js';

const app = document.getElementById('app');
let currentView = 'home';
let examState = null;

function navigate(view, params = {}) {
  currentView = view;
  window.scrollTo(0, 0);
  const views = {
    home: renderHome, practice: renderPracticeSelect, quiz: () => renderQuiz(params),
    exam: renderExam, examQuiz: () => renderExamQuiz(params), examResult: () => renderExamResult(params),
    flashcardSelect: renderFlashcardSelect, flashcardView: () => renderFlashcardView(params),
    review: renderReview, progress: renderProgress
  };
  (views[view] || renderHome)();
}

// ═══════════════════ HOME ═══════════════════
function renderHome() {
  const data = loadData();
  const pct = data.totalAnswered ? Math.round(data.totalCorrect / data.totalAnswered * 100) : 0;
  const wrongCount = Object.keys(data.wrongAnswers).length;
  app.innerHTML = `
    <div class="header">
      <h1>AMV Prep</h1>
      <p>Operador Básico — Tu camino a la certificación</p>
    </div>
    <div class="stats-row fade-in">
      <div class="stat-card"><div class="stat-value" style="color:var(--accent)">${data.totalAnswered}</div><div class="stat-label">Respondidas</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--green)">${pct}%</div><div class="stat-label">Precisión</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--gold)">🔥 ${data.streak.current}</div><div class="stat-label">Racha</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--red)">${wrongCount}</div><div class="stat-label">Por repasar</div></div>
    </div>
    <div class="card-grid fade-in">
      <div class="nav-card" data-nav="practice"><div class="icon">📝</div><h3>Práctica</h3><p>Estudia por tema</p></div>
      <div class="nav-card" data-nav="exam"><div class="icon">🎯</div><h3>Simulacro</h3><p>130 preguntas · 2h40m</p></div>
      <div class="nav-card" data-nav="flashcardSelect"><div class="icon">🃏</div><h3>Flashcards</h3><p>Tarjetas de estudio</p></div>
      <div class="nav-card" data-nav="review"><div class="icon">🔄</div><h3>Repaso</h3><p>${wrongCount} errores por repasar</p></div>
      <div class="nav-card" data-nav="progress"><div class="icon">📊</div><h3>Progreso</h3><p>Estadísticas detalladas</p></div>
    </div>`;
  app.querySelectorAll('[data-nav]').forEach(el => el.onclick = () => navigate(el.dataset.nav));
}

// ═══════════════════ PRACTICE SELECT ═══════════════════
function renderPracticeSelect() {
  const data = loadData();
  app.innerHTML = `
    <button class="back-btn" id="back">← Inicio</button>
    <div class="header"><h1>📝 Práctica por Tema</h1><p>Selecciona una categoría para estudiar</p></div>
    <div class="card fade-in">${Object.entries(CATEGORIES).map(([key, cat]) => {
    const qs = questions.filter(q => q.cat === key);
    const st = data.stats[key] || { correct: 0, total: 0 };
    const pct = st.total ? Math.round(st.correct / st.total * 100) : 0;
    return `<div class="topic-card" data-cat="${key}" style="margin-bottom:10px">
        <div class="topic-icon">${cat.icon}</div>
        <div class="topic-info" style="flex:1">
          <h4>${cat.name}</h4><p>${qs.length} preguntas · ${pct}% correcto</p>
          <div class="topic-bar"><div class="topic-bar-fill" style="width:${pct}%;background:${cat.color}"></div></div>
        </div></div>`;
  }).join('')}</div>`;
  document.getElementById('back').onclick = () => navigate('home');
  app.querySelectorAll('.topic-card').forEach(el => el.onclick = () => {
    const cat = el.dataset.cat;
    const qs = shuffle(questions.filter(q => q.cat === cat));
    navigate('quiz', { questions: qs, cat, idx: 0, correct: 0 });
  });
}

// ═══════════════════ QUIZ (Practice) ═══════════════════
function renderQuiz(p) {
  if (p.idx >= p.questions.length) { navigate('practice'); return; }
  const q = p.questions[p.idx];
  const cat = CATEGORIES[q.cat];
  app.innerHTML = `
    <button class="back-btn" id="back">← Temas</button>
    <div class="q-progress">
      <span>${p.idx + 1} / ${p.questions.length}</span>
      <div class="q-progress-bar"><div class="q-progress-fill" style="width:${(p.idx + 1) / p.questions.length * 100}%"></div></div>
      <span>✓ ${p.correct}</span>
    </div>
    <div class="card fade-in">
      <div class="q-cat-badge" style="background:${cat.color}22;color:${cat.color}">${cat.icon} ${cat.name}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">${q.opts.map((o, i) => `
        <div class="q-option" data-idx="${i}">
          <span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${o}</span>
        </div>`).join('')}</div>
      <div id="explanation"></div>
      <div id="next-area"></div>
    </div>`;
  document.getElementById('back').onclick = () => navigate('practice');
  app.querySelectorAll('.q-option').forEach(el => {
    el.onclick = () => {
      const chosen = parseInt(el.dataset.idx);
      const isCorrect = chosen === q.ans;
      recordAnswer(q.cat, isCorrect, q.id);
      app.querySelectorAll('.q-option').forEach((opt, i) => {
        if (i === q.ans) opt.classList.add('correct');
        else if (i === chosen && !isCorrect) opt.classList.add('wrong');
        else opt.classList.add('disabled');
      });
      document.getElementById('explanation').innerHTML = `<div class="q-explanation"><strong>💡 Explicación:</strong> ${q.exp}</div>`;
      const nextP = { ...p, idx: p.idx + 1, correct: p.correct + (isCorrect ? 1 : 0) };
      document.getElementById('next-area').innerHTML = p.idx + 1 < p.questions.length
        ? `<button class="btn btn-primary btn-block" id="nextq">Siguiente →</button>`
        : `<button class="btn btn-gold btn-block" id="nextq">Finalizar ✓</button>`;
      document.getElementById('nextq').onclick = () => navigate('quiz', nextP);
    };
  });
  document.addEventListener('keydown', function handler(e) {
    const k = parseInt(e.key);
    if (k >= 1 && k <= q.opts.length) { const opt = app.querySelector(`.q-option[data-idx="${k - 1}"]`); if (opt && !opt.classList.contains('disabled')) opt.click(); }
    document.removeEventListener('keydown', handler);
  });
}

// ═══════════════════ EXAM ═══════════════════
function renderExam() {
  app.innerHTML = `
    <button class="back-btn" id="back">← Inicio</button>
    <div class="header"><h1>🎯 Simulacro de Examen</h1><p>Simula las condiciones reales del examen AMV</p></div>
    <div class="card fade-in" style="text-align:center">
      <h2 style="margin-bottom:16px">Examen de Operador Básico</h2>
      <div class="stats-row" style="margin-bottom:20px">
        <div class="stat-card"><div class="stat-value" style="color:var(--accent)">130</div><div class="stat-label">Preguntas</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--gold)">2:40</div><div class="stat-label">Horas</div></div>
        <div class="stat-card"><div class="stat-value" style="color:var(--green)">70%</div><div class="stat-label">Para aprobar</div></div>
      </div>
      <p style="color:var(--text-secondary);margin-bottom:20px;font-size:0.88rem">
        Se seleccionarán preguntas aleatorias de todas las categorías.<br>
        El examen se puede navegar libremente y marcar preguntas para revisión.</p>
      <button class="btn btn-gold" id="start-exam" style="font-size:1.1rem;padding:16px 40px">🚀 Iniciar Simulacro</button>
    </div>`;
  document.getElementById('back').onclick = () => navigate('home');
  document.getElementById('start-exam').onclick = () => {
    const pool = shuffle([...questions]);
    const examQs = pool.slice(0, Math.min(130, pool.length));
    examState = {
      questions: examQs, answers: new Array(examQs.length).fill(-1),
      flagged: new Set(), startTime: Date.now(), duration: 160 * 60 * 1000
    };
    navigate('examQuiz', { idx: 0 });
  };
}

function renderExamQuiz(p) {
  const s = examState;
  const q = s.questions[p.idx];
  const cat = CATEGORIES[q.cat];
  const elapsed = Date.now() - s.startTime;
  const remaining = Math.max(0, s.duration - elapsed);
  const mins = Math.floor(remaining / 60000);
  const secs = Math.floor((remaining % 60000) / 1000);
  const timerClass = mins < 10 ? 'danger' : mins < 30 ? 'warning' : '';
  const answered = s.answers.filter(a => a >= 0).length;

  app.innerHTML = `
    <div class="timer ${timerClass}" id="timer">${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}</div>
    <div class="q-progress">
      <span>Pregunta ${p.idx + 1} / ${s.questions.length}</span>
      <span>${answered} respondidas</span>
    </div>
    <div class="exam-nav" id="exam-nav">${s.questions.map((_, i) => {
    let cls = i === p.idx ? 'current' : s.flagged.has(i) ? 'flagged' : s.answers[i] >= 0 ? 'answered' : '';
    return `<button class="exam-nav-btn ${cls}" data-i="${i}">${i + 1}</button>`;
  }).join('')}</div>
    <div class="card fade-in">
      <div class="q-cat-badge" style="background:${cat.color}22;color:${cat.color}">${cat.icon} ${cat.name}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">${q.opts.map((o, i) => `
        <div class="q-option ${s.answers[p.idx] === i ? 'correct' : ''}" data-idx="${i}">
          <span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${o}</span>
        </div>`).join('')}</div>
      <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">
        <button class="btn btn-secondary" id="flag">${s.flagged.has(p.idx) ? '🚩 Quitar marca' : '🏳️ Marcar'}</button>
        ${p.idx > 0 ? '<button class="btn btn-secondary" id="prev">← Anterior</button>' : ''}
        ${p.idx < s.questions.length - 1 ? '<button class="btn btn-primary" id="next">Siguiente →</button>' : ''}
        <button class="btn btn-gold" id="finish">Finalizar Examen</button>
      </div>
    </div>`;

  app.querySelectorAll('.q-option').forEach(el => {
    el.onclick = () => {
      s.answers[p.idx] = parseInt(el.dataset.idx);
      navigate('examQuiz', p);
    };
  });
  app.querySelectorAll('.exam-nav-btn').forEach(el => el.onclick = () => navigate('examQuiz', { idx: parseInt(el.dataset.i) }));
  const flag = document.getElementById('flag');
  if (flag) flag.onclick = () => { s.flagged.has(p.idx) ? s.flagged.delete(p.idx) : s.flagged.add(p.idx); navigate('examQuiz', p); };
  const prev = document.getElementById('prev');
  if (prev) prev.onclick = () => navigate('examQuiz', { idx: p.idx - 1 });
  const next = document.getElementById('next');
  if (next) next.onclick = () => navigate('examQuiz', { idx: p.idx + 1 });
  document.getElementById('finish').onclick = () => finishExam();

  const timerEl = document.getElementById('timer');
  const interval = setInterval(() => {
    if (currentView !== 'examQuiz') { clearInterval(interval); return; }
    const rem = Math.max(0, s.duration - (Date.now() - s.startTime));
    const m = Math.floor(rem / 60000), sc = Math.floor((rem % 60000) / 1000);
    timerEl.textContent = `${String(m).padStart(2, '0')}:${String(sc).padStart(2, '0')}`;
    timerEl.className = `timer ${m < 10 ? 'danger' : m < 30 ? 'warning' : ''}`;
    if (rem <= 0) { clearInterval(interval); finishExam(); }
  }, 1000);
}

function finishExam() {
  const s = examState;
  let correct = 0;
  s.questions.forEach((q, i) => {
    const isCorrect = s.answers[i] === q.ans;
    if (isCorrect) correct++;
    recordAnswer(q.cat, isCorrect, q.id);
  });
  const result = {
    total: s.questions.length, correct, pct: Math.round(correct / s.questions.length * 100),
    time: Date.now() - s.startTime, passed: correct / s.questions.length >= 0.7
  };
  saveExamResult(result);
  navigate('examResult', result);
}

function renderExamResult(r) {
  const catBreakdown = {};
  examState.questions.forEach((q, i) => {
    if (!catBreakdown[q.cat]) catBreakdown[q.cat] = { correct: 0, total: 0 };
    catBreakdown[q.cat].total++;
    if (examState.answers[i] === q.ans) catBreakdown[q.cat].correct++;
  });
  const mins = Math.floor(r.time / 60000);
  app.innerHTML = `
    <div class="header"><h1>${r.passed ? '🎉 ¡Aprobado!' : '📚 No aprobado'}</h1></div>
    <div class="card fade-in" style="text-align:center">
      <div class="result-circle ${r.passed ? '' : 'fail'}">
        <div class="result-score" style="color:${r.passed ? 'var(--green)' : 'var(--red)'}">${r.pct}%</div>
        <div class="result-label">${r.correct}/${r.total}</div>
      </div>
      <p style="color:var(--text-secondary);margin:12px 0">Tiempo: ${mins} minutos</p>
    </div>
    <div class="card fade-in">
      <h3 style="margin-bottom:16px">Resultados por Tema</h3>
      ${Object.entries(catBreakdown).map(([key, st]) => {
    const cat = CATEGORIES[key]; const pct = Math.round(st.correct / st.total * 100);
    return `<div class="progress-item">
          <div class="progress-label"><span>${cat.icon} ${cat.name}</span><span>${st.correct}/${st.total} (${pct}%)</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${pct >= 70 ? 'var(--green)' : 'var(--red)'}"></div></div>
        </div>`;
  }).join('')}
    </div>
    <button class="btn btn-primary btn-block" id="home">← Volver al inicio</button>`;
  document.getElementById('home').onclick = () => navigate('home');
}

// ═══════════════════ FLASHCARDS ═══════════════════
function renderFlashcardSelect() {
  app.innerHTML = `
    <button class="back-btn" id="back">← Inicio</button>
    <div class="header"><h1>🃏 Flashcards</h1><p>Selecciona un tema o estudia todas</p></div>
    <div class="card fade-in">
      <div class="topic-card" data-cat="all" style="margin-bottom:10px;border-color:var(--accent)">
        <div class="topic-icon">🌟</div>
        <div class="topic-info"><h4>Todas las tarjetas</h4><p>${flashcards.length} tarjetas</p></div>
      </div>
      ${Object.entries(CATEGORIES).map(([key, cat]) => {
    const fc = flashcards.filter(f => f.cat === key);
    if (!fc.length) return '';
    return `<div class="topic-card" data-cat="${key}" style="margin-bottom:10px">
          <div class="topic-icon">${cat.icon}</div>
          <div class="topic-info"><h4>${cat.name}</h4><p>${fc.length} tarjetas</p></div></div>`;
  }).join('')}
    </div>`;
  document.getElementById('back').onclick = () => navigate('home');
  app.querySelectorAll('.topic-card').forEach(el => {
    el.onclick = () => {
      const cat = el.dataset.cat;
      const cards = cat === 'all' ? shuffle([...flashcards]) : shuffle(flashcards.filter(f => f.cat === cat));
      navigate('flashcardView', { cards, idx: 0 });
    };
  });
}

function renderFlashcardView(p) {
  if (p.idx >= p.cards.length) { navigate('flashcardSelect'); return; }
  const fc = p.cards[p.idx];
  const cat = CATEGORIES[fc.cat];
  app.innerHTML = `
    <button class="back-btn" id="back">← Temas</button>
    <div class="q-progress">
      <span>${p.idx + 1} / ${p.cards.length}</span>
      <div class="q-progress-bar"><div class="q-progress-fill" style="width:${(p.idx + 1) / p.cards.length * 100}%"></div></div>
    </div>
    <div class="q-cat-badge" style="background:${cat.color}22;color:${cat.color};margin-bottom:12px">${cat.icon} ${cat.name}</div>
    <div class="flashcard-container">
      <div class="flashcard" id="flashcard">
        <div class="flashcard-face flashcard-front"><h3>${fc.front}</h3><div class="flashcard-hint">Toca para ver la respuesta</div></div>
        <div class="flashcard-face flashcard-back"><p>${fc.back}</p></div>
      </div>
    </div>
    <div style="display:flex;gap:8px;justify-content:center;margin-top:16px">
      ${p.idx > 0 ? '<button class="btn btn-secondary" id="prev">← Anterior</button>' : ''}
      <button class="btn btn-primary" id="next">${p.idx < p.cards.length - 1 ? 'Siguiente →' : 'Finalizar ✓'}</button>
    </div>`;
  document.getElementById('back').onclick = () => navigate('flashcardSelect');
  document.getElementById('flashcard').onclick = (e) => e.currentTarget.classList.toggle('flipped');
  const prev = document.getElementById('prev');
  if (prev) prev.onclick = () => navigate('flashcardView', { ...p, idx: p.idx - 1 });
  document.getElementById('next').onclick = () => navigate('flashcardView', { ...p, idx: p.idx + 1 });
}

// ═══════════════════ REVIEW ═══════════════════
function renderReview() {
  const data = loadData();
  const wrongIds = Object.keys(data.wrongAnswers);
  const wrongQs = shuffle(questions.filter(q => wrongIds.includes(q.id)));
  if (!wrongQs.length) {
    app.innerHTML = `
      <button class="back-btn" id="back">← Inicio</button>
      <div class="card fade-in" style="text-align:center;padding:48px">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <h2>¡No hay errores pendientes!</h2>
        <p style="color:var(--text-secondary);margin-top:8px">Sigue practicando para mantener tu nivel.</p>
      </div>`;
    document.getElementById('back').onclick = () => navigate('home');
    return;
  }
  navigate('quiz', { questions: wrongQs, cat: 'review', idx: 0, correct: 0 });
}

// ═══════════════════ PROGRESS ═══════════════════
function renderProgress() {
  const data = loadData();
  const pct = data.totalAnswered ? Math.round(data.totalCorrect / data.totalAnswered * 100) : 0;
  app.innerHTML = `
    <button class="back-btn" id="back">← Inicio</button>
    <div class="header"><h1>📊 Progreso</h1></div>
    <div class="stats-row fade-in">
      <div class="stat-card"><div class="stat-value" style="color:var(--accent)">${data.totalAnswered}</div><div class="stat-label">Total respondidas</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--green)">${pct}%</div><div class="stat-label">Precisión global</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--gold)">🔥 ${data.streak.current}</div><div class="stat-label">Días seguidos</div></div>
      <div class="stat-card"><div class="stat-value" style="color:var(--red)">${Object.keys(data.wrongAnswers).length}</div><div class="stat-label">Errores pendientes</div></div>
    </div>
    <div class="card fade-in">
      <h3 style="margin-bottom:16px">Rendimiento por Tema</h3>
      ${Object.entries(CATEGORIES).map(([key, cat]) => {
    const st = data.stats[key] || { correct: 0, total: 0 };
    const p = st.total ? Math.round(st.correct / st.total * 100) : 0;
    const total = questions.filter(q => q.cat === key).length;
    return `<div class="progress-item">
          <div class="progress-label"><span>${cat.icon} ${cat.name}</span><span>${st.correct}/${st.total} de ${total} (${p}%)</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${p}%;background:${cat.color}"></div></div>
        </div>`;
  }).join('')}
    </div>
    ${data.examHistory.length ? `<div class="card fade-in">
      <h3 style="margin-bottom:16px">Historial de Simulacros</h3>
      ${data.examHistory.slice(-5).reverse().map(e => {
    const d = new Date(e.date);
    return `<div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border)">
          <span>${d.toLocaleDateString('es-CO')}</span>
          <span style="color:${e.passed ? 'var(--green)' : 'var(--red)'}; font-weight:700">${e.pct}% ${e.passed ? '✓' : '✗'}</span>
        </div>`;
  }).join('')}
    </div>` : ''}`;
  document.getElementById('back').onclick = () => navigate('home');
}

// ═══════════════════ UTILS ═══════════════════
function shuffle(arr) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }

// Init
navigate('home');
