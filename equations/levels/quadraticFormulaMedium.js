import { BaseLevel } from './BaseLevel.js';
const Q = (problem, roots) => ({ problem, inputs: { vars: ['x'], multi: true }, answer: { x: roots } });
export default new BaseLevel('quadraticFormulaMedium', 'Quadratic Formula (Medium)', [
    // Original Q1–Q4 (non-monic, standard form)
    Q('2x^{2} + 7x + 1 = 0', ['(-7+sqrt(41))/4', '(-7-sqrt(41))/4']),
    Q('2x^{2} - 7x + 1 = 0', ['(7+sqrt(41))/4', '(7-sqrt(41))/4']),
    Q('x^{2} - 7x + 1 = 0', ['(7+3*sqrt(5))/2', '(7-3*sqrt(5))/2']),
    Q('x^{2} - 7x - 1 = 0', ['(7+sqrt(53))/2', '(7-sqrt(53))/2']),
    // Q5 replacement (was near-duplicate of Q4 after ÷2)
    Q('3x^{2} + 2x = 5', ['1', '-5/3']),
    // Original Q6–Q12 (non-standard form — rearrangement required)
    Q('-14x + 2x^{2} = 0', ['0', '7']),
    Q('-2 + 2x^{2} = 0', ['-1', '1']),
    Q('2x^{2} - 9x = -2', ['(9+sqrt(65))/4', '(9-sqrt(65))/4']),
    Q('2 - 9x = 2x^{2}', ['(-9+sqrt(97))/4', '(-9-sqrt(97))/4']),
    Q('2 - x = 2x^{2}', ['(-1+sqrt(17))/4', '(-1-sqrt(17))/4']),
    Q('-2 + x = -2x^{2} + 10', ['(-1+sqrt(97))/4', '(-1-sqrt(97))/4']),
    Q('-2 + x = -2x^{2} + 10 + 4x', ['(3+sqrt(105))/4', '(3-sqrt(105))/4']),
    // New — non-monic, standard form, integer/fraction roots
    Q('3x^{2} + 5x - 2 = 0', ['1/3', '-2']),
    Q('3x^{2} - 5x - 2 = 0', ['2', '-1/3']),
    Q('4x^{2} + 8x + 3 = 0', ['-1/2', '-3/2']),
    Q('4x^{2} - 8x + 3 = 0', ['3/2', '1/2']),
    Q('2x^{2} + 5x - 3 = 0', ['1/2', '-3']),
    Q('2x^{2} - 5x - 3 = 0', ['3', '-1/2']),
    // New — non-monic, standard form, surd roots
    Q('3x^{2} + 7x + 3 = 0', ['(-7+sqrt(13))/6', '(-7-sqrt(13))/6']),
    Q('3x^{2} - 7x + 3 = 0', ['(7+sqrt(13))/6', '(7-sqrt(13))/6']),
    Q('5x^{2} - 4x - 2 = 0', ['(2+sqrt(14))/5', '(2-sqrt(14))/5']),
    // New — rearrangement needed (monic)
    Q('x^{2} = 3x + 1', ['(3+sqrt(13))/2', '(3-sqrt(13))/2']),
    Q('x^{2} + 2 = 5x', ['(5+sqrt(17))/2', '(5-sqrt(17))/2']),
    Q('2x = x^{2} - 5', ['1+sqrt(6)', '1-sqrt(6)']),
    Q('3 + 2x = x^{2}', ['3', '-1']),
    // New — rearrangement needed (non-monic)
    Q('2x^{2} + 3x = 4', ['(-3+sqrt(41))/4', '(-3-sqrt(41))/4']),
    Q('3x^{2} - x = 3', ['(1+sqrt(37))/6', '(1-sqrt(37))/6']),
    Q('2x^{2} - 6 = 5x', ['(5+sqrt(73))/4', '(5-sqrt(73))/4']),
    Q('4x - 1 = 2x^{2}', ['(2+sqrt(2))/2', '(2-sqrt(2))/2']),
    // New — multiple collecting steps
    Q('3x^{2} - 2x + 1 = x^{2} + 4x', ['(3+sqrt(7))/2', '(3-sqrt(7))/2']),
], { hint: 'Leave answers in exact form' });
