// run.cjs — execute the CalculusAnswerChecker battery.
//   node calculus/test/run.cjs            (quiet)
//   CALC_DEBUG=1 node calculus/test/run.cjs   (show checker diagnostics)
// Exits non-zero if any case fails.

const { makeChecker } = require('./harness.cjs');
const cases = require('./cases.cjs');

const checker = makeChecker();

const results = [];
for (const c of cases) {
    const expected = { answer: c.model, mode: c.mode };
    if (typeof c.toleranceDp === 'number') expected.toleranceDp = c.toleranceDp;

    let res, err = null;
    try { res = checker.check(c.student, expected); }
    catch (e) { res = { correct: false }; err = e.message; }

    const accepted = !!res.correct;
    const wantAccept = c.expect === 'accept';
    let pass = accepted === wantAccept;

    // Extra assertion: integral cases that should flag a missing +C.
    let missingNote = '';
    if (pass && c.missingC !== undefined) {
        const gotMissing = !!res.missingC;
        if (gotMissing !== !!c.missingC) { pass = false; missingNote = ` [missingC expected ${c.missingC}, got ${gotMissing}]`; }
    }

    results.push({ cat: c.cat, name: c.name, expect: c.expect, accepted, pass, err, missingNote });
}

// ---- report ----
const byCat = new Map();
for (const r of results) {
    if (!byCat.has(r.cat)) byCat.set(r.cat, []);
    byCat.get(r.cat).push(r);
}

let total = 0, passed = 0;
for (const [cat, rs] of byCat) {
    const catPass = rs.filter(r => r.pass).length;
    console.log(`\n=== ${cat}  (${catPass}/${rs.length}) ===`);
    for (const r of rs) {
        total++; if (r.pass) passed++;
        const mark = r.pass ? 'PASS' : 'FAIL';
        const got = r.accepted ? 'accepted' : 'rejected';
        const extra = r.err ? `  ERROR: ${r.err}` : '';
        console.log(`  [${mark}] ${r.name}  (want ${r.expect}, got ${got})${r.missingNote}${extra}`);
    }
}

console.log(`\n──────────────────────────────`);
console.log(`TOTAL: ${passed}/${total} passed, ${total - passed} failed`);

if (passed !== total) {
    console.log('\nFailures:');
    for (const r of results.filter(r => !r.pass)) {
        console.log(`  ✗ ${r.cat} :: ${r.name}`);
    }
    process.exit(1);
}
console.log('All green ✓');
