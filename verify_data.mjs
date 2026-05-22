// Verify questions.js data integrity and AMV item-level traceability.
import { questions, flashcards, CATEGORIES } from './src/data/questions.js';
import { ITEM_TRACEABILITY } from './src/data/item_traceability.js';
import {
  AMV_COMPONENTS,
  GUIDE_SOURCES,
  REQUIRED_TRACE_FIELDS,
  TRACE_CONFIDENCE,
  TRACE_STATUS
} from './src/data/coverage_manifest.js';

let errors = 0;
let warnings = 0;

function error(message) {
  errors += 1;
  console.log(`  ERROR ${message}`);
}

function warn(message) {
  warnings += 1;
  console.log(`  WARN  ${message}`);
}

function pct(part, total) {
  return total ? Math.round((part / total) * 100) : 0;
}

function itemText(item) {
  return item.q || item.front || '(missing text)';
}

function validateQuestion(q, index, allIds) {
  const label = `Q#${index} id=${q.id || '(missing)'}`;
  if (!q.id) error(`${label}: missing id`);
  else if (allIds.has(q.id)) error(`${label}: duplicate item id`);
  else allIds.add(q.id);

  if (!q.q) error(`${label}: missing q`);
  if (!Array.isArray(q.opts)) error(`${label}: opts must be an array`);
  else if (q.opts.length < 2) error(`${label}: opts must contain at least two options`);

  if (!Number.isInteger(q.ans)) error(`${label}: ans must be an integer`);
  else if (Array.isArray(q.opts) && (q.ans < 0 || q.ans >= q.opts.length)) {
    error(`${label}: ans ${q.ans} is outside opts range 0-${q.opts.length - 1}`);
  }

  if (!q.exp) error(`${label}: missing exp`);
  if (!q.cat) error(`${label}: missing cat`);
  else if (!CATEGORIES[q.cat]) error(`${label}: unknown cat '${q.cat}'`);
}

function validateFlashcard(fc, index, allIds) {
  const label = `FC#${index} id=${fc.id || '(missing)'}`;
  if (!fc.id) error(`${label}: missing id`);
  else if (allIds.has(fc.id)) error(`${label}: duplicate item id`);
  else allIds.add(fc.id);

  if (!fc.front) error(`${label}: missing front`);
  if (!fc.back) error(`${label}: missing back`);
  if (!fc.cat) error(`${label}: missing cat`);
  else if (!CATEGORIES[fc.cat]) error(`${label}: unknown cat '${fc.cat}'`);
}

function buildSectionIndex() {
  const sections = {};
  for (const [componentKey, component] of Object.entries(AMV_COMPONENTS)) {
    for (const section of component.sections) {
      sections[section.id] = { ...section, component: componentKey };
    }
  }
  return sections;
}

function validateTrace(item, itemType, sectionIndex, stats) {
  const trace = ITEM_TRACEABILITY[item.id];
  if (!trace) {
    error(`${itemType} id=${item.id}: missing item_traceability entry`);
    return;
  }

  for (const field of REQUIRED_TRACE_FIELDS) {
    if (trace[field] === undefined || trace[field] === null || trace[field] === '') {
      error(`${itemType} id=${item.id}: trace missing ${field}`);
    }
  }

  if (trace.id !== item.id) {
    error(`${itemType} id=${item.id}: trace id '${trace.id}' does not match item id`);
  }

  if (!AMV_COMPONENTS[trace.component]) {
    error(`${itemType} id=${item.id}: unknown trace component '${trace.component}'`);
    return;
  }

  if (!GUIDE_SOURCES[trace.source]) {
    error(`${itemType} id=${item.id}: unknown trace source '${trace.source}'`);
  }

  const section = sectionIndex[trace.guideSection];
  if (!section) {
    error(`${itemType} id=${item.id}: unknown guideSection '${trace.guideSection}'`);
    return;
  }

  if (section.component !== trace.component) {
    error(`${itemType} id=${item.id}: guideSection '${trace.guideSection}' belongs to ${section.component}, not ${trace.component}`);
  }

  if (section.source !== trace.source) {
    error(`${itemType} id=${item.id}: source '${trace.source}' does not match guideSection source '${section.source}'`);
  }

  if (!Object.values(TRACE_STATUS).includes(trace.traceStatus)) {
    error(`${itemType} id=${item.id}: invalid traceStatus '${trace.traceStatus}'`);
  }

  if (!Object.values(TRACE_CONFIDENCE).includes(trace.traceConfidence)) {
    error(`${itemType} id=${item.id}: invalid traceConfidence '${trace.traceConfidence}'`);
  }

  if (trace.traceStatus === TRACE_STATUS.NEEDS_REVIEW || trace.traceConfidence === TRACE_CONFIDENCE.LOW) {
    stats.needsReview += 1;
    stats.reviewSamples.push(`${item.id}: ${itemText(item).slice(0, 90)}`);
  }

  if (trace.traceConfidence === TRACE_CONFIDENCE.HIGH) stats.highConfidence += 1;
  if (trace.traceConfidence === TRACE_CONFIDENCE.MEDIUM) stats.mediumConfidence += 1;
  if (trace.traceConfidence === TRACE_CONFIDENCE.LOW) stats.lowConfidence += 1;

  stats.byComponent[trace.component] ||= { questions: 0, flashcards: 0 };
  stats.byComponent[trace.component][itemType === 'question' ? 'questions' : 'flashcards'] += 1;

  stats.bySection[trace.guideSection] ||= { questions: 0, flashcards: 0, low: 0 };
  stats.bySection[trace.guideSection][itemType === 'question' ? 'questions' : 'flashcards'] += 1;
  if (trace.traceConfidence === TRACE_CONFIDENCE.LOW) stats.bySection[trace.guideSection].low += 1;
}

