import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('twoStepNegCoeffEasy', 'Two Step with Negative Coefficients (Easy)', [
    // Existing questions (neg integer or unit-fraction coeff, integer answer)
    Q('-2x + 18 = 4', '7'),
    Q('-3x + 9 = 6', '1'),
    Q('-\\frac{x}{3} + 4 = 8', '-12'),
    Q('-\\frac{x}{2} + 1 = -10', '22'),
    Q('18 - 2x = 4', '7'),
    Q('9 - 3x = 6', '1'),
    Q('4 - \\frac{x}{3} = 8', '-12'),
    Q('1 - \\frac{x}{2} = -10', '22'),
    Q('16 - 3x = 4', '4'),
    Q('72 - 7x = 51', '3'),
    Q('6 = 10 - 4x', '1'),
    Q('8 - x = 13', '-5'),
    Q('10 - 3x = 7', '1'),
    // Neg fractional coefficient, integer answer (from Hard)
    Q('-\\frac{2x}{3} = 12', '-18'),
    Q('-5 = \\frac{5x}{2}', '-2'),
    // New questions
    Q('-4x + 20 = 4', '4'),
    Q('-5x + 25 = 10', '3'),
    Q('-6x + 30 = 12', '3'),
    Q('-2x + 14 = 6', '4'),
    Q('20 - 5x = 5', '3'),
    Q('14 - 4x = 2', '3'),
    Q('30 - 6x = 6', '4'),
    Q('24 - 3x = 6', '6'),
    Q('-4x + 12 = 0', '3'),
    Q('-5x + 15 = -10', '5'),
    Q('-7x + 35 = 0', '5'),
    Q('12 - 4x = -4', '4'),
    Q('-3x + 6 = -3', '3'),
    Q('-2x + 4 = -6', '5'),
    Q('-4x + 8 = -4', '3'),
    Q('35 - 7x = 7', '4'),
    Q('-6x + 24 = 0', '4'),
    // Migrated from mixedTwoStepMedium
    Q('-\\frac{5x}{2} = 15', '-6'),
]);
