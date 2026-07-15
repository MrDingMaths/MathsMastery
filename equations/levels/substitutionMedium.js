import { BaseLevel } from './BaseLevel.js';
const Q = (eq1, eq2, x, y) => ({ problem: [eq1, eq2], inputs: { vars: ['x', 'y'] }, answer: { x, y } });
export default new BaseLevel('substitutionMedium', 'Substitution (Medium)', [
    // existing
    Q('y=30+6x', 'y=-2x+18', '-3/2', '21'),
    Q('x=2y+3', '11y-5x=-14', '5', '1'),
    Q('x=3y-5', '3y+5x=11', '1', '2'),
    Q('y=5-2x', 'y=\\frac{3}{2}x-2', '2', '1'),
    Q('y=5x-1', 'y=\\frac{11-3x}{2}', '1', '4'),
    Q('y+2x=-18', 'y+6x=30', '12', '-42'),
    Q('2x+y=-18', '6x-y=-30', '-6', '-6'),
    Q('2x-y=9', '3x-7y=19', '4', '-1'),
    Q('2x+3y=47', '4x-y=45', '13', '7'),
    Q('y=x^2+3', 'y=2x+2', '1', '4'),
    Q('y=4x^2+20', 'y=-20x-5', '-5/2', '45'),
    // new — rearrange one equation first (ax+by=c → y=...)
    Q('3x-y=5', '2x+3y=18', '3', '4'),
    Q('x-y=3', '3x+2y=19', '5', '2'),
    Q('x+y=7', '3x-2y=6', '4', '3'),
    Q('2x+y=10', '3x-2y=15', '5', '0'),
    Q('3x+y=14', '2x-y=1', '3', '5'),
    // new — x= form requiring multi-step expansion
    Q('x=3y+1', '2x-y=12', '7', '2'),
    Q('x=5y-4', 'x+2y=10', '6', '2'),
    // new — fraction coefficients in one equation
    Q('y=4x-1', 'y=\\frac{x+5}{2}', '1', '3'),
    Q('y=3x-1', 'y=\\frac{5x+3}{4}', '1', '2'),
    Q('y=2x+5', 'y=\\frac{3x+11}{2}', '1', '7'),
    Q('y=4x+3', 'y=\\frac{6x+1}{2}', '-5/2', '-7'),
    // new — both equations ax+by=c form (rearrange either)
    Q('2x+5y=11', 'x-2y=1', '3', '1'),
    Q('x-3y=1', '4x+y=30', '7', '2'),
    Q('x=2y+1', '3x-4y=9', '7', '3'),
    Q('x=y-4', '3x+y=8', '1', '5'),
    // new — fraction slope
    Q('y=\\frac{1}{2}x+3', 'y=2x-3', '4', '5'),
    Q('y=\\frac{2}{3}x+1', 'y=2x-7', '6', '5'),
    // new — x= form with y=0
    Q('x=4y+3', '2x-3y=6', '3', '0'),
    // new — rearrange, integer answers
    Q('y=3x-5', '2x-y=1', '4', '7'),
]);
