// Estructura oficial de los exámenes, tomada de la página de AMV:
// https://amvcolombia.org.co/en-que-se-puede-certificar/operador/
// Se aprueba con 70% en CADA componente.
import { QUESTIONS } from './bank.js';
import { shuffle } from './util.js';
import { masteryOf } from './store.js';

export const PASS = 0.7;
export const EXAM_SOURCE = 'https://amvcolombia.org.co/en-que-se-puede-certificar/operador/';

const BASICO = {
  name: 'Componente básico',
  slots: [
    { topic: 'regulacion', n: 30 },
    { topic: 'autorregulacion', n: 15 },
    { topic: 'etica', n: 15 },
    { topic: 'analisis_economico', n: 15 },
    { topic: 'riesgos', n: 25 },
    { topic: 'matematicas', n: 10 },
  ],
};
const COMPLEMENTARIO = {
  name: 'Componente complementario',
  slots: [
    { topic: 'fondos', section: 'ob-fon-pensiones', n: 20, label: 'Fondos de pensiones' },
    { topic: 'fondos', section: 'ob-fon-fic', n: 20, label: 'Fondos de inversión colectiva' },
    { topic: 'portafolios', n: 20 },
  ],
};
const scale = (comp, k) => ({ ...comp, slots: comp.slots.map(s => ({ ...s, n: Math.round(s.n * k) })) });
const specialty = (topic, name) => ({
  group: 'Especialidades de negociación', name, minutes: 60,
  components: [{ name, slots: [{ topic, n: 40 }] }],
});

export const EXAMS = {
  operador: {
    group: 'Operador', name: 'Operador completo', minutes: 220,
    components: [BASICO, COMPLEMENTARIO],
  },
  operador_corto: {
    group: 'Operador', name: 'Operador corto', minutes: 44,
    note: 'Una quinta parte del examen real, con la misma proporción por tema y el mismo ritmo. Útil para practicar entre semana.',
    components: [scale(BASICO, 0.2), scale(COMPLEMENTARIO, 0.2)],
  },
  renta_fija: specialty('renta_fija', 'Negociación Renta Fija'),
  renta_variable: specialty('renta_variable', 'Negociación Renta Variable'),
  derivados: specialty('derivados', 'Negociación Derivados'),
  divisas: specialty('divisas', 'Negociación Divisas'),
  maestro: {
    group: 'Especialidades de negociación', name: 'Maestro de Negociación', minutes: 150,
    components: [{ name: 'Maestro de Negociación', slots: [
      { topic: 'renta_fija', n: 34 }, { topic: 'renta_variable', n: 33 }, { topic: 'derivados', n: 33 },
    ] }],
  },
};

const poolFor = slot => QUESTIONS.filter(q => q.topic === slot.topic && (!slot.section || q.section === slot.section));

// Cuántas preguntas del examen oficial puede cubrir el banco actual.
export function plan(kind) {
  const ex = EXAMS[kind];
  const official = ex.components.reduce((a, c) => a + c.slots.reduce((b, s) => b + s.n, 0), 0);
  const gaps = [];
  let actual = 0;
  for (const c of ex.components) for (const s of c.slots) {
    const have = Math.min(s.n, poolFor(s).length);
    actual += have;
    if (have < s.n) gaps.push({ ...s, have });
  }
  // Si faltan preguntas, el tiempo se ajusta para mantener el ritmo del examen real.
  const runMinutes = Math.round(ex.minutes * actual / official);
  return { ...ex, official, actual, gaps, runMinutes };
}

// Arma el examen: preguntas barajadas y, para cada una, a qué componente pertenece.
export function build(kind) {
  const ex = EXAMS[kind];
  const picked = [];
  ex.components.forEach((c, ci) => {
    for (const s of c.slots) shuffle(poolFor(s)).slice(0, s.n).forEach(q => picked.push({ q, comp: ci }));
  });
  return shuffle(picked);
}

export function fmtMinutes(m) {
  const h = Math.floor(m / 60), r = m % 60;
  if (!h) return `${r} min`;
  return r ? `${h} h ${r} min` : `${h} ${h === 1 ? 'hora' : 'horas'}`;
}

// Dominio de cada componente ponderado por cuántas preguntas pone AMV de cada tema.
export function readiness(kind = 'operador') {
  return EXAMS[kind].components.map(c => {
    const total = c.slots.reduce((a, s) => a + s.n, 0);
    const value = c.slots.reduce((a, s) => a + s.n * masteryOf(poolFor(s)), 0) / total;
    return { name: c.name, value };
  });
}

export const SPECIALTIES = ['renta_fija', 'renta_variable', 'derivados', 'divisas'];

// Peso de cada tema en lo que vas a presentar: el Operador más las especialidades elegidas.
export function studyWeights(specialties = []) {
  const w = {};
  for (const c of EXAMS.operador.components) for (const s of c.slots) w[s.topic] = (w[s.topic] || 0) + s.n;
  for (const k of specialties) w[k] = (w[k] || 0) + 40;
  return w;
}
