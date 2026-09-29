// Normaliza el banco de preguntas crudo en algo sobre lo que la app puede razonar:
// IDs estables, tema, fuente oficial (guía y sección) y si las opciones se pueden barajar.
import { questions as rawQuestions, flashcards as rawCards, CATEGORIES as RAW_CATS } from '../data/questions.js';
import { ITEM_TRACEABILITY } from '../data/item_traceability.js';
import { GUIDE_SOURCES, getAllGuideSections } from '../data/coverage_manifest.js';

// Códigos al estilo nemotécnico de la BVC. El orden sigue el temario.
const TOPIC_META = {
  regulacion:         { code: 'REG', short: 'Regulación' },
  autorregulacion:    { code: 'AUT', short: 'Autorregulación' },
  etica:              { code: 'ETI', short: 'Ética' },
  analisis_economico: { code: 'ECO', short: 'Análisis económico' },
  riesgos:            { code: 'RSG', short: 'Riesgos' },
  matematicas:        { code: 'MAT', short: 'Matemáticas' },
  renta_fija:         { code: 'RFJ', short: 'Renta fija' },
  renta_variable:     { code: 'RVR', short: 'Renta variable' },
  derivados:          { code: 'DER', short: 'Derivados' },
  divisas:            { code: 'DIV', short: 'Divisas' },
  portafolios:        { code: 'PRT', short: 'Portafolios' },
  fondos:             { code: 'FON', short: 'Fondos' },
};

// Guía oficial de cada tema (la misma asignación que usaba el lector de guías).
const TOPIC_GUIDE = {
  regulacion: 'guia_regulacion',
  autorregulacion: 'guia_autorregulacion',
  etica: 'guia_etica',
  analisis_economico: 'guia_analisis_matematicas',
  riesgos: 'amv_operador',
  matematicas: 'guia_analisis_matematicas',
  renta_fija: 'guia_renta_fija',
  renta_variable: 'guia_renta_variable',
  derivados: 'guia_derivados',
  divisas: 'guia_divisas',
  portafolios: 'guia_portafolios',
  fondos: 'guia_fic',
};

// Las guías oficiales traen los títulos sin tildes; aquí se muestran bien escritos.
const GUIDE_TITLES = {
  amv_operador: 'Página oficial del examen de Operador (AMV)',
  guia_regulacion: 'Guía de estudio de Regulación',
  guia_autorregulacion: 'Guía de estudio de Autorregulación',
  guia_etica: 'Guía de estudio de Ética e Integridad',
  guia_analisis_matematicas: 'Guía de Análisis Económico y Matemáticas Financieras',
  guia_matematicas: 'Guía de ejercicios de Matemáticas Financieras',
  guia_fic: 'Guía de estudio de Fondos de Inversión Colectiva',
  guia_portafolios: 'Guía de estudio de Administración de Portafolios',
  guia_renta_fija: 'Guía de estudio de Renta Fija',
  guia_renta_variable: 'Guía de estudio de Renta Variable',
  guia_derivados: 'Guía de estudio de Derivados',
  guia_divisas: 'Guía de estudio de Divisas',
};

export function guide(key) {
  const g = GUIDE_SOURCES[key];
  if (!g) return null;
  return { key, title: GUIDE_TITLES[key] ?? g.title, url: g.url, isPdf: /\.pdf($|\?)/i.test(g.url) };
}

// Opciones que se refieren a otras por posición ("todas las anteriores", "A y B")
// o pares verdadero/falso: barajarlas rompería la pregunta.
const POSITIONAL = /anterior|ambas|ninguna|todas|\b[a-d]\s+y\s+[a-d]\b|^(verdadero|falso)$/i;

export const TOPICS = Object.keys(RAW_CATS).map(key => ({
  key,
  name: RAW_CATS[key].name,
  code: TOPIC_META[key]?.code ?? key.slice(0, 3).toUpperCase(),
  short: TOPIC_META[key]?.short ?? RAW_CATS[key].name,
  guide: guide(TOPIC_GUIDE[key]),
}));
export const TOPIC = Object.fromEntries(TOPICS.map(t => [t.key, t]));

const SECTIONS = getAllGuideSections();

// El banco tiene huecos (comas dobles): se filtran.
export const QUESTIONS = rawQuestions.filter(Boolean).map(q => {
  const trace = ITEM_TRACEABILITY[q.id];
  return {
    uid: 'q:' + q.id,
    id: q.id,
    topic: q.cat,
    text: q.q,
    options: q.opts,
    answer: q.ans,
    explanation: q.exp,
    shuffle: !q.opts.some(o => POSITIONAL.test(o.trim())),
    section: trace?.guideSection ?? null,
    sectionName: SECTIONS[trace?.guideSection]?.name ?? null,
    source: guide(trace?.source) ?? TOPIC[q.cat]?.guide ?? null,
  };
});
export const QUESTION = Object.fromEntries(QUESTIONS.map(q => [q.uid, q]));

export const CARDS = rawCards.filter(Boolean).map(c => ({
  uid: 'c:' + c.id,
  topic: c.cat,
  front: c.front,
  back: c.back,
}));
export const CARD = Object.fromEntries(CARDS.map(c => [c.uid, c]));

export const questionsByTopic = key => QUESTIONS.filter(q => q.topic === key);
export const cardsByTopic = key => CARDS.filter(c => c.topic === key);
