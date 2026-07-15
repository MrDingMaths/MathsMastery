import { BaseLevel } from './BaseLevel.js';
const Q = (problem, roots) => ({ problem, inputs: { vars: ['x'], multi: true }, answer: { x: roots } });
export default new BaseLevel('quadraticFormulaHard', 'Quadratic Formula (Hard)', [
    // Original 20
    Q('3x^{2} = 1 + 6x', ['(3+2*sqrt(3))/3', '(3-2*sqrt(3))/3']),
    Q('2x^{2} = 3 - 4x', ['(-2+sqrt(10))/2', '(-2-sqrt(10))/2']),
    Q('5x = 2 - 4x^{2}', ['(-5+sqrt(57))/8', '(-5-sqrt(57))/8']),
    Q('2x - 5 = -\\frac{1}{x}', ['(5+sqrt(17))/4', '(5-sqrt(17))/4']),
    Q('\\frac{3}{x} = 3x + 4', ['(-2+sqrt(13))/3', '(-2-sqrt(13))/3']),
    Q('-\\frac{5}{x} = 2 - x', ['1+sqrt(6)', '1-sqrt(6)']),
    Q('5x = \\frac{2x + 2}{x}', ['(1+sqrt(11))/5', '(1-sqrt(11))/5']),
    Q('x = \\frac{3x + 4}{2x}', ['(3+sqrt(41))/4', '(3-sqrt(41))/4']),
    Q('3x = \\frac{10x - 1}{2x}', ['(5+sqrt(19))/6', '(5-sqrt(19))/6']),
    Q('\\frac{5x + 7}{x - 1} = 3x + 2', ['-1', '3']),
    Q('\\frac{x + 3}{2x - 7} = \\frac{2x - 1}{x - 3}', ['4/3', '4']),
    Q('2(x - 1) = \\frac{4 - 5x}{x + 1}', ['(-5+sqrt(73))/4', '(-5-sqrt(73))/4']),
    Q('\\frac{2}{x + 3} + \\frac{x + 3}{2} = \\frac{10}{3}', ['-7/3', '3']),
    Q('\\frac{3x}{x^{2} - 6} = \\sqrt{3}', ['-sqrt(3)', '2*sqrt(3)']),
    Q('\\frac{3x + 1}{3x - 1} - \\frac{3x - 1}{3x + 1} = 2', ['(1+sqrt(2))/3', '(1-sqrt(2))/3']),
    Q('2^{2x} - 2^{x} - 12 = 0', ['2']),
    Q('3 \\times 9^{x} - 3^{x + 1} - 18 = 0', ['1']),
    Q('(x^{2} + x)^{2} - 8(x^{2} + x) + 12 = 0', ['-3', '-2', '1', '2']),
    Q('x^{6} - 14x^{3} - 32 = 0', ['2^(4/3)', '-2^(1/3)']),
    Q('9^{x} - 82 \\times 3^{x} + 81 = 0', ['0', '4']),
    // New — combined-denominator fractions
    Q('\\frac{x + 2}{x - 1} - \\frac{x - 2}{x + 1} = 3', ['1+sqrt(2)', '1-sqrt(2)']),
    Q('\\frac{1}{x + 1} + \\frac{1}{x - 1} = 5', ['(1+sqrt(26))/5', '(1-sqrt(26))/5']),
    Q('\\frac{1}{x - 1} + \\frac{1}{x + 2} = 1', ['(1+sqrt(13))/2', '(1-sqrt(13))/2']),
    // New — cross-multiplication fraction
    Q('\\frac{3x - 1}{x + 2} = \\frac{x + 4}{x - 1}', ['(5+sqrt(39))/2', '(5-sqrt(39))/2']),
    // New — radical equation (one extraneous root discarded)
    Q('\\sqrt{x + 3} = x - 1', ['(3+sqrt(17))/2']),
    // New — exponential substitutions
    Q('2^{2x+1} - 5 \\times 2^{x} + 2 = 0', ['-1', '1']),
    Q('25^{x} - 6 \\times 5^{x} + 5 = 0', ['0', '1']),
    Q('4^{x} + 4 \\times 2^{x} - 5 = 0', ['0']),
    Q('9^{x+1} = 9 + 80 \\times 3^{x}', ['2']),
    // New — quartic via substitution
    Q('x^{4} - 5x^{2} + 4 = 0', ['-2', '-1', '1', '2']),
], { hint: 'Leave answers in exact form' });
