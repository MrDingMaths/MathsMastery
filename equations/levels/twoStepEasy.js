import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('twoStepEasy', 'Two Step (Easy)', [
    // Page 6 (1a–1h)
    Q('2x + 7 = 15', '4'),
    Q('2x - 6 = 4', '5'),
    Q('\\frac{x}{3} + 1 = 10', '27'),
    Q('4x + 2 = 10', '2'),
    Q('14 = 3x + 5', '3'),
    Q('2x - 1 = 4', '5/2'),
    Q('8 = \\frac{x}{2} + 1', '14'),
    Q('\\frac{x}{3} - 2 = -4', '-6'),
    // Page 7 (2a–2l, duplicate 2d removed; 8+10x=2 moved to Medium — answer -3/5 exceeds Easy scope)
    Q('3x + 8 = 29', '7'),
    Q('4x - 3 = 19', '11/2'),
    Q('10 + 5x = 80', '14'),
    Q('17 = 12 + 5x', '1'),
    Q('2x - 4 = -6', '-1'),
    Q('3x + 7 = -11', '-6'),
    Q('5x - 3 = -8', '-1'),
    Q('-15 = 6x - 9', '-1'),
    Q('17x + 12 = -5', '-1'),
    Q('2x + 5 = -11', '-8'),
    // Additional questions (integer or half answers; a ∈ {2…12}; x/n with n = 2 or 3)
    Q('3x + 1 = 13', '4'),
    Q('5x - 4 = 6', '2'),
    Q('6x + 2 = 14', '2'),
    Q('7x - 7 = 21', '4'),
    Q('9x + 3 = 30', '3'),
    Q('4x - 8 = 0', '2'),
    Q('\\frac{x}{2} + 4 = 9', '10'),
    Q('\\frac{x}{3} + 5 = 8', '9'),
    Q('4x + 5 = -3', '-2'),
    Q('6x - 1 = -13', '-2'),
    Q('5x + 3 = -12', '-3'),
    Q('4x + 1 = 3', '1/2'),
    Q('8x + 1 = 25', '3'),
    Q('6x - 1 = 2', '1/2'),
    // Migrated from twoStepNegCoeffMedium (positive coefficient)
    Q('3x - 1 = -7', '-2'),
    // Migrated from twoStepGroupingMedium (no grouping)
    Q('2x - 5 = 11', '8'),
    Q('6x + 3 = 45', '7'),
    Q('6x - 3 = 45', '8'),
    // Migrated from mixedTwoStepMedium
    Q('3x - 18 = -15', '1'),
]);
