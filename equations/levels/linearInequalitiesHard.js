import { BaseLevel } from './BaseLevel.js';
const Q = (problem, ineq, rhs) => ({ problem, inputs: { vars: ['x'], type: 'ineq' }, answer: { x: { ineq, rhs } } });
export default new BaseLevel('linearInequalitiesHard', 'Linear Inequalities (Hard)', [
    // P5 h–i (expand + variables on both sides)
    Q('7x + 12 < 4(2x + 1)', '>', '8'),
    Q('-2(3x - 5) \\leq 5x - 1', '>=', '1'),
    // P6 3l (double-negative expansion)
    Q('-11 > -7(1 - x)', '<', '-4/7'),
    // P7 4: brackets on both sides
    Q('5(x - 1) < 3(x - 2)', '<', '-1/2'),
    Q('5(x - 1) \\geq 3(2 - x)', '>=', '11/8'),
    Q('5(1 - x) \\leq 3(x - 2)', '>=', '11/8'),
    Q('5(1 - x) < 3(2 - x)', '>', '-1/2'),
    // P7 5: fractions + variables on both sides
    Q('\\frac{2(x + 1)}{3} > x + 5', '<', '-13'),
    Q('2x + 3 \\geq \\frac{x - 6}{3}', '>=', '-3'),
    Q('\\frac{2 - 3x}{2} < 2x - 1', '>', '4/7'),
    Q('\\frac{4(2x - 1)}{3} \\leq x + 3', '<=', '13/5'),
    Q('1 - x > \\frac{7(2 - 3x)}{4}', '>', '10/17'),
    Q('2(3 - 2x) \\leq 4x', '>=', '3/4'),
    // brackets on both sides
    Q('3(x + 4) > 2(x + 7)', '>', '2'),
    Q('4(x - 2) \\geq 3(x + 1)', '>=', '11'),
    Q('2(x + 5) < 4(x - 1)', '>', '7'),
    Q('3(2x - 1) \\geq 4(x + 2)', '>=', '11/2'),
    Q('4(2x + 1) < 3(3x - 2)', '>', '10'),
    Q('2(5 - 3x) > 3(2 - x)', '<', '4/3'),
    Q('3(2 - 4x) \\leq 2(1 - 5x)', '>=', '2'),
    // fraction one side, variable expression the other
    Q('\\frac{x + 2}{3} \\geq x - 4', '<=', '7'),
    Q('\\frac{3x - 1}{4} < x - 2', '>', '7'),
    Q('x + 1 \\leq \\frac{2x + 7}{3}', '<=', '4'),
    Q('\\frac{5 - 2x}{3} > x - 1', '<', '8/5'),
    Q('3x - 2 < \\frac{7x + 4}{3}', '<', '5'),
    Q('3(x - 2) > \\frac{4x + 1}{2}', '>', '13/2'),
    // compound bracket expansion
    Q('\\frac{2x - 5}{3} \\leq 3(x + 1)', '>=', '-2'),
    Q('2(3x + 1) - 3(x - 2) < 10', '<', '2/3'),
    Q('5(x + 2) - 2(3x - 1) \\geq 0', '<=', '12'),
    Q('3(2x - 5) \\geq 5(x - 1) - 2', '>=', '8'),
]);
