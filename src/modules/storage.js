const STORAGE_KEY = 'amv_prep_data';

function getDefaultData() {
  return {
    stats: {},
    wrongAnswers: {},
    examHistory: [],
    streak: { current: 0, lastDate: null },
    totalAnswered: 0,
    totalCorrect: 0
  };
}

export function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultData();
    return { ...getDefaultData(), ...JSON.parse(raw) };
  } catch { return getDefaultData(); }
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function recordAnswer(category, isCorrect, questionId) {
  const data = loadData();
  if (!data.stats[category]) data.stats[category] = { correct: 0, total: 0 };
  data.stats[category].total++;
  data.totalAnswered++;
  if (isCorrect) {
    data.stats[category].correct++;
    data.totalCorrect++;
    if (data.wrongAnswers[questionId]) {
      data.wrongAnswers[questionId].streak++;
      if (data.wrongAnswers[questionId].streak >= 2) delete data.wrongAnswers[questionId];
    }
  } else {
    if (!data.wrongAnswers[questionId]) data.wrongAnswers[questionId] = { category, streak: 0 };
    else data.wrongAnswers[questionId].streak = 0;
  }
  updateStreak(data);
  saveData(data);
  return data;
}

export function saveExamResult(result) {
  const data = loadData();
  data.examHistory.push({ ...result, date: new Date().toISOString() });
  saveData(data);
}

function updateStreak(data) {
  const today = new Date().toISOString().slice(0, 10);
  if (data.streak.lastDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  data.streak.current = data.streak.lastDate === yesterday ? data.streak.current + 1 : 1;
  data.streak.lastDate = today;
}
