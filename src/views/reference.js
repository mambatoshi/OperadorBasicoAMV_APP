import { html, mount, raw } from '../ui/html.js';
import { icons } from '../ui/icons.js';

const PERIODS = [
  { m: 12, code: 'M', name: 'mensual', adj: 'mes' },
  { m: 6, code: 'B', name: 'bimestral', adj: 'bimestre' },
  { m: 4, code: 'T', name: 'trimestral', adj: 'trimestre' },
  { m: 2, code: 'S', name: 'semestral', adj: 'semestre' },
];

const fmt = x => Number.isFinite(x)
  ? (x * 100).toLocaleString('es-CO', { minimumFractionDigits: 4, maximumFractionDigits: 4 }) + '%'
  : '—';
const f2 = x => (x * 100).toLocaleString('es-CO', { maximumFractionDigits: 6 }) + '%';

// Convierte cualquier tasa a EA y deja escrito el camino.
function toEA(rate, kind, m) {
  const steps = [];
  let iv;
  if (kind === 'EA') return { ea: rate, steps: ['Ya es efectiva anual.'] };
  if (kind === 'NV' || kind === 'NA') {
    const ip = rate / m;
    steps.push(`Tasa periódica = ${f2(rate)} ÷ ${m} = ${f2(ip)}`);
    if (kind === 'NA') {
      iv = ip / (1 - ip);
      steps.push(`De anticipada a vencida: ${f2(ip)} ÷ (1 − ${f2(ip)}) = ${f2(iv)}`);
    } else iv = ip;
  } else if (kind === 'PV') iv = rate;
  else {
    iv = rate / (1 - rate);
    steps.push(`De anticipada a vencida: ${f2(rate)} ÷ (1 − ${f2(rate)}) = ${f2(iv)}`);
  }
  const ea = Math.pow(1 + iv, m) - 1;
  steps.push(`EA = (1 + ${f2(iv)})^${m} − 1 = ${f2(ea)}`);
  return { ea, steps };
}

function fromEA(ea, m) {
  const pv = Math.pow(1 + ea, 1 / m) - 1;
  const pa = pv / (1 + pv);
  return { pv, nv: pv * m, pa, na: pa * m };
}

const F = s => raw(`<span class="f">${s}</span>`);

const SHEET = [
  ['Interés simple y compuesto', [
    ['Valor futuro, interés simple', F('VF = VP (1 + i·n)')],
    ['Valor futuro, interés compuesto', F('VF = VP (1 + i)<sup>n</sup>')],
    ['Valor presente', F('VP = VF ÷ (1 + i)<sup>n</sup>')],
  ]],
  ['Tasas equivalentes', [
    ['Periódica vencida a partir de EA (m periodos por año)', F('i<sub>p</sub> = (1 + EA)<sup>1/m</sup> − 1')],
    ['EA a partir de la periódica vencida', F('EA = (1 + i<sub>p</sub>)<sup>m</sup> − 1')],
    ['Nominal y periódica', F('j = i<sub>p</sub> · m')],
    ['Anticipada a vencida', F('i<sub>v</sub> = i<sub>a</sub> ÷ (1 − i<sub>a</sub>)')],
    ['Vencida a anticipada', F('i<sub>a</sub> = i<sub>v</sub> ÷ (1 + i<sub>v</sub>)')],
    ['Una tasa nominal nunca se eleva ni se suma a otra directamente: primero pásala a periódica o EA.', null],
  ]],
  ['Inflación y tasas indexadas', [
    ['Fisher, tasa real', F('r = (1 + i) ÷ (1 + π) − 1')],
    ['Tasa indexada más un margen (ej. IPC + s)', F('(1 + IPC)(1 + s) − 1')],
    ['Valor en pesos de una deuda en UVR', F('Pesos = unidades × UVR del día')],
  ]],
  ['VPN y TIR', [
    ['Valor presente neto', F('VPN = −I<sub>0</sub> + Σ F<sub>t</sub> ÷ (1 + i)<sup>t</sup>')],
    ['TIR', F('tasa que hace VPN = 0')],
    ['Regla de decisión', F('VPN &gt; 0 ⇔ TIR &gt; tasa de descuento')],
  ]],
  ['Anualidades vencidas', [
    ['Valor presente', F('VP = A · [1 − (1 + i)<sup>−n</sup>] ÷ i')],
    ['Valor futuro', F('VF = A · [(1 + i)<sup>n</sup> − 1] ÷ i')],
    ['Diferida k periodos', F('VP = A · [1 − (1 + i)<sup>−n</sup>] ÷ i · (1 + i)<sup>−k</sup>')],
  ]],
  ['Bonos', [
    ['Precio', F('P = Σ C ÷ (1 + TIR)<sup>t</sup> + VN ÷ (1 + TIR)<sup>n</sup>')],
    ['Tiempo en años', F('t = días ÷ 365')],
    ['TIR de negociación mayor que el cupón', F('precio &lt; 100%, se negocia con descuento')],
    ['TIR de negociación menor que el cupón', F('precio &gt; 100%, se negocia con prima')],
    ['Duración modificada', F('DM = D ÷ (1 + TIR)')],
    ['Cambio de precio aproximado', F('ΔP ÷ P ≈ −DM · Δy')],
  ]],
];

