import { BaseLevel } from './BaseLevel.js';
const QU = (problem, ineq1, rhs1, ineq2, rhs2) => ({ problem, inputs: { vars: ['x'], type: 'ineq-union' }, answer: { x: { ineq: 'union', parts: [{ ineq: ineq1, rhs: rhs1 }, { ineq: ineq2, rhs: rhs2 }] } } });
const QB = (problem, lo, hi, loStrict, hiStrict) => ({ problem, inputs: { vars: ['x'], type: 'ineq' }, answer: { x: { ineq: 'between', lo, hi, loStrict, hiStrict } } });
export default new BaseLevel('quadraticInequalitiesHard', 'Quadratic Inequalities (Hard)', [
    // Non-monic requiring rearrangement
    QU('6x^{2} > 5x + 6', '<', '-2/3', '>', '3/2'),
    QB('4x^{2} \\leq 4x + 3', '-1/2', '3/2', false, false),
    QB('6x^{2} < 7x + 3', '-1/3', '3/2', true, true),
    QU('2x^{2} + x \\geq 6', '<=', '-2', '>=', '3/2'),
    QB('3x^{2} \\leq 10x - 3', '1/3', '3', false, false),
    // Irrational roots — quadratic formula required
    QB('x^{2} - 4x + 1 < 0', '2-\\sqrt{3}', '2+\\sqrt{3}', true, true),
    QU('x^{2} + 6x + 4 > 0', '<', '-3-\\sqrt{5}', '>', '-3+\\sqrt{5}'),
    QU('x^{2} - 2x - 4 \\geq 0', '<=', '1-\\sqrt{5}', '>=', '1+\\sqrt{5}'),
    QB('x^{2} + 4x - 1 \\leq 0', '-2-\\sqrt{5}', '-2+\\sqrt{5}', false, false),
    QB('x^{2} - 6x + 7 < 0', '3-\\sqrt{2}', '3+\\sqrt{2}', true, true),
    QU('x^{2} - 2x - 2 > 0', '<', '1-\\sqrt{3}', '>', '1+\\sqrt{3}'),
    QB('x^{2} + 2x - 2 < 0', '-1-\\sqrt{3}', '-1+\\sqrt{3}', true, true),
    // Disguised quadratics — linear substitution
    QB('(x+2)^{2} - 3(x+2) - 10 \\leq 0', '-4', '3', false, false),
    QU('(3x-2)^{2} + (3x-2) - 2 > 0', '<', '0', '>', '1'),
    QU('(x-1)^{2} + 4(x-1) + 3 \\geq 0', '<=', '-2', '>=', '0'),
    QB('(2x+1)^{2} - 2(2x+1) - 8 < 0', '-3/2', '3/2', true, true),
    QB('(x+3)^{2} - 5(x+3) + 6 \\leq 0', '-1', '0', false, false),
    QB('(2x-1)^{2} - 5(2x-1) + 4 < 0', '1', '5/2', true, true),
    QU('(x-2)^{2} - (x-2) - 12 > 0', '<', '-1', '>', '6'),
    QB('(3x+1)^{2} - 4 \\leq 0', '-1', '1/3', false, false),
    // Rearrange then quadratic formula (irrational roots)
    QU('x^{2} > 4x - 2', '<', '2-\\sqrt{2}', '>', '2+\\sqrt{2}'),
    QB('x^{2} + 4 \\leq 6x', '3-\\sqrt{5}', '3+\\sqrt{5}', false, false),
    QB('2x - x^{2} > -1', '1-\\sqrt{2}', '1+\\sqrt{2}', true, true),
    QB('3x > x^{2} + 1', '\\frac{3-\\sqrt{5}}{2}', '\\frac{3+\\sqrt{5}}{2}', true, true),
    QU('x^{2} + 2x \\geq 2', '<=', '-1-\\sqrt{3}', '>=', '-1+\\sqrt{3}'),
], { toleranceDp: 2 });
