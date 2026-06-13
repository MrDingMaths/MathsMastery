import { BaseLevel } from './BaseLevel.js';
// Single trig ratio of x = exact value, reached directly or after one
// rearrangement. No multiple angles, no squares. Domain 0°..360°.
// Answers are exact integer degrees; enter all solutions separated by commas.
const D = ',\\quad 0°\\le x\\le 360°';
const Q = (problem, roots) => ({ problem: problem + D, inputs: { vars: ['x'], multi: true }, answer: { x: roots } });
export default new BaseLevel('trigEquationsEasy', 'Trig Equations (Easy)', [
    // Direct: sin/cos/tan x = positive exact value
    Q('\\sin x = \\frac{1}{2}', ['30', '150']),
    Q('\\cos x = \\frac{1}{2}', ['60', '300']),
    Q('\\tan x = 1', ['45', '225']),
    Q('\\sin x = \\frac{\\sqrt{3}}{2}', ['60', '120']),
    Q('\\cos x = \\frac{\\sqrt{3}}{2}', ['30', '330']),
    Q('\\tan x = \\sqrt{3}', ['60', '240']),
    Q('\\sin x = \\frac{\\sqrt{2}}{2}', ['45', '135']),
    Q('\\cos x = \\frac{\\sqrt{2}}{2}', ['45', '315']),
    Q('\\tan x = \\frac{1}{\\sqrt{3}}', ['30', '210']),
    // Direct: negative exact value
    Q('\\sin x = -\\frac{1}{2}', ['210', '330']),
    Q('\\cos x = -\\frac{1}{2}', ['120', '240']),
    Q('\\tan x = -1', ['135', '315']),
    Q('\\sin x = -\\frac{\\sqrt{3}}{2}', ['240', '300']),
    Q('\\cos x = -\\frac{\\sqrt{3}}{2}', ['150', '210']),
    Q('\\tan x = -\\sqrt{3}', ['120', '300']),
    Q('\\cos x = -\\frac{\\sqrt{2}}{2}', ['135', '225']),
    Q('\\tan x = -\\frac{1}{\\sqrt{3}}', ['150', '330']),
    // One rearrangement (divide by coefficient / collect a constant)
    Q('2\\sin x = 1', ['30', '150']),
    Q('2\\cos x = \\sqrt{3}', ['30', '330']),
    Q('2\\cos x + 1 = 0', ['120', '240']),
    Q('\\sqrt{2}\\sin x - 1 = 0', ['45', '135']),
    Q('\\tan x - \\sqrt{3} = 0', ['60', '240']),
    Q('2\\sin x + \\sqrt{3} = 0', ['240', '300']),
    Q('\\sqrt{3}\\tan x = 1', ['30', '210']),
    Q('\\sqrt{2}\\cos x + 1 = 0', ['135', '225']),
    // Boundary values
    Q('\\sin x = 1', ['90']),
    Q('\\cos x = 0', ['90', '270']),
    Q('\\cos x = -1', ['180']),
    Q('\\sin x = 0', ['0', '180', '360']),
    Q('\\sin x = -1', ['270']),
], { hint: 'Give all solutions in degrees' });
