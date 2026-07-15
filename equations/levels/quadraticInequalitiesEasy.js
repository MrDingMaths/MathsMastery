import { BaseLevel } from './BaseLevel.js';
const QU = (problem, ineq1, rhs1, ineq2, rhs2) => ({ problem, inputs: { vars: ['x'], type: 'ineq-union' }, answer: { x: { ineq: 'union', parts: [{ ineq: ineq1, rhs: rhs1 }, { ineq: ineq2, rhs: rhs2 }] } } });
const QB = (problem, lo, hi, loStrict, hiStrict) => ({ problem, inputs: { vars: ['x'], type: 'ineq', showUnionHint: true }, answer: { x: { ineq: 'between', lo, hi, loStrict, hiStrict } } });
export default new BaseLevel('quadraticInequalitiesEasy', 'Quadratic Inequalities (Easy)', [
    // x² op k  (square-root both sides, no factorising)
    QU('x^{2} > 4', '<', '-2', '>', '2'),
    QU('x^{2} \\geq 9', '<=', '-3', '>=', '3'),
    QB('x^{2} < 25', '-5', '5', true, true),
    QB('x^{2} \\leq 16', '-4', '4', false, false),
    QU('x^{2} > 2', '<', '-\\sqrt{2}', '>', '\\sqrt{2}'),
    QU('x^{2} \\geq 5', '<=', '-\\sqrt{5}', '>=', '\\sqrt{5}'),
    QB('x^{2} < 3', '-\\sqrt{3}', '\\sqrt{3}', true, true),
    QB('x^{2} \\leq 7', '-\\sqrt{7}', '\\sqrt{7}', false, false),
    // ax² op k  (divide first, then square-root)
    QU('4x^{2} > 36', '<', '-3', '>', '3'),
    QB('3x^{2} \\leq 75', '-5', '5', false, false),
    QB('2x^{2} < 18', '-3', '3', true, true),
    QU('5x^{2} \\geq 20', '<=', '-2', '>=', '2'),
    QU('3x^{2} > 6', '<', '-\\sqrt{2}', '>', '\\sqrt{2}'),
    // Already-factorised (x−a)(x−b) op 0  (read off roots, sketch parabola)
    QU('(x-2)(x-5) > 0', '<', '2', '>', '5'),
    QU('(x+1)(x-3) \\geq 0', '<=', '-1', '>=', '3'),
    QB('(x-1)(x-4) < 0', '1', '4', true, true),
    QB('(x+2)(x-3) \\leq 0', '-2', '3', false, false),
    QU('(x+4)(x+1) > 0', '<', '-4', '>', '-1'),
    QU('(x-3)(x+5) \\geq 0', '<=', '-5', '>=', '3'),
    QB('(x-2)(x+6) < 0', '-6', '2', true, true),
    QB('(x+3)(x-7) \\leq 0', '-3', '7', false, false),
    // Negative leading coefficient  (downward parabola flips the region)
    QB('-(x-1)(x+3) \\geq 0', '-3', '1', false, false),
    QB('-(x+2)(x-4) > 0', '-2', '4', true, true),
    QU('-(x-3)(x+1) \\leq 0', '<=', '-1', '>=', '3'),
    QU('-(x+2)(x-5) < 0', '<', '-2', '>', '5'),
], { toleranceDp: 2 });
