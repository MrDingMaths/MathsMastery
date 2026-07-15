import { BaseLevel } from './BaseLevel.js';
const Q = (problem, roots) => ({ problem, inputs: { vars: ['x'], multi: true }, answer: { x: roots } });
export default new BaseLevel('simpleQuadraticHard', 'Simple Quadratic (Hard)', [
    // Migrated from Medium (4-op: collect x², move constant, divide, root)
    Q('7 - x^{2} = 2x^{2} + 4', ['1', '-1']),
    // Kept from original Hard (x² on both sides + constant)
    Q('5x^{2} + 3 = 3x^{2} + 15', ['\\sqrt{6}', '-\\sqrt{6}']),
    // Type A: ax² + c = bx² + d
    Q('3x^{2} + 1 = x^{2} + 9', ['2', '-2']),
    Q('5x^{2} - 3 = 2x^{2} + 24', ['3', '-3']),
    Q('6x^{2} - 1 = 3x^{2} + 11', ['2', '-2']),
    Q('2x^{2} + 7 = x^{2} + 15', ['2\\sqrt{2}', '-2\\sqrt{2}']),
    Q('3x^{2} + 5 = x^{2} + 11', ['\\sqrt{3}', '-\\sqrt{3}']),
    Q('4x^{2} - 2 = 2x^{2} + 16', ['3', '-3']),
    Q('7x^{2} + 3 = 4x^{2} + 12', ['\\sqrt{3}', '-\\sqrt{3}']),
    Q('6x^{2} + 4 = 2x^{2} + 20', ['2', '-2']),
    Q('5x^{2} + 2 = 2x^{2} + 14', ['2', '-2']),
    Q('4x^{2} - 5 = x^{2} + 22', ['3', '-3']),
    Q('2x^{2} + 1 = x^{2} + 9', ['2\\sqrt{2}', '-2\\sqrt{2}']),
    // Type B: c − ax² = bx² + d  (negative x² on one side)
    Q('15 - x^{2} = 4x^{2}', ['\\sqrt{3}', '-\\sqrt{3}']),
    Q('12 - 2x^{2} = x^{2} - 12', ['2\\sqrt{2}', '-2\\sqrt{2}']),
    Q('1 - 2x^{2} = -3x^{2} + 9', ['2\\sqrt{2}', '-2\\sqrt{2}']),
    Q('6 - x^{2} = 3x^{2} - 18', ['\\sqrt{6}', '-\\sqrt{6}']),
    Q('20 + x^{2} = 4x^{2} + 2', ['\\sqrt{6}', '-\\sqrt{6}']),
    // Type C: ax² + bx + c = dx² + bx + e  (cancel x terms, then collect x²)
    Q('3x^{2} + 4x - 1 = x^{2} + 4x + 7', ['2', '-2']),
    Q('5x^{2} - 2x + 3 = 2x^{2} - 2x + 12', ['\\sqrt{3}', '-\\sqrt{3}']),
    Q('4x^{2} + 3x = x^{2} + 3x + 9', ['\\sqrt{3}', '-\\sqrt{3}']),
    Q('2x^{2} + x + 5 = x^{2} + x + 13', ['2\\sqrt{2}', '-2\\sqrt{2}']),
    Q('6x^{2} - x - 2 = 4x^{2} - x + 16', ['3', '-3']),
    Q('2x^{2} + 3x = 3x^{2} + 3x - 18', ['3\\sqrt{2}', '-3\\sqrt{2}']),
    Q('4x^{2} - x = 2x^{2} - x + 10', ['\\sqrt{5}', '-\\sqrt{5}']),
    Q('5x^{2} + 2x = 3x^{2} + 2x + 8', ['2', '-2']),
    Q('3x^{2} + 5x - 4 = x^{2} + 5x + 12', ['2\\sqrt{2}', '-2\\sqrt{2}']),
    Q('4x^{2} - 3x - 1 = 2x^{2} - 3x + 15', ['2\\sqrt{2}', '-2\\sqrt{2}']),
    Q('5x^{2} - 2x + 1 = 3x^{2} - 2x + 11', ['\\sqrt{5}', '-\\sqrt{5}']),
    Q('6x^{2} + x - 4 = 4x^{2} + x + 14', ['3', '-3']),
], { toleranceDp: 2 });
