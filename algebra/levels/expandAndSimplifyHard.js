// levels/expandAndSimplifyHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'expandAndSimplifyHard',
    'Expanding & Simplifying (Hard)',
    [
            // Two brackets, both with negative outer factors (double sign management)
            {problem: "-2(3x + 4) - 3(2x - 1)", answer: "-12x - 5"},
            {problem: "-(x + 3) - 3(x + 5)", answer: "-4x - 18"},
            {problem: "-2(2x - 3) - 3(x + 2)", answer: "-7x"},
            {problem: "-4(5 - x) - (2x - 5)", answer: "2x - 15"},
            {problem: "-4(2y + 3) - 3(y - 2)", answer: "-11y - 6"},

            // Two-variable expressions
            {problem: "b + x - (b - x)", answer: "2x"},
            {problem: "(2x - 3y) - (3x - 2y)", answer: "-x - y"},
            {problem: "3(2a - 3b) - 2(a + 2b)", answer: "4a - 13b"},
            {problem: "4(x - y) - 6(x + y)", answer: "-2x - 10y"},
            {problem: "3(x + 2y) - (x - y)", answer: "2x + 7y"},
            {problem: "3(2a - 3b) - 4(-a - 2b)", answer: "10a - b"},
            {problem: "5(2a - 3b) - 2(a - 4b)", answer: "8a - 7b"},
            {problem: "-3(a + 2b) - (2a - b)", answer: "-5a - 5b"},
            {problem: "4(3x + y) - 2(5x - 3y)", answer: "2x + 10y"},
            {problem: "6(a - 2b) - 4(3a + b)", answer: "-6a - 16b"},
            {problem: "-3(2x - y) + 2(x + 3y)", answer: "-4x + 9y"},

            // Quadratic terms in the result
            {problem: "3(x^2 + 2y) - 2(x^2 - 3y)", answer: "x^2 + 12y"},
            {problem: "2x(x + 3y) + 3x(x - y)", answer: "5x^2 + 3xy"},
            {problem: "5(x^2 - 2x) - 3(x^2 + x)", answer: "2x^2 - 13x"},
            {problem: "-2(3a^2 + 4a) + 5(a^2 - 2a)", answer: "-a^2 - 18a"},

            // Variable outer factor producing quadratic, then collect
            {problem: "3x(x - 4) + 2x", answer: "3x^2 - 10x"},
            {problem: "2x + 3x(x - 4)", answer: "3x^2 - 10x"},
            {problem: "-2x + 3x(x - 4)", answer: "3x^2 - 14x"},
            {problem: "-3x(x - 4) + 2x", answer: "-3x^2 + 14x"},
            {problem: "2x - 3x(x - 4)", answer: "-3x^2 + 14x"},
            {problem: "-2x - 3x(x - 4)", answer: "-3x^2 + 10x"},

            // Three or more separate expressions combined
            {problem: "2x^2 + 3(x^2 - 4x) - (2x^2 + x)", answer: "3x^2 - 13x"},
            {problem: "4y^2 - 2(y^2 + 3y) + 5(y - 1)", answer: "2y^2 - y - 5"},
            {problem: "3(a^2 + 2a) - 2(a^2 - a) + 4a", answer: "a^2 + 12a"},
            {problem: "5x^2 - 3(x^2 - 2x) - 2(x + 3)", answer: "2x^2 + 4x - 6"},
        ]
);
