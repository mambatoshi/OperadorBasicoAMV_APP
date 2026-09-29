import { html, mount, plural, LETTERS } from '../ui/html.js';
import { icons } from '../ui/icons.js';
import { TOPIC, QUESTION } from '../lib/bank.js';
import { getState, setActiveExam, recordExam, grade, save } from '../lib/store.js';
import { present } from '../lib/sessions.js';
import { EXAMS, PASS, EXAM_SOURCE, plan, build, fmtMinutes } from '../lib/exams.js';
import { sourceLine } from './quiz.js';
import { go, onKeys } from '../lib/nav.js';

const fmtDay = new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short' });

function clock(ms) {
  const s = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  return (h ? `${h}:${String(m).padStart(2, '0')}` : `${m}`) + `:${String(sec).padStart(2, '0')}`;
}

const slotName = s => s.label ?? TOPIC[s.topic].name;
const sum = slots => slots.reduce((a, s) => a + s.n, 0);

function examNote(p) {
  if (p.note) return p.note;
  const rule = p.components.length > 1 ? ' Hay que pasar 70% en cada componente.' : ' Se aprueba con 70%.';
  return `${p.official} preguntas en ${fmtMinutes(p.minutes)}.${rule}`;
}

function gapNote(p) {
  if (!p.gaps.length) return '';
  const list = p.gaps.map(g => `${g.have} de ${g.n} de ${slotName(g).toLowerCase()}`).join(', ');
  return html`<span class="gap">El banco aún no alcanza: tiene ${list}. Este simulacro trae ${p.actual} preguntas en ${fmtMinutes(p.runMinutes)}, al mismo ritmo del examen real.</span>`;
}

