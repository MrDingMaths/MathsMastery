import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('twoStepHard', 'Two Step (Hard)', [
    // Page 8 (5h–5l) — fractional answers
    Q('7 = 6 + 4x', '1/4'),
    Q('-2 + 2x = -1', '1/2'),
    Q('0 = 2x - 1', '1/2'),
    Q('18 = 9 + 2x', '9/2'),
    Q('0.5x + 0.2 = 0.4', '0.4'),
    // Page 21 (2e, 2f, 2j, 2k, 2v) — standard two-step from mixed review
    Q('7 = 3x + 2', '5/3'),
    Q('4x + 7 = 25', '4.5'),
    Q('\\frac{x}{3} - 7 = -12', '-15'),
    Q('\\frac{x}{2} - 3 = -7', '-8'),
    Q('2(x + 3) = 11', '5/2'),
    // Decimal coefficient questions
    Q('0.5x + 3 = 7', '8'),
    Q('0.5x - 2 = 1', '6'),
    Q('1.5x + 3 = 9', '4'),
    Q('0.25x + 2 = 5', '12'),
    Q('0.1x + 5 = 8', '30'),
    Q('2.5x - 5 = 10', '6'),
    Q('0.5x + 0.5 = 3', '5'),
    Q('1.5x - 0.5 = 7', '5'),
    Q('0.2x + 4 = 6', '10'),
    Q('0.4x - 2 = 6', '20'),
    Q('3.5x + 2 = 16', '4'),
    Q('0.5x + 7 = 3', '-8'),
    Q('1.5x + 3 = -3', '-4'),
    Q('0.25x - 1 = 3', '16'),
    Q('0.1x - 3 = -5', '-20'),
    // Non-trivial fraction answers (denominator ≥ 3, integer coefficients)
    Q('9x + 4 = 7', '1/3'),
    Q('9x + 7 = 4', '-1/3'),
    Q('9x + 4 = 10', '2/3'),
    Q('11x + 3 = 8', '5/11'),
    Q('11x + 7 = 2', '-5/11'),
    Q('7x + 3 = 1', '-2/7'),
    Q('7x - 2 = 3', '5/7'),
    // Migrated from twoStepNegCoeffHard (positive coefficient)
    Q('4x - 5 = 19', '6'),
    Q('\\frac{x}{4} - 5 = 19', '96'),
    // Migrated from mixedTwoStepHard
    Q('3x - 2 = -13', '-11/3'),
    Q('\\frac{4x}{3} = -9', '-27/4'),
    Q('7x - 3 = -8', '-5/7'),
    Q('2x + \\frac{1}{2} = \\frac{1}{4}', '-1/8'),
    Q('-1 = 5x - \\frac{1}{4}', '-3/20'),
    Q('5 + \\frac{3x}{2} = -7', '-8'),
]);
