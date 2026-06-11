import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('twoStepGroupingMedium', 'Two Step Grouping (Medium)', [
    // Page 14 (4a–4b) — contrasting forms (fraction vs bracket notation)
    Q('\\frac{x + 5}{3} = 7', '16'),
    // Page 14 (5a–5f) — bracket forms only (non-grouping 2x±5 variants migrated to twoStep)
    Q('2(x + 5) = 60', '25'),
    Q('2(2x + 5) = 60', '25/2'),
    Q('2(5 + 4x) = 60', '25/4'),
    Q('2(x - 5) = 11', '21/2'),
    // Page 15 (1a–1i)
    Q('2(5 + x) = 12', '1'),
    Q('8(x + 9) = 72', '0'),
    Q('22 = 2(x + 5)', '6'),
    Q('63 = 7(x + 2)', '7'),
    Q('2(x + 8) = 32', '8'),
    Q('8(x + 7) = 96', '5'),
    Q('3(6x + 3) = 27', '1'),
    Q('30 = 6(5x - 10)', '3'),
    Q('3(2x - 9) = 39', '11'),
    // Page 15 (3a–3d) — bracket forms only (non-grouping 6x±3 variants migrated to twoStep)
    Q('6(x + 3) = 45', '9/2'),
    Q('6(x - 3) = 45', '21/2'),
    // Page 16 (5a–5d)
    Q('4(x - 5) = 40', '15'),
    Q('4(x - 5) = 30', '25/2'),
    Q('4(x + 5) + 20 = 40', '0'),
    Q('4(x - 5) + 4x = 20', '5'),
    Q('5(2x - 4) = -70', '-5'),
    Q('3(x + 1) + 2 = -1', '-2'),
    Q('-2(x + 2) - 4 = 4', '-6'),
    Q('3(x - 1) - 5 = -11', '-1'),
    Q('-7(x + 5) + 4 = -17', '-2'),
    Q('6(x + 1) - 5 = -23', '-4'),
    Q('4x + 6(3x + 1) = -38', '-2'),
    Q('2(5 - x) - 3x = 30', '-4'),
    Q('2 - 3(x + 1) = -1', '0'),
    Q('-4 - 2(x + 2) = 4', '-6'),
    // Moved from Easy — extra terms / negative multipliers
    Q('4(x + 6) - 8 = 48', '8'),
    Q('-5(x + 4) + 9 = -41', '6'),
    Q('-8(x + 4) - 3 = -59', '3'),
    Q('-2(x - 2) - 7 = -29', '13'),
    Q('2(3x - 1) - 4 = 12', '3'),
    Q('3(3x + 5) + 6 = 3', '-2'),
    // Migrated from mixedTwoStepMedium
    Q('4(x + 16) = -84', '-37'),
    // Migrated from mixedTwoStepHard
    Q('\\frac{x - 13}{9} = -1', '4'),
    Q('30 = \\frac{-6 + x}{3}', '96'),
    Q('3 = \\frac{-6 + x}{30}', '96'),
    Q('30 = \\frac{1}{3}(x + 6)', '84'),
    // Migrated from mixedMultistepLinearMedium
    Q('\\frac{1}{3}(3x - 6) = 2', '4'),
]);
