// levels/rationaliseTheDenominatorHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'rationaliseTheDenominatorHard',
    'Rationalising the Denominator (Hard)',
    [
            // Binomial numerator over a single variable surd
            {problem: "\\frac{1+\\sqrt{x}}{\\sqrt{y}}", answer: "\\frac{\\sqrt{y}+\\sqrt{xy}}{y}"},
            {problem: "\\frac{\\sqrt{x}+\\sqrt{y}}{\\sqrt{z}}", answer: "\\frac{\\sqrt{xz}+\\sqrt{yz}}{z}"},
            {problem: "\\frac{a-\\sqrt{b}}{\\sqrt{c}}", answer: "\\frac{a\\sqrt{c}-\\sqrt{bc}}{c}"},
            {problem: "\\frac{3+2\\sqrt{x}}{\\sqrt{y}}", answer: "\\frac{3\\sqrt{y}+2\\sqrt{xy}}{y}"},
            {problem: "\\frac{2\\sqrt{x}-1}{\\sqrt{y}}", answer: "\\frac{2\\sqrt{xy}-\\sqrt{y}}{y}"},
            // Numerator and denominator share the variable (terms separate out)
            {problem: "\\frac{a+\\sqrt{x}}{\\sqrt{x}}", answer: "\\frac{a\\sqrt{x}+x}{x}"},
            {problem: "\\frac{\\sqrt{x}+1}{\\sqrt{x}}", answer: "\\frac{x+\\sqrt{x}}{x}"},
            {problem: "\\frac{2\\sqrt{x}-3}{\\sqrt{x}}", answer: "\\frac{2x-3\\sqrt{x}}{x}"},
            {problem: "\\frac{5-\\sqrt{x}}{\\sqrt{x}}", answer: "\\frac{5\\sqrt{x}-x}{x}"},
            {problem: "\\frac{a+b\\sqrt{x}}{\\sqrt{x}}", answer: "\\frac{a\\sqrt{x}+bx}{x}"},
            {problem: "\\frac{\\sqrt{x}-\\sqrt{y}}{\\sqrt{x}}", answer: "\\frac{x-\\sqrt{xy}}{x}"},
            {problem: "\\frac{\\sqrt{x}+2\\sqrt{y}}{\\sqrt{y}}", answer: "\\frac{\\sqrt{xy}+2y}{y}"},
            // Denominator surd is a number, numerator has variables
            {problem: "\\frac{\\sqrt{x}+\\sqrt{3}}{\\sqrt{3}}", answer: "\\frac{\\sqrt{3x}+3}{3}"},
            {problem: "\\frac{2-\\sqrt{x}}{\\sqrt{2}}", answer: "\\frac{2\\sqrt{2}-\\sqrt{2x}}{2}"},
            {problem: "\\frac{\\sqrt{x}+1}{\\sqrt{2}}", answer: "\\frac{\\sqrt{2x}+\\sqrt{2}}{2}"},
            // A handful of numeric questions for fluency (kept small)
            {problem: "\\frac{1+\\sqrt{3}}{\\sqrt{2}}", answer: "\\frac{\\sqrt{2}+\\sqrt{6}}{2}"},
            {problem: "\\frac{2+\\sqrt{5}}{\\sqrt{3}}", answer: "\\frac{2\\sqrt{3}+\\sqrt{15}}{3}"},
            {problem: "\\frac{3-\\sqrt{2}}{\\sqrt{5}}", answer: "\\frac{3\\sqrt{5}-\\sqrt{10}}{5}"},
            {problem: "\\frac{\\sqrt{3}+\\sqrt{5}}{\\sqrt{2}}", answer: "\\frac{\\sqrt{6}+\\sqrt{10}}{2}"},
            {problem: "\\frac{\\sqrt{18}-\\sqrt{8}}{\\sqrt{2}}", answer: "1"},
            {problem: "\\frac{\\sqrt{6}+2\\sqrt{3}}{\\sqrt{2}}", answer: "\\sqrt{3}+\\sqrt{6}"},
            {problem: "\\frac{3\\sqrt{2}-\\sqrt{8}}{\\sqrt{6}}", answer: "\\frac{\\sqrt{3}}{3}"},
            {problem: "\\frac{2\\sqrt{5}+\\sqrt{20}}{\\sqrt{10}}", answer: "2\\sqrt{2}"}
        ]
);
