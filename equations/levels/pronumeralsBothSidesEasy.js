import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('pronumeralsBothSidesEasy', 'Pronumerals on Both Sides (Easy)', [
    // Page 23 (1a–1b) — basic collection step shown
    Q('4x - 2 = 3x + 3', '5'),
    Q('2 + 4x = 5x + 1', '1'),
    // Page 24 (3a–3f)
    Q('3x = x + 6', '3'),
    Q('2x + 1 = x + 4', '3'),
    Q('x + 2 = 5x', '1/2'),
    Q('x - 4 = 3x', '-2'),
    Q('5x + 6 = x + 10', '1'),
    Q('4x + 8 = 6x - 2', '5'),
    Q('7x + 6 = 3x + 22', '4'),
    Q('6x - 3 = 4x + 7', '5'),
    Q('5x - 3 = -4x + 33', '4'),
    Q('8x = 6x + 10', '5'),
    Q('-8x - 1 = -7 - 2x', '1'),
    Q('16 + 4x = 12x', '2'),
    Q('18 - 2x = 9 + x', '3'),
    Q('24 - 6x = 14 + 4x', '1'),
    Q('3x + 3 = 2x + 9', '6'),
    // Additional two-step questions (positive integer answers)
    Q('5x + 1 = 2x + 7', '2'),
    Q('6x + 2 = 4x + 10', '4'),
    Q('7x = 3x + 20', '5'),
    Q('9x - 3 = 5x + 9', '3'),
    Q('5x + 4 = 3x + 12', '4'),
    Q('8x - 4 = 5x + 11', '5'),
    Q('10x = 2x + 16', '2'),
    Q('4x + 3 = x + 9', '2'),
    Q('7x - 6 = 2x + 14', '4'),
    Q('9x + 1 = 4x + 11', '2'),
    Q('3x + 10 = x + 16', '3'),
    Q('6x + 3 = x + 18', '3'),
    Q('11x - 5 = 7x + 3', '2'),
]);
