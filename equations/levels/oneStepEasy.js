import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('oneStepEasy', 'One Step (Easy)', [
    // Page 1
    Q('x + 7 = 15', '8'),
    Q('x - 3 = 8', '11'),
    Q('3x = 15', '5'),
    Q('\\frac{x}{3} = 5', '15'),
    Q('x - 9 = 6', '15'),
    Q('5 + x = 12', '7'),
    Q('\\frac{x}{2} = 6', '12'),
    Q('16 = 2x', '8'),
    Q('20 = 5x', '4'),
    // Page 2 (2a–2e)
    Q('x + 3 = 8', '5'),
    Q('3 + x = 8', '5'),
    Q('8 = x + 3', '5'),
    Q('8 = x - 3', '11'),
    Q('9 = x - 3', '12'),
    // Page 2 (3a, 3e — 3b and 3d duplicates removed)
    Q('3x = 18', '6'),
    Q('5 = \\frac{x}{3}', '15'),
    // Page 3 (4a, 4c–4e, 4m, 4q–4s — 4o duplicate removed)
    Q('x - 6 = 24', '30'),
    Q('3x = 12', '4'),
    Q('\\frac{x}{5} = 1', '5'),
    Q('8 + x = 21', '13'),
    Q('x + 7 = 16', '9'),
    Q('3x = 27', '9'),
    Q('14x = 42', '3'),
    Q('\\frac{x}{4} = 24', '96'),
    // Page 4 (5a, 5b, 5e, 5g)
    Q('x + 5 = 20', '15'),
    Q('x - 5 = 20', '25'),
    Q('5x = 20', '4'),
    Q('\\frac{x}{5} = 20', '100'),
    // Migrated from mixedTwoStepEasy (one-step review)
    Q('\\frac{x}{6} = 5', '30'),
]);
