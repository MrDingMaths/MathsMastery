import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('oneStepHard', 'One Step (Hard)', [
    // Page 2 (2o–2q) — fractional/decimal answers
    Q('-7 + x = \\frac{1}{2}', '7.5'),
    Q('x - 7 = \\frac{1}{2}', '7.5'),
    Q('x + 7 = \\frac{1}{2}', '-6.5'),
    // Page 2 (3c) — fractional answer
    Q('3x = 5', '5/3'),
    // Page 3 — fractional/decimal answers
    Q('9x = 3', '1/3'),
    Q('\\frac{x}{10} = 1.2', '12'),
    Q('2x = -1', '-1/2'),
    Q('-2x = -13', '6.5'),
    // Page 5 (6w–6x) — fractional answers
    Q('11 = -4x', '-11/4'),
    Q('-3 = 6x', '-1/2'),
    // ax = b, positive fraction answer
    Q('2x = 3', '3/2'),
    Q('4x = 3', '3/4'),
    Q('5x = 2', '2/5'),
    Q('5x = 4', '4/5'),
    Q('4x = 7', '7/4'),
    Q('3x = 4', '4/3'),
    Q('6x = 5', '5/6'),
    // ax = b, negative fraction answer
    Q('-2x = 3', '-3/2'),
    Q('4x = -3', '-3/4'),
    Q('-3x = 7', '-7/3'),
    Q('-4x = 7', '-7/4'),
    Q('-5x = 2', '-2/5'),
    Q('6x = -5', '-5/6'),
    // x ± a = fraction (fraction on RHS)
    Q('x + 2 = \\frac{1}{2}', '-3/2'),
    Q('x - 4 = \\frac{3}{2}', '11/2'),
    Q('x + 1 = \\frac{3}{4}', '-1/4'),
    Q('3 + x = \\frac{1}{2}', '-5/2'),
    Q('x + 3 = -\\frac{1}{2}', '-7/2'),
    // x/a = decimal (decimal on RHS)
    Q('\\frac{x}{3} = 1.5', '4.5'),
    Q('\\frac{x}{5} = 1.4', '7'),
    // Migrated from mixedTwoStepEasy (one-step review with decimals/fractions)
    Q('x + 0.5 = 3', '2.5'),
    Q('x - \\frac{3}{4} = \\frac{1}{2}', '5/4'),
    Q('6x = 25', '25/6'),
    Q('-5x = 11', '-11/5'),
    Q('2.5x = -20', '-8'),
    Q('10.2 = \\frac{x}{5}', '51'),
]);
