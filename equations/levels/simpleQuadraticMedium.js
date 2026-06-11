import { BaseLevel } from './BaseLevel.js';
const Q = (problem, roots) => ({ problem, inputs: { vars: ['x'], multi: true }, answer: { x: roots } });
export default new BaseLevel('simpleQuadraticMedium', 'Simple Quadratic (Medium)', [
    // x² = 0 / ax² = 0  (zero-solution gotcha)
    Q('x^{2} = 0', ['0']),
    Q('81x^{2} = 0', ['0']),
    // Negative coefficients  (÷ negative, root)
    Q('-3x^{2} = -108', ['6', '-6']),
    Q('-4x^{2} = -64', ['4', '-4']),
    Q('-3x^{2} + 48 = 0', ['4', '-4']),
    Q('-2x^{2} + 8 = 0', ['2', '-2']),
    // Fractional / decimal coefficients  (multiply through, root)
    Q('\\frac{x^{2}}{2} = 32', ['8', '-8']),
    Q('\\frac{x^{2}}{3} = 27', ['9', '-9']),
    Q('0.1x^{2} = 1.6', ['4', '-4']),
    Q('\\frac{1}{2}x^{2} = 600', ['20\\sqrt{3}', '-20\\sqrt{3}']),
    Q('\\frac{3}{2}x^{2} = 200', ['\\frac{20\\sqrt{3}}{3}', '-\\frac{20\\sqrt{3}}{3}']),
    Q('\\frac{x^{2}}{0.01} = 0.36', ['3/50', '-3/50']),
    // ax² + b = c  (move constant, divide, root)
    Q('2x^{2} - 32 = 0', ['4', '-4']),
    Q('3x^{2} - 75 = 0', ['5', '-5']),
    Q('2x^{2} - 44 = 0', ['\\sqrt{22}', '-\\sqrt{22}']),
    Q('10 - x^{2} = -12', ['\\sqrt{22}', '-\\sqrt{22}']),
    Q('5x^{2} - 32 = 43', ['\\sqrt{15}', '-\\sqrt{15}']),
    Q('4x^{2} - 8 = 28', ['3', '-3']),
    Q('3x^{2} + 3 = 30', ['3', '-3']),
    Q('2x^{2} - 5 = 13', ['3', '-3']),
    Q('5x^{2} + 5 = 30', ['\\sqrt{5}', '-\\sqrt{5}']),
    Q('x^{2} - 7 = 9', ['4', '-4']),
    Q('2x^{2} - 3 = 21', ['3', '-3']),
    // ax² + bx = bx + c  (cancel x terms, divide, root)
    Q('3x^{2} = 2x^{2} + 9', ['3', '-3']),
    Q('x^{2} + 3x = 3x + 4', ['2', '-2']),
    Q('x^{2} - 4x = 64 - 4x', ['8', '-8']),
    Q('2x^{2} + 3x = 3x + 8', ['2', '-2']),
    Q('4x^{2} - 2x = -2x + 36', ['3', '-3']),
    Q('3x^{2} + 4x = 4x + 12', ['2', '-2']),
    Q('5x^{2} - x = -x + 20', ['2', '-2']),
], { toleranceDp: 2 });
