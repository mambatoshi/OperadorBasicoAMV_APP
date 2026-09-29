// Motor de práctica: una pregunta a la vez, corrección inmediata y autoevaluación.
import { html, mount, LETTERS, plural } from '../ui/html.js';
import { icons } from '../ui/icons.js';
import { TOPIC, QUESTION } from '../lib/bank.js';
import { grade, statusOf, getState, setActiveSession } from '../lib/store.js';
import { present } from '../lib/sessions.js';
import { go, onKeys } from '../lib/nav.js';

let session = null;

// La sesión se guarda en cada paso: iOS cierra las apps en segundo plano sin aviso.
function persist() {
  setActiveSession(session && {
    title: session.title, exit: session.exit, idx: session.idx, results: session.results,
    items: session.items.map(it => ({ uid: it.q.uid, order: it.order, wasNew: it.wasNew })),
  });
}

function hydrate() {
  const saved = getState().activeSession;
  if (!saved) return null;
  const items = saved.items.filter(it => QUESTION[it.uid]).map(it => ({ ...it, q: QUESTION[it.uid] }));
  return items.length ? { ...saved, items } : null;
}

export function pendingSession() {
  const s = session ?? hydrate();
  return s && s.idx < s.items.length ? { title: s.title, done: s.idx, total: s.items.length } : null;
}

export function discardSession() { session = null; persist(); }

// questions: preguntas del banco; exit: a dónde volver al terminar.
export function startSession({ title, questions, exit = '#/' }) {
  session = {
    title, exit,
    items: questions.map(q => ({ ...present(q), wasNew: statusOf(q.uid) === 'new' })),
    idx: 0,
    results: [], // { uid, chosen, correct, grade }
  };
  persist();
  go('#/sesion');
}

export function renderSession(el) {
  session ??= hydrate();
  if (!session) { go('#/', { replace: true }); return; }
  if (session.idx >= session.items.length) return renderSummary(el);
  return renderQuestion(el);
}

function progressTrack() {
  return html`<div class="track" role="progressbar" aria-valuemin="0" aria-valuemax="${session.items.length}" aria-valuenow="${session.idx}">
    ${session.items.map((_, i) => {
      const r = session.results[i];
      const cls = r ? (r.correct ? 'ok' : 'bad') : i === session.idx ? 'now' : '';
      return html`<span class="${cls}"></span>`;
    })}
  </div>`;
}

function renderQuestion(el) {
  const s = session;
  const { q, order, wasNew } = s.items[s.idx];
  const topic = TOPIC[q.topic];
  let pending = null; // respuesta dada y aún sin calificar

  mount(el, html`
    <header class="bar">
      <button class="icon-btn" id="close" aria-label="Terminar sesión">${icons.close}</button>
      <div class="bar-mid">${progressTrack()}</div>
      <span class="count">${s.idx + 1}/${s.items.length}</span>
    </header>
    <article class="question">
      <p class="q-meta"><span class="code">${topic.code}</span> ${topic.short}${wasNew ? '' : html` <span class="tag">repaso</span>`}</p>
      <h2 class="q-text">${q.text}</h2>
      <ol class="options" role="list">
        ${order.map((orig, i) => html`
          <li><button class="option" data-orig="${orig}">
            <span class="letter">${LETTERS[i]}</span><span class="opt-text">${q.options[orig]}</span>
          </button></li>`)}
      </ol>
      <section class="why" id="why" hidden></section>
    </article>
    <footer class="dock" id="dock"><p class="hint">Elige una opción</p></footer>`);

  const dock = el.querySelector('#dock');
  const why = el.querySelector('#why');

  function answer(orig) {
    if (pending) return;
    const correct = orig === q.answer;
    pending = { uid: q.uid, chosen: orig, correct };
    el.querySelectorAll('.option').forEach(b => {
      const o = +b.dataset.orig;
      b.disabled = true;
      if (o === q.answer) b.classList.add('is-right');
      else if (o === orig) b.classList.add('is-wrong');
      else b.classList.add('is-dim');
    });
    mount(why, html`
      <h3>${correct ? 'Correcto' : `La respuesta es ${LETTERS[order.indexOf(q.answer)]}`}</h3>
      <p>${q.explanation}</p>
      ${sourceLine(q)}`);
    why.hidden = false;
    why.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });

    mount(dock, correct
      ? html`<p class="hint">¿Cómo llegaste a la respuesta?</p>
          <div class="dock-row">
            <button class="btn ghost" data-grade="hard">Dudé o adiviné</button>
            <button class="btn primary" data-grade="good">Lo sabía</button>
          </div>`
      : html`<div class="dock-row"><button class="btn primary" data-grade="again">Continuar</button></div>`);
    dock.querySelectorAll('[data-grade]').forEach(b => b.onclick = () => next(b.dataset.grade));
  }

  function commit(g) {
    if (!pending) return;
    grade(pending.uid, g, q.topic);
    s.results[s.idx] = { ...pending, grade: g };
    pending = null;
    persist();
  }

  function next(g) {
    commit(g);
    s.idx++;
    persist();
    go('#/sesion');
  }

  el.querySelectorAll('.option').forEach(b => b.onclick = () => answer(+b.dataset.orig));
  el.querySelector('#close').onclick = () => {
    if (pending) commit(pending.correct ? 'good' : 'again');
    if (s.results.filter(Boolean).length) { s.idx = s.items.length; persist(); go('#/sesion'); }
    else { discardSession(); go(s.exit); }
  };

  const offKeys = onKeys(e => {
    const k = e.key.toLowerCase();
    const pos = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
    if (!pending && pos >= 0 && pos < order.length) { answer(order[pos]); e.preventDefault(); }
    else if (pending && (k === 'enter' || k === ' ')) { next(pending.correct ? 'good' : 'again'); e.preventDefault(); }
    else if (pending && pending.correct && k === 'd') next('hard');
  });

  // Si se sale de la vista con una respuesta sin calificar, se guarda igual.
  return () => { offKeys(); if (pending) commit(pending.correct ? 'good' : 'again'); };
}

