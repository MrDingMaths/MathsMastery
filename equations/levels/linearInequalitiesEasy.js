import { BaseLevel } from './BaseLevel.js';
// answer: { ineq: '>'|'<'|'>='|'<=', rhs: string }
const Q = (problem, ineq, rhs) => ({ problem, inputs: { vars: ['x'], type: 'ineq' }, answer: { x: { ineq, rhs } } });
export default new BaseLevel('linearInequalitiesEasy', 'Linear Inequalities (Easy)', [
    Q('x + 9 > 12', '>', '3'),
    Q('x + 5 < 8', '<', '3'),
    Q('x - 2 > 3', '>', '5'),
    Q('x - 8 > -2', '>', '6'),
    Q('-12 + x < -7', '<', '5'),
    Q('5x \\geq 15', '>=', '3'),
    Q('4x > -20', '>', '-5'),
    Q('\\frac{x}{3} \\geq 4', '>=', '12'),
    Q('12 \\leq 6 + 4x', '>=', '3/2'),
    Q('2x < 10', '<', '5'),
    Q('x + 2 > 10', '>', '8'),
    Q('x - 2 > 10', '>', '12'),
    Q('\\frac{x}{2} \\leq 10', '<=', '20'),
    Q('\\frac{x}{4} \\geq 10', '>=', '40'),
    Q('x + 4 \\geq 10', '>=', '6'),
    Q('x - 4 < 10', '<', '14'),
    Q('4x \\geq 10', '>=', '5/2'),
    Q('4x \\leq 60', '<=', '15'),
    // add/subtract constant
    Q('x + 7 > 13', '>', '6'),
    Q('x - 6 < -3', '<', '3'),
    Q('x + 3 < -4', '<', '-7'),
    Q('x - 10 \\geq 5', '>=', '15'),
    // reversed (constant on left)
    Q('3 < x - 5', '>', '8'),
    Q('6 \\leq x - 4', '>=', '10'),
    Q('20 > x + 15', '<', '5'),
    // multiply/divide by positive integer
    Q('8x \\geq 24', '>=', '3'),
    Q('3x > -9', '>', '-3'),
    Q('5x \\leq -25', '<=', '-5'),
    Q('\\frac{x}{7} \\leq 3', '<=', '21'),
    Q('\\frac{x}{8} < 4', '<', '32'),
]);