export function renderExamSetup(el) {
  const st = getState();
  const active = st.activeExam;
  const history = st.exams.map((e, i) => ({ ...e, i })).reverse();
  const groups = {};
  for (const [k, ex] of Object.entries(EXAMS)) (groups[ex.group] ||= []).push([k, plan(k)]);

  mount(el, html`
    <header class="page-head"><h1>Simulacro</h1>
      <p class="date">Con la estructura oficial de AMV: mismas preguntas por tema, reloj y corrección solo al final.</p></header>
    ${active ? html`
      <section class="plan">
        <h2>Tienes un simulacro en curso</h2>
        <p>${EXAMS[active.kind]?.name ?? 'Simulacro'}: ${active.answers.filter(a => a >= 0).length} de ${active.uids.length} respondidas. Quedan ${clock(active.startedAt + active.duration - Date.now())}.</p>
        <div class="actions">
          <a class="btn primary wide" href="#/examen">Continuar</a>
          <button class="btn ghost wide" id="discard">Descartarlo</button>
        </div>
      </section>` : Object.entries(groups).map(([group, list], gi) => html`
      <h2 class="section-title ${gi === 0 ? 'first' : ''}">${group}</h2>
      <ul class="choice">
        ${list.map(([k, p]) => html`<li><button data-kind="${k}">
          <span class="choice-num">${p.actual}</span>
          <span><strong>${p.name}</strong>${examNote(p)}${gapNote(p)}</span>
          ${icons.chevron}</button></li>`)}
      </ul>`)}

    <details class="structure">
      <summary>Cómo está armado el examen de Operador</summary>
      ${EXAMS.operador.components.map(c => html`
        <table>
          <caption>${c.name}</caption>
          <tbody>${c.slots.map(s => html`<tr><th scope="row">${slotName(s)}</th><td>${s.n}</td></tr>`)}</tbody>
          <tfoot><tr><th scope="row">Para aprobar</th><td>${Math.ceil(sum(c.slots) * PASS)} de ${sum(c.slots)}</td></tr></tfoot>
        </table>`)}
      <p class="fine">Fuente: <a href="${EXAM_SOURCE}" target="_blank" rel="noopener">página oficial de AMV</a>. Cada especialidad tiene 40 preguntas; el Maestro de Negociación reúne 34 de renta fija, 33 de renta variable y 33 de derivados.</p>
    </details>

    ${history.length ? html`
      <h2 class="section-title">Historial</h2>
      <ul class="history">
        ${history.map(e => html`<li><a href="${e.uids ? `#/resultado/${e.i}` : '#/simulacro'}">
          <span class="h-score ${e.passed ? 'ok' : 'bad'}">${e.pct}%</span>
          <span class="h-body"><strong>${EXAMS[e.kind]?.name ?? e.title ?? 'Simulacro'}</strong>
          <span>${e.correct} de ${e.total}, ${fmtDay.format(new Date(e.date))}, ${e.minutes} min</span></span>
          ${e.uids ? icons.chevron : ''}</a></li>`)}
      </ul>` : ''}`);

  el.querySelectorAll('[data-kind]').forEach(b => b.onclick = () => {
    const kind = b.dataset.kind;
    const picked = build(kind).map(({ q, comp }) => ({ ...present(q), comp }));
    setActiveExam({
      kind,
      uids: picked.map(x => x.q.uid), orders: picked.map(x => x.order), comps: picked.map(x => x.comp),
      answers: picked.map(() => -1), flags: [], idx: 0,
      startedAt: Date.now(), duration: plan(kind).runMinutes * 60000,
    });
    go('#/examen');
  });
  el.querySelector('#discard')?.addEventListener('click', () => {
    if (confirm('¿Descartar el simulacro en curso? Se pierden sus respuestas.')) { setActiveExam(null); go('#/simulacro'); }
  });
}

export function renderExam(el) {
  const ex = getState().activeExam;
  if (!ex) { go('#/simulacro', { replace: true }); return; }
  if (Date.now() >= ex.startedAt + ex.duration) { finish(); return; }

  const q = QUESTION[ex.uids[ex.idx]];
  const order = ex.orders[ex.idx];
  const t = TOPIC[q.topic];
  const flagged = ex.flags.includes(ex.idx);
  const answered = ex.answers.filter(a => a >= 0).length;

  mount(el, html`
    <header class="bar">
      <button class="icon-btn" id="grid" aria-label="Ver todas las preguntas">${icons.grid}</button>
      <div class="bar-mid"><span class="timer" id="timer">${clock(ex.startedAt + ex.duration - Date.now())}</span></div>
      <span class="count">${ex.idx + 1}/${ex.uids.length}</span>
    </header>
    <article class="question">
      <p class="q-meta"><span class="code">${t.code}</span> ${t.short}</p>
      <h2 class="q-text">${q.text}</h2>
      <ol class="options" role="list">
        ${order.map((orig, i) => html`<li><button class="option ${ex.answers[ex.idx] === orig ? 'is-picked' : ''}" data-orig="${orig}" aria-pressed="${ex.answers[ex.idx] === orig}">
          <span class="letter">${LETTERS[i]}</span><span class="opt-text">${q.options[orig]}</span></button></li>`)}
      </ol>
    </article>
    <footer class="dock">
      <div class="dock-row three">
        <button class="btn ghost" id="prev" ${ex.idx === 0 ? 'disabled' : ''}>Anterior</button>
        <button class="btn ghost ${flagged ? 'is-on' : ''}" id="flag" aria-pressed="${flagged}">${icons.flag}<span>${flagged ? 'Marcada' : 'Marcar'}</span></button>
        ${ex.idx < ex.uids.length - 1
          ? html`<button class="btn primary" id="next">Siguiente</button>`
          : html`<button class="btn primary" id="end">Entregar</button>`}
      </div>
    </footer>
    <dialog class="sheet" id="sheet">
      <div class="sheet-head"><h2>${answered} de ${ex.uids.length} respondidas</h2>
        <button class="icon-btn" id="sheet-close" aria-label="Cerrar">${icons.close}</button></div>
      <p class="legend"><span class="k-ans"></span>Respondida <span class="k-flag"></span>Marcada</p>
      <div class="qgrid">
        ${ex.uids.map((_, i) => html`<button data-go="${i}" class="${ex.answers[i] >= 0 ? 'ans' : ''} ${ex.flags.includes(i) ? 'flag' : ''} ${i === ex.idx ? 'cur' : ''}">${i + 1}</button>`)}
      </div>
      <button class="btn primary wide" id="submit">Entregar simulacro</button>
    </dialog>`);

  const move = i => { ex.idx = i; save(); go('#/examen'); };
  el.querySelectorAll('.option').forEach(b => b.onclick = () => {
    const orig = +b.dataset.orig;
    ex.answers[ex.idx] = ex.answers[ex.idx] === orig ? -1 : orig;
    save();
    el.querySelectorAll('.option').forEach(x => {
      const on = +x.dataset.orig === ex.answers[ex.idx];
      x.classList.toggle('is-picked', on);
      x.setAttribute('aria-pressed', on);
    });
  });
  el.querySelector('#prev').onclick = () => move(ex.idx - 1);
  el.querySelector('#next')?.addEventListener('click', () => move(ex.idx + 1));
  el.querySelector('#flag').onclick = () => {
    ex.flags = flagged ? ex.flags.filter(i => i !== ex.idx) : [...ex.flags, ex.idx];
    save(); go('#/examen');
  };
  const sheet = el.querySelector('#sheet');
  el.querySelector('#grid').onclick = () => sheet.showModal();
  el.querySelector('#sheet-close').onclick = () => sheet.close();
  sheet.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { sheet.close(); move(+b.dataset.go); });
  const submit = () => {
    const blank = ex.answers.filter(a => a < 0).length;
    const msg = blank ? `Te faltan ${plural(blank, 'pregunta', 'preguntas')} por responder. ¿Entregar de todas formas?` : '¿Entregar el simulacro?';
    if (confirm(msg)) finish();
  };
  el.querySelector('#submit').onclick = submit;
  el.querySelector('#end')?.addEventListener('click', submit);

  const timer = el.querySelector('#timer');
  const tick = setInterval(() => {
    const left = ex.startedAt + ex.duration - Date.now();
    timer.textContent = clock(left);
    timer.classList.toggle('low', left < 10 * 60000);
    if (left <= 0) { clearInterval(tick); finish(); }
  }, 1000);

  const offKeys = onKeys(e => {
    if (sheet.open) return;
    const pos = '1234'.indexOf(e.key);
    if (pos >= 0 && pos < order.length) el.querySelectorAll('.option')[pos].click();
    else if (e.key === 'ArrowRight' && ex.idx < ex.uids.length - 1) move(ex.idx + 1);
    else if (e.key === 'ArrowLeft' && ex.idx > 0) move(ex.idx - 1);
  });
  return () => { clearInterval(tick); offKeys(); };
}

function finish() {
  const ex = getState().activeExam;
  if (!ex) return;
  const def = EXAMS[ex.kind];
  const byTopic = {};
  const comps = def.components.map(c => ({ name: c.name, c: 0, t: 0 }));
  let correct = 0;
  ex.uids.forEach((uid, i) => {
    const q = QUESTION[uid];
    if (!q) return;
    const ok = ex.answers[i] === q.answer;
    const comp = comps[ex.comps?.[i] ?? 0];
    comp.t++;
    const bt = (byTopic[q.topic] ||= [0, 0]);
    bt[1]++;
    if (ok) { correct++; comp.c++; bt[0]++; }
    // Las respuestas del simulacro también alimentan el repaso espaciado.
    if (ex.answers[i] >= 0) grade(uid, ok ? 'good' : 'again', q.topic);
  });
  const total = ex.uids.length;
  comps.forEach(c => { c.passed = c.t > 0 && c.c / c.t >= PASS; });
  recordExam({
    date: new Date().toISOString(), kind: ex.kind, total, correct,
    pct: Math.round((correct / total) * 100),
    passed: comps.every(c => c.passed),
    components: comps,
    minutes: Math.round(Math.min(Date.now() - ex.startedAt, ex.duration) / 60000),
    byTopic, uids: ex.uids, orders: ex.orders, answers: ex.answers, flags: ex.flags,
  });
  go(`#/resultado/${getState().exams.length - 1}`, { replace: true });
}

export function renderExamResult(el, index) {
  const r = getState().exams[+index];
  if (!r || !r.uids) { go('#/simulacro', { replace: true }); return; }
  let filter = 'wrong';
  const topics = Object.entries(r.byTopic).map(([k, [c, t]]) => ({ k, c, t, p: c / t })).sort((a, b) => a.p - b.p);
  const blank = r.answers.filter(a => a < 0).length;
  const comps = r.components ?? [];
  const failed = comps.filter(c => !c.passed);
  const verdict = r.passed
    ? 'Aprobado'
    : failed.length === 1 && comps.length > 1
      ? `No aprobado: faltó el ${failed[0].name.toLowerCase()}`
      : 'No aprobado';

  mount(el, html`
    <header class="page-head with-back">
      <a class="back" href="#/simulacro">${icons.back}<span>Simulacro</span></a>
      <p class="context">${EXAMS[r.kind]?.name ?? 'Simulacro'}</p>
    </header>
    <section class="score ${r.passed ? 'ok' : 'bad'}">
      <h1 class="display">${r.pct}%</h1>
      <p class="lede">${verdict}. ${r.correct} de ${r.total} correctas en ${r.minutes} minutos${blank ? `, ${blank} sin responder` : ''}.</p>
    </section>
    <ul class="components">
      ${comps.map(c => html`<li class="${c.passed ? 'ok' : 'bad'}">
        <span class="comp-name">${c.name}</span>
        <span class="comp-num">${c.c} de ${c.t}</span>
        <span class="score-line"><span style="width:${(c.c / c.t) * 100}%"></span><i style="left:${PASS * 100}%"></i></span>
      </li>`)}
    </ul>
    <h2 class="section-title">Por tema, de más débil a más fuerte</h2>
    <ul class="bars">
      ${topics.map(({ k, c, t, p }) => html`<li>
        <a href="#/tema/${k}"><span class="code">${TOPIC[k].code}</span>
        <span class="bar-track"><span class="${p >= PASS ? 'ok' : 'bad'}" style="width:${p * 100}%"></span><i style="left:${PASS * 100}%"></i></span>
        <span class="bar-num">${c}/${t}</span></a></li>`)}
    </ul>
    <h2 class="section-title">Revisión</h2>
    <div class="segmented" role="tablist">
      ${[['wrong', 'Incorrectas'], ['flag', 'Marcadas'], ['all', 'Todas']].map(([k, l]) =>
        html`<button role="tab" data-f="${k}" aria-selected="${k === filter}">${l}</button>`)}
    </div>
    <ol class="review-list" id="rev"></ol>`);

  const rev = el.querySelector('#rev');
  const paint = () => {
    const rows = r.uids.map((uid, i) => ({ q: QUESTION[uid], i, a: r.answers[i], order: r.orders[i] }))
      .filter(x => x.q)
      .filter(x => filter === 'all' || (filter === 'flag' ? r.flags.includes(x.i) : x.a !== x.q.answer));
    mount(rev, rows.length ? html`${rows.map(({ q, i, a, order }) => html`<li class="${a === q.answer ? 'ok' : 'bad'}">
      <details><summary><span class="mark"></span><span class="num">${i + 1}.</span> ${q.text}</summary>
        <ol class="bank-opts">${order.map((o, j) => html`<li class="${o === q.answer ? 'right' : o === a ? 'wrong' : ''}"><span class="letter">${LETTERS[j]}</span>${q.options[o]}</li>`)}</ol>
        ${a < 0 ? html`<p class="yours">Sin responder</p>` : ''}
        <p>${q.explanation}</p>
        ${sourceLine(q)}
      </details></li>`)}` : html`<li class="empty">Nada que mostrar con este filtro.</li>`);
  };
  el.querySelectorAll('[data-f]').forEach(b => b.onclick = () => {
    filter = b.dataset.f;
    el.querySelectorAll('[data-f]').forEach(x => x.setAttribute('aria-selected', x === b));
    paint();
  });
  paint();
}
