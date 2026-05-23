import './style.css';
import { questions, flashcards, CATEGORIES } from './data/questions.js';
import { GUIDE_SOURCES } from './data/coverage_manifest.js';
import {
  clearLastSession,
  loadData,
  recordAnswer,
  saveExamResult,
  saveLastSession
} from './modules/storage.js';

const app = document.getElementById('app');

const PASSING_PCT = 70;
const GUIDE_WIDTH_KEY = 'amv_guide_width';
const GUIDE_READER_SOURCES = [
  'guia_regulacion',
  'guia_autorregulacion',
  'guia_etica',
  'guia_analisis_matematicas',
  'guia_matematicas',
  'guia_fic',
  'guia_portafolios',
  'guia_renta_fija',
  'guia_renta_variable',
  'guia_derivados',
  'guia_divisas',
  'amv_operador'
]
  .map((key) => ({ key, ...GUIDE_SOURCES[key] }))
  .filter((guide) => guide.url);
const CATEGORY_GUIDE_SOURCE = {
  regulacion: 'guia_regulacion',
  autorregulacion: 'guia_autorregulacion',
  etica: 'guia_etica',
  analisis_economico: 'guia_analisis_matematicas',
  riesgos: 'amv_operador',
  matematicas: 'guia_analisis_matematicas',
  renta_fija: 'guia_renta_fija',
  renta_variable: 'guia_renta_variable',
  derivados: 'guia_derivados',
  divisas: 'guia_divisas',
  portafolios: 'guia_portafolios',
  fondos: 'guia_fic'
};

const EXAM_CONFIG = {
  operator: {
    key: 'operator',
    title: 'Operador',
    description: 'Estructura visible alineada con AMV: 170 preguntas, 3h40m y 70% para aprobar.',
    officialQuestions: 170,
    durationMinutes: 220,
    sourceLabel: 'AMV Operador'
  },
  specialties: {
    renta_fija: {
      key: 'renta_fija',
      title: 'Especialidad Renta Fija',
      category: 'renta_fija',
      officialQuestions: 40,
      durationMinutes: 60
    },
    renta_variable: {
      key: 'renta_variable',
      title: 'Especialidad Renta Variable',
      category: 'renta_variable',
      officialQuestions: 40,
      durationMinutes: 60
    },
    derivados: {
      key: 'derivados',
      title: 'Especialidad Derivados',
      category: 'derivados',
      officialQuestions: 40,
      durationMinutes: 60
    },
    divisas: {
      key: 'divisas',
      title: 'Especialidad Divisas',
      category: 'divisas',
      officialQuestions: 40,
      durationMinutes: 60
    }
  }
};

let currentView = 'home';
let examState = null;
let examTimerId = null;

function navigate(view, params = {}) {
  currentView = view;
  document.onkeydown = null;
  if (examTimerId) {
    clearInterval(examTimerId);
    examTimerId = null;
  }
  window.scrollTo({ top: 0, behavior: 'auto' });

  const views = {
    home: renderHome,
    practice: renderPracticeSelect,
    quiz: () => renderQuiz(params),
    practiceResult: () => renderPracticeResult(params),
    exam: renderExam,
    examQuiz: () => renderExamQuiz(params),
    examResult: () => renderExamResult(params),
    flashcardSelect: renderFlashcardSelect,
    flashcardView: () => renderFlashcardView(params),
    review: renderReviewHub,
    progress: renderProgress
  };

  (views[view] || renderHome)();
}

function renderHome() {
  const data = loadData();
  const globalPct = getGlobalPct(data);
  const wrongCount = Object.keys(data.wrongAnswers).length;
  const recommendation = getStudyRecommendation(data);
  const resume = getResumeSession(data);
  const recentExam = data.examHistory.at(-1);

  app.innerHTML = `
    <section class="dashboard-hero fade-in">
      <div>
        <p class="eyebrow">Preparación AMV</p>
        <h1>Operador Básico y especialidades</h1>
        <p class="hero-copy">Plan de estudio, práctica por tema y simulacros con una estructura visible alineada con la certificación actual.</p>
      </div>
      <div class="hero-facts">
        <div><strong>${questions.length}</strong><span>preguntas en banco</span></div>
        <div><strong>${flashcards.length}</strong><span>flashcards</span></div>
        <div><strong>${EXAM_CONFIG.operator.officialQuestions}</strong><span>preguntas Operador AMV</span></div>
      </div>
    </section>

    <section class="metric-grid fade-in">
      ${renderMetric('Respondidas', data.totalAnswered, 'accent')}
      ${renderMetric('Precisión', `${globalPct}%`, globalPct >= PASSING_PCT ? 'green' : 'gold')}
      ${renderMetric('Racha', `${data.streak.current} días`, 'gold')}
      ${renderMetric('Por repasar', wrongCount, wrongCount ? 'red' : 'green')}
    </section>

    <section class="dashboard-layout fade-in">
      <article class="panel study-panel">
        <div class="section-heading">
          <p class="eyebrow">Qué estudiar hoy</p>
          <h2>${recommendation.title}</h2>
        </div>
        <p class="muted">${recommendation.detail}</p>
        <div class="action-row">
          <button class="btn btn-primary" id="recommendation-action">${recommendation.actionLabel}</button>
          <button class="btn btn-secondary" data-nav="progress">Ver progreso</button>
        </div>
      </article>

      ${resume ? `
        <article class="panel resume-panel">
          <p class="eyebrow">Continuar donde ibas</p>
          <h3>${resume.title}</h3>
          <p class="muted">${resume.detail}</p>
          <button class="btn btn-secondary btn-block" id="resume-session">Reanudar sesión</button>
        </article>
      ` : `
        <article class="panel resume-panel">
          <p class="eyebrow">Ruta sugerida</p>
          <h3>Empieza por diagnóstico</h3>
          <p class="muted">Haz una práctica por tema o un simulacro para que el tablero pueda priorizar tus debilidades.</p>
          <button class="btn btn-secondary btn-block" data-nav="practice">Elegir tema</button>
        </article>
      `}
    </section>

    <section class="quick-grid fade-in">
      ${renderNavCard('Práctica', 'Estudia por tema con retroalimentación inmediata.', 'practice')}
      ${renderNavCard('Simulacros', 'Operador y prácticas de especialidad con el banco actual.', 'exam')}
      ${renderNavCard('Flashcards', 'Repasa definiciones y fórmulas de forma rápida.', 'flashcardSelect')}
      ${renderNavCard('Repaso', `${wrongCount} preguntas pendientes por corregir.`, 'review')}
    </section>

    ${recentExam ? `
      <section class="panel fade-in">
        <div class="section-heading inline">
          <div>
            <p class="eyebrow">Último simulacro</p>
            <h2>${recentExam.title || 'Simulacro'}</h2>
          </div>
          <strong class="${recentExam.passed ? 'text-green' : 'text-red'}">${recentExam.pct}%</strong>
        </div>
        <p class="muted">${recentExam.correct}/${recentExam.total} correctas · ${formatDate(recentExam.date)} · ${recentExam.passed ? 'aprobado' : 'por debajo del 70%'}</p>
      </section>
    ` : ''}
  `;

  document.getElementById('recommendation-action').onclick = recommendation.onClick;
  const resumeBtn = document.getElementById('resume-session');
  if (resumeBtn) resumeBtn.onclick = () => resumeSession(resume.session);
  bindNavActions();
}

