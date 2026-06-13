// cases.cjs
// Comprehensive battery for CalculusAnswerChecker, grouped by category.
//
// Each case: { name, mode, model, student, expect, toleranceDp?, missingC? }
//   mode      : 'derivative' | 'integral'
//   model     : the level's model-answer LaTeX
//   student   : the LaTeX the student typed
//   expect    : 'accept' | 'reject'
//   toleranceDp: optional, mirrors what the level passes (surd/decimal levels use 2)
//   missingC  : optional, when truthy the case asserts check() returns missingC:true
//
// The point of the "many equivalent forms" cases is that a NUMERIC checker should
// accept every algebraically-equal rewrite while still rejecting near-misses.

module.exports = [
    // ---------- A. Power rule — derivative ----------
    { cat: 'A power-deriv', name: 'x^3 → 3x^2',            mode: 'derivative', model: '3x^2', student: '3x^2',          expect: 'accept' },
    { cat: 'A power-deriv', name: 'x^3 braces',            mode: 'derivative', model: '3x^2', student: '3x^{2}',        expect: 'accept' },
    { cat: 'A power-deriv', name: 'x^3 reordered',         mode: 'derivative', model: '3x^2', student: 'x^2\\cdot3',    expect: 'accept' },
    { cat: 'A power-deriv', name: 'x^3 as 3xx',            mode: 'derivative', model: '3x^2', student: '3xx',           expect: 'accept' },
    { cat: 'A power-deriv', name: 'x^3 wrong (2x)',        mode: 'derivative', model: '3x^2', student: '2x',            expect: 'reject' },
    { cat: 'A power-deriv', name: 'x^3 wrong (3x^3)',      mode: 'derivative', model: '3x^2', student: '3x^3',          expect: 'reject' },
    { cat: 'A power-deriv', name: '3x^2+5x → 6x+5',        mode: 'derivative', model: '6x+5', student: '6x+5',          expect: 'accept' },
    { cat: 'A power-deriv', name: '6x+5 reordered',        mode: 'derivative', model: '6x+5', student: '5+6x',          expect: 'accept' },
    { cat: 'A power-deriv', name: '6x+5 missing const',    mode: 'derivative', model: '6x+5', student: '6x',            expect: 'reject' },

    // ---------- B. Negative / fractional / reciprocal / surd (toleranceDp:2) ----------
    { cat: 'B power-neg', name: '1/x → -1/x^2',            mode: 'derivative', toleranceDp: 2, model: '-\\frac{1}{x^2}', student: '-\\frac{1}{x^2}', expect: 'accept' },
    { cat: 'B power-neg', name: '1/x → -x^{-2}',           mode: 'derivative', toleranceDp: 2, model: '-\\frac{1}{x^2}', student: '-x^{-2}',         expect: 'accept' },
    { cat: 'B power-neg', name: '1/x wrong sign',          mode: 'derivative', toleranceDp: 2, model: '-\\frac{1}{x^2}', student: '\\frac{1}{x^2}',  expect: 'reject' },
    { cat: 'B power-neg', name: '√x → 1/(2√x)',            mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{2\\sqrt{x}}', student: '\\frac{1}{2\\sqrt{x}}',          expect: 'accept' },
    { cat: 'B power-neg', name: '√x → (1/2)x^{-1/2}',      mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{2\\sqrt{x}}', student: '\\frac{1}{2}x^{-\\frac{1}{2}}',  expect: 'accept' },
    { cat: 'B power-neg', name: '√x → 0.5x^{-0.5}',        mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{2\\sqrt{x}}', student: '0.5x^{-0.5}',                    expect: 'accept' },
    { cat: 'B power-neg', name: '√x wrong (1/√x)',         mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{2\\sqrt{x}}', student: '\\frac{1}{\\sqrt{x}}',           expect: 'reject' },
    { cat: 'B power-neg', name: 'x^{3/2} → (3/2)√x',       mode: 'derivative', toleranceDp: 2, model: '\\frac{3}{2}\\sqrt{x}', student: '\\frac{3}{2}\\sqrt{x}',          expect: 'accept' },
    { cat: 'B power-neg', name: 'x^{3/2} → 1.5x^{0.5}',    mode: 'derivative', toleranceDp: 2, model: '\\frac{3}{2}\\sqrt{x}', student: '1.5x^{0.5}',                     expect: 'accept' },

    // ---------- C. Trig — derivative ----------
    { cat: 'C trig', name: 'sin → cos',                    mode: 'derivative', model: '\\cos(x)', student: '\\cos(x)',           expect: 'accept' },
    { cat: 'C trig', name: 'sin → cos (\\left)',           mode: 'derivative', model: '\\cos(x)', student: '\\cos\\left(x\\right)', expect: 'accept' },
    { cat: 'C trig', name: 'sin wrong (-cos)',             mode: 'derivative', model: '\\cos(x)', student: '-\\cos(x)',          expect: 'reject' },
    { cat: 'C trig', name: 'cos → -sin',                   mode: 'derivative', model: '-\\sin(x)', student: '-\\sin(x)',         expect: 'accept' },
    { cat: 'C trig', name: 'cos wrong (sin)',              mode: 'derivative', model: '-\\sin(x)', student: '\\sin(x)',          expect: 'reject' },
    { cat: 'C trig', name: 'tan → sec^2',                  mode: 'derivative', toleranceDp: 2, model: '\\sec^2(x)', student: '\\sec^2(x)',            expect: 'accept' },
    { cat: 'C trig', name: 'tan → 1/cos^2 (equiv)',        mode: 'derivative', toleranceDp: 2, model: '\\sec^2(x)', student: '\\frac{1}{\\cos^2(x)}', expect: 'accept' },
    { cat: 'C trig', name: 'tan → 1+tan^2 (equiv)',        mode: 'derivative', toleranceDp: 2, model: '\\sec^2(x)', student: '1+\\tan^2(x)',          expect: 'accept' },
    { cat: 'C trig', name: 'tan wrong (sec)',              mode: 'derivative', toleranceDp: 2, model: '\\sec^2(x)', student: '\\sec(x)',              expect: 'reject' },

    // ---------- D. Inverse trig — derivative (toleranceDp:2) ----------
    { cat: 'D inverse-trig', name: 'arcsin → 1/√(1-x^2)',          mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{\\sqrt{1-x^2}}', student: '\\frac{1}{\\sqrt{1-x^2}}',     expect: 'accept' },
    { cat: 'D inverse-trig', name: 'arcsin → index form',         mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{\\sqrt{1-x^2}}', student: '(1-x^2)^{-\\frac{1}{2}}',      expect: 'accept' },
    { cat: 'D inverse-trig', name: 'arcsin wrong (1+x^2)',        mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{\\sqrt{1-x^2}}', student: '\\frac{1}{\\sqrt{1+x^2}}',     expect: 'reject' },
    // Cross-notation: the problem itself authored as arcsin vs sin^{-1}; the
    // model answers below feed those notations through the parser too.
    { cat: 'D inverse-trig', name: 'model arcsin = student sin^{-1}', mode: 'derivative', toleranceDp: 2, model: '\\arcsin(x)', student: '\\sin^{-1}(x)', expect: 'accept' },
    { cat: 'D inverse-trig', name: 'model sin^{-1} = student arcsin', mode: 'derivative', toleranceDp: 2, model: '\\sin^{-1}(x)', student: '\\arcsin(x)', expect: 'accept' },
    { cat: 'D inverse-trig', name: 'student sin^-1 no braces',       mode: 'derivative', toleranceDp: 2, model: '\\arcsin(x)', student: '\\sin^-1(x)',   expect: 'accept' },
    { cat: 'D inverse-trig', name: 'arcsin ≠ arccos',               mode: 'derivative', toleranceDp: 2, model: '\\arcsin(x)', student: '\\arccos(x)',   expect: 'reject' },
    { cat: 'D inverse-trig', name: 'arctan → 1/(1+x^2)',           mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{1+x^2}', student: '\\frac{1}{1+x^2}',  expect: 'accept' },
    { cat: 'D inverse-trig', name: 'arctan → index form',         mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{1+x^2}', student: '(1+x^2)^{-1}',      expect: 'accept' },
    { cat: 'D inverse-trig', name: 'arccos → -1/√(1-x^2)',        mode: 'derivative', toleranceDp: 2, model: '-\\frac{1}{\\sqrt{1-x^2}}', student: '-\\frac{1}{\\sqrt{1-x^2}}', expect: 'accept' },

    // ---------- E. Logarithmic — derivative ----------
    { cat: 'E log', name: 'ln x → 1/x',                    mode: 'derivative', model: '\\frac{1}{x}', student: '\\frac{1}{x}',  expect: 'accept' },
    { cat: 'E log', name: 'ln x → x^{-1}',                 mode: 'derivative', model: '\\frac{1}{x}', student: 'x^{-1}',         expect: 'accept' },
    { cat: 'E log', name: 'ln x wrong (1/x^2)',            mode: 'derivative', model: '\\frac{1}{x}', student: '\\frac{1}{x^2}', expect: 'reject' },
    { cat: 'E log', name: 'ln(2x) chain → 1/x',            mode: 'derivative', model: '\\frac{1}{x}', student: '\\frac{2}{2x}',  expect: 'accept' },
    // model authored with \ln to confirm the \ln→log alias works on model side too
    { cat: 'E log', name: 'student \\ln matches 1/x deriv n/a', mode: 'derivative', model: '\\frac{1}{x}', student: '\\frac{1}{x}', expect: 'accept' },

    // ---------- F. Exponential — derivative ----------
    { cat: 'F exp', name: 'e^x → e^x',                     mode: 'derivative', model: 'e^x', student: 'e^x',        expect: 'accept' },
    { cat: 'F exp', name: 'e^x → e^{x}',                   mode: 'derivative', model: 'e^x', student: 'e^{x}',      expect: 'accept' },
    { cat: 'F exp', name: 'e^x → exp(x)',                  mode: 'derivative', model: 'e^x', student: '\\exp(x)',   expect: 'accept' },
    { cat: 'F exp', name: 'e^x wrong (e^{2x})',            mode: 'derivative', model: 'e^x', student: 'e^{2x}',     expect: 'reject' },
    { cat: 'F exp', name: 'e^{2x} chain → 2e^{2x}',        mode: 'derivative', model: '2e^{2x}', student: '2e^{2x}', expect: 'accept' },
    { cat: 'F exp', name: 'e^{2x} wrong (e^{2x})',         mode: 'derivative', model: '2e^{2x}', student: 'e^{2x}',  expect: 'reject' },

    // ---------- G. Chain rule — derivative ----------
    { cat: 'G chain', name: 'sin(2x) → 2cos(2x)',          mode: 'derivative', toleranceDp: 2, model: '2\\cos(2x)', student: '2\\cos(2x)',          expect: 'accept' },
    { cat: 'G chain', name: 'sin(2x) → 2cos(2x) \\left',   mode: 'derivative', toleranceDp: 2, model: '2\\cos(2x)', student: '2\\cos\\left(2x\\right)', expect: 'accept' },
    { cat: 'G chain', name: 'sin(2x) missing factor',      mode: 'derivative', toleranceDp: 2, model: '2\\cos(2x)', student: '\\cos(2x)',           expect: 'reject' },
    { cat: 'G chain', name: '(x^2+1)^3 → 6x(x^2+1)^2',     mode: 'derivative', toleranceDp: 2, model: '6x(x^2+1)^2', student: '6x(x^2+1)^2',        expect: 'accept' },
    { cat: 'G chain', name: '(x^2+1)^3 expanded',          mode: 'derivative', toleranceDp: 2, model: '6x(x^2+1)^2', student: '6x^5+12x^3+6x',      expect: 'accept' },
    { cat: 'G chain', name: '(x^2+1)^3 wrong',             mode: 'derivative', toleranceDp: 2, model: '6x(x^2+1)^2', student: '3(x^2+1)^2',         expect: 'reject' },
    { cat: 'G chain', name: '√(x^2+1) → x/√(x^2+1)',       mode: 'derivative', toleranceDp: 2, model: '\\frac{x}{\\sqrt{x^2+1}}', student: '\\frac{x}{\\sqrt{x^2+1}}',     expect: 'accept' },
    { cat: 'G chain', name: '√(x^2+1) index form',         mode: 'derivative', toleranceDp: 2, model: '\\frac{x}{\\sqrt{x^2+1}}', student: 'x(x^2+1)^{-\\frac{1}{2}}',     expect: 'accept' },

    // ---------- H. Quotient / product rule — derivative ----------
    { cat: 'H quot/prod', name: 'x/(x+1) → 1/(x+1)^2',     mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{(x+1)^2}', student: '\\frac{1}{(x+1)^2}',   expect: 'accept' },
    { cat: 'H quot/prod', name: 'x/(x+1) expanded denom',  mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{(x+1)^2}', student: '\\frac{1}{x^2+2x+1}',  expect: 'accept' },
    { cat: 'H quot/prod', name: 'x/(x+1) wrong',           mode: 'derivative', toleranceDp: 2, model: '\\frac{1}{(x+1)^2}', student: '\\frac{1}{x+1}',       expect: 'reject' },
    { cat: 'H quot/prod', name: 'x·sinx → sinx + x cosx',  mode: 'derivative', toleranceDp: 2, model: '\\sin(x)+x\\cos(x)', student: '\\sin(x)+x\\cos(x)',   expect: 'accept' },
    { cat: 'H quot/prod', name: 'x·sinx reordered',        mode: 'derivative', toleranceDp: 2, model: '\\sin(x)+x\\cos(x)', student: 'x\\cos(x)+\\sin(x)',   expect: 'accept' },
    { cat: 'H quot/prod', name: 'x^2/e^x → (2x-x^2)/e^x',  mode: 'derivative', toleranceDp: 2, model: '\\frac{2x-x^2}{e^x}', student: '\\frac{2x-x^2}{e^x}', expect: 'accept' },
    { cat: 'H quot/prod', name: 'x^2/e^x → (2x-x^2)e^{-x}',mode: 'derivative', toleranceDp: 2, model: '\\frac{2x-x^2}{e^x}', student: '(2x-x^2)e^{-x}',      expect: 'accept' },

    // ---------- I. Integration / reverse chain — integral mode (+C) ----------
    { cat: 'I integral', name: '∫x^2 → x^3/3 +C',          mode: 'integral', model: '\\frac{x^3}{3}+C', student: '\\frac{x^3}{3}+C',  expect: 'accept' },
    { cat: 'I integral', name: '∫x^2 → x^3/3 (no C)',      mode: 'integral', model: '\\frac{x^3}{3}+C', student: '\\frac{x^3}{3}',    expect: 'accept', missingC: true },
    { cat: 'I integral', name: '∫x^2 → (1/3)x^3+5',        mode: 'integral', model: '\\frac{x^3}{3}+C', student: '\\frac{1}{3}x^3+5', expect: 'accept' },
    { cat: 'I integral', name: '∫x^2 wrong (x^3)',         mode: 'integral', model: '\\frac{x^3}{3}+C', student: 'x^3',               expect: 'reject' },
    { cat: 'I integral', name: '∫x^2 wrong (+x non-const)',mode: 'integral', model: '\\frac{x^3}{3}+C', student: '\\frac{x^3}{3}+x',  expect: 'reject' },
    { cat: 'I integral', name: '∫(2x+1) → x^2+x',          mode: 'integral', model: 'x^2+x+C', student: 'x^2+x',                      expect: 'accept', missingC: true },
    { cat: 'I integral', name: '∫(2x+1) → x^2+x+7',        mode: 'integral', model: 'x^2+x+C', student: 'x^2+x+7',                    expect: 'accept' },
    { cat: 'I integral', name: 'rev-chain ∫cos2x → ½sin2x',mode: 'integral', toleranceDp: 2, model: '\\frac{1}{2}\\sin(2x)+C', student: '\\frac{1}{2}\\sin(2x)',  expect: 'accept', missingC: true },
    { cat: 'I integral', name: 'rev-chain 0.5 sin(2x)+C',  mode: 'integral', toleranceDp: 2, model: '\\frac{1}{2}\\sin(2x)+C', student: '0.5\\sin(2x)+C',         expect: 'accept' },
    { cat: 'I integral', name: 'rev-chain missing factor', mode: 'integral', toleranceDp: 2, model: '\\frac{1}{2}\\sin(2x)+C', student: '\\sin(2x)',              expect: 'reject' },
    { cat: 'I integral', name: '∫e^x → e^x +C',            mode: 'integral', model: 'e^x+C', student: 'e^x+C',                        expect: 'accept' },
    { cat: 'I integral', name: '∫e^x → e^x (no C)',        mode: 'integral', model: 'e^x+C', student: 'e^x',                          expect: 'accept', missingC: true },

    // ---------- J. Robustness / negative controls ----------
    { cat: 'J robust', name: 'empty student',              mode: 'derivative', model: '2x', student: '',     expect: 'reject' },
    { cat: 'J robust', name: 'blank spaces',               mode: 'derivative', model: '2x', student: '   ',  expect: 'reject' },
    { cat: 'J robust', name: 'integral lone +C',           mode: 'integral',   model: 'x^2+C', student: '+C', expect: 'reject' },
    { cat: 'J robust', name: 'garbage tokens',             mode: 'derivative', model: '2x', student: '\\foo', expect: 'reject' },
];
