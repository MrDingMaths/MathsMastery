import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('twoStepNegCoeffMedium', 'Two Step with Negative Coefficients (Medium)', [
    // Paired equivalent forms (coeff −1)
    Q('-x + 5 = 12', '-7'),
    Q('5 - x = 12', '-7'),
    Q('-x - 9 = 6', '-15'),
    Q('-9 - x = 6', '-15'),
    Q('12 - x = 15', '-3'),
    Q('-2 - x = 9', '-11'),
    Q('2 = -x + 9', '7'),
    Q('-8 = 19 - x', '27'),
    // Single-step neg coeff −1 forms
    Q('17 - x = 7', '10'),
    Q('-1 = -2 - x', '-1'),
    Q('2 - x = 5', '-3'),
    Q('-x - 5 = 14', '-19'),
    Q('15 = -x - 2', '-17'),
    Q('2 = 9 - x', '7'),
    Q('2 - x = 3', '-1'),
    Q('-x - 4 = 5', '-9'),
    Q('6 = 4 - x', '-2'),
    Q('7 = -x - 2', '-9'),
    Q('-x - 1 = -6', '5'),
    Q('-2 = 7 - x', '9'),
    // Two-step neg coeff
    Q('-2x + 10 = 30', '-10'),
    Q('31 = 6 - 5x', '-5'),
    Q('35 = -6x + 5', '-5'),
    Q('16 - 4x = 8', '2'),
    Q('16 = -3x + 7', '-3'),
    Q('13 = 5 - 2x', '-4'),
    Q('4 - 7x = 32', '-4'),
    Q('1 - 2x = 9', '-4'),
    Q('45 = -3x + 15', '-10'),
    Q('-5x + 1 = -9', '2'),
    Q('2 = -5x + 7', '1'),
    // Neg fractional coefficient, large integer answer (from Hard)
    Q('-\\frac{5x}{11} = 15', '-33'),
    // Migrated from mixedTwoStepMedium
    Q('11 - 2x = 15', '-2'),
    Q('-7 - 15x = 23', '-2'),
    Q('30 = 6 - 3x', '-8'),
    Q('30 = -3x - 6', '-12'),
]);
