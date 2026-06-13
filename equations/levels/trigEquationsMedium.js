import { BaseLevel } from './BaseLevel.js';
// Two strands, domain 0°..360°:
//  (a) compound (multiple) angle — solve cos(2x), sin(2x), tan(2x) by
//      expanding the argument's domain to 0..720.
//  (b) divide-by-cos — a·sinx = b·cosx  →  tanx = b/a  (cosx ≠ 0, so the
//      multiples of 90° are not solutions and need not be added).
// Answers are exact integer degrees; enter all solutions separated by commas.
const D = ',\\quad 0°\\le x\\le 360°';
const Q = (problem, roots) => ({ problem: problem + D, inputs: { vars: ['x'], multi: true }, answer: { x: roots } });
export default new BaseLevel('trigEquationsMedium', 'Trig Equations (Medium)', [
    // (a) Compound / multiple angle
    Q('\\cos(2x) = 1', ['0', '180', '360']),
    Q('\\cos(2x) = -1', ['90', '270']),
    Q('\\sin(2x) = 1', ['45', '225']),
    Q('\\sin(2x) = -1', ['135', '315']),
    Q('\\sin(2x) = 0', ['0', '90', '180', '270', '360']),
    Q('\\cos(2x) = \\frac{1}{2}', ['30', '150', '210', '330']),
    Q('\\cos(2x) = -\\frac{1}{2}', ['60', '120', '240', '300']),
    Q('\\sin(2x) = \\frac{1}{2}', ['15', '75', '195', '255']),
    Q('\\sin(2x) = \\frac{\\sqrt{3}}{2}', ['30', '60', '210', '240']),
    Q('\\sin(2x) = -\\frac{\\sqrt{3}}{2}', ['120', '150', '300', '330']),
    Q('\\cos(2x) = \\frac{\\sqrt{3}}{2}', ['15', '165', '195', '345']),
    Q('\\tan(2x) = \\sqrt{3}', ['30', '120', '210', '300']),
    Q('\\tan(2x) = \\frac{1}{\\sqrt{3}}', ['15', '105', '195', '285']),
    Q('\\tan(2x) = -\\sqrt{3}', ['60', '150', '240', '330']),
    // (b) Divide by cos x  →  tan x = b/a
    Q('\\sin x = \\cos x', ['45', '225']),
    Q('\\sin x + \\cos x = 0', ['135', '315']),
    Q('\\sqrt{3}\\cos x = \\sin x', ['60', '240']),
    Q('\\sin x = \\sqrt{3}\\cos x', ['60', '240']),
    Q('\\sin x - \\sqrt{3}\\cos x = 0', ['60', '240']),
    Q('\\sqrt{3}\\sin x = \\cos x', ['30', '210']),
    Q('\\cos x = \\sqrt{3}\\sin x', ['30', '210']),
    Q('\\sqrt{3}\\sin x + \\cos x = 0', ['150', '330']),
    Q('\\sqrt{3}\\cos x + \\sin x = 0', ['120', '300']),
], { hint: 'Give all solutions in degrees' });