function renderPracticeSelect() {
  const data = loadData();

  app.innerHTML = `
    <button class="back-btn" id="back">Volver al inicio</button>
    <div class="page-heading">
      <p class="eyebrow">Práctica por tema</p>
      <h1>Elige el bloque de estudio</h1>
      <p>Ordenado para mostrar cobertura del banco actual y desempeño guardado localmente.</p>
    </div>
    <section class="topic-list fade-in">
      ${Object.entries(CATEGORIES).map(([key, cat]) => {
        const qs = getCategoryQuestions(key);
        const st = data.stats[key] || { correct: 0, total: 0 };
        const pct = st.total ? Math.round((st.correct / st.total) * 100) : 0;
        return `
          <div class="topic-card" data-cat="${key}" role="button" tabindex="0">
            <span class="topic-dot" style="background:${cat.color}"></span>
            <span class="topic-copy">
              <strong>${cat.name}</strong>
              <small>${qs.length} preguntas · ${st.total ? `${pct}% correcto` : 'sin práctica registrada'}</small>
              <span class="topic-bar"><span style="width:${pct}%;background:${cat.color}"></span></span>
            </span>
            <span class="topic-actions">
              <button class="btn btn-secondary btn-sm" type="button" data-guide-cat="${key}">Guia</button>
              <button class="btn btn-primary btn-sm" type="button" data-start-cat="${key}">Practicar</button>
            </span>
          </div>
        `;
      }).join('')}
    </section>
    ${renderGuideReader()}
  `;

  document.getElementById('back').onclick = () => navigate('home');
  app.querySelectorAll('[data-cat]').forEach((el) => {
    el.onclick = (event) => {
      if (event.target.closest('button')) return;
      startPractice(el.dataset.cat);
    };
    el.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        startPractice(el.dataset.cat);
      }
    };
  });
  app.querySelectorAll('[data-start-cat]').forEach((el) => {
    el.onclick = () => startPractice(el.dataset.startCat);
  });
  app.querySelectorAll('[data-guide-cat]').forEach((el) => {
    el.onclick = () => openGuideForCategory(el.dataset.guideCat);
  });
  bindGuideReader();
}

function renderQuiz(params) {
  const p = normalizeQuizParams(params);
  if (!p.questions.length) {
    navigate('practice');
    return;
  }
  if (p.idx >= p.questions.length) {
    clearLastSession();
    navigate('practiceResult', p);
    return;
  }

  persistQuizSession(p);

  const q = p.questions[p.idx];
  const cat = CATEGORIES[q.cat];
  const backTarget = p.mode === 'review' ? 'home' : 'practice';

  app.innerHTML = `
    <button class="back-btn" id="back">${p.mode === 'review' ? 'Volver al inicio' : 'Volver a temas'}</button>
    <div class="quiz-topbar">
      <span>${p.idx + 1} / ${p.questions.length}</span>
      <div class="q-progress-bar"><div class="q-progress-fill" style="width:${((p.idx + 1) / p.questions.length) * 100}%"></div></div>
      <span>${p.correct} correctas</span>
    </div>
    <div class="quiz-guide-row">
      <button class="btn btn-secondary" id="open-guide-reader">Consultar guia de ${cat.name}</button>
    </div>
    <article class="panel question-panel fade-in">
      <div class="q-cat-badge" style="border-color:${cat.color};color:${cat.color}">${cat.name}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options">
        ${q.opts.map((option, idx) => `
          <button class="q-option" data-idx="${idx}">
            <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
            <span>${option}</span>
          </button>
        `).join('')}
      </div>
      <div id="explanation"></div>
      <div id="next-area"></div>
    </article>
    ${renderGuideReader(getGuideKeyForCategory(q.cat))}
  `;

  document.getElementById('back').onclick = () => navigate(backTarget);
  document.getElementById('open-guide-reader').onclick = () => openGuideForCategory(q.cat);
  app.querySelectorAll('.q-option').forEach((el) => {
    el.onclick = () => handlePracticeAnswer(el, q, p);
  });
  bindGuideReader();

  document.onkeydown = (event) => {
    const key = parseInt(event.key, 10);
    if (key >= 1 && key <= q.opts.length) {
      const option = app.querySelector(`.q-option[data-idx="${key - 1}"]`);
      if (option && !option.disabled) option.click();
    }
  };
}

