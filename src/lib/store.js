// Estado persistente + repetición espaciada (sistema Leitner de 6 cajas).
import { QUESTIONS, CARDS, QUESTION } from './bank.js';

const KEY = 'amv_study_v2';
const LEGACY_KEY = 'amv_prep_data';
const MIN = 60 * 1000;
const DAY = 24 * 60 * MIN;

// Días hasta el próximo repaso según la caja. Caja 0 = recién fallada.
export const INTERVALS = [0, 1, 3, 7, 16, 35];
export const MASTERED_BOX = 3;

function fresh() {
  return {
    v: 2,
    items: {},        // uid -> { box, due, seen, right, wrong, last }
    log: [],          // [timestamp, topic, 1|0] de las respuestas recientes
    days: {},         // 'AAAA-MM-DD' (hora local) -> ítems estudiados
    exams: [],
    activeExam: null,
    activeSession: null, // práctica en curso, para retomarla si iOS cierra la app
    settings: { dailyGoal: 20, specialties: [] },
  };
}

export function dayKey(ts = Date.now()) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function migrateLegacy(state) {
  let old;
  try { old = JSON.parse(localStorage.getItem(LEGACY_KEY) || 'null'); } catch { old = null; }
  if (!old) return state;
  for (const id of Object.keys(old.wrongAnswers || {})) {
    const uid = 'q:' + id;
    if (QUESTION[uid]) state.items[uid] = { box: 0, due: Date.now(), seen: 1, right: 0, wrong: 1, last: Date.now() };
  }
  for (const e of old.examHistory || []) {
    state.exams.push({ date: e.date, title: e.title || 'Simulacro anterior', total: e.total, correct: e.correct,
      pct: e.pct, passed: e.passed, minutes: Math.round((e.time || 0) / MIN), legacy: true });
  }
  return state;
}

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      return { ...fresh(), ...saved, settings: { ...fresh().settings, ...saved.settings } };
    }
  } catch { /* almacenamiento no disponible o corrupto */ }
  const s = migrateLegacy(fresh());
  persist(s);
  return s;
}

function persist(s = state) {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* sin espacio o modo privado */ }
}

export const getState = () => state;
export function save() { persist(); }

// Pide a Safari que no borre los datos por inactividad.
export function requestPersistence() {
  navigator.storage?.persist?.().catch(() => {});
}

// ─── Repetición espaciada ───

// grade: 'again' (fallé), 'hard' (acerté dudando / adiviné), 'good', 'easy'
export function grade(uid, g, topic) {
  const now = Date.now();
  const it = state.items[uid] || { box: 0, due: now, seen: 0, right: 0, wrong: 0, last: 0 };
  it.seen++;
  it.last = now;
  if (g === 'again') {
    it.wrong++;
    it.box = 0;
    it.due = now + 10 * MIN;
  } else {
    it.right++;
    if (g === 'hard') it.box = Math.max(1, it.box);
    else if (g === 'good') it.box = Math.min(5, it.box + 1);
    else it.box = Math.min(5, it.box + 2);
    // "Difícil" avanza la mitad: la duda es señal de que aún no está firme.
    it.due = now + INTERVALS[it.box] * DAY * (g === 'hard' ? 0.5 : 1);
  }
  state.items[uid] = it;
  if (uid.startsWith('q')) {
    state.log.push([now, topic, g === 'again' ? 0 : 1]);
    if (state.log.length > 3000) state.log = state.log.slice(-3000);
  }
  const k = dayKey(now);
  state.days[k] = (state.days[k] || 0) + 1;
  persist();
  return it;
}

export const itemOf = uid => state.items[uid];

export function statusOf(uid) {
  const it = state.items[uid];
  if (!it) return 'new';
  return it.box >= MASTERED_BOX ? 'mastered' : 'learning';
}

export const isDue = (uid, now = Date.now()) => {
  const it = state.items[uid];
  return !!it && it.due <= now;
};

// Fuerza de 0 a 1 de un ítem; nuevo = 0, caja 4+ = 1.
const strength = uid => Math.min(4, state.items[uid]?.box ?? 0) / 4;

// Dominio medio (0 a 1) de un grupo de preguntas.
export const masteryOf = qs => qs.length ? qs.reduce((a, q) => a + strength(q.uid), 0) / qs.length : 0;

export function topicSummary(topicKey) {
  const qs = QUESTIONS.filter(q => q.topic === topicKey);
  const out = { total: qs.length, new: 0, learning: 0, mastered: 0, due: 0, mastery: 0 };
  const now = Date.now();
  for (const q of qs) {
    out[statusOf(q.uid)]++;
    if (isDue(q.uid, now)) out.due++;
    out.mastery += strength(q.uid);
  }
  out.mastery = qs.length ? out.mastery / qs.length : 0;
  const recent = state.log.filter(l => l[1] === topicKey).slice(-40);
  out.accuracy = recent.length >= 5 ? recent.reduce((a, l) => a + l[2], 0) / recent.length : null;
  return out;
}

export function overall() {
  const now = Date.now();
  let mastery = 0, seen = 0, due = 0, mastered = 0;
  for (const q of QUESTIONS) {
    mastery += strength(q.uid);
    if (state.items[q.uid]) seen++;
    if (isDue(q.uid, now)) due++;
    if (statusOf(q.uid) === 'mastered') mastered++;
  }
  let cardsDue = 0;
  for (const c of CARDS) if (isDue(c.uid, now)) cardsDue++;
  const recent = state.log.slice(-100);
  return {
    mastery: mastery / QUESTIONS.length,
    seen, due, mastered, cardsDue,
    total: QUESTIONS.length,
    accuracy: recent.length >= 10 ? recent.reduce((a, l) => a + l[2], 0) / recent.length : null,
    today: state.days[dayKey()] || 0,
    streak: streak(),
  };
}

export function streak() {
  let n = 0;
  let t = Date.now();
  if (!state.days[dayKey(t)]) t -= DAY; // la racha sigue viva si hoy aún no has estudiado
  while (state.days[dayKey(t)]) { n++; t -= DAY; }
  return n;
}

// ─── Simulacro en curso ───
export function setActiveExam(exam) { state.activeExam = exam; persist(); }
export function recordExam(result) { state.exams.push(result); state.activeExam = null; persist(); }
export function setActiveSession(session) { state.activeSession = session; persist(); }

// ─── Ajustes, respaldo y reinicio ───
export function setGoal(n) { state.settings.dailyGoal = n; persist(); }
export function toggleSpecialty(k) {
  const list = state.settings.specialties ?? [];
  state.settings.specialties = list.includes(k) ? list.filter(x => x !== k) : [...list, k];
  persist();
}

export function exportBackup() {
  return JSON.stringify({ app: 'amv-estudio', exportedAt: new Date().toISOString(), state }, null, 0);
}

export function importBackup(text) {
  const parsed = JSON.parse(text);
  const incoming = parsed?.state;
  if (!incoming || incoming.v !== 2 || typeof incoming.items !== 'object') {
    throw new Error('El archivo no es un respaldo de esta app.');
  }
  state = { ...fresh(), ...incoming };
  persist();
}

export function resetAll() {
  state = fresh();
  persist();
}
