// Arma las listas de preguntas para cada modo de estudio.
import { QUESTIONS } from './bank.js';
import { getState, isDue, statusOf, topicSummary } from './store.js';
import { shuffle } from './util.js';
import { studyWeights } from './exams.js';

export { shuffle };

// Presenta una pregunta con sus opciones barajadas (cuando es seguro hacerlo).
// El banco original tenía la respuesta en la opción B el 80% de las veces:
// sin barajar, se aprende la posición y no el contenido.
export function present(q) {
  const order = q.options.map((_, i) => i);
  return { q, order: q.shuffle ? shuffle(order) : order };
}

// Alterna temas para que dos preguntas seguidas no sean del mismo tema cuando se pueda.
function interleave(list) {
  const buckets = {};
  for (const q of list) (buckets[q.topic] ||= []).push(q);
  const out = [];
  let last = null;
  while (out.length < list.length) {
    const keys = Object.keys(buckets).filter(k => buckets[k].length)
      .sort((a, b) => buckets[b].length - buckets[a].length);
    const pick = keys.find(k => k !== last) ?? keys[0];
    out.push(buckets[pick].shift());
    last = pick;
  }
  return out;
}

const byDue = (a, b) => getState().items[a.uid].due - getState().items[b.uid].due;

export function dailyPlan(goal = getState().settings.dailyGoal) {
  const now = Date.now();
  const due = QUESTIONS.filter(q => isDue(q.uid, now)).sort(byDue);
  const reviews = due.slice(0, goal);
  const room = goal - reviews.length;

  // Preguntas nuevas repartidas entre los temas que vas a presentar, en proporción a
  // cuántas preguntas trae el examen de cada uno y a cuánto te falta dominarlo.
  const weights = studyWeights(getState().settings.specialties);
  const pools = {};
  const need = {};
  for (const [k, w] of Object.entries(weights)) {
    pools[k] = shuffle(QUESTIONS.filter(q => q.topic === k && statusOf(q.uid) === 'new'));
    need[k] = w * (1 - topicSummary(k).mastery);
  }
  const taken = Object.fromEntries(Object.keys(weights).map(k => [k, 0]));
  const fresh = [];
  // Reparto proporcional (método D'Hondt): cada pregunta va al tema con mayor necesidad por cupo.
  while (fresh.length < room) {
    const k = Object.keys(pools).filter(t => pools[t].length)
      .sort((a, b) => need[b] / (taken[b] + 1) - need[a] / (taken[a] + 1))[0];
    if (!k) break;
    fresh.push(pools[k].shift());
    taken[k]++;
  }
  return { reviews: reviews.length, fresh: fresh.length, list: interleave([...reviews, ...fresh]), totalDue: due.length };
}

export function topicSet(topicKey, n = 10) {
  const now = Date.now();
  const qs = QUESTIONS.filter(q => q.topic === topicKey);
  const due = qs.filter(q => isDue(q.uid, now)).sort(byDue);
  const fresh = shuffle(qs.filter(q => statusOf(q.uid) === 'new'));
  const learning = shuffle(qs.filter(q => statusOf(q.uid) === 'learning' && !isDue(q.uid, now)));
  const rest = shuffle(qs.filter(q => statusOf(q.uid) === 'mastered' && !isDue(q.uid, now)));
  return [...due, ...fresh, ...learning, ...rest].slice(0, n);
}

// Preguntas que más te cuestan: falladas y aún no consolidadas.
export function mistakes(topicKey = null) {
  const items = getState().items;
  return QUESTIONS.filter(q => (!topicKey || q.topic === topicKey))
    .filter(q => items[q.uid] && items[q.uid].wrong > 0 && items[q.uid].box <= 1)
    .sort((a, b) => (items[b.uid].wrong - items[b.uid].right) - (items[a.uid].wrong - items[a.uid].right));
}