function renderPracticeResult(result) {
  const total = result.questions?.length || result.total || 0;
  const correct = result.correct || 0;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const title = result.mode === 'review' ? 'Repaso completado' : 'Sesión completada';
  const message = pct >= PASSING_PCT
    ? 'Buen nivel para este bloque. Mantén el repaso espaciado.'
    : 'Conviene repetir este bloque y revisar las explicaciones de las respuestas falladas.';

  app.innerHTML = `
    <div class="page-heading compact">
      <p class="eyebrow">${title}</p>
      <h1>${pct}%</h1>
      <p>${correct}/${total} respuestas correctas</p>
    </div>
    <section class="panel result-panel fade-in">
      <div class="result-ring ${pct >= PASSING_PCT ? '' : 'fail'}">
        <strong>${pct}%</strong>
        <span>${pct >= PASSING_PCT ? 'sobre meta' : 'bajo meta'}</span>
      </div>
      <p class="muted">${message}</p>
      <div class="action-row center">
        <button class="btn btn-primary" id="repeat">Repetir bloque</button>
        <button class="btn btn-secondary" data-nav="progress">Ver progreso</button>
        <button class="btn btn-secondary" data-nav="home">Inicio</button>
      </div>
    </section>
  `;

  document.getElementById('repeat').onclick = () => {
    if (result.mode === 'review') navigate('review');
    else startPractice(result.cat);
  };
  bindNavActions();
}

function renderExam() {
  const operatorCanRun = questions.length >= EXAM_CONFIG.operator.officialQuestions;

  app.innerHTML = `
    <button class="back-btn" id="back">Volver al inicio</button>
    <div class="page-heading">
      <p class="eyebrow">Simulacros y especialidades</p>
      <h1>Estructura AMV actual</h1>
      <p>El banco actual se usa sin inflar cobertura. Cuando una especialidad no llega a 40 preguntas, se presenta como práctica cronometrada.</p>
    </div>

    <section class="exam-grid fade-in">
      <article class="panel exam-card featured">
        <p class="eyebrow">${EXAM_CONFIG.operator.sourceLabel}</p>
        <h2>${EXAM_CONFIG.operator.title}</h2>
        <p class="muted">${EXAM_CONFIG.operator.description}</p>
        <div class="exam-facts">
          <span>${EXAM_CONFIG.operator.officialQuestions} preguntas</span>
          <span>${formatDuration(EXAM_CONFIG.operator.durationMinutes)}</span>
          <span>${PASSING_PCT}% aprobación</span>
        </div>
        <p class="availability ${operatorCanRun ? 'ok' : 'warn'}">
          Banco actual: ${questions.length} preguntas. ${operatorCanRun ? 'Simulacro disponible.' : 'No alcanza el tamaño oficial completo.'}
        </p>
        <button class="btn btn-primary btn-block" id="start-operator">Iniciar simulacro Operador</button>
      </article>

      ${Object.values(EXAM_CONFIG.specialties).map((cfg) => {
        const available = getCategoryQuestions(cfg.category).length;
        const complete = available >= cfg.officialQuestions;
        return `
          <article class="panel exam-card">
            <p class="eyebrow">Especialidad</p>
            <h3>${cfg.title}</h3>
            <div class="exam-facts compact">
              <span>${cfg.officialQuestions} preguntas AMV</span>
              <span>${formatDuration(cfg.durationMinutes)}</span>
            </div>
            <p class="availability ${complete ? 'ok' : 'warn'}">
              Banco actual: ${available} preguntas. ${complete ? 'Simulacro disponible.' : 'Práctica con banco actual.'}
            </p>
            <button class="btn btn-secondary btn-block" data-specialty="${cfg.key}">
              ${complete ? 'Iniciar especialidad' : 'Practicar especialidad'}
            </button>
          </article>
        `;
      }).join('')}
    </section>
  `;

  document.getElementById('back').onclick = () => navigate('home');
  document.getElementById('start-operator').onclick = () => startExam('operator');
  app.querySelectorAll('[data-specialty]').forEach((el) => {
    el.onclick = () => startExam(el.dataset.specialty);
  });
}

