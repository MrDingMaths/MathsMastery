// levels/expandBinomialProductsEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'expandBinomialProductsEasy',
    'Expanding Double Brackets (Easy)',
    [
            
            // Basic (x+a)(x+b) patterns - both positive
            {problem: "(x+5)(x+3)", answer: "x^2 + 8x + 15"},
            {problem: "(x+3)(x+5)", answer: "x^2 + 8x + 15"},
            {problem: "(x+2)(x+8)", answer: "x^2 + 10x + 16"},
            {problem: "(x+3)(x+4)", answer: "x^2 + 7x + 12"},
            {problem: "(x+7)(x+5)", answer: "x^2 + 12x + 35"},
            {problem: "(x+2)(x+5)", answer: "x^2 + 7x + 10"},
            {problem: "(x+1)(x+7)", answer: "x^2 + 8x + 7"},
            {problem: "(x+10)(x+2)", answer: "x^2 + 12x + 20"},
            {problem: "(x+4)(x+12)", answer: "x^2 + 16x + 48"},
            
            // Mixed signs - one positive, one negative
            {problem: "(x-3)(x+5)", answer: "x^2 + 2x - 15"},
            {problem: "(x+3)(x-5)", answer: "x^2 - 2x - 15"},
            {problem: "(x+8)(x-3)", answer: "x^2 + 5x - 24"},
            {problem: "(x+6)(x-5)", answer: "x^2 + x - 30"},
            {problem: "(x-2)(x+3)", answer: "x^2 + x - 6"},
            {problem: "(x-7)(x+3)", answer: "x^2 - 4x - 21"},
            {problem: "(x+3)(x-4)", answer: "x^2 - x - 12"},
            {problem: "(x+4)(x-8)", answer: "x^2 - 4x - 32"},
            {problem: "(x-6)(x+2)", answer: "x^2 - 4x - 12"},
            {problem: "(x-1)(x+10)", answer: "x^2 + 9x - 10"},
            
            // Both negative
            {problem: "(x-3)(x-5)", answer: "x^2 - 8x + 15"},
            {problem: "(x-3)(x-3)", answer: "x^2 - 6x + 9"},
            {problem: "(x-4)(x-6)", answer: "x^2 - 10x + 24"},
            {problem: "(x-8)(x-5)", answer: "x^2 - 13x + 40"},
            {problem: "(x-1)(x-2)", answer: "x^2 - 3x + 2"},
            {problem: "(x-4)(x-5)", answer: "x^2 - 9x + 20"},
            
            // Perfect squares
            {problem: "(x-3)^2", answer: "x^2 - 6x + 9"},
            {problem: "(x+3)^2", answer: "x^2 + 6x + 9"},
            {problem: "(x+6)^2", answer: "x^2 + 12x + 36"},
            
            // Difference of squares
            {problem: "(x+6)(x-6)", answer: "x^2 - 36"},
            {problem: "(x+5)(x-5)", answer: "x^2 - 25"},
            
            // Different variables
            {problem: "(b+3)(b+4)", answer: "b^2 + 7b + 12"},
            {problem: "(x+8)(x+7)", answer: "x^2 + 15x + 56"},
            {problem: "(a+1)(a+7)", answer: "a^2 + 8a + 7"},
            {problem: "(y+10)(y+2)", answer: "y^2 + 12y + 20"},            
            // Additional easy questions to reach good coverage
            {problem: "(x+1)(x+1)", answer: "x^2 + 2x + 1"},
            {problem: "(x+2)(x+2)", answer: "x^2 + 4x + 4"},
            {problem: "(x+4)(x+4)", answer: "x^2 + 8x + 16"},
            {problem: "(x-1)(x-1)", answer: "x^2 - 2x + 1"},
            {problem: "(x-2)(x-2)", answer: "x^2 - 4x + 4"},
            {problem: "(x+1)(x+2)", answer: "x^2 + 3x + 2"},
            {problem: "(x+1)(x+3)", answer: "x^2 + 4x + 3"},
            {problem: "(x+1)(x+4)", answer: "x^2 + 5x + 4"},
            {problem: "(x+1)(x+5)", answer: "x^2 + 6x + 5"},
            {problem: "(x+1)(x+6)", answer: "x^2 + 7x + 6"},
            {problem: "(x+2)(x+3)", answer: "x^2 + 5x + 6"},
            {problem: "(x+2)(x+4)", answer: "x^2 + 6x + 8"},
            {problem: "(x+2)(x+6)", answer: "x^2 + 8x + 12"},
            {problem: "(x+3)(x+6)", answer: "x^2 + 9x + 18"},
            {problem: "(x-1)(x+1)", answer: "x^2 - 1"},
            {problem: "(x-2)(x+2)", answer: "x^2 - 4"},
            {problem: "(x-3)(x+3)", answer: "x^2 - 9"},
            {problem: "(x-4)(x+4)", answer: "x^2 - 16"},
            {problem: "(x-1)(x-3)", answer: "x^2 - 4x + 3"},
            {problem: "(x-1)(x-4)", answer: "x^2 - 5x + 4"},
            {problem: "(x-1)(x-5)", answer: "x^2 - 6x + 5"},
            {problem: "(x-2)(x-3)", answer: "x^2 - 5x + 6"},
            {problem: "(x-2)(x-4)", answer: "x^2 - 6x + 8"},
            {problem: "(x-2)(x-6)", answer: "x^2 - 8x + 12"},
            {problem: "(x-3)(x-6)", answer: "x^2 - 9x + 18"},

            // Perfect squares with constant adjustment
            {problem: "(x+5)^2 - 7", answer: "x^2 + 10x + 18"},
            {problem: "(x-7)^2 - 9", answer: "x^2 - 14x + 40"},
        ]
);
