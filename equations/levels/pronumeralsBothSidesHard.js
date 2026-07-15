import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('pronumeralsBothSidesHard', 'Pronumerals on Both Sides (Hard)', [
    // Page 23 (2a–2d, 2h) — fractional answers, derived from step-only source
    Q('5x + 3 = 2x + 8', '5/3'),
    Q('9x + 5 = 12x + 21', '-16/3'),
    Q('2x + 9 = 5 - 2x', '-1'),
    Q('15x + 12 = 13 - 7x', '1/22'),
    Q('2 - 3x = 5x + 4', '-1/4'),
    // Page 27 (6a–6h)
    Q('3x + 7 = 8x + 2', '1'),
    Q('7x - 6 = 4x + 5', '11/3'),
    Q('6x - 8 = 2x - 7', '1/4'),
    Q('12 + 3x = 6x - 4', '16/3'),
    Q('5x = 2x + 8', '8/3'),
    Q('5x = 2x - 8', '-8/3'),
    Q('x - 19 = 6x - 3', '-16/5'),
    Q('10x + 8 = -8x - 2', '-5/9'),
    Q('-4x + 10 = 2x + 8', '1/3'),
    Q('-6x + 5 = -2x + 8', '-3/4'),
    // Additional two-step questions (non-integer fractional answers)
    Q('3x + 1 = x + 6', '5/2'),
    Q('4x - 3 = x + 5', '8/3'),
    Q('5x + 2 = 2x + 9', '7/3'),
    Q('6x + 1 = 3x + 5', '4/3'),
    Q('4x + 5 = 2x + 8', '3/2'),
    Q('7x - 2 = 3x + 7', '9/4'),
    Q('5x + 1 = x + 4', '3/4'),
    Q('11x + 3 = 7x + 8', '5/4'),
    Q('8x - 5 = 3x + 7', '12/5'),
    Q('7x + 5 = 3x + 4', '-1/4'),
    Q('3x - 5 = 7x + 4', '-9/4'),
    Q('2x + 5 = 5x + 9', '-4/3'),
    Q('x + 7 = 5x + 2', '5/4'),
    Q('3x + 8 = 9x + 3', '5/6'),
    Q('4x - 7 = 6x + 2', '-9/2'),
]);