function renderExamQuiz(params) {
  if (!examState) {
    navigate('exam');
    return;
  }

  const p = { idx: params.idx || 0 };
  const q = examState.questions[p.idx];
  const cat = CATEGORIES[q.cat];
  const remaining = getExamRemainingMs();
  const mins = Math.floor(remaining / 60000);
  const secs = Math.floor((remaining % 60000) / 1000);
  const timerClass = mins < 10 ? 'danger' : mins < 30 ? 'warning' : '';
  const answered = examState.answers.filter((answer) => answer >= 0).length;

  app.innerHTML = `
    <div class="exam-shell">
      <div class="exam-status">
        <div>
          <p class="eyebrow">${examState.isOfficialShape ? 'Simulacro' : 'Práctica cronometrada'}</p>
          <strong>${examState.title}</strong>
        </div>
        <div class="timer ${timerClass}" id="timer">${formatTimer(mins, secs)}</div>
      </div>
      <div class="quiz-topbar">
        <span>Pregunta ${p.idx + 1} / ${examState.questions.length}</span>
        <div class="q-progress-bar"><div class="q-progress-fill" style="width:${((p.idx + 1) / examState.questions.length) * 100}%"></div></div>
        <span>${answered} respondidas</span>
      </div>
      <div class="exam-nav" id="exam-nav">
        ${examState.questions.map((_, idx) => {
          const cls = idx === p.idx
            ? 'current'
            : examState.flagged.has(idx)
              ? 'flagged'
              : examState.answers[idx] >= 0
                ? 'answered'
                : '';
          return `<button class="exam-nav-btn ${cls}" data-i="${idx}">${idx + 1}</button>`;
        }).join('')}
      </div>
      <article class="panel question-panel fade-in">
        <div class="q-cat-badge" style="border-color:${cat.color};color:${cat.color}">${cat.name}</div>
        <div class="q-text">${q.q}</div>
        <div class="q-options">
          ${q.opts.map((option, idx) => `
            <button class="q-option ${examState.answers[p.idx] === idx ? 'selected' : ''}" data-idx="${idx}">
              <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
              <span>${option}</span>
            </button>
          `).join('')}
        </div>
        <div class="exam-actions">
          <button class="btn btn-secondary" id="flag">${examState.flagged.has(p.idx) ? 'Quitar marca' : 'Marcar para revisar'}</button>
          ${p.idx > 0 ? '<button class="btn btn-secondary" id="prev">Anterior</button>' : ''}
          ${p.idx < examState.questions.length - 1 ? '<button class="btn btn-primary" id="next">Siguiente</button>' : ''}
          <button class="btn btn-gold" id="finish">Finalizar</button>
        </div>
      </article>
    </div>
  `;

  app.querySelectorAll('.q-option').forEach((el) => {
    el.onclick = () => {
      examState.answers[p.idx] = parseInt(el.dataset.idx, 10);
      navigate('examQuiz', p);
    };
  });
  app.querySelectorAll('.exam-nav-btn').forEach((el) => {
    el.onclick = () => navigate('examQuiz', { idx: parseInt(el.dataset.i, 10) });
  });

  document.getElementById('flag').onclick = () => {
    if (examState.flagged.has(p.idx)) examState.flagged.delete(p.idx);
    else examState.flagged.add(p.idx);
    navigate('examQuiz', p);
  };

  const prev = document.getElementById('prev');
  if (prev) prev.onclick = () => navigate('examQuiz', { idx: p.idx - 1 });
  const next = document.getElementById('next');
  if (next) next.onclick = () => navigate('examQuiz', { idx: p.idx + 1 });
  document.getElementById('finish').onclick = finishExam;

  const timerEl = document.getElementById('timer');
  examTimerId = setInterval(() => {
    if (currentView !== 'examQuiz' || !examState) {
      clearInterval(examTimerId);
      examTimerId = null;
      return;
    }
    const rem = getExamRemainingMs();
    const m = Math.floor(rem / 60000);
    const sc = Math.floor((rem % 60000) / 1000);
    timerEl.textContent = formatTimer(m, sc);
    timerEl.className = `timer ${m < 10 ? 'danger' : m < 30 ? 'warning' : ''}`;
    if (rem <= 0) {
      clearInterval(examTimerId);
      examTimerId = null;
      finishExam();
    }
  }, 1000);
}

function finishExam() {
  if (!examState) {
    navigate('home');
    return;
  }

  let correct = 0;
  examState.questions.forEach((q, idx) => {
    const isCorrect = examState.answers[idx] === q.ans;
    if (isCorrect) correct += 1;
    recordAnswer(q.cat, isCorrect, q.id);
  });

  const result = {
    title: examState.title,
    total: examState.questions.length,
    officialQuestions: examState.officialQuestions,
    correct,
    pct: Math.round((correct / examState.questions.length) * 100),
    time: Date.now() - examState.startTime,
    passed: (correct / examState.questions.length) * 100 >= PASSING_PCT,
    isOfficialShape: examState.isOfficialShape
  };

  saveExamResult(result);
  navigate('examResult', result);
}

function renderExamResult(result) {
  if (!examState) {
    navigate('home');
    return;
  }

  const catBreakdown = {};
  examState.questions.forEach((q, idx) => {
    if (!catBreakdown[q.cat]) catBreakdown[q.cat] = { correct: 0, total: 0 };
    catBreakdown[q.cat].total += 1;
    if (examState.answers[idx] === q.ans) catBreakdown[q.cat].correct += 1;
  });

  const mins = Math.floor(result.time / 60000);
  const statusLabel = result.passed ? 'Aprobado' : 'Por debajo del 70%';

  app.innerHTML = `
    <div class="page-heading compact">
      <p class="eyebrow">${result.title}</p>
      <h1>${statusLabel}</h1>
      <p>${result.correct}/${result.total} correctas en ${mins} minutos</p>
    </div>
    <section class="panel result-panel fade-in">
      <div class="result-ring ${result.passed ? '' : 'fail'}">
        <strong>${result.pct}%</strong>
        <span>${result.passed ? 'aprobado' : 'revisar'}</span>
      </div>
      ${!result.isOfficialShape ? `
        <p class="notice">Resultado calculado sobre ${result.total} preguntas disponibles del banco actual; no se presenta como simulacro oficial completo.</p>
      ` : ''}
      <div class="action-row center">
        <button class="btn btn-primary" data-nav="exam">Nuevo simulacro</button>
        <button class="btn btn-secondary" data-nav="progress">Ver progreso</button>
        <button class="btn btn-secondary" data-nav="home">Inicio</button>
      </div>
    </section>
    <section class="panel fade-in">
      <div class="section-heading">
        <p class="eyebrow">Desglose</p>
        <h2>Resultados por tema</h2>
      </div>
      ${Object.entries(catBreakdown).map(([key, st]) => {
        const cat = CATEGORIES[key];
        const pct = Math.round((st.correct / st.total) * 100);
        return `
          <div class="progress-item">
            <div class="progress-label">
              <span>${cat.name}</span>
              <span>${st.correct}/${st.total} (${pct}%)</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${pct >= PASSING_PCT ? 'var(--green)' : 'var(--red)'}"></div></div>
          </div>
        `;
      }).join('')}
    </section>
  `;

  examState = null;
  bindNavActions();
}

