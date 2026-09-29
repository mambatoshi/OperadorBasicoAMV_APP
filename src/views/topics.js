import { html, mount, pct, plural, LETTERS } from '../ui/html.js';
import { icons } from '../ui/icons.js';
import { TOPICS, TOPIC, QUESTIONS, CARDS, questionsByTopic, cardsByTopic } from '../lib/bank.js';
import { topicSummary, statusOf } from '../lib/store.js';
import { topicSet, mistakes } from '../lib/sessions.js';
import { startSession, sourceLine } from './quiz.js';
import { startCards } from './cards.js';
import { go } from '../lib/nav.js';

const fold = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const STATUS_LABEL = { new: 'Nueva', learning: 'Aprendiendo', mastered: 'Dominada' };

function masteryBar(sum) {
  const w = n => (n / sum.total) * 100;
  return html`<div class="stack" aria-hidden="true">
    <span class="s-mastered" style="width:${w(sum.mastered)}%"></span>
    <span class="s-learning" style="width:${w(sum.learning)}%"></span>
  </div>`;
}

export function renderTopics(el) {
  mount(el, html`
    <header class="page-head"><h1>Temas</h1></header>
    <label class="search">
      ${icons.search}
      <input type="search" id="q" placeholder="Buscar un concepto: TRM, repo, duración…" autocomplete="off" enterkeyhint="search">
    </label>
    <div id="results"></div>
    <ul class="topic-list" id="list">
      ${TOPICS.map(t => {
        const s = topicSummary(t.key);
        return html`<li><a href="#/tema/${t.key}">
          <span class="code">${t.code}</span>
          <span class="t-body">
            <span class="t-name">${t.name}</span>
            ${masteryBar(s)}
            <span class="t-meta">${pct(s.mastery)} dominio${s.due ? ` · ${s.due} por repasar` : ''}</span>
          </span>
          ${icons.chevron}
        </a></li>`;
      })}
    </ul>
    <a class="row-link" href="#/consulta">${icons.formula}<span>Fórmulas y conversor de tasas</span>${icons.chevron}</a>`);

  const input = el.querySelector('#q');
  const results = el.querySelector('#results');
  const list = el.querySelector('#list');
  input.addEventListener('input', () => {
    const term = fold(input.value.trim());
    if (term.length < 2) { results.innerHTML = ''; list.hidden = false; return; }
    const qs = QUESTIONS.filter(q => fold(q.text + ' ' + q.options[q.answer] + ' ' + q.explanation).includes(term)).slice(0, 30);
    const cs = CARDS.filter(c => fold(c.front + ' ' + c.back).includes(term)).slice(0, 15);
    list.hidden = true;
    mount(results, html`
      <p class="result-count">${plural(cs.length, 'tarjeta', 'tarjetas')} y ${plural(qs.length, 'pregunta', 'preguntas')}</p>
      <ul class="bank">
        ${cs.map(c => html`<li><details><summary><span class="code">${TOPIC[c.topic].code}</span>${c.front}</summary><p>${c.back}</p></details></li>`)}
        ${qs.map(q => bankItem(q))}
      </ul>`);
  });
}

function bankItem(q) {
  return html`<li><details>
    <summary><span class="code">${TOPIC[q.topic].code}</span>${q.text}</summary>
    <ol class="bank-opts">${q.options.map((o, i) => html`<li class="${i === q.answer ? 'right' : ''}"><span class="letter">${LETTERS[i]}</span>${o}</li>`)}</ol>
    <p>${q.explanation}</p>
    ${sourceLine(q)}
  </details></li>`;
}

export function renderTopic(el, key) {
  const t = TOPIC[key];
  if (!t) { go('#/temas', { replace: true }); return; }
  const s = topicSummary(key);
  const errs = mistakes(key);
  const cards = cardsByTopic(key);

  mount(el, html`
    <header class="page-head with-back">
      <a class="back" href="#/temas">${icons.back}<span>Temas</span></a>
      <p class="code big">${t.code}</p>
      <h1>${t.name}</h1>
    </header>
    <section class="topic-stats">
      ${masteryBar(s)}
      <dl>
        <div><dt>Dominadas</dt><dd>${s.mastered}</dd></div>
        <div><dt>Aprendiendo</dt><dd>${s.learning}</dd></div>
        <div><dt>Nuevas</dt><dd>${s.new}</dd></div>
        <div><dt>Aciertos recientes</dt><dd>${s.accuracy == null ? '—' : pct(s.accuracy)}</dd></div>
      </dl>
    </section>
    <div class="actions">
      <button class="btn primary wide" id="practice">Practicar 10 preguntas</button>
      ${errs.length ? html`<button class="btn ghost wide" id="errors">Repasar ${plural(errs.length, 'error', 'errores')}</button>` : ''}
      ${cards.length ? html`<button class="btn ghost wide" id="cards">Tarjetas del tema <span class="btn-count">${cards.length}</span></button>` : ''}
    </div>
    <ul class="links">
      ${t.guide ? html`<li><a href="${t.guide.url}" target="_blank" rel="noopener"><span><strong>Guía oficial</strong>${t.guide.title}</span>${icons.external}</a></li>` : ''}
      <li><a href="#/tema/${key}/banco"><span><strong>Banco de preguntas</strong>Las ${s.total} preguntas con su respuesta, para leer</span>${icons.chevron}</a></li>
      ${key === 'matematicas' || key === 'renta_fija' ? html`<li><a href="#/consulta"><span><strong>Fórmulas y tasas</strong>Conversor de tasas y hoja de fórmulas</span>${icons.chevron}</a></li>` : ''}
    </ul>`);

  el.querySelector('#practice').onclick = () =>
    startSession({ title: t.name, questions: topicSet(key, 10), exit: `#/tema/${key}` });
  el.querySelector('#errors')?.addEventListener('click', () =>
    startSession({ title: `Errores de ${t.short.toLowerCase()}`, questions: errs, exit: `#/tema/${key}` }));
  el.querySelector('#cards')?.addEventListener('click', () =>
    startCards({ title: t.name, cards, exit: `#/tema/${key}` }));
}

export function renderBank(el, key) {
  const t = TOPIC[key];
  if (!t) { go('#/temas', { replace: true }); return; }
  const qs = questionsByTopic(key);
  let filter = 'all';

  mount(el, html`
    <header class="page-head with-back">
      <a class="back" href="#/tema/${key}">${icons.back}<span>${t.short}</span></a>
      <h1>Banco de preguntas</h1>
      <p class="date">Toca una pregunta para ver la respuesta y su explicación.</p>
    </header>
    <div class="segmented" role="tablist">
      ${[['all', 'Todas'], ['new', 'Nuevas'], ['learning', 'Aprendiendo'], ['mastered', 'Dominadas']].map(([k, l]) =>
        html`<button role="tab" data-f="${k}" aria-selected="${k === filter}">${l}</button>`)}
    </div>
    <ul class="bank" id="bank"></ul>`);

  const bank = el.querySelector('#bank');
  const paint = () => {
    const shown = qs.filter(q => filter === 'all' || statusOf(q.uid) === filter);
    mount(bank, shown.length
      ? html`${shown.map(q => bankItem(q))}`
      : html`<li class="empty">Ninguna pregunta ${STATUS_LABEL[filter]?.toLowerCase()} en este tema.</li>`);
  };
  el.querySelectorAll('[data-f]').forEach(b => b.onclick = () => {
    filter = b.dataset.f;
    el.querySelectorAll('[data-f]').forEach(x => x.setAttribute('aria-selected', x === b));
    paint();
  });
  paint();
}
