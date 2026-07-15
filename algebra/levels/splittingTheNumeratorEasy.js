// levels/splittingTheNumeratorEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'splittingTheNumeratorEasy',
    'Splitting the Numerator (Easy)',
    [
        // Textbook questions
        {problem: "\\frac{x+4}{x+1}",  answer: "1+\\frac{3}{x+1}"},
        {problem: "\\frac{x+9}{x+5}",  answer: "1+\\frac{4}{x+5}"},
        {problem: "\\frac{x+2}{x+6}",  answer: "1-\\frac{4}{x+6}"},
        {problem: "\\frac{x+1}{x+4}",  answer: "1-\\frac{3}{x+4}"},
        {problem: "\\frac{x+5}{x-2}",  answer: "1+\\frac{7}{x-2}"},
        // Positive remainder, positive denominator root
        {problem: "\\frac{x+3}{x+1}",  answer: "1+\\frac{2}{x+1}"},
        {problem: "\\frac{x+7}{x+2}",  answer: "1+\\frac{5}{x+2}"},
        {problem: "\\frac{x+10}{x+3}", answer: "1+\\frac{7}{x+3}"},
        {problem: "\\frac{x+6}{x+1}",  answer: "1+\\frac{5}{x+1}"},
        {problem: "\\frac{x+8}{x+3}",  answer: "1+\\frac{5}{x+3}"},
        {problem: "\\frac{x+9}{x+2}",  answer: "1+\\frac{7}{x+2}"},
        {problem: "\\frac{x+11}{x+4}", answer: "1+\\frac{7}{x+4}"},
        {problem: "\\frac{x+12}{x+5}", answer: "1+\\frac{7}{x+5}"},
        {problem: "\\frac{x+10}{x+7}", answer: "1+\\frac{3}{x+7}"},
        // Negative remainder, positive denominator root
        {problem: "\\frac{x+3}{x+7}",  answer: "1-\\frac{4}{x+7}"},
        {problem: "\\frac{x+5}{x+9}",  answer: "1-\\frac{4}{x+9}"},
        {problem: "\\frac{x+2}{x+5}",  answer: "1-\\frac{3}{x+5}"},
        {problem: "\\frac{x+4}{x+8}",  answer: "1-\\frac{4}{x+8}"},
        {problem: "\\frac{x+1}{x+6}",  answer: "1-\\frac{5}{x+6}"},
        {problem: "\\frac{x+3}{x+8}",  answer: "1-\\frac{5}{x+8}"},
        {problem: "\\frac{x+6}{x+10}", answer: "1-\\frac{4}{x+10}"},
        // Positive remainder, negative denominator root
        {problem: "\\frac{x+3}{x-1}",  answer: "1+\\frac{4}{x-1}"},
        {problem: "\\frac{x+7}{x-3}",  answer: "1+\\frac{10}{x-3}"},
        {problem: "\\frac{x+5}{x-4}",  answer: "1+\\frac{9}{x-4}"},
        {problem: "\\frac{x+2}{x-1}",  answer: "1+\\frac{3}{x-1}"},
        {problem: "\\frac{x+8}{x-2}",  answer: "1+\\frac{10}{x-2}"},
        {problem: "\\frac{x+6}{x-3}",  answer: "1+\\frac{9}{x-3}"},
        {problem: "\\frac{x+4}{x-2}",  answer: "1+\\frac{6}{x-2}"},
        {problem: "\\frac{x+4}{x-3}",  answer: "1+\\frac{7}{x-3}"},
        // Negative numerator constant
        {problem: "\\frac{x-1}{x+3}",  answer: "1-\\frac{4}{x+3}"},
        {problem: "\\frac{x-2}{x+4}",  answer: "1-\\frac{6}{x+4}"},
        {problem: "\\frac{x-3}{x+5}",  answer: "1-\\frac{8}{x+5}"},
        {problem: "\\frac{x-1}{x+2}",  answer: "1-\\frac{3}{x+2}"},
        {problem: "\\frac{x-4}{x+1}",  answer: "1-\\frac{5}{x+1}"},
        {problem: "\\frac{x-2}{x+3}",  answer: "1-\\frac{5}{x+3}"},
    ],
    'Write in the form a + b/(x+r)'
);