function renderFlashcardSelect() {
  app.innerHTML = `
    <button class="back-btn" id="back">Volver al inicio</button>
    <div class="page-heading">
      <p class="eyebrow">Flashcards</p>
      <h1>Repaso rápido</h1>
      <p>Tarjetas para fijar conceptos, fórmulas y reglas clave antes de practicar preguntas.</p>
    </div>
    <section class="topic-list fade-in">
      <button class="topic-card" data-cat="all">
        <span class="topic-dot accent"></span>
        <span class="topic-copy">
          <strong>Todas las tarjetas</strong>
          <small>${flashcards.length} tarjetas</small>
        </span>
      </button>
      ${Object.entries(CATEGORIES).map(([key, cat]) => {
        const cards = flashcards.filter((card) => card.cat === key);
        if (!cards.length) return '';
        return `
          <button class="topic-card" data-cat="${key}">
            <span class="topic-dot" style="background:${cat.color}"></span>
            <span class="topic-copy">
              <strong>${cat.name}</strong>
              <small>${cards.length} tarjetas</small>
            </span>
          </button>
        `;
      }).join('')}
    </section>
  `;

  document.getElementById('back').onclick = () => navigate('home');
  app.querySelectorAll('[data-cat]').forEach((el) => {
    el.onclick = () => {
      const cat = el.dataset.cat;
      const cards = cat === 'all' ? shuffle([...flashcards]) : shuffle(flashcards.filter((card) => card.cat === cat));
      navigate('flashcardView', { cards, idx: 0 });
    };
  });
}

function renderFlashcardView(params) {
  const p = { cards: params.cards || [], idx: params.idx || 0 };
  if (p.idx >= p.cards.length) {
    navigate('flashcardSelect');
    return;
  }

  const card = p.cards[p.idx];
  const cat = CATEGORIES[card.cat];

  app.innerHTML = `
    <button class="back-btn" id="back">Volver a tarjetas</button>
    <div class="quiz-topbar">
      <span>${p.idx + 1} / ${p.cards.length}</span>
      <div class="q-progress-bar"><div class="q-progress-fill" style="width:${((p.idx + 1) / p.cards.length) * 100}%"></div></div>
    </div>
    <div class="q-cat-badge" style="border-color:${cat.color};color:${cat.color}">${cat.name}</div>
    <div class="flashcard-container fade-in">
      <button class="flashcard" id="flashcard">
        <span class="flashcard-face flashcard-front">
          <strong>${card.front}</strong>
          <small>Toca para ver la respuesta</small>
        </span>
        <span class="flashcard-face flashcard-back">
          <span>${card.back}</span>
        </span>
      </button>
    </div>
    <div class="action-row center">
      ${p.idx > 0 ? '<button class="btn btn-secondary" id="prev">Anterior</button>' : ''}
      <button class="btn btn-primary" id="next">${p.idx < p.cards.length - 1 ? 'Siguiente' : 'Finalizar'}</button>
    </div>
  `;

  document.getElementById('back').onclick = () => navigate('flashcardSelect');
  document.getElementById('flashcard').onclick = (event) => event.currentTarget.classList.toggle('flipped');
  const prev = document.getElementById('prev');
  if (prev) prev.onclick = () => navigate('flashcardView', { ...p, idx: p.idx - 1 });
  document.getElementById('next').onclick = () => navigate('flashcardView', { ...p, idx: p.idx + 1 });
}

function renderReview() {
  const data = loadData();
  const wrongIds = Object.keys(data.wrongAnswers);
  const wrongQuestions = shuffle(questions.filter((q) => wrongIds.includes(q.id)));

  if (!wrongQuestions.length) {
    app.innerHTML = `
      <button class="back-btn" id="back">Volver al inicio</button>
      <section class="panel empty-state fade-in">
        <p class="eyebrow">Repaso</p>
        <h1>No hay errores pendientes</h1>
        <p class="muted">Sigue practicando para mantener la racha y detectar nuevos puntos débiles.</p>
        <button class="btn btn-primary" data-nav="practice">Practicar por tema</button>
      </section>
    `;
    document.getElementById('back').onclick = () => navigate('home');
    bindNavActions();
    return;
  }

  navigate('quiz', {
    questions: wrongQuestions,
    cat: 'review',
    idx: 0,
    correct: 0,
    mode: 'review',
    persist: false
  });
}

