import { BaseLevel } from './BaseLevel.js';
const QU = (problem, ineq1, rhs1, ineq2, rhs2) => ({ problem, inputs: { vars: ['x'], type: 'ineq-union' }, answer: { x: { ineq: 'union', parts: [{ ineq: ineq1, rhs: rhs1 }, { ineq: ineq2, rhs: rhs2 }] } } });
const QB = (problem, lo, hi, loStrict, hiStrict) => ({ problem, inputs: { vars: ['x'], type: 'ineq' }, answer: { x: { ineq: 'between', lo, hi, loStrict, hiStrict } } });
export default new BaseLevel('quadraticInequalitiesMedium', 'Quadratic Inequalities (Medium)', []);
