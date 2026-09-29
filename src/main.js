import '@fontsource-variable/newsreader/opsz.css';
import '@fontsource-variable/newsreader/opsz-italic.css';
import '@fontsource-variable/public-sans';
import './style.css';

import { html, mount } from './ui/html.js';
import { icons } from './ui/icons.js';
import { requestPersistence } from './lib/store.js';
import { renderToday } from './views/today.js';
import { renderTopics, renderTopic, renderBank } from './views/topics.js';
import { renderSession } from './views/quiz.js';
import { renderDecks, renderCardSession } from './views/cards.js';
import { renderExamSetup, renderExam, renderExamResult } from './views/exam.js';
import { renderProgress } from './views/progress.js';
import { renderReference } from './views/reference.js';

const TABS = [
  { id: 'today', href: '#/', label: 'Hoy', icon: icons.today },
  { id: 'topics', href: '#/temas', label: 'Temas', icon: icons.topics },
  { id: 'cards', href: '#/tarjetas', label: 'Tarjetas', icon: icons.cards },
  { id: 'exam', href: '#/simulacro', label: 'Simulacro', icon: icons.exam },
  { id: 'progress', href: '#/progreso', label: 'Progreso', icon: icons.progress },
];

// [patrón, vista, pestaña activa | null para pantallas a pantalla completa]
const ROUTES = [
  [/^\/?$/, renderToday, 'today'],
  [/^\/temas$/, renderTopics, 'topics'],
  [/^\/tema\/(\w+)$/, renderTopic, 'topics'],
  [/^\/tema\/(\w+)\/banco$/, renderBank, 'topics'],
  [/^\/consulta$/, renderReference, 'topics'],
  [/^\/sesion$/, renderSession, null],
  [/^\/tarjetas$/, renderDecks, 'cards'],
  [/^\/tarjetas\/sesion$/, renderCardSession, null],
  [/^\/simulacro$/, renderExamSetup, 'exam'],
  [/^\/examen$/, renderExam, null],
  [/^\/resultado\/(\d+)$/, renderExamResult, 'exam'],
  [/^\/progreso$/, renderProgress, 'progress'],
];

const root = document.getElementById('app');
mount(root, html`
  <main id="view" tabindex="-1"></main>
  <nav id="tabs" aria-label="Secciones">
    ${TABS.map(t => html`<a href="${t.href}" data-tab="${t.id}">${t.icon}<span>${t.label}</span></a>`)}
  </nav>`);
const view = document.getElementById('view');
const tabs = document.getElementById('tabs');

let cleanup = null;

function route() {
  const path = location.hash.replace(/^#/, '') || '/';
  if (typeof cleanup === 'function') cleanup();
  cleanup = null;
  for (const [re, fn, tab] of ROUTES) {
    const m = path.match(re);
    if (!m) continue;
    document.body.dataset.immersive = tab ? 'no' : 'yes';
    tabs.querySelectorAll('a').forEach(a => a.toggleAttribute('aria-current', a.dataset.tab === tab));
    window.scrollTo(0, 0);
    cleanup = fn(view, ...m.slice(1));
    view.focus({ preventScroll: true });
    return;
  }
  history.replaceState(null, '', '#/');
  route();
}

window.addEventListener('hashchange', route);
route();
requestPersistence();

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
