import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('twoStepGroupingEasy', 'Two Step Grouping (Easy)', [
    // Page 12 (1a–1f)
    Q('2(x + 3) = 14', '4'),
    Q('3(x + 1) = 18', '5'),
    Q('2(x - 3) = 10', '8'),
    Q('\\frac{x + 4}{3} = 2', '2'),
    Q('\\frac{x + 1}{2} = -3', '-7'),
    Q('\\frac{x - 3}{4} = 1', '7'),
    // Page 13 (2a–2i, duplicate 2h removed)
    Q('3(x + 8) = 36', '4'),
    Q('4(x + 8) = 36', '1'),
    Q('4(x + 8) = 40', '2'),
    Q('4(x + 8) = -40', '-18'),
    Q('4(x - 8) = -40', '-2'),
    Q('4(x - 8) = 40', '18'),
    Q('5(x - 8) = 40', '16'),
    Q('40 = 5(x + 8)', '0'),
    // Page 13 (3a–3i, duplicate 3h removed)
    Q('\\frac{x + 8}{3} = 5', '7'),
    Q('\\frac{x + 8}{4} = 5', '12'),
    Q('\\frac{x + 8}{4} = 6', '16'),
    Q('\\frac{x + 8}{4} = -6', '-32'),
    Q('\\frac{x - 8}{4} = -6', '-16'),
    Q('\\frac{x - 8}{4} = 6', '32'),
    Q('\\frac{x - 8}{5} = 6', '38'),
    Q('6 = \\frac{x + 8}{5}', '22'),
    Q('2(3x + 1) - 4x = 12', '5'),
    Q('2(3x - 1) - 4 = 12', '3'),
    Q('4(x + 6) - 8 = 48', '8'),
    Q('-5(x + 4) + 9 = -41', '6'),
    Q('-8(x + 4) - 3 = -59', '3'),
    Q('-2(x - 2) - 7 = -29', '13'),
    Q('3(3x + 5) + 6 = 3', '-2'),
    // Migrated from mixedTwoStepMedium
    Q('3(x - 16) = 21', '23'),
    Q('8(1 + x) = 88', '10'),
    // Migrated from mixedTwoStepHard
    Q('\\frac{x - 4}{3} = 12', '40'),
    Q('30 = 3(x - 6)', '16'),
    Q('30 = 3(x + 6)', '4'),
    Q('30 = \\frac{6 + x}{3}', '84'),
]);
