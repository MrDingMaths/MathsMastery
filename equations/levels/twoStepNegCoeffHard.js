import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('twoStepNegCoeffHard', 'Two Step with Negative Coefficients (Hard)', [
    // b - ax = c with non-integer answer
    Q('5 - 4x = 19', '-3.5'),
    Q('5 - \\frac{x}{4} = 19', '-56'),
    // Pure neg fractional coefficient, non-trivial fraction answer
    Q('-\\frac{5x}{8} = 3', '-24/5'),
    Q('-1 = \\frac{7x}{4}', '-4/7'),
    Q('-20 = \\frac{7x}{3}', '-60/7'),
    Q('-\\frac{3x}{4} = 5', '-20/3'),
    // Two-step with neg fractional coefficient (unit fraction)
    Q('-\\frac{x}{8} - 2 = 0', '-16'),
    Q('-4 - \\frac{x}{2} = 9', '-26'),
    Q('-\\frac{x}{4} + 5 = 6', '-4'),
    Q('1 - \\frac{x}{4} = 6', '-20'),
    Q('5 - \\frac{x}{4} = 6', '-4'),
    // New: two-step with neg non-unit fractional coefficient
    Q('-\\frac{3x}{4} + 6 = 0', '8'),
    Q('8 - \\frac{5x}{2} = -7', '6'),
    Q('-\\frac{5x}{3} + 10 = -5', '9'),
    Q('-\\frac{7x}{4} + 14 = 0', '8'),
    Q('-\\frac{3x}{5} + 6 = 0', '10'),
    Q('5 - \\frac{3x}{4} = -1', '8'),
    Q('-\\frac{5x}{6} + 10 = 5', '6'),
    Q('7 - \\frac{2x}{3} = 1', '9'),
    Q('0 = 12 - \\frac{3x}{4}', '16'),
    Q('-\\frac{7x}{5} + 14 = 0', '10'),
    Q('8 - \\frac{5x}{3} = -7', '9'),
    Q('3 - \\frac{4x}{5} = -1', '5'),
    Q('-\\frac{3x}{2} + 9 = 3', '4'),
    Q('6 - \\frac{5x}{4} = -4', '8'),
    Q('0 = 9 - \\frac{3x}{2}', '6'),
    Q('-\\frac{2x}{5} - 2 = 6', '-20'),
    Q('4 = 16 - \\frac{4x}{3}', '9'),
    Q('-\\frac{3x}{8} + 3 = 0', '8'),
    Q('-\\frac{2x}{3} + 1 = 7', '-9'),
    // Migrated from mixedTwoStepMedium
    Q('35 = 5 - 7x', '-30/7'),
    // Migrated from mixedTwoStepHard
    Q('23 = 4 - 7x', '-19/7'),
    Q('2 - 5x = 9', '-7/5'),
    Q('3 - \\frac{4x}{3} = 5', '-3/2'),
]);
