// levels/rationaliseBinomialDenominatorMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'rationaliseBinomialDenominatorMedium',
    'Further Rationalising the Denominator (Medium)',
    [
            // Variable surd numerator over a binomial
            {problem: "\\frac{\\sqrt{x}}{a+\\sqrt{x}}", answer: "\\frac{a\\sqrt{x}-x}{a^2-x}"},
            {problem: "\\frac{\\sqrt{x}}{a-\\sqrt{x}}", answer: "\\frac{a\\sqrt{x}+x}{a^2-x}"},
            {problem: "\\frac{\\sqrt{x}}{\\sqrt{x}+1}", answer: "\\frac{x-\\sqrt{x}}{x-1}"},
            {problem: "\\frac{\\sqrt{x}}{\\sqrt{x}-2}", answer: "\\frac{x+2\\sqrt{x}}{x-4}"},
            {problem: "\\frac{\\sqrt{x}}{3-\\sqrt{x}}", answer: "\\frac{3\\sqrt{x}+x}{9-x}"},
            {problem: "\\frac{2\\sqrt{x}}{a+\\sqrt{x}}", answer: "\\frac{2a\\sqrt{x}-2x}{a^2-x}"},
            // Two-variable surd combinations
            {problem: "\\frac{\\sqrt{x}}{\\sqrt{x}+\\sqrt{y}}", answer: "\\frac{x-\\sqrt{xy}}{x-y}"},
            {problem: "\\frac{\\sqrt{x}}{\\sqrt{x}-\\sqrt{y}}", answer: "\\frac{x+\\sqrt{xy}}{x-y}"},
            {problem: "\\frac{2\\sqrt{x}}{\\sqrt{x}+\\sqrt{y}}", answer: "\\frac{2x-2\\sqrt{xy}}{x-y}"},
            // Binomial numerator over its conjugate
            {problem: "\\frac{a+\\sqrt{x}}{a-\\sqrt{x}}", answer: "\\frac{a^2+2a\\sqrt{x}+x}{a^2-x}"},
            {problem: "\\frac{\\sqrt{x}+1}{\\sqrt{x}-1}", answer: "\\frac{x+2\\sqrt{x}+1}{x-1}"},
            {problem: "\\frac{\\sqrt{x}-2}{\\sqrt{x}+2}", answer: "\\frac{x-4\\sqrt{x}+4}{x-4}"},
            {problem: "\\frac{\\sqrt{x}+\\sqrt{y}}{\\sqrt{x}-\\sqrt{y}}", answer: "\\frac{x+2\\sqrt{xy}+y}{x-y}"},
            {problem: "\\frac{\\sqrt{x}-\\sqrt{y}}{\\sqrt{x}+\\sqrt{y}}", answer: "\\frac{x-2\\sqrt{xy}+y}{x-y}"},
            // Binomial numerator over a different binomial
            {problem: "\\frac{1+\\sqrt{x}}{a+\\sqrt{x}}", answer: "\\frac{a+a\\sqrt{x}-\\sqrt{x}-x}{a^2-x}"},
            {problem: "\\frac{\\sqrt{x}+1}{\\sqrt{x}+2}", answer: "\\frac{x-\\sqrt{x}-2}{x-4}"},
            // A handful of numeric questions for fluency (kept small)
            {problem: "\\frac{2+\\sqrt{3}}{2-\\sqrt{3}}", answer: "7+4\\sqrt{3}"},
            {problem: "\\frac{\\sqrt{2}}{3+\\sqrt{2}}", answer: "\\frac{3\\sqrt{2}-2}{7}"},
            {problem: "\\frac{\\sqrt{3}}{2+\\sqrt{3}}", answer: "2\\sqrt{3}-3"},
            {problem: "\\frac{2\\sqrt{2}}{1+\\sqrt{2}}", answer: "4-2\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{5}-\\sqrt{2}}{\\sqrt{5}+\\sqrt{2}}", answer: "\\frac{7-2\\sqrt{10}}{3}"},
            {problem: "\\frac{3+\\sqrt{5}}{2+\\sqrt{5}}", answer: "\\sqrt{5}-1"},
            {problem: "\\frac{\\sqrt{6}}{3-\\sqrt{6}}", answer: "\\sqrt{6}+2"}
        ]
);
