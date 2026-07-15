// levels/rationaliseTheDenominatorMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'rationaliseTheDenominatorMedium',
    'Rationalising the Denominator (Medium)',
    [
            // Coefficient in the denominator, then rationalise
            {problem: "\\frac{10}{2\\sqrt{x}}", answer: "\\frac{5\\sqrt{x}}{x}"},
            {problem: "\\frac{6}{3\\sqrt{x}}", answer: "\\frac{2\\sqrt{x}}{x}"},
            {problem: "\\frac{8}{4\\sqrt{a}}", answer: "\\frac{2\\sqrt{a}}{a}"},
            {problem: "\\frac{12}{2\\sqrt{x}}", answer: "\\frac{6\\sqrt{x}}{x}"},
            {problem: "\\frac{a}{2\\sqrt{x}}", answer: "\\frac{a\\sqrt{x}}{2x}"},
            // Coefficient surd over coefficient surd
            {problem: "\\frac{2\\sqrt{x}}{3\\sqrt{y}}", answer: "\\frac{2\\sqrt{xy}}{3y}"},
            {problem: "\\frac{3\\sqrt{x}}{\\sqrt{y}}", answer: "\\frac{3\\sqrt{xy}}{y}"},
            {problem: "\\frac{4\\sqrt{a}}{5\\sqrt{b}}", answer: "\\frac{4\\sqrt{ab}}{5b}"},
            {problem: "\\frac{\\sqrt{y}}{2\\sqrt{x}}", answer: "\\frac{\\sqrt{xy}}{2x}"},
            {problem: "\\frac{5\\sqrt{x}}{2\\sqrt{y}}", answer: "\\frac{5\\sqrt{xy}}{2y}"},
            // Variable numerator over a variable surd that simplifies
            {problem: "\\frac{x}{\\sqrt{2x}}", answer: "\\frac{\\sqrt{2x}}{2}"},
            {problem: "\\frac{a}{\\sqrt{3a}}", answer: "\\frac{\\sqrt{3a}}{3}"},
            {problem: "\\frac{2x}{\\sqrt{2x}}", answer: "\\sqrt{2x}"},
            // Denominator must be simplified first
            {problem: "\\frac{6}{\\sqrt{2x}}", answer: "\\frac{3\\sqrt{2x}}{x}"},
            {problem: "\\frac{6}{\\sqrt{18x}}", answer: "\\frac{\\sqrt{2x}}{x}"},
            {problem: "\\frac{10}{\\sqrt{50x}}", answer: "\\frac{\\sqrt{2x}}{x}"},
            {problem: "\\frac{3}{\\sqrt{5x}}", answer: "\\frac{3\\sqrt{5x}}{5x}"},
            // Surd quotient reducing to a numeric surd
            {problem: "\\frac{6\\sqrt{x}}{2\\sqrt{2x}}", answer: "\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\frac{\\sqrt{x}}{\\sqrt{3x}}", answer: "\\frac{\\sqrt{3}}{3}"},
            {problem: "\\frac{4\\sqrt{x}}{\\sqrt{2x}}", answer: "2\\sqrt{2}"},
            // A handful of numeric questions for fluency
            {problem: "\\frac{10}{2\\sqrt{3}}", answer: "\\frac{5\\sqrt{3}}{3}"},
            {problem: "\\frac{6}{2\\sqrt{2}}", answer: "\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\frac{12}{3\\sqrt{2}}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{5}{2\\sqrt{6}}", answer: "\\frac{5\\sqrt{6}}{12}"},
            {problem: "\\frac{6}{\\sqrt{18}}", answer: "\\sqrt{2}"},
            {problem: "\\frac{2\\sqrt{3}}{3\\sqrt{2}}", answer: "\\frac{\\sqrt{6}}{3}"},
            {problem: "\\frac{2\\sqrt{5}}{3\\sqrt{2}}", answer: "\\frac{\\sqrt{10}}{3}"},
            {problem: "\\frac{5}{3\\sqrt{6}}", answer: "\\frac{5\\sqrt{6}}{18}"}
        ]
);
