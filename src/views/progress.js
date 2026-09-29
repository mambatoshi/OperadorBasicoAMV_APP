import { html, mount, pct, plural } from '../ui/html.js';
import { icons } from '../ui/icons.js';
import { TOPICS } from '../lib/bank.js';
import { getState, overall, topicSummary, dayKey, setGoal, toggleSpecialty, exportBackup, importBackup, resetAll } from '../lib/store.js';
import { go } from '../lib/nav.js';
import { readiness, PASS, SPECIALTIES } from '../lib/exams.js';
import { TOPIC } from '../lib/bank.js';

const WEEKS = 17;
const fmtMonth = new Intl.DateTimeFormat('es-CO', { month: 'short' });

function heatmap(days) {
  // Columnas = semanas (lunes a domingo); la última columna es la semana actual.
  const today = new Date(); today.setHours(12, 0, 0, 0);
  const dow = (today.getDay() + 6) % 7;
  const start = new Date(today); start.setDate(today.getDate() - dow - (WEEKS - 1) * 7);
  const cells = [], months = [];
  let lastMonth = -1;
  for (let w = 0; w < WEEKS; w++) {
    for (let d = 0; d < 7; d++) {
      const date = new Date(start); date.setDate(start.getDate() + w * 7 + d);
      if (d === 0 && date.getMonth() !== lastMonth) { months.push([w, fmtMonth.format(date)]); lastMonth = date.getMonth(); }
      const n = date > today ? -1 : days[dayKey(date.getTime())] || 0;
      const lvl = n < 0 ? 'future' : n === 0 ? 0 : n < 10 ? 1 : n < 25 ? 2 : n < 50 ? 3 : 4;
      cells.push(html`<span class="l${lvl}" style="grid-column:${w + 1};grid-row:${d + 1}" title="${n > 0 ? `${date.toLocaleDateString('es-CO')}: ${n}` : ''}"></span>`);
    }
  }
  return html`<div class="heat-wrap">
    <div class="heat-months" style="grid-template-columns:repeat(${WEEKS},1fr)">${months.map(([w, m]) => html`<span style="grid-column:${w + 1}">${m}</span>`)}</div>
    <div class="heat" style="grid-template-columns:repeat(${WEEKS},1fr)">${cells}</div>
  </div>`;
}

