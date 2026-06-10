import { BaseLevel } from './BaseLevel.js';
// Union: x < a OR x > b  — student types "x < a, x > b" in one field
const QU = (problem, ineq1, rhs1, ineq2, rhs2) => ({ problem, inputs: { vars: ['x'], type: 'ineq-union' }, answer: { x: { ineq: 'union', parts: [{ ineq: ineq1, rhs: rhs1 }, { ineq: ineq2, rhs: rhs2 }] } } });
// Between: lo < x < hi — student types "lo < x < hi" in one field
const QB = (problem, lo, hi, loStrict, hiStrict) => ({ problem, inputs: { vars: ['x'], type: 'ineq' }, answer: { x: { ineq: 'between', lo, hi, loStrict, hiStrict } } });
export default new BaseLevel('quadraticInequalitiesEasy', 'Quadratic Inequalities (Easy)', []);
