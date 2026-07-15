import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('pronumeralsBothSidesMedium', 'Pronumerals on Both Sides (Medium)', [
    // Page 23 (2e–2g) — derived answers
    Q('7x = 3x + 4', '1'),
    Q('9x + 2 = 5x + 10', '2'),
    Q('4x + 2 = 8 - 2x', '1'),
    // Page 25 (4a–4j)
    Q('7x = 5x + 9', '4.5'),
    Q('3x = x + 8', '4'),
    Q('3x + 6 = 2x + 9', '3'),
    Q('10x = 12 - 8x', '2/3'),
    Q('3x + 6 = x + 18', '6'),
    Q('6x + 5 = 2x + 17', '3'),
    Q('5x - 3 = 2x + 6', '3'),
    Q('3x - 6 = x - 4', '1'),
    Q('3x + 5 = -x + 26', '21/4'),
    Q('4x + 3 = -2x + 7', '2/3'),
    // Page 26 (5a–5d, 5g–5n)
    Q('x + 5 = 3x + 3', '1'),
    Q('x - 5 = 3x + 3', '-4'),
    Q('x - 5 = 3x - 3', '-1'),
    Q('x - 5 = -3 + 3x', '-1'),
    Q('-5 + x = -3 + 3x', '-1'),
    Q('5 - x = 3 - 3x', '-1'),
    Q('5 + x = 3 - 3x', '-1/2'),
    Q('5 - x = -3 - 3x', '-4'),
    Q('3 - 3x = 5 - x', '-1'),
    Q('3 - 3x = 5 + x', '-1/2'),
    Q('3 + x = 5 - 3x', '1/2'),
    Q('3 - x = 5 + 3x', '-1/2'),
    Q('-2 + 9x = 4x - 7', '-1'),
    // Additional two-step questions (negatives feature prominently)
    Q('5x - 4 = 8x + 5', '-3'),
    Q('2x + 7 = 5x - 8', '5'),
    Q('-3x + 4 = x - 8', '3'),
    Q('4x - 9 = 7x + 6', '-5'),
    Q('-2x + 1 = 4x - 5', '1'),
    Q('6x + 3 = -3x - 6', '-1'),
    Q('3x - 8 = x - 4', '2'),
]);
