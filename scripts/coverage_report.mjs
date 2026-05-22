import { questions, flashcards } from '../src/data/questions.js';
import { ITEM_TRACEABILITY } from '../src/data/item_traceability.js';
import {
  AMV_COMPONENTS,
  GUIDE_SOURCES,
  TRACE_CONFIDENCE,
  TRACE_STATUS
} from '../src/data/coverage_manifest.js';

const items = [
  ...questions.filter(Boolean).map((item) => ({ ...item, itemType: 'question' })),
  ...flashcards.filter(Boolean).map((item) => ({ ...item, itemType: 'flashcard' }))
];

const sectionIndex = Object.fromEntries(
  Object.values(AMV_COMPONENTS)
    .flatMap((component) => component.sections)
    .map((section) => [section.id, section])
);

const bySection = {};
const bySource = {};
const reviewItems = [];

for (const item of items) {
  const trace = ITEM_TRACEABILITY[item.id];
  if (!trace) continue;

  bySection[trace.guideSection] ||= { questions: 0, flashcards: 0, high: 0, medium: 0, low: 0 };
  bySection[trace.guideSection][item.itemType === 'question' ? 'questions' : 'flashcards'] += 1;
  bySection[trace.guideSection][trace.traceConfidence] += 1;

  bySource[trace.source] ||= { questions: 0, flashcards: 0 };
  bySource[trace.source][item.itemType === 'question' ? 'questions' : 'flashcards'] += 1;

  if (trace.traceStatus === TRACE_STATUS.NEEDS_REVIEW || trace.traceConfidence === TRACE_CONFIDENCE.LOW) {
    reviewItems.push({ id: item.id, section: trace.guideSection, text: item.q || item.front });
  }
}

console.log('=== AMV COVERAGE REPORT ===\n');

console.log('By source');
for (const [sourceId, source] of Object.entries(GUIDE_SOURCES)) {
  const stats = bySource[sourceId] || { questions: 0, flashcards: 0 };
  console.log(`  ${sourceId}: ${stats.questions} questions, ${stats.flashcards} flashcards - ${source.title}`);
}

console.log('\nBy component and section');
for (const [componentKey, component] of Object.entries(AMV_COMPONENTS)) {
  console.log(`\n${component.name}`);
  for (const section of component.sections) {
    const stats = bySection[section.id] || { questions: 0, flashcards: 0, high: 0, medium: 0, low: 0 };
    const total = stats.questions + stats.flashcards;
    const marker = total ? 'mapped' : 'empty';
    console.log(
      `  ${section.id}: ${stats.questions} Q, ${stats.flashcards} FC, ` +
      `high=${stats.high}, medium=${stats.medium}, low=${stats.low}, ${marker}`
    );
  }
}

console.log('\nReview queue');
if (!reviewItems.length) {
  console.log('  No low-confidence items.');
} else {
  console.log(`  ${reviewItems.length} items need review.`);
  for (const item of reviewItems.slice(0, 25)) {
    console.log(`  - ${item.id} [${item.section}] ${String(item.text).slice(0, 100)}`);
  }
}

console.log('\nTotals');
console.log(`  Items: ${items.length}`);
console.log(`  Trace entries: ${Object.keys(ITEM_TRACEABILITY).length}`);
