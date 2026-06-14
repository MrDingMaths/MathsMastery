import { BaseLevel } from './BaseLevel.js';
// Strands:
//  (a) quadratic form — square of one ratio = exact value, take ± square root
//      → union of solutions (domain 0°..360°).
//  (b) negative domain — single-ratio equations over -180°..180°, forcing
//      negative-angle solutions.
//  (c) monic quadratics in sin/cos — factorise, reject roots with |value| > 1.
//  (d) monic quadratics in tan — factorise into two tan ratios.
//  (e) undefined trick — factoring out tan x gives a candidate (90°/270°) where
//      tan is undefined, so it must be rejected (the original is undefined there).
//  (f) divide-by-cos trap — cos x is a common factor, so cos x = 0 (90°/270°)
//      IS a genuine solution; dividing by cos x would wrongly lose it.
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
    // (c) Monic quadratics in sin/cos — factorise, then solve each ratio (0..360)
    Q('\\sin^{2}x - \\sin x = 0', ['0', '90', '180', '360']),
    Q('\\cos^{2}x - \\cos x = 0', ['0', '90', '270', '360']),
    Q('\\sin^{2}x + \\sin x = 0', ['0', '180', '270', '360']),
    Q('\\cos^{2}x + \\cos x = 0', ['90', '180', '270']),
    Q('\\cos^{2}x + \\cos x - 2 = 0', ['0', '360']),
    Q('\\sin^{2}x - \\sin x - 2 = 0', ['270']),
    Q('\\cos^{2}x - 2\\cos x + 1 = 0', ['0', '360']),
    // (d) Monic quadratics in tan — factorise into two tan ratios
    Q('\\tan^{2}x - \\tan x = 0', ['0', '45', '180', '225', '360']),
    Q('\\tan^{2}x + \\tan x = 0', ['0', '135', '180', '315', '360']),
    Q('\\tan^{2}x - 2\\tan x + 1 = 0', ['45', '225']),
    // (e) Undefined trick — reject the candidate where tan x is undefined
    Q('\\tan x\\sin x = \\tan x', ['0', '180', '360']),
    Q('\\tan x\\sin x + \\tan x = 0', ['0', '180', '360']),
    // (f) Divide-by-cos trap — cos x = 0 (90°/270°) is a genuine solution
    Q('\\sin x\\cos x = \\cos x', ['90', '270']),
    Q('2\\sin x\\cos x = \\cos x', ['30', '90', '150', '270']),
    Q('2\\cos^{2}x = \\cos x', ['60', '90', '270', '300']),
], { hint: 'Give all solutions in degrees' });
