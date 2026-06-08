// levels/quadraticFactorisableEasy.js
import { BaseLevel } from './BaseLevel.js';

// Each question is a quadratic equation = 0 with two integer roots, presented
// as a single MathQuill input that accepts comma-separated values or ±.
const Q = (problem, roots) => ({
    problem,
    inputs: { vars: ['x'], multi: true },
    answer: { x: roots }
});

export default new BaseLevel(
    'quadraticFactorisableEasy',
    'Factorisable Quadratic (Easy)',
    [
        Q('x^2 - 5x + 6 = 0',  ['2', '3']),
        Q('x^2 - 7x + 12 = 0', ['3', '4']),
        Q('x^2 - 6x + 8 = 0',  ['2', '4']),
        Q('x^2 - 8x + 15 = 0', ['3', '5']),
        Q('x^2 + 5x + 6 = 0',  ['-2', '-3']),
        Q('x^2 + 7x + 10 = 0', ['-2', '-5']),
        Q('x^2 - x - 6 = 0',   ['3', '-2']),
        Q('x^2 + x - 12 = 0',  ['3', '-4']),
        Q('x^2 - 2x - 8 = 0',  ['4', '-2']),
        Q('x^2 + 2x - 15 = 0', ['3', '-5']),
        Q('x^2 - 3x - 10 = 0', ['5', '-2']),
        Q('x^2 - 4 = 0',       ['2', '-2']),
        Q('x^2 - 9 = 0',       ['3', '-3']),
        Q('x^2 - 16 = 0',      ['4', '-4']),
        Q('x^2 - 3x = 0',      ['0', '3']),
        Q('x^2 + 4x = 0',      ['0', '-4']),
        Q('x^2 - 5x = 0',      ['0', '5']),
        Q('x^2 - 4x + 4 = 0',  ['2', '2']),
        Q('x^2 + 6x + 9 = 0',  ['-3', '-3']),
        Q('x^2 - 10x + 25 = 0',['5', '5']),
    ]
);
