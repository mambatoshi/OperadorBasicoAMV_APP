// Verify questions.js data integrity
import { questions, flashcards, CATEGORIES } from './src/data/questions.js';

console.log('=== DATA INTEGRITY CHECK ===\n');

// Check questions
let qErrors = 0;
console.log(`Total questions: ${questions.length}`);
questions.forEach((q, i) => {
    if (!q.q) { console.log(`  ERROR Q#${i} id=${q.id}: missing 'q'`); qErrors++; }
    if (!q.opts || !Array.isArray(q.opts)) { console.log(`  ERROR Q#${i} id=${q.id}: missing 'opts'`); qErrors++; }
    if (q.ans === undefined) { console.log(`  ERROR Q#${i} id=${q.id}: missing 'ans'`); qErrors++; }
    if (!q.exp) { console.log(`  ERROR Q#${i} id=${q.id}: missing 'exp'`); qErrors++; }
    if (!q.cat) { console.log(`  ERROR Q#${i} id=${q.id}: missing 'cat'`); qErrors++; }
    if (q.cat && !CATEGORIES[q.cat]) { console.log(`  ERROR Q#${i} id=${q.id}: unknown cat '${q.cat}'`); qErrors++; }
});
console.log(`Questions errors: ${qErrors}\n`);

// Check flashcards
let fcErrors = 0;
console.log(`Total flashcards: ${flashcards.length}`);
flashcards.forEach((fc, i) => {
    if (!fc.front) { console.log(`  ERROR FC#${i} id=${fc.id}: missing 'front'`); fcErrors++; }
    if (!fc.back) { console.log(`  ERROR FC#${i} id=${fc.id}: missing 'back'`); fcErrors++; }
    if (!fc.cat) { console.log(`  ERROR FC#${i} id=${fc.id}: missing 'cat'`); fcErrors++; }
    if (fc.cat && !CATEGORIES[fc.cat]) { console.log(`  ERROR FC#${i} id=${fc.id}: unknown cat '${fc.cat}'`); fcErrors++; }
});
console.log(`Flashcard errors: ${fcErrors}\n`);

// Per-category stats
console.log('=== CATEGORY BREAKDOWN ===');
for (const [key, cat] of Object.entries(CATEGORIES)) {
    const qs = questions.filter(q => q.cat === key);
    const fcs = flashcards.filter(f => f.cat === key);
    console.log(`  ${cat.icon} ${cat.name}: ${qs.length} questions, ${fcs.length} flashcards`);
}

console.log(`\n=== TOTALS ===`);
console.log(`Questions: ${questions.length}`);
console.log(`Flashcards: ${flashcards.length}`);
console.log(`Grand total: ${questions.length + flashcards.length}`);
console.log(`\nRESULT: ${qErrors + fcErrors === 0 ? '✅ PASS' : '❌ FAIL'}`);