export function renderReference(el) {
  mount(el, html`
    <header class="page-head with-back">
      <a class="back" href="#/temas">${icons.back}<span>Temas</span></a>
      <h1>Fórmulas y tasas</h1>
    </header>

    <section class="converter" aria-labelledby="conv-title">
      <h2 id="conv-title">Conversor de tasas</h2>
      <div class="conv-inputs">
        <label>Tasa (%)<input id="rate" type="text" inputmode="decimal" value="12"></label>
        <label>Tipo
          <select id="kind">
            <option value="EA">Efectiva anual (EA)</option>
            <option value="NV">Nominal vencida</option>
            <option value="NA">Nominal anticipada</option>
            <option value="PV">Periódica vencida</option>
            <option value="PA">Periódica anticipada</option>
          </select>
        </label>
        <label id="per-wrap">Periodo
          <select id="per">${PERIODS.map(p => html`<option value="${p.m}">${p.name}</option>`)}</select>
        </label>
      </div>
      <ol class="steps" id="steps"></ol>
      <table class="conv-table">
        <thead><tr><th scope="col">Periodo</th><th scope="col">Periódica vencida</th><th scope="col">Nominal vencida</th><th scope="col">Nominal anticipada</th></tr></thead>
        <tbody id="out"></tbody>
      </table>
      <p class="fine">Notación de mercado: NMV es nominal mes vencido, NTA es nominal trimestre anticipado, y así sucesivamente.</p>
    </section>

    ${SHEET.map(([title, rows]) => html`
      <section class="sheet-block">
        <h2>${title}</h2>
        <dl>${rows.map(([label, f]) => f ? html`<div><dt>${label}</dt><dd>${f}</dd></div>` : html`<p class="note">${label}</p>`)}</dl>
      </section>`)}`);

  const rate = el.querySelector('#rate'), kind = el.querySelector('#kind'), per = el.querySelector('#per');
  const perWrap = el.querySelector('#per-wrap'), out = el.querySelector('#out'), steps = el.querySelector('#steps');

  function update() {
    const r = parseFloat(rate.value.replace(',', '.')) / 100;
    perWrap.hidden = kind.value === 'EA';
    if (!Number.isFinite(r) || r <= -1 || ((kind.value === 'PA') && r >= 1)) {
      steps.innerHTML = '<li>Escribe una tasa válida, por ejemplo 12 o 1,5.</li>';
      out.innerHTML = '';
      return;
    }
    const { ea, steps: s } = toEA(r, kind.value, +per.value);
    mount(steps, html`${s.map(x => html`<li>${x}</li>`)}`);
    mount(out, html`
      <tr class="ea"><th scope="row">Anual</th><td colspan="3">${fmt(ea)} EA</td></tr>
      ${PERIODS.map(p => {
        const x = fromEA(ea, p.m);
        return html`<tr><th scope="row">${p.name}</th><td>${fmt(x.pv)}</td><td>${fmt(x.nv)}<small>N${p.code}V</small></td><td>${fmt(x.na)}<small>N${p.code}A</small></td></tr>`;
      })}`);
  }
  [rate, kind, per].forEach(i => i.addEventListener('input', update));
  update();
}
