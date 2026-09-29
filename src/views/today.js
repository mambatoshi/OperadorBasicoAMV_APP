import { html, mount, pct, plural } from '../ui/html.js';
import { icons } from '../ui/icons.js';
import { rosette } from '../ui/rosette.js';
import { TOPICS, TOPIC } from '../lib/bank.js';
import { getState, overall, topicSummary } from '../lib/store.js';
import { dailyPlan, mistakes } from '../lib/sessions.js';
import { startSession, pendingSession } from './quiz.js';

const fmtDate = new Intl.DateTimeFormat('es-CO', { weekday: 'long', day: 'numeric', month: 'long' });

function listNames(keys) {
  const names = keys.map(k => TOPIC[k].short.toLowerCase());
  if (names.length <= 1) return names.join('');
  return names.slice(0, -1).join(', ') + ' y ' + names.at(-1);
}

export function renderToday(el) {
  const st = getState();
  const o = overall();
  const goal = st.settings.dailyGoal;
  const plan = dailyPlan(goal);
  const errors = mistakes().length;
  const exam = st.activeExam;
  const pending = pendingSession();
  const goalMet = o.today >= goal;

  // Los tres temas que más preguntas nuevas aportan hoy.
  const counts = {};
  plan.list.filter(q => !st.items[q.uid]).forEach(q => { counts[q.topic] = (counts[q.topic] || 0) + 1; });
  const newTopics = Object.keys(counts).sort((a, b) => counts[b] - counts[a]).slice(0, 3);
  let planText;
  if (!plan.list.length) planText = 'Respondiste todo el banco y no tienes repasos pendientes. Haz un simulacro para medirte.';
  else if (plan.reviews && plan.fresh) planText = `${plural(plan.reviews, 'repaso pendiente', 'repasos pendientes')} y ${plural(plan.fresh, 'pregunta nueva', 'preguntas nuevas')} de ${listNames(newTopics)}.`;
  else if (plan.reviews) planText = `${plural(plan.reviews, 'repaso pendiente', 'repasos pendientes')}, mezclados entre temas.`;
  else planText = `${plural(plan.fresh, 'pregunta nueva', 'preguntas nuevas')}, sobre todo de ${listNames(newTopics)}: pesan en el examen y aún no los dominas.`;

  const rose = rosette({
    topics: TOPICS.map(t => ({ ...t, value: topicSummary(t.key).mastery })),
    caption: `Dominio del banco: ${pct(o.mastery)}. Un lóbulo por tema.`,
    center: html`<strong>${Math.round(o.mastery * 100)}<small>%</small></strong><span>dominio</span>`,
  });

  mount(el, html`
    <header class="page-head">
      <h1>Hoy</h1>
      <p class="date">${fmtDate.format(new Date())}</p>
    </header>

    ${exam ? html`
      <a class="notice" href="#/examen">
        <span><strong>Simulacro en curso.</strong> ${exam.answers.filter(a => a >= 0).length} de ${exam.uids.length} respondidas.</span>
        ${icons.chevron}
      </a>` : ''}
    ${pending ? html`
      <a class="notice" href="#/sesion">
        <span><strong>${pending.title} sin terminar.</strong> Vas en la pregunta ${pending.done + 1} de ${pending.total}.</span>
        ${icons.chevron}
      </a>` : ''}

    ${rose}
    <p class="rose-note">Cada lóbulo es un tema y crece a medida que lo dominas. Toca un código para abrirlo.</p>

    <section class="plan">
      <h2>${goalMet ? 'Meta del día cumplida' : 'Sesión de hoy'}</h2>
      <p>${goalMet ? `Llevas ${plural(o.today, "respuesta", "respuestas")} hoy. Si quieres seguir: ${planText.charAt(0).toLowerCase() + planText.slice(1)}` : planText}</p>
      ${plan.list.length ? html`<button class="btn primary wide" id="start">${goalMet ? 'Seguir estudiando' : 'Empezar sesión'} <span class="btn-count">${plan.list.length}</span></button>` : html`<a class="btn primary wide" href="#/simulacro">Ir al simulacro</a>`}
      <div class="meter" aria-label="Progreso de la meta diaria">
        <span style="width:${Math.min(100, (o.today / goal) * 100)}%"></span>
      </div>
      <p class="meter-label">${Math.min(o.today, goal)} de ${goal} hoy${o.streak > 1 ? html` <span class="seal">racha de ${o.streak} días</span>` : ''}</p>
    </section>

    <ul class="links">
      <li><a href="#/tarjetas">
        <span><strong>Tarjetas</strong>${o.cardsDue ? `${plural(o.cardsDue, 'pendiente', 'pendientes')} de repaso` : 'Conceptos clave para memorizar'}</span>${icons.chevron}</a></li>
      <li><button id="mistakes" ${errors ? '' : 'disabled'}>
        <span><strong>Errores por afianzar</strong>${errors ? `${plural(errors, 'pregunta', 'preguntas')} que fallaste hace poco` : 'Ninguno por ahora'}</span>${icons.chevron}</button></li>
      <li><a href="#/consulta">
        <span><strong>Fórmulas y tasas</strong>Conversor de tasas y hoja de fórmulas</span>${icons.chevron}</a></li>
    </ul>`);

  el.querySelector('#start')?.addEventListener('click', () =>
    startSession({ title: 'Sesión de hoy', questions: plan.list, exit: '#/' }));
  el.querySelector('#mistakes')?.addEventListener('click', () =>
    startSession({ title: 'Errores por afianzar', questions: mistakes().slice(0, 15), exit: '#/' }));
}
