// levels/rationaliseTheDenominatorEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'rationaliseTheDenominatorEasy',
    'Rationalising the Denominator (Easy)',
    [
            // Integer numerator over a single variable surd
            {problem: "\\frac{1}{\\sqrt{x}}", answer: "\\frac{\\sqrt{x}}{x}"},
            {problem: "\\frac{2}{\\sqrt{x}}", answer: "\\frac{2\\sqrt{x}}{x}"},
            {problem: "\\frac{3}{\\sqrt{a}}", answer: "\\frac{3\\sqrt{a}}{a}"},
            {problem: "\\frac{5}{\\sqrt{x}}", answer: "\\frac{5\\sqrt{x}}{x}"},
            {problem: "\\frac{1}{\\sqrt{a}}", answer: "\\frac{\\sqrt{a}}{a}"},
            {problem: "\\frac{4}{\\sqrt{y}}", answer: "\\frac{4\\sqrt{y}}{y}"},
            {problem: "\\frac{7}{\\sqrt{x}}", answer: "\\frac{7\\sqrt{x}}{x}"},
            // Variable numerator cancels
            {problem: "\\frac{x}{\\sqrt{x}}", answer: "\\sqrt{x}"},
            {problem: "\\frac{a}{\\sqrt{a}}", answer: "\\sqrt{a}"},
            {problem: "\\frac{2x}{\\sqrt{x}}", answer: "2\\sqrt{x}"},
            {problem: "\\frac{3a}{\\sqrt{a}}", answer: "3\\sqrt{a}"},
            // Numeric coefficient with variable surd numerator
            {problem: "\\frac{a}{\\sqrt{x}}", answer: "\\frac{a\\sqrt{x}}{x}"},
            {problem: "\\frac{b}{\\sqrt{a}}", answer: "\\frac{b\\sqrt{a}}{a}"},
            // Surd over surd (variables)
            {problem: "\\frac{\\sqrt{x}}{\\sqrt{y}}", answer: "\\frac{\\sqrt{xy}}{y}"},
            {problem: "\\frac{\\sqrt{a}}{\\sqrt{b}}", answer: "\\frac{\\sqrt{ab}}{b}"},
            {problem: "\\frac{\\sqrt{2}}{\\sqrt{x}}", answer: "\\frac{\\sqrt{2x}}{x}"},
            {problem: "\\frac{\\sqrt{x}}{\\sqrt{2}}", answer: "\\frac{\\sqrt{2x}}{2}"},
            {problem: "\\frac{\\sqrt{3}}{\\sqrt{a}}", answer: "\\frac{\\sqrt{3a}}{a}"},
            {problem: "\\frac{\\sqrt{y}}{\\sqrt{x}}", answer: "\\frac{\\sqrt{xy}}{x}"},
            // Square root of a fraction with variables
            {problem: "\\sqrt{\\frac{a}{x}}", answer: "\\frac{\\sqrt{ax}}{x}"},
            {problem: "\\sqrt{\\frac{2}{x}}", answer: "\\frac{\\sqrt{2x}}{x}"},
            {problem: "\\sqrt{\\frac{x}{y}}", answer: "\\frac{\\sqrt{xy}}{y}"},
            // A handful of numeric questions for fluency
            {problem: "\\frac{1}{\\sqrt{2}}", answer: "\\frac{\\sqrt{2}}{2}"},
            {problem: "\\frac{2}{\\sqrt{2}}", answer: "\\sqrt{2}"},
            {problem: "\\frac{4}{\\sqrt{3}}", answer: "\\frac{4\\sqrt{3}}{3}"},
            {problem: "\\frac{6}{\\sqrt{3}}", answer: "2\\sqrt{3}"},
            {problem: "\\frac{5}{\\sqrt{5}}", answer: "\\sqrt{5}"},
            {problem: "\\frac{\\sqrt{2}}{\\sqrt{7}}", answer: "\\frac{\\sqrt{14}}{7}"},
            {problem: "\\sqrt{\\frac{2}{3}}", answer: "\\frac{\\sqrt{6}}{3}"},
            {problem: "\\sqrt{\\frac{3}{5}}", answer: "\\frac{\\sqrt{15}}{5}"},
            {problem: "\\frac{\\sqrt{3}}{\\sqrt{2}}", answer: "\\frac{\\sqrt{6}}{2}"},
            {problem: "\\frac{3}{\\sqrt{6}}", answer: "\\frac{\\sqrt{6}}{2}"}
        ]
);
