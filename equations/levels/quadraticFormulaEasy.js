import { BaseLevel } from './BaseLevel.js';
const Q = (problem, roots) => ({ problem, inputs: { vars: ['x'], multi: true }, answer: { x: roots } });
export default new BaseLevel('quadraticFormulaEasy', 'Quadratic Formula (Easy)', [
    // Original 4
    Q('x^{2} + 3x - 2 = 0', ['(-3+sqrt(17))/2', '(-3-sqrt(17))/2']),
    Q('x^{2} + 7x - 4 = 0', ['(-7+sqrt(65))/2', '(-7-sqrt(65))/2']),
    Q('x^{2} - 7x + 5 = 0', ['(7+sqrt(29))/2', '(7-sqrt(29))/2']),
    Q('x^{2} - 8x + 16 = 0', ['4', '4']),
    // Simplifiable surds — disc = 4k²n so roots cancel to integers ± √n
    Q('x^{2} + 4x + 1 = 0', ['-2+sqrt(3)', '-2-sqrt(3)']),
    Q('x^{2} - 4x + 1 = 0', ['2+sqrt(3)', '2-sqrt(3)']),
    Q('x^{2} + 6x + 4 = 0', ['-3+sqrt(5)', '-3-sqrt(5)']),
    Q('x^{2} - 6x + 4 = 0', ['3+sqrt(5)', '3-sqrt(5)']),
    Q('x^{2} + 2x - 4 = 0', ['-1+sqrt(5)', '-1-sqrt(5)']),
    Q('x^{2} - 2x - 4 = 0', ['1+sqrt(5)', '1-sqrt(5)']),
    Q('x^{2} + 4x - 3 = 0', ['-2+sqrt(7)', '-2-sqrt(7)']),
    Q('x^{2} - 4x - 3 = 0', ['2+sqrt(7)', '2-sqrt(7)']),
    Q('x^{2} + 6x + 7 = 0', ['-3+sqrt(2)', '-3-sqrt(2)']),
    Q('x^{2} - 6x + 7 = 0', ['3+sqrt(2)', '3-sqrt(2)']),
    Q('x^{2} + 2x - 1 = 0', ['-1+sqrt(2)', '-1-sqrt(2)']),
    Q('x^{2} - 2x - 1 = 0', ['1+sqrt(2)', '1-sqrt(2)']),
    Q('x^{2} + 8x + 11 = 0', ['-4+sqrt(5)', '-4-sqrt(5)']),
    Q('x^{2} - 8x + 11 = 0', ['4+sqrt(5)', '4-sqrt(5)']),
    // Non-simplifiable surds
    Q('x^{2} + 5x + 3 = 0', ['(-5+sqrt(13))/2', '(-5-sqrt(13))/2']),
    Q('x^{2} - 5x + 3 = 0', ['(5+sqrt(13))/2', '(5-sqrt(13))/2']),
    Q('x^{2} + 3x - 5 = 0', ['(-3+sqrt(29))/2', '(-3-sqrt(29))/2']),
    Q('x^{2} - 3x - 5 = 0', ['(3+sqrt(29))/2', '(3-sqrt(29))/2']),
    Q('x^{2} + 4x - 6 = 0', ['-2+sqrt(10)', '-2-sqrt(10)']),
    Q('x^{2} - 4x - 6 = 0', ['2+sqrt(10)', '2-sqrt(10)']),
    // Integer roots (discriminant = perfect square)
    Q('x^{2} - 5x + 6 = 0', ['3', '2']),
    Q('x^{2} + x - 6 = 0', ['2', '-3']),
    Q('x^{2} - x - 6 = 0', ['3', '-2']),
    Q('x^{2} + 5x + 4 = 0', ['-1', '-4']),
    Q('x^{2} - 5x + 4 = 0', ['4', '1']),
    Q('x^{2} + x - 12 = 0', ['3', '-4']),
], { hint: 'Leave answers in exact form' });
