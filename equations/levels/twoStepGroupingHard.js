import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('twoStepGroupingHard', 'Two Step Grouping (Hard)', [
    // Page 16 (4a–4d)
    Q('2(5x + 8) = 66', '5'),
    Q('-8(x - 3) = 32', '-1'),
    Q('7(3x - 1) = -13', '-2/7'),
    Q('11(3x + 4) = 77', '1'),
    // Page 21–22 (2o, 2p, 2r, 2s, 2w, 2x) — fractional answers
    Q('5(x - 7) = -12', '23/5'),
    Q('4(5 - x) = 18', '1/2'),
    Q('\\frac{4 + x}{3} = -2', '-10'),
    Q('\\frac{6 + x}{2} = -3', '-12'),
    Q('7(2x + 1) = 8', '1/14'),
    Q('5(3 - 2x) = 6', '9/10'),
    Q('-8(-5 + 3x) = 54.4', '-3/5'),
    Q('-2(-9x + 7) = 12.2', '131/90'),
    Q('2(3x - 1) + 4x = 12', '7/5'),
    Q('2(3x - 1) + 4 = 12', '5/3'),
    Q('18 = 5 + 2(x - 4)', '21/2'),
    Q('5(x + 7) - 2x = 42', '7/3'),
    Q('9(3 - x) + x = 7', '5/2'),
    Q('5 - 3(x - 1) = -11', '19/3'),
    // Additional questions (coefficient on x inside bracket ≥ 2; non-trivial fractional answers)
    Q('3(4x - 5) = 7', '11/6'),
    Q('5(2x + 3) = -4', '-19/10'),
    Q('\\frac{5x - 2}{3} = 4', '14/5'),
    Q('\\frac{7x + 3}{2} = -5', '-13/7'),
    Q('3(2x - 5) + 4x = 7', '11/5'),
    Q('4(3x + 1) - 5x = 8', '4/7'),
    Q('-3(2x - 1) + x = 7', '-4/5'),
    Q('6(2 - x) + 3x = 5', '7/3'),
    Q('\\frac{3x + 7}{5} = 1', '-2/3'),
    Q('\\frac{4x - 9}{5} = -2', '-1/4'),
    Q('-5(3x + 2) = 8', '-6/5'),
    Q('3(5x - 2) - 7x = -4', '1/4'),
    Q('-4(2x - 1) + 3x = -9', '13/5'),
    Q('\\frac{8 - 3x}{4} = 1', '4/3'),
    // Moved from Easy — b>1 with extra dx term (requires expansion)
    Q('2(3x + 1) - 4x = 12', '5'),
    // Migrated from mixedTwoStepHard
    Q('\\frac{6 + x}{5} = 5.5', '21.5'),
    Q('30 = -\\frac{1}{3}(x + 6)', '-96'),
    Q('\\frac{7x - 3}{3} = 9', '30/7'),
    Q('5 = \\frac{3x - 6}{2}', '16/3'),
    // Migrated from mixedMultistepLinearMedium
    Q('3(x - 2) = 10', '16/3'),
]);