console.log('=== DATA INTEGRITY CHECK ===\n');

const allIds = new Set();
const compactQuestions = questions.filter(Boolean);
const compactFlashcards = flashcards.filter(Boolean);

console.log(`Total questions: ${compactQuestions.length}`);
compactQuestions.forEach((q, index) => validateQuestion(q, index, allIds));
console.log(`Question errors checked: ${errors}\n`);

console.log(`Total flashcards: ${compactFlashcards.length}`);
compactFlashcards.forEach((fc, index) => validateFlashcard(fc, index, allIds));
console.log(`Flashcard cumulative errors checked: ${errors}\n`);

const traceStats = {
  highConfidence: 0,
  mediumConfidence: 0,
  lowConfidence: 0,
  needsReview: 0,
  reviewSamples: [],
  byComponent: {},
  bySection: {}
};
const sectionIndex = buildSectionIndex();

for (const q of compactQuestions) validateTrace(q, 'question', sectionIndex, traceStats);
for (const fc of compactFlashcards) validateTrace(fc, 'flashcard', sectionIndex, traceStats);

for (const traceId of Object.keys(ITEM_TRACEABILITY)) {
  if (!allIds.has(traceId)) warn(`trace entry '${traceId}' does not match an active item id`);
}

console.log('=== CATEGORY BREAKDOWN ===');
for (const [key, cat] of Object.entries(CATEGORIES)) {
  const qs = compactQuestions.filter((q) => q.cat === key);
  const fcs = compactFlashcards.filter((fc) => fc.cat === key);
  console.log(`  ${cat.name}: ${qs.length} questions, ${fcs.length} flashcards`);
}

console.log('\n=== AMV COMPONENT TRACEABILITY ===');
for (const [componentKey, component] of Object.entries(AMV_COMPONENTS)) {
  const stats = traceStats.byComponent[componentKey] || { questions: 0, flashcards: 0 };
  const utilization = pct(stats.questions, component.officialQuestions);
  console.log(
    `  ${component.name}: ${stats.questions}/${component.officialQuestions} traced question units ` +
    `(${utilization}%), ${stats.flashcards} flashcards`
  );

  if (componentKey !== 'operador_basico' && stats.questions < component.officialQuestions) {
    warn(`${component.name}: below 40 traced questions; app must label it as practice, not full official mock`);
  }
}

console.log('\n=== GUIDE SECTION COVERAGE ===');
for (const [sectionId, section] of Object.entries(sectionIndex)) {
  const stats = traceStats.bySection[sectionId] || { questions: 0, flashcards: 0, low: 0 };
  const total = stats.questions + stats.flashcards;
  const status = total ? 'mapped' : 'empty';
  console.log(`  ${sectionId}: ${stats.questions} questions, ${stats.flashcards} flashcards, low=${stats.low}, status=${status}`);
  if (!total) warn(`${sectionId}: no traced items yet`);
}

console.log('\n=== TRACEABILITY QUALITY ===');
console.log(`High confidence: ${traceStats.highConfidence}`);
console.log(`Medium confidence: ${traceStats.mediumConfidence}`);
console.log(`Low confidence: ${traceStats.lowConfidence}`);
if (traceStats.needsReview) {
  warn(`${traceStats.needsReview} items require manual traceability review`);
  for (const sample of traceStats.reviewSamples.slice(0, 10)) {
    console.log(`    review sample: ${sample}`);
  }
}

console.log('\n=== TOTALS ===');
console.log(`Questions: ${compactQuestions.length}`);
console.log(`Flashcards: ${compactFlashcards.length}`);
console.log(`Grand total: ${compactQuestions.length + compactFlashcards.length}`);
console.log(`Trace entries: ${Object.keys(ITEM_TRACEABILITY).length}`);
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);
console.log(`\nRESULT: ${errors === 0 ? 'PASS' : 'FAIL'}`);

if (errors > 0) process.exit(1);
