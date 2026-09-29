import { html, mount, plural } from '../ui/html.js';
import { icons } from '../ui/icons.js';
import { TOPICS, TOPIC, CARDS, cardsByTopic } from '../lib/bank.js';
import { grade, isDue, itemOf, INTERVALS } from '../lib/store.js';
import { shuffle } from '../lib/sessions.js';
import { go, onKeys } from '../lib/nav.js';

let deck = null;

export function startCards({ title, cards, exit = '#/tarjetas' }) {
  const now = Date.now();
  const due = cards.filter(c => isDue(c.uid, now));
  const fresh = shuffle(cards.filter(c => !itemOf(c.uid)));
  const rest = shuffle(cards.filter(c => itemOf(c.uid) && !isDue(c.uid, now)));
  deck = { title, exit, cards: [...due, ...fresh, ...rest].slice(0, 20), idx: 0, tally: { again: 0, hard: 0, good: 0, easy: 0 } };
  go('#/tarjetas/sesion');
}

function dueCards() {
  const now = Date.now();
  return CARDS.filter(c => isDue(c.uid, now));
}

export function renderDecks(el) {
  const due = dueCards();
  const unseen = CARDS.filter(c => !itemOf(c.uid)).length;
  mount(el, html`
    <header class="page-head"><h1>Tarjetas</h1>
      <p class="date">Lee el concepto, intenta recordarlo y luego voltea. Tu calificación decide cuándo vuelve.</p></header>
    <section class="plan">
      <h2>${due.length ? plural(due.length, 'tarjeta pendiente', 'tarjetas pendientes') : 'Sin repasos pendientes'}</h2>
      <p>${due.length ? 'Tocan hoy según tu calendario de repaso.' : `Te quedan ${plural(unseen, 'tarjeta nueva', 'tarjetas nuevas')} por ver.`}</p>
      <button class="btn primary wide" id="mixed">${due.length ? 'Repasar pendientes' : 'Estudiar tarjetas nuevas'}</button>
    </section>
    <ul class="topic-list">
      ${TOPICS.map(t => {
        const cs = cardsByTopic(t.key);
        if (!cs.length) return '';
        const d = cs.filter(c => isDue(c.uid)).length;
        const seen = cs.filter(c => itemOf(c.uid)).length;
        return html`<li><button data-topic="${t.key}">
          <span class="code">${t.code}</span>
          <span class="t-body"><span class="t-name">${t.name}</span>
          <span class="t-meta">${seen} de ${cs.length} vistas${d ? ` · ${d} pendientes` : ''}</span></span>
          ${icons.chevron}</button></li>`;
      })}
    </ul>`);
  el.querySelector('#mixed').onclick = () => startCards({ title: 'Tarjetas', cards: due.length ? due : CARDS });
  el.querySelectorAll('[data-topic]').forEach(b => b.onclick = () =>
    startCards({ title: TOPIC[b.dataset.topic].name, cards: cardsByTopic(b.dataset.topic) }));
}

function nextLabel(uid, g) {
  const box = itemOf(uid)?.box ?? 0;
  if (g === 'again') return '10 min';
  const nb = g === 'hard' ? Math.max(1, box) : g === 'good' ? Math.min(5, box + 1) : Math.min(5, box + 2);
  const d = INTERVALS[nb] * (g === 'hard' ? 0.5 : 1);
  if (d < 1) return `${Math.round(d * 24)} h`;
  return d === 1 ? '1 día' : `${Math.round(d)} días`;
}

export function renderCardSession(el) {
  if (!deck) { go('#/tarjetas', { replace: true }); return; }
  if (deck.idx >= deck.cards.length) return renderDone(el);
  const c = deck.cards[deck.idx];
  const t = TOPIC[c.topic];
  let revealed = false;

  mount(el, html`
    <header class="bar">
      <button class="icon-btn" id="close" aria-label="Terminar">${icons.close}</button>
      <div class="bar-mid"><div class="meter thin"><span style="width:${(deck.idx / deck.cards.length) * 100}%"></span></div></div>
      <span class="count">${deck.idx + 1}/${deck.cards.length}</span>
    </header>
    <button class="flash" id="card" aria-live="polite">
      <span class="q-meta"><span class="code">${t.code}</span> ${t.short}</span>
      <span class="flash-front">${c.front}</span>
      <span class="flash-back" hidden>${c.back}</span>
      <span class="flash-hint">Toca para ver la respuesta</span>
    </button>
    <footer class="dock" id="dock"><div class="dock-row"><button class="btn primary" id="reveal">Mostrar respuesta</button></div></footer>`);

  const card = el.querySelector('#card');
  const dock = el.querySelector('#dock');

  function reveal() {
    if (revealed) return;
    revealed = true;
    card.classList.add('is-revealed');
    card.querySelector('.flash-back').hidden = false;
    card.querySelector('.flash-hint').hidden = true;
    mount(dock, html`<div class="grades">
      ${[['again', 'Otra vez'], ['hard', 'Difícil'], ['good', 'Bien'], ['easy', 'Fácil']].map(([g, l], i) =>
        html`<button class="grade g-${g}" data-g="${g}"><strong>${l}</strong><span>${nextLabel(c.uid, g)}</span><kbd>${i + 1}</kbd></button>`)}
    </div>`);
    dock.querySelectorAll('[data-g]').forEach(b => b.onclick = () => rate(b.dataset.g));
  }
  function rate(g) {
    grade(c.uid, g, c.topic);
    deck.tally[g]++;
    deck.idx++;
    go('#/tarjetas/sesion');
  }

  card.onclick = reveal;
  el.querySelector('#reveal').onclick = reveal;
  el.querySelector('#close').onclick = () => { deck.idx = deck.cards.length; go('#/tarjetas/sesion'); };
  return onKeys(e => {
    if (!revealed && (e.key === ' ' || e.key === 'Enter')) { reveal(); e.preventDefault(); }
    else if (revealed && '1234'.includes(e.key)) rate(['again', 'hard', 'good', 'easy'][+e.key - 1]);
  });
}

function renderDone(el) {
  const { tally, title, exit } = deck;
  const n = tally.again + tally.hard + tally.good + tally.easy;
  mount(el, html`
    <header class="bar"><button class="icon-btn" id="close" aria-label="Cerrar">${icons.close}</button><div class="bar-mid"></div></header>
    <section class="summary">
      <p class="context">${title}</p>
      <h1 class="display">${plural(n, 'tarjeta', 'tarjetas')}</h1>
      <p class="lede">${n ? `${tally.good + tally.easy} las recordaste bien. ${tally.again ? `${plural(tally.again, 'vuelve', 'vuelven')} en 10 minutos.` : ''}` : 'No repasaste ninguna tarjeta.'}</p>
    </section>
    <footer class="dock"><div class="dock-row"><button class="btn primary" id="finish">Terminar</button></div></footer>`);
  const exitFn = () => { deck = null; go(exit); };
  el.querySelector('#close').onclick = exitFn;
  el.querySelector('#finish').onclick = exitFn;
}
