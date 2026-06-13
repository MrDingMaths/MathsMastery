// levels/rationaliseBinomialDenominatorHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'rationaliseBinomialDenominatorHard',
    'Further Rationalising the Denominator (Hard)',
    [
            // General algebraic conjugates
            {problem: "\\frac{1}{a+\\sqrt{b}}", answer: "\\frac{a-\\sqrt{b}}{a^2-b}"},
            {problem: "\\frac{1}{a\\sqrt{b}-x}", answer: "\\frac{a\\sqrt{b}+x}{a^2b-x^2}"},
            {problem: "\\frac{1}{a\\sqrt{b}+x\\sqrt{y}}", answer: "\\frac{a\\sqrt{b}-x\\sqrt{y}}{a^2b-x^2y}"},
            {problem: "\\frac{1}{2\\sqrt{x}-\\sqrt{y}}", answer: "\\frac{2\\sqrt{x}+\\sqrt{y}}{4x-y}"},
            {problem: "\\frac{c}{a\\sqrt{x}+b}", answer: "\\frac{ac\\sqrt{x}-bc}{a^2x-b^2}"},
            // Conjugate squares (binomial over its conjugate)
            {problem: "\\frac{a-\\sqrt{b}}{a+\\sqrt{b}}", answer: "\\frac{a^2-2a\\sqrt{b}+b}{a^2-b}"},
            {problem: "\\frac{a+\\sqrt{b}}{a-\\sqrt{b}}", answer: "\\frac{a^2+2a\\sqrt{b}+b}{a^2-b}"},
            {problem: "\\frac{\\sqrt{a}+\\sqrt{b}}{\\sqrt{a}-\\sqrt{b}}", answer: "\\frac{a+2\\sqrt{ab}+b}{a-b}"},
            {problem: "\\frac{\\sqrt{a}-\\sqrt{b}}{\\sqrt{a}+\\sqrt{b}}", answer: "\\frac{a-2\\sqrt{ab}+b}{a-b}"},
            // Variable surd numerator over a binomial
            {problem: "\\frac{\\sqrt{x}}{a+\\sqrt{x}}", answer: "\\frac{a\\sqrt{x}-x}{a^2-x}"},
            {problem: "\\frac{x}{\\sqrt{x}+\\sqrt{y}}", answer: "\\frac{x\\sqrt{x}-x\\sqrt{y}}{x-y}"},
            // Sums and differences of two conjugate fractions
            {problem: "\\frac{1}{\\sqrt{x}+\\sqrt{y}}+\\frac{1}{\\sqrt{x}-\\sqrt{y}}", answer: "\\frac{2\\sqrt{x}}{x-y}"},
            {problem: "\\frac{1}{\\sqrt{x}+\\sqrt{y}}-\\frac{1}{\\sqrt{x}-\\sqrt{y}}", answer: "\\frac{-2\\sqrt{y}}{x-y}"},
            {problem: "\\frac{1}{\\sqrt{a}}-\\frac{1}{\\sqrt{b}}", answer: "\\frac{b\\sqrt{a}-a\\sqrt{b}}{ab}"},
            // FOIL-style numerator over a different binomial
            {problem: "\\frac{\\sqrt{x}+\\sqrt{y}}{\\sqrt{x}+2\\sqrt{y}}", answer: "\\frac{x-\\sqrt{xy}-2y}{x-4y}"},
            // A handful of numeric questions for fluency (kept small)
            {problem: "\\frac{\\sqrt{6}+\\sqrt{2}}{\\sqrt{6}-\\sqrt{2}}", answer: "2+\\sqrt{3}"},
            {problem: "\\frac{1}{1+\\sqrt{2}}+\\frac{1}{1-\\sqrt{2}}", answer: "-2"},
            {problem: "\\frac{\\sqrt{3}+1}{\\sqrt{3}-1}-\\frac{\\sqrt{3}-1}{\\sqrt{3}+1}", answer: "2\\sqrt{3}"},
            {problem: "\\frac{3\\sqrt{2}}{\\sqrt{6}-\\sqrt{3}}", answer: "2\\sqrt{3}+\\sqrt{6}"},
            {problem: "\\frac{2\\sqrt{3}+1}{2\\sqrt{3}-1}", answer: "\\frac{13+4\\sqrt{3}}{11}"}
        ]
);
