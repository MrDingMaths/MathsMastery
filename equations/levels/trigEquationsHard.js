import { BaseLevel } from './BaseLevel.js';
// Two strands:
//  (a) quadratic form — square of one ratio = exact value, take ± square root
//      → union of solutions (domain 0°..360°).
//  (b) negative domain — single-ratio equations over -180°..180°, forcing
//      negative-angle solutions.
// Answers are exact integer degrees; enter all solutions separated by commas.
const POS = '0°\\le x\\le 360°';
const NEG = '-180°\\le x\\le 180°';
const Q = (problem, roots, dom = POS) => ({ problem: problem + ',\\quad ' + dom, inputs: { vars: ['x'], multi: true }, answer: { x: roots } });
export default new BaseLevel('trigEquationsHard', 'Trig Equations (Hard)', [
    // (a) Quadratic form (0..360)
    Q('\\sin^{2}x = \\frac{1}{4}', ['30', '150', '210', '330']),
    Q('\\cos^{2}x = \\frac{1}{4}', ['60', '120', '240', '300']),
    Q('\\cos^{2}x = \\frac{3}{4}', ['30', '150', '210', '330']),
    Q('\\sin^{2}x = \\frac{3}{4}', ['60', '120', '240', '300']),
    Q('\\tan^{2}x = 1', ['45', '135', '225', '315']),
    Q('\\tan^{2}x = 3', ['60', '120', '240', '300']),
    Q('\\sin^{2}x = \\frac{1}{2}', ['45', '135', '225', '315']),
    Q('\\cos^{2}x = \\frac{1}{2}', ['45', '135', '225', '315']),
    Q('4\\cos^{2}x = 3', ['30', '150', '210', '330']),
    Q('4\\sin^{2}x = 1', ['30', '150', '210', '330']),
    Q('2\\sin^{2}x = 1', ['45', '135', '225', '315']),
    Q('3\\tan^{2}x = 1', ['30', '150', '210', '330']),
    Q('\\sin^{2}x = 1', ['90', '270']),
    Q('\\cos^{2}x = 1', ['0', '180', '360']),
    // (b) Negative domain (-180..180)
    Q('\\cos x = \\frac{1}{2}', ['60', '-60'], NEG),
    Q('\\sin x = \\frac{1}{2}', ['30', '150'], NEG),
    Q('\\tan x = 1', ['45', '-135'], NEG),
    Q('\\sin x = -\\frac{1}{2}', ['-30', '-150'], NEG),
    Q('\\cos x = \\frac{\\sqrt{3}}{2}', ['30', '-30'], NEG),
    Q('\\cos x = -\\frac{1}{2}', ['120', '-120'], NEG),
    Q('\\sin x = \\frac{\\sqrt{3}}{2}', ['60', '120'], NEG),
    Q('\\tan x = -\\sqrt{3}', ['-60', '120'], NEG),
    Q('\\tan x = -1', ['-45', '135'], NEG),
    Q('\\cos^{2}x = \\frac{3}{4}', ['30', '-30', '150', '-150'], NEG),
    Q('\\sin^{2}x = \\frac{1}{4}', ['30', '150', '-30', '-150'], NEG),
    Q('\\tan^{2}x = 3', ['60', '120', '-60', '-120'], NEG),
], { hint: 'Give all solutions in degrees' });