export function renderProgress(el) {
  const st = getState();
  const o = overall();
  const studyDays = Object.keys(st.days).length;
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;

  mount(el, html`
    <header class="page-head"><h1>Progreso</h1></header>

    <dl class="figures">
      <div><dt>Dominio del banco</dt><dd>${pct(o.mastery)}</dd></div>
      <div><dt>Preguntas vistas</dt><dd>${o.seen}<small> de ${o.total}</small></dd></div>
      <div><dt>Aciertos recientes</dt><dd>${o.accuracy == null ? '—' : pct(o.accuracy)}</dd></div>
      <div><dt>Racha</dt><dd>${o.streak}<small> ${o.streak === 1 ? 'día' : 'días'}</small></dd></div>
    </dl>

    <h2 class="section-title">Preparación para el Operador</h2>
    <ul class="components">
      ${readiness().map(c => html`<li class="${c.value >= PASS ? 'ok' : 'bad'}">
        <span class="comp-name">${c.name}</span>
        <span class="comp-num">${pct(c.value)}</span>
        <span class="score-line"><span style="width:${c.value * 100}%"></span><i style="left:${PASS * 100}%"></i></span>
      </li>`)}
    </ul>
    <p class="fine">Tu dominio de cada tema, ponderado por cuántas preguntas trae el examen oficial de ese tema. La marca es la línea de aprobación: 70% en cada componente.</p>

    <h2 class="section-title">Actividad</h2>
    ${heatmap(st.days)}
    <p class="fine">${plural(studyDays, 'día', 'días')} de estudio en total.</p>

    <h2 class="section-title">Por tema</h2>
    <table class="topic-table">
      <thead><tr><th scope="col">Tema</th><th scope="col">Dominio</th><th scope="col"><abbr title="Aciertos en las últimas 40 respuestas">Aciertos</abbr></th></tr></thead>
      <tbody>
        ${TOPICS.map(t => {
          const s = topicSummary(t.key);
          return html`<tr>
            <th scope="row"><a href="#/tema/${t.key}"><span class="code">${t.code}</span> ${t.short}</a></th>
            <td><span class="mini"><span style="width:${s.mastery * 100}%"></span></span>${pct(s.mastery)}</td>
            <td class="${s.accuracy != null && s.accuracy < 0.7 ? 'low' : ''}">${s.accuracy == null ? '—' : pct(s.accuracy)}</td>
          </tr>`;
        })}
      </tbody>
    </table>
    <p class="fine">El dominio sube cuando aciertas una pregunta en repasos espaciados (1, 3, 7 y 16 días) y baja cuando la fallas. Se considera dominada desde el tercer acierto espaciado.</p>

    <h2 class="section-title">Ajustes</h2>
    <div class="setting">
      <p id="goal-label">Meta diaria de preguntas</p>
      <div class="segmented" role="radiogroup" aria-labelledby="goal-label">
        ${[10, 20, 30, 40].map(n => html`<button role="radio" data-goal="${n}" aria-checked="${st.settings.dailyGoal === n}">${n}</button>`)}
      </div>
    </div>
    <div class="setting">
      <p id="spec-label">Especialidades que vas a presentar</p>
      <div class="chips" role="group" aria-labelledby="spec-label">
        ${SPECIALTIES.map(k => html`<button data-spec="${k}" aria-pressed="${(st.settings.specialties ?? []).includes(k)}">${TOPIC[k].short}</button>`)}
      </div>
      <p class="fine">La sesión de hoy reparte las preguntas nuevas según el peso de cada tema en el examen de Operador y en las especialidades que elijas.</p>
    </div>
    <ul class="links">
      <li><button id="export"><span><strong>Guardar respaldo</strong>Descarga tu progreso para pasarlo a otro dispositivo</span>${icons.share}</button></li>
      <li><label class="file-row"><input type="file" id="import" accept="application/json,.json" hidden>
        <span><strong>Restaurar respaldo</strong>Reemplaza el progreso de este dispositivo</span>${icons.chevron}</label></li>
      <li><button id="reset" class="danger"><span><strong>Borrar todo el progreso</strong>No se puede deshacer</span></button></li>
    </ul>
    ${standalone ? '' : html`
      <section class="install">
        <h2>Instalar en el iPhone</h2>
        <p>Abre esta página en Safari, toca Compartir y elige “Agregar a pantalla de inicio”. Se abre a pantalla completa y funciona sin conexión.</p>
      </section>`}`);

  el.querySelectorAll('[data-spec]').forEach(b => b.onclick = () => { toggleSpecialty(b.dataset.spec); go('#/progreso'); });
  el.querySelectorAll('[data-goal]').forEach(b => b.onclick = () => { setGoal(+b.dataset.goal); go('#/progreso'); });

  el.querySelector('#export').onclick = async () => {
    const name = `amv-progreso-${dayKey()}.json`;
    const file = new File([exportBackup()], name, { type: 'application/json' });
    // En iOS la hoja de compartir permite guardarlo en Archivos o enviarlo.
    if (navigator.canShare?.({ files: [file] })) {
      try { await navigator.share({ files: [file], title: name }); return; } catch (e) { if (e.name === 'AbortError') return; }
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(file); a.download = name; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  el.querySelector('#import').onchange = async e => {
    const f = e.target.files[0];
    if (!f) return;
    if (!confirm('Esto reemplaza el progreso de este dispositivo por el del respaldo. ¿Continuar?')) return;
    try { importBackup(await f.text()); alert('Progreso restaurado.'); go('#/'); }
    catch (err) { alert(err.message || 'No se pudo leer el archivo.'); }
  };
  el.querySelector('#reset').onclick = () => {
    if (confirm('¿Borrar todo tu progreso, historial y simulacros? No se puede deshacer.')) { resetAll(); go('#/'); }
  };
}
