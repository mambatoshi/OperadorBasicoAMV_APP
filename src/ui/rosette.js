// Roseta de guilloché: cada uno de los 12 lóbulos es un tema y su radio es el dominio.
// Se dibuja como un grabado de papel de seguridad: muchas curvas finas desfasadas.
import { html, raw } from './html.js';

const TAU = Math.PI * 2;

// Radio base en el ángulo a, interpolando (coseno) entre los valores de cada tema.
function radiusAt(a, values, inner, outer) {
  const n = values.length;
  const pos = ((a / TAU) * n + n) % n;
  const i = Math.floor(pos), f = pos - i;
  const t = (1 - Math.cos(f * Math.PI)) / 2;
  const v = values[i] * (1 - t) + values[(i + 1) % n] * t;
  return inner + (outer - inner) * (0.1 + 0.9 * v);
}

function curve(values, inner, outer, phase, amp, freq) {
  const steps = 360;
  let d = '';
  for (let s = 0; s <= steps; s++) {
    const a = (s / steps) * TAU;
    const base = radiusAt(a, values, inner, outer);
    // la amplitud escala con el radio: el grabado "respira" con el dominio
    const r = base + amp * (base / outer) * Math.sin(freq * a + phase);
    const x = r * Math.cos(a - Math.PI / 2), y = r * Math.sin(a - Math.PI / 2);
    d += (s ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
  }
  return d + 'Z';
}

// El valor i cae en el ángulo i/n, alineado con su etiqueta.
export function rosette({ topics, center, caption, size = 340 }) {
  const n = topics.length;
  const values = topics.map(t => t.value);
  const inner = 50, outer = 132;
  const lines = 12;

  const target = Array.from({ length: 6 }, (_, i) =>
    curve(new Array(n).fill(1), inner, outer, (i / 6) * TAU, 5, n * 2));
  const ink = Array.from({ length: lines }, (_, i) =>
    curve(values, inner, outer, (i / lines) * TAU, 12, n * 2));
  const rings = [0.2, 0.55].map((k, i) =>
    curve(values.map(v => v * k), inner * 0.7, outer, i * 1.3, 3, n * 3));

  const labels = topics.map((t, i) => {
    const a = (i / n) * TAU - Math.PI / 2;
    const r = outer + 26;
    const x = (r * Math.cos(a)).toFixed(1), y = (r * Math.sin(a)).toFixed(1);
    return html`<a class="ros-label" href="#/tema/${t.key}" aria-label="${t.name}: ${Math.round(t.value * 100)}% de dominio">
      <text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central">${t.code}</text></a>`;
  });

  const half = size / 2;
  return html`
  <figure class="rosette">
    <svg viewBox="${-half} ${-half} ${size} ${size}" role="img" aria-label="${caption}">
      <g class="ros-target">${target.map(d => html`<path d="${d}"/>`)}</g>
      <g class="ros-ink">${ink.map((d, i) => html`<path d="${d}" pathLength="1" style="--i:${i}"/>`)}</g>
      <g class="ros-rings">${rings.map(d => html`<path d="${d}"/>`)}</g>
      <circle class="ros-hub" r="${inner - 2}"/>
      ${labels}
    </svg>
    <div class="ros-center">${raw(center)}</div>
  </figure>`;
}
