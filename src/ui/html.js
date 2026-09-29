// Plantillas HTML con escape automático. Todo lo interpolado se escapa salvo que
// venga de otra plantilla html`` o de raw().
const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ESC[c]);

class Raw { constructor(s) { this.s = s; } toString() { return this.s; } }
export const raw = s => new Raw(String(s));

function part(v) {
  if (v == null || v === false) return '';
  if (v instanceof Raw) return v.s;
  if (Array.isArray(v)) return v.map(part).join('');
  return esc(v);
}

export function html(strings, ...vals) {
  let out = strings[0];
  for (let i = 0; i < vals.length; i++) out += part(vals[i]) + strings[i + 1];
  return new Raw(out);
}

export function mount(el, tpl) { el.innerHTML = tpl.toString(); }

export const pct = x => `${Math.round(x * 100)}%`;
export const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export function plural(n, one, many) { return `${n} ${n === 1 ? one : many}`; }
