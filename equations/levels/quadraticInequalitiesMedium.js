import { BaseLevel } from './BaseLevel.js';
const QU = (problem, ineq1, rhs1, ineq2, rhs2) => ({ problem, inputs: { vars: ['x'], type: 'ineq-union' }, answer: { x: { ineq: 'union', parts: [{ ineq: ineq1, rhs: rhs1 }, { ineq: ineq2, rhs: rhs2 }] } } });
const QB = (problem, lo, hi, loStrict, hiStrict) => ({ problem, inputs: { vars: ['x'], type: 'ineq' }, answer: { x: { ineq: 'between', lo, hi, loStrict, hiStrict } } });
export default new BaseLevel('quadraticInequalitiesMedium', 'Quadratic Inequalities (Medium)', [
    // Monic in standard form — factorise then solve
    QU('x^{2} - x - 6 > 0', '<', '-2', '>', '3'),
    QB('x^{2} - 5x + 6 < 0', '2', '3', true, true),
    QU('x^{2} + x - 12 \\geq 0', '<=', '-4', '>=', '3'),
    QB('x^{2} - 3x - 10 \\leq 0', '-2', '5', false, false),
    QU('x^{2} + 5x + 4 > 0', '<', '-4', '>', '-1'),
    QB('x^{2} - 2x - 8 < 0', '-2', '4', true, true),
    QU('x^{2} + 2x - 15 \\geq 0', '<=', '-5', '>=', '3'),
    // Rearrange first, then factorise
    QU('x^{2} + 3x > -2', '<', '-2', '>', '-1'),
    QB('x^{2} < 7x - 12', '3', '4', true, true),
    QU('x^{2} + 2x \\geq 8', '<=', '-4', '>=', '2'),
    QB('x^{2} \\leq 2x + 3', '-1', '3', false, false),
    QU('x^{2} - 4x > -3', '<', '1', '>', '3'),
    QB('x^{2} + 4 \\leq 5x', '1', '4', false, false),
    // Expand-then-rearrange: (x−p)(x−q) op constant
    QU('(x-1)(x-5) > -3', '<', '2', '>', '4'),
    QB('(x+1)(x-5) \\leq -5', '0', '4', false, false),
    QB('(x-3)(x+1) < 5', '-2', '4', true, true),
    QU('(x+2)(x-6) \\geq -15', '<=', '1', '>=', '3'),
    // Non-monic ax² + bx + c op 0  (factorisable, integer or simple fractional roots)
    QB('2x^{2} - x - 3 \\leq 0', '-1', '3/2', false, false),
    QU('3x^{2} + x - 2 > 0', '<', '-1', '>', '2/3'),
    QB('2x^{2} + 5x + 3 < 0', '-3/2', '-1', true, true),
    QU('3x^{2} - 5x + 2 \\geq 0', '<=', '2/3', '>=', '1'),
    QU('6x^{2} - x - 2 > 0', '<', '-1/2', '>', '2/3'),
    QB('4x^{2} - 1 \\leq 0', '-1/2', '1/2', false, false),
    QU('2x^{2} - 7x + 6 > 0', '<', '3/2', '>', '2'),
    QB('3x^{2} + 7x - 6 \\leq 0', '-3', '2/3', false, false),
]);