function renderReviewHub() {
  const data = loadData();
  const wrongIds = Object.keys(data.wrongAnswers);
  const wrongQuestions = shuffle(questions.filter((q) => wrongIds.includes(q.id)));
  const wrongByCategory = Object.values(data.wrongAnswers).reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  app.innerHTML = `
    <button class="back-btn" id="back">Volver al inicio</button>
    <div class="page-heading">
      <p class="eyebrow">Repaso</p>
      <h1>Errores y guias AMV</h1>
      <p>Usa el banco de errores junto al lector de guias para revisar el fundamento antes de responder otra vez.</p>
    </div>
    <section class="panel review-focus fade-in">
      <div class="section-heading inline">
        <div>
          <p class="eyebrow">Zona de repaso</p>
          <h2>Correccion activa</h2>
        </div>
        <button class="btn btn-secondary" id="open-guide-reader">Ver guias</button>
      </div>
        ${wrongQuestions.length ? `
          <div class="section-heading">
            <p class="eyebrow">Pendientes</p>
            <h2>${wrongQuestions.length} preguntas por corregir</h2>
          </div>
          <div class="review-summary">
            ${Object.entries(wrongByCategory).map(([key, count]) => `
              <span>${CATEGORIES[key]?.name || key}: <strong>${count}</strong></span>
            `).join('')}
          </div>
          <div class="action-row">
            <button class="btn btn-primary" id="start-review">Iniciar repaso</button>
            <button class="btn btn-secondary" data-nav="practice">Practicar por tema</button>
          </div>
        ` : `
          <div class="empty-state compact">
            <p class="eyebrow">Sin errores pendientes</p>
            <h2>No hay preguntas por corregir</h2>
            <p class="muted">Sigue practicando para mantener la racha y detectar nuevos puntos debiles.</p>
            <button class="btn btn-primary" data-nav="practice">Practicar por tema</button>
          </div>
        `}
    </section>
    ${renderGuideReader()}
  `;

  document.getElementById('back').onclick = () => navigate('home');
  document.getElementById('open-guide-reader').onclick = () => setGuideReaderOpen(true);
  const startReview = document.getElementById('start-review');
  if (startReview) {
    startReview.onclick = () => navigate('quiz', {
      questions: wrongQuestions,
      cat: 'review',
      idx: 0,
      correct: 0,
      mode: 'review',
      persist: false
    });
  }
  bindGuideReader();
  bindNavActions();
}

function renderGuideReader(selectedGuideKey = GUIDE_READER_SOURCES[0]?.key) {
  const firstGuide = GUIDE_READER_SOURCES.find((guide) => guide.key === selectedGuideKey) || GUIDE_READER_SOURCES[0];
  return `
    <div class="guide-drawer" id="guide-drawer" aria-hidden="true">
      <aside class="panel guide-reader" aria-label="Guias oficiales AMV">
        <div class="guide-resize" id="guide-resize" role="separator" aria-orientation="vertical" aria-label="Redimensionar guias"></div>
        <div class="section-heading inline">
          <div>
            <p class="eyebrow">Lector</p>
            <h2>Guias oficiales</h2>
          </div>
          <button class="icon-btn" id="close-guide-reader" aria-label="Cerrar guias">×</button>
        </div>
        <label class="guide-select-label" for="guide-select">Guia</label>
        <select id="guide-select" class="guide-select">
          ${GUIDE_READER_SOURCES.map((guide) => `
            <option value="${guide.key}" ${guide.key === firstGuide.key ? 'selected' : ''}>${guide.title}</option>
          `).join('')}
        </select>
        <div class="guide-meta">
          <span id="guide-component">${formatComponentLabel(firstGuide.component)}</span>
          <a id="guide-open" href="${firstGuide.url}" target="_blank" rel="noreferrer">Abrir guia</a>
        </div>
        <div id="guide-viewer" class="guide-viewer">
          ${renderGuideViewer(firstGuide)}
        </div>
        <p class="muted guide-note">Si una fuente oficial bloquea el visor embebido, usa Abrir guia.</p>
      </aside>
    </div>
  `;
}

function renderGuideViewer(guide) {
  if (isPdfGuide(guide.url)) {
    return `
      <iframe
        id="guide-frame"
        class="guide-frame"
        src="${guide.url}#toolbar=1&navpanes=0"
        title="${guide.title}"
        loading="lazy"
      ></iframe>
    `;
  }

  return `
    <div class="guide-fallback">
      <p class="eyebrow">Fuente externa</p>
      <h3>${guide.title}</h3>
      <p class="muted">Esta fuente oficial no es un PDF directo o bloquea el visor embebido. Abrela en una pestana nueva para consultarla.</p>
      <a class="btn btn-primary" href="${guide.url}" target="_blank" rel="noreferrer">Abrir guia</a>
    </div>
  `;
}

