import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('mixedMultistepLinearEasy', 'Mixed Multistep Linear (Easy)', [
    // Collect like terms on one/both sides
    Q('13 + 2x + 2x = 41', '7'),
    Q('3x + 17 + 2x = 62', '9'),
    Q('3x + 7 + x - 4 = 35', '8'),
    Q('3x + 7 - x + 4 = 37', '13'),
    Q('3 + 2x + 3x - 8 = 14', '19/5'),
    // Expand a single bracket, then solve
    Q('2(2x + 3) = 27 - 3x', '3'),
    Q('2(4x + 5) = 9x', '10'),
    Q('6(3x + 1) = 4x + 20', '1'),
    Q('4x - 6 = -8(6x - 7) + 42', '2'),
    Q('8(8x + 5) = 3(6x + 8) + 108', '2'),
    Q('5(4x - 3) = 3(-4x + 4) + 101', '4'),
    Q('8x + 6 - 2x = 4x + 8', '1'),
    // Additional collect like terms (one/both sides)
    Q('4x + 3 - x = 18', '5'),
    Q('6x - 4 + 2x = 20', '3'),
    Q('9x + 1 - 4x = 31', '6'),
    Q('3x - 5 + 5x = 27', '4'),
    Q('2x + 9 - 7x = 24', '-3'),
    Q('5x + 2 = 3x + 10', '4'),
    Q('7x - 4 = 4x + 14', '6'),
    Q('4x - 3 = x + 12', '5'),
    Q('9x - 1 = 5x + 11', '3'),
    // Additional bracket expansion
    Q('3(2x + 5) = 2x + 23', '2'),
    Q('4(x - 3) = 2x + 4', '8'),
    Q('3(3x - 1) = 5x + 17', '5'),
    Q('7(x + 2) = 3x + 26', '3'),
    Q('2(3x - 1) = 4x + 12', '7'),
    Q('5(2x + 3) = 7x + 24', '3'),
    Q('6(x - 2) = 3x + 6', '6'),
    Q('4(2x + 1) = 5x + 16', '4'),
    Q('3(x + 4) + 2x = 27', '3'),
]);
