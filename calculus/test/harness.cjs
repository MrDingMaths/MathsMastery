// harness.cjs
// Loads AlgebraEngine + CalculusAnswerChecker into the normal Node realm so the
// checker runs against the real Math.js with all standard globals present
// (isFinite, Math, …) — exactly what the browser provides.
//
//   - algebraEngine.js already exports itself via CommonJS and self-requires
//     Math.js (resolved from algebra/node_modules), so a plain require() works.
//   - calculusAnswerChecker.js is an ESM that references a *global* AlgebraEngine
//     and `window`. We read its source, drop the `export` keyword, and wrap it in
//     a Function factory, injecting AlgebraEngine + a stub window. This mirrors the
//     browser wiring (AlgebraEngine is a global classic-script class there too).
//
// Usage:
//   const { makeChecker } = require('./harness.cjs');
//   const checker = makeChecker();
//   checker.check('2x', { answer: '2x', mode: 'derivative' });

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');           // repo root
const ALGEBRA = path.join(ROOT, 'algebra');
const CALCULUS = path.join(ROOT, 'calculus');

const AlgebraEngine = require(path.join(ALGEBRA, 'algebraEngine.js'));

function makeChecker() {
    const noisy = !!process.env.CALC_DEBUG;
    const win = {};
    const sandboxConsole = noisy
        ? console
        : { log: () => {}, warn: () => {}, error: (...a) => console.error(...a) };

    let src = fs.readFileSync(path.join(CALCULUS, 'calculusAnswerChecker.js'), 'utf8')
        .replace(/^\s*export\s+class\b/m, 'class'); // ESM export → classic class decl

    // Inject the globals the checker expects (AlgebraEngine, window, console) and
    // return the class it self-registers on window.
    // eslint-disable-next-line no-new-func
    const factory = new Function(
        'AlgebraEngine', 'window', 'console',
        src + '\nreturn (typeof CalculusAnswerChecker !== "undefined") ? CalculusAnswerChecker : window.CalculusAnswerChecker;'
    );
    const CalculusAnswerChecker = factory(AlgebraEngine, win, sandboxConsole);
    if (!CalculusAnswerChecker) throw new Error('CalculusAnswerChecker failed to load');
    return new CalculusAnswerChecker();
}

module.exports = { makeChecker };