function isPdfGuide(url) {
  return /\.pdf(?:[?#].*)?$/i.test(url || '');
}

function setGuideReaderOpen(isOpen) {
  const drawer = document.getElementById('guide-drawer');
  if (!drawer) return;
  drawer.classList.toggle('open', isOpen);
  drawer.setAttribute('aria-hidden', String(!isOpen));

}

function openGuideForCategory(category) {
  const select = document.getElementById('guide-select');
  const guideKey = getGuideKeyForCategory(category);
  if (isGuideReaderOpen() && select?.value === guideKey) {
    setGuideReaderOpen(false);
    return;
  }
  if (select && select.value !== guideKey) {
    select.value = guideKey;
    select.dispatchEvent(new Event('change'));
  }
  setGuideReaderOpen(true);
}

function isGuideReaderOpen() {
  return document.getElementById('guide-drawer')?.classList.contains('open') || false;
}

function getGuideKeyForCategory(category) {
  return CATEGORY_GUIDE_SOURCE[category] || GUIDE_READER_SOURCES[0]?.key;
}

function bindGuideReader() {
  const select = document.getElementById('guide-select');
  const viewer = document.getElementById('guide-viewer');
  const openLink = document.getElementById('guide-open');
  const component = document.getElementById('guide-component');
  const close = document.getElementById('close-guide-reader');
  if (!select || !viewer || !openLink || !component) return;

  if (close) close.onclick = () => setGuideReaderOpen(false);
  bindGuideResize();
  document.onkeydown = (event) => {
    if (event.key === 'Escape') setGuideReaderOpen(false);
  };

  select.onchange = () => {
    const guide = GUIDE_READER_SOURCES.find((item) => item.key === select.value) || GUIDE_READER_SOURCES[0];
    viewer.innerHTML = renderGuideViewer(guide);
    openLink.href = guide.url;
    component.textContent = formatComponentLabel(guide.component);
  };
}

function bindGuideResize() {
  const drawer = document.getElementById('guide-drawer');
  const handle = document.getElementById('guide-resize');
  if (!drawer || !handle) return;

  const saved = Number(localStorage.getItem(GUIDE_WIDTH_KEY));
  if (saved) drawer.style.setProperty('--guide-width', `${saved}px`);

  handle.onpointerdown = (event) => {
    event.preventDefault();
    handle.setPointerCapture(event.pointerId);
    const onMove = (moveEvent) => {
      const maxWidth = Math.min(window.innerWidth - 24, 980);
      const nextWidth = Math.max(380, Math.min(maxWidth, window.innerWidth - moveEvent.clientX));
      drawer.style.setProperty('--guide-width', `${nextWidth}px`);
      localStorage.setItem(GUIDE_WIDTH_KEY, String(Math.round(nextWidth)));
    };
    const onUp = () => {
      handle.onpointermove = null;
      handle.onpointerup = null;
      handle.onpointercancel = null;
    };
    handle.onpointermove = onMove;
    handle.onpointerup = onUp;
    handle.onpointercancel = onUp;
  };
}

function formatComponentLabel(component) {
  return (component || '')
    .replaceAll('_', ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function renderProgress() {
  const data = loadData();
  const globalPct = getGlobalPct(data);

  app.innerHTML = `
    <button class="back-btn" id="back">Volver al inicio</button>
    <div class="page-heading">
      <p class="eyebrow">Progreso</p>
      <h1>Seguimiento por tema</h1>
      <p>Datos guardados en este navegador mediante localStorage.</p>
    </div>
    <section class="metric-grid fade-in">
      ${renderMetric('Total respondidas', data.totalAnswered, 'accent')}
      ${renderMetric('Precisión global', `${globalPct}%`, globalPct >= PASSING_PCT ? 'green' : 'gold')}
      ${renderMetric('Racha', `${data.streak.current} días`, 'gold')}
      ${renderMetric('Errores pendientes', Object.keys(data.wrongAnswers).length, 'red')}
    </section>
    <section class="panel fade-in">
      <div class="section-heading">
        <p class="eyebrow">Rendimiento</p>
        <h2>Temas del banco actual</h2>
      </div>
      ${Object.entries(CATEGORIES).map(([key, cat]) => {
        const st = data.stats[key] || { correct: 0, total: 0 };
        const pct = st.total ? Math.round((st.correct / st.total) * 100) : 0;
        const total = getCategoryQuestions(key).length;
        return `
          <div class="progress-item">
            <div class="progress-label">
              <span>${cat.name}</span>
              <span>${st.correct}/${st.total} · banco ${total} · ${pct}%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${cat.color}"></div></div>
          </div>
        `;
      }).join('')}
    </section>
    ${data.examHistory.length ? `
      <section class="panel fade-in">
        <div class="section-heading">
          <p class="eyebrow">Historial</p>
          <h2>Últimos simulacros</h2>
        </div>
        ${data.examHistory.slice(-5).reverse().map((exam) => `
          <div class="history-row">
            <span>${exam.title || 'Simulacro'} · ${formatDate(exam.date)}</span>
            <strong class="${exam.passed ? 'text-green' : 'text-red'}">${exam.pct}%</strong>
          </div>
        `).join('')}
      </section>
    ` : ''}
  `;

  document.getElementById('back').onclick = () => navigate('home');
}

function startPractice(category) {
  const selected = shuffle(getCategoryQuestions(category));
  navigate('quiz', {
    questions: selected,
    cat: category,
    idx: 0,
    correct: 0,
    mode: 'practice',
    persist: true
  });
}

function startExam(key) {
  const config = key === 'operator' ? EXAM_CONFIG.operator : EXAM_CONFIG.specialties[key];
  const pool = key === 'operator'
    ? shuffle([...questions])
    : shuffle(getCategoryQuestions(config.category));
  const questionCount = Math.min(config.officialQuestions, pool.length);
  const examQuestions = pool.slice(0, questionCount);

  if (!examQuestions.length) return;

  examState = {
    key,
    title: config.title,
    officialQuestions: config.officialQuestions,
    isOfficialShape: questionCount >= config.officialQuestions,
    questions: examQuestions,
    answers: new Array(examQuestions.length).fill(-1),
    flagged: new Set(),
    startTime: Date.now(),
    duration: config.durationMinutes * 60 * 1000
  };

  navigate('examQuiz', { idx: 0 });
}

function handlePracticeAnswer(selectedEl, q, p) {
  const chosen = parseInt(selectedEl.dataset.idx, 10);
  const isCorrect = chosen === q.ans;
  const nextParams = { ...p, idx: p.idx + 1, correct: p.correct + (isCorrect ? 1 : 0) };

  recordAnswer(q.cat, isCorrect, q.id);
  persistQuizSession(nextParams);

  app.querySelectorAll('.q-option').forEach((option, idx) => {
    option.disabled = true;
    if (idx === q.ans) option.classList.add('correct');
    else if (idx === chosen && !isCorrect) option.classList.add('wrong');
    else option.classList.add('disabled');
  });

  document.getElementById('explanation').innerHTML = `
    <div class="q-explanation">
      <strong>Explicación:</strong> ${q.exp}
    </div>
  `;
  document.getElementById('next-area').innerHTML = `
    <button class="btn ${nextParams.idx < p.questions.length ? 'btn-primary' : 'btn-gold'} btn-block" id="nextq">
      ${nextParams.idx < p.questions.length ? 'Siguiente' : 'Ver resumen'}
    </button>
  `;
  document.getElementById('nextq').onclick = () => navigate('quiz', nextParams);
}

function persistQuizSession(p) {
  if (p.persist === false || p.mode === 'review') return;
  saveLastSession({
    type: 'quiz',
    mode: p.mode || 'practice',
    cat: p.cat,
    idx: p.idx,
    correct: p.correct,
    questionIds: p.questions.map((q) => q.id),
    updatedAt: new Date().toISOString()
  });
}

function resumeSession(session) {
  const resumedQuestions = session.questionIds
    .map((id) => questions.find((q) => q.id === id))
    .filter(Boolean);

  if (!resumedQuestions.length) {
    clearLastSession();
    navigate('home');
    return;
  }

  navigate('quiz', {
    questions: resumedQuestions,
    cat: session.cat,
    idx: Math.min(session.idx, resumedQuestions.length),
    correct: session.correct || 0,
    mode: session.mode || 'practice',
    persist: true
  });
}

function normalizeQuizParams(params) {
  return {
    questions: params.questions || [],
    cat: params.cat || '',
    idx: params.idx || 0,
    correct: params.correct || 0,
    mode: params.mode || 'practice',
    persist: params.persist !== false
  };
}

function getStudyRecommendation(data) {
  const wrongCount = Object.keys(data.wrongAnswers).length;
  if (wrongCount) {
    const category = getCategoryWithMostWrong(data);
    return {
      title: 'Corrige errores recientes',
      detail: `${wrongCount} preguntas están pendientes. El bloque más repetido es ${CATEGORIES[category]?.name || 'tu repaso general'}.`,
      actionLabel: 'Iniciar repaso',
      onClick: () => navigate('review')
    };
  }

  const unpracticed = Object.keys(CATEGORIES).find((key) => !data.stats[key]?.total);
  if (unpracticed) {
    return {
      title: `Abre ${CATEGORIES[unpracticed].name}`,
      detail: 'Este tema aún no tiene práctica registrada. Completar una primera ronda mejora la calidad del diagnóstico.',
      actionLabel: 'Practicar tema',
      onClick: () => startPractice(unpracticed)
    };
  }

  const weakest = getWeakestCategory(data);
  return {
    title: `Refuerza ${CATEGORIES[weakest].name}`,
    detail: 'Es el tema con menor precisión registrada. Repetirlo ahora debería aportar más que seguir un bloque fuerte.',
    actionLabel: 'Practicar tema',
    onClick: () => startPractice(weakest)
  };
}

function getResumeSession(data) {
  const session = data.lastSession;
  if (!session || session.type !== 'quiz' || !session.questionIds?.length) return null;
  const catName = CATEGORIES[session.cat]?.name || 'sesión';
  const current = Math.min(session.idx + 1, session.questionIds.length);
  return {
    session,
    title: catName,
    detail: `Pregunta ${current} de ${session.questionIds.length} · ${session.correct || 0} correctas acumuladas`
  };
}

function getCategoryWithMostWrong(data) {
  const counts = Object.values(data.wrongAnswers).reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || Object.keys(CATEGORIES)[0];
}

function getWeakestCategory(data) {
  return Object.keys(CATEGORIES).reduce((weakest, key) => {
    const current = data.stats[key] || { correct: 0, total: 0 };
    const currentPct = current.total ? current.correct / current.total : 1;
    const weakestStats = data.stats[weakest] || { correct: 0, total: 0 };
    const weakestPct = weakestStats.total ? weakestStats.correct / weakestStats.total : 1;
    return currentPct < weakestPct ? key : weakest;
  }, Object.keys(CATEGORIES)[0]);
}

function getCategoryQuestions(category) {
  return questions.filter((q) => q.cat === category);
}

function getGlobalPct(data) {
  return data.totalAnswered ? Math.round((data.totalCorrect / data.totalAnswered) * 100) : 0;
}

function getExamRemainingMs() {
  return Math.max(0, examState.duration - (Date.now() - examState.startTime));
}

function renderMetric(label, value, tone) {
  return `
    <article class="metric-card ${tone}">
      <strong>${value}</strong>
      <span>${label}</span>
    </article>
  `;
}

function renderNavCard(title, description, nav) {
  return `
    <button class="nav-card" data-nav="${nav}">
      <strong>${title}</strong>
      <span>${description}</span>
    </button>
  `;
}

function bindNavActions() {
  app.querySelectorAll('[data-nav]').forEach((el) => {
    el.onclick = () => navigate(el.dataset.nav);
  });
}

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (!hours) return `${mins} min`;
  return mins ? `${hours}h${String(mins).padStart(2, '0')}` : `${hours}h`;
}

function formatTimer(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('es-CO', { month: 'short', day: 'numeric' });
}

function shuffle(arr) {
  const shuffled = [...arr];
  for (let idx = shuffled.length - 1; idx > 0; idx -= 1) {
    const swapIdx = Math.floor(Math.random() * (idx + 1));
    [shuffled[idx], shuffled[swapIdx]] = [shuffled[swapIdx], shuffled[idx]];
  }
  return shuffled;
}

navigate('home');