function renderSummary(el) {
  const s = session;
  const done = s.results.filter(Boolean);
  const right = done.filter(r => r.correct).length;
  const guessed = done.filter(r => r.grade === 'hard').length;
  const wrong = done.filter(r => !r.correct);

  mount(el, html`
    <header class="bar">
      <button class="icon-btn" id="close" aria-label="Cerrar">${icons.close}</button>
      <div class="bar-mid"></div>
    </header>
    <section class="summary">
      <p class="context">${s.title}</p>
      <h1 class="display">${right} de ${done.length}</h1>
      <p class="lede">${summaryLine(done.length, right, guessed)}</p>
      <ol class="review-list">
        ${s.items.map((it, i) => {
          const r = s.results[i];
          if (!r) return '';
          return html`<li class="${r.correct ? 'ok' : 'bad'}">
            <details>
              <summary><span class="mark" aria-label="${r.correct ? 'Correcta' : 'Incorrecta'}"></span>${it.q.text}</summary>
              <div class="review-body">
                ${!r.correct ? html`<p class="yours">Tu respuesta: ${it.q.options[r.chosen]}</p>` : ''}
                <p class="right">Correcta: ${it.q.options[it.q.answer]}</p>
                <p>${it.q.explanation}</p>
              </div>
            </details>
          </li>`;
        })}
      </ol>
    </section>
    <footer class="dock">
      <div class="dock-row">
        ${wrong.length ? html`<button class="btn ghost" id="retry">Repetir ${plural(wrong.length, 'fallada', 'falladas')}</button>` : ''}
        <button class="btn primary" id="finish">Terminar</button>
      </div>
    </footer>`);

  const exit = () => { const to = s.exit; discardSession(); go(to); };
  el.querySelector('#close').onclick = exit;
  el.querySelector('#finish').onclick = exit;
  const retry = el.querySelector('#retry');
  if (retry) retry.onclick = () => startSession({
    title: 'Repetición de falladas', exit: s.exit,
    questions: wrong.map(r => s.items.find(it => it.q.uid === r.uid).q),
  });
}

function summaryLine(total, right, guessed) {
  if (!total) return 'No respondiste ninguna pregunta.';
  const p = right / total;
  const g = guessed ? ` ${plural(guessed, 'acierto fue con duda y volverá pronto', 'aciertos fueron con duda y volverán pronto')}.` : '';
  if (p >= 0.85) return `Vas muy bien.${g}`;
  if (p >= 0.7) return `Por encima de la línea de aprobación.${g}`;
  return `Las falladas vuelven en unos minutos y mañana, hasta que se afiancen.${g}`;
}

// Cita la guía oficial de donde sale la pregunta, con enlace para ir a estudiar el tema.
export function sourceLine(q) {
  if (!q.source) return '';
  return html`<p class="source">
    <a href="${q.source.url}" target="_blank" rel="noopener">${q.source.title}</a>${q.sectionName ? html`<span>${q.sectionName}</span>` : ''}
  </p>`;
}
