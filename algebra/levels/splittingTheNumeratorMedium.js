// levels/splittingTheNumeratorMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'splittingTheNumeratorMedium',
    'Splitting the Numerator (Medium)',
    [
        // Textbook questions
        {problem: "\\frac{2x+7}{x+3}",  answer: "2+\\frac{1}{x+3}"},
        {problem: "\\frac{3x+10}{x+4}", answer: "3-\\frac{2}{x+4}"},
        {problem: "\\frac{2x+3}{x+5}",  answer: "2-\\frac{7}{x+5}"},
        {problem: "\\frac{2x+3}{x-1}",  answer: "2+\\frac{5}{x-1}"},
        {problem: "\\frac{5-x}{x+3}",   answer: "-1+\\frac{8}{x+3}"},
        // a = 2
        {problem: "\\frac{2x+5}{x+2}",  answer: "2+\\frac{1}{x+2}"},
        {problem: "\\frac{2x+9}{x+3}",  answer: "2+\\frac{3}{x+3}"},
        {problem: "\\frac{2x+11}{x+4}", answer: "2+\\frac{3}{x+4}"},
        {problem: "\\frac{2x+1}{x+3}",  answer: "2-\\frac{5}{x+3}"},
        {problem: "\\frac{2x+7}{x-2}",  answer: "2+\\frac{11}{x-2}"},
        {problem: "\\frac{2x-1}{x+3}",  answer: "2-\\frac{7}{x+3}"},
        {problem: "\\frac{2x-3}{x+2}",  answer: "2-\\frac{7}{x+2}"},
        {problem: "\\frac{2x+5}{x-1}",  answer: "2+\\frac{7}{x-1}"},
        {problem: "\\frac{2x+7}{x+5}",  answer: "2-\\frac{3}{x+5}"},
        {problem: "\\frac{2x+4}{x+3}",  answer: "2-\\frac{2}{x+3}"},
        // a = 3
        {problem: "\\frac{3x+7}{x+2}",  answer: "3+\\frac{1}{x+2}"},
        {problem: "\\frac{3x+1}{x+2}",  answer: "3-\\frac{5}{x+2}"},
        {problem: "\\frac{3x+5}{x+1}",  answer: "3+\\frac{2}{x+1}"},
        {problem: "\\frac{3x+2}{x+4}",  answer: "3-\\frac{10}{x+4}"},
        {problem: "\\frac{3x+4}{x-1}",  answer: "3+\\frac{7}{x-1}"},
        {problem: "\\frac{3x-2}{x+1}",  answer: "3-\\frac{5}{x+1}"},
        {problem: "\\frac{3x+8}{x+2}",  answer: "3+\\frac{2}{x+2}"},
        {problem: "\\frac{3x+11}{x+3}", answer: "3+\\frac{2}{x+3}"},
        {problem: "\\frac{3x-5}{x+2}",  answer: "3-\\frac{11}{x+2}"},
        // a = 4
        {problem: "\\frac{4x+7}{x+2}",  answer: "4-\\frac{1}{x+2}"},
        {problem: "\\frac{4x+13}{x+3}", answer: "4+\\frac{1}{x+3}"},
        {problem: "\\frac{4x+1}{x+1}",  answer: "4-\\frac{3}{x+1}"},
        {problem: "\\frac{4x-1}{x+2}",  answer: "4-\\frac{9}{x+2}"},
        {problem: "\\frac{4x+9}{x+2}",  answer: "4+\\frac{1}{x+2}"},
        // a = 5
        {problem: "\\frac{5x+11}{x+2}", answer: "5+\\frac{1}{x+2}"},
        {problem: "\\frac{5x+8}{x+1}",  answer: "5+\\frac{3}{x+1}"},
        // a = -1 (numerator of the form b − x)
        {problem: "\\frac{7-x}{x+2}",   answer: "-1+\\frac{9}{x+2}"},
        {problem: "\\frac{4-x}{x+1}",   answer: "-1+\\frac{5}{x+1}"},
        {problem: "\\frac{6-x}{x+4}",   answer: "-1+\\frac{10}{x+4}"},
        {problem: "\\frac{3-x}{x-1}",   answer: "-1+\\frac{2}{x-1}"},
    ],
    'Write in the form a + b/(x+r)'
);
