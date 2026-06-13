// levels/rationaliseBinomialDenominatorEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'rationaliseBinomialDenominatorEasy',
    'Further Rationalising the Denominator (Easy)',
    [
            // Unit numerator over a binomial with one variable surd
            {problem: "\\frac{1}{a+\\sqrt{x}}", answer: "\\frac{a-\\sqrt{x}}{a^2-x}"},
            {problem: "\\frac{1}{a-\\sqrt{x}}", answer: "\\frac{a+\\sqrt{x}}{a^2-x}"},
            {problem: "\\frac{1}{2+\\sqrt{x}}", answer: "\\frac{2-\\sqrt{x}}{4-x}"},
            {problem: "\\frac{1}{3-\\sqrt{x}}", answer: "\\frac{3+\\sqrt{x}}{9-x}"},
            {problem: "\\frac{1}{5+\\sqrt{x}}", answer: "\\frac{5-\\sqrt{x}}{25-x}"},
            {problem: "\\frac{1}{\\sqrt{x}+1}", answer: "\\frac{\\sqrt{x}-1}{x-1}"},
            {problem: "\\frac{1}{\\sqrt{x}-1}", answer: "\\frac{\\sqrt{x}+1}{x-1}"},
            {problem: "\\frac{1}{\\sqrt{x}+2}", answer: "\\frac{\\sqrt{x}-2}{x-4}"},
            {problem: "\\frac{1}{\\sqrt{x}-3}", answer: "\\frac{\\sqrt{x}+3}{x-9}"},
            // Unit numerator over a sum/difference of two variable surds
            {problem: "\\frac{1}{\\sqrt{x}+\\sqrt{y}}", answer: "\\frac{\\sqrt{x}-\\sqrt{y}}{x-y}"},
            {problem: "\\frac{1}{\\sqrt{x}-\\sqrt{y}}", answer: "\\frac{\\sqrt{x}+\\sqrt{y}}{x-y}"},
            // Integer numerator over a binomial with a variable surd
            {problem: "\\frac{2}{a+\\sqrt{x}}", answer: "\\frac{2a-2\\sqrt{x}}{a^2-x}"},
            {problem: "\\frac{3}{a-\\sqrt{x}}", answer: "\\frac{3a+3\\sqrt{x}}{a^2-x}"},
            {problem: "\\frac{2}{\\sqrt{x}+1}", answer: "\\frac{2\\sqrt{x}-2}{x-1}"},
            {problem: "\\frac{5}{\\sqrt{x}+2}", answer: "\\frac{5\\sqrt{x}-10}{x-4}"},
            {problem: "\\frac{c}{a+\\sqrt{x}}", answer: "\\frac{ac-c\\sqrt{x}}{a^2-x}"},
            // A handful of numeric questions for fluency (small conjugates)
            {problem: "\\frac{1}{1+\\sqrt{2}}", answer: "\\sqrt{2}-1"},
            {problem: "\\frac{1}{2+\\sqrt{3}}", answer: "2-\\sqrt{3}"},
            {problem: "\\frac{1}{2-\\sqrt{3}}", answer: "2+\\sqrt{3}"},
            {problem: "\\frac{1}{\\sqrt{5}+2}", answer: "\\sqrt{5}-2"},
            {problem: "\\frac{1}{\\sqrt{3}+1}", answer: "\\frac{\\sqrt{3}-1}{2}"},
            {problem: "\\frac{2}{1+\\sqrt{3}}", answer: "\\sqrt{3}-1"},
            {problem: "\\frac{1}{3+\\sqrt{5}}", answer: "\\frac{3-\\sqrt{5}}{4}"},
            {problem: "\\frac{3}{\\sqrt{5}-2}", answer: "3\\sqrt{5}+6"}
        ]
);
