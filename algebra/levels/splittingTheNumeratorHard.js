// levels/splittingTheNumeratorHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'splittingTheNumeratorHard',
    'Splitting the Numerator (Hard)',
    [
        // Textbook questions
        {problem: "\\frac{4x+9}{2x+1}",  answer: "2+\\frac{7}{2x+1}"},
        {problem: "\\frac{6x+5}{3x-1}",  answer: "2+\\frac{7}{3x-1}"},
        // k=2, c=2 (a=4)
        {problem: "\\frac{4x+7}{2x+3}",  answer: "2+\\frac{1}{2x+3}"},
        {problem: "\\frac{4x+3}{2x-1}",  answer: "2+\\frac{5}{2x-1}"},
        {problem: "\\frac{4x-3}{2x+1}",  answer: "2-\\frac{5}{2x+1}"},
        {problem: "\\frac{4x+11}{2x+5}", answer: "2+\\frac{1}{2x+5}"},
        {problem: "\\frac{4x-1}{2x-3}",  answer: "2+\\frac{5}{2x-3}"},
        {problem: "\\frac{4x+1}{2x-3}",  answer: "2+\\frac{7}{2x-3}"},
        // k=3, c=2 (a=6)
        {problem: "\\frac{6x+7}{2x+1}",  answer: "3+\\frac{4}{2x+1}"},
        {problem: "\\frac{6x+11}{2x+3}", answer: "3+\\frac{2}{2x+3}"},
        {problem: "\\frac{6x+17}{2x+3}", answer: "3+\\frac{8}{2x+3}"},
        {problem: "\\frac{6x+1}{2x-3}",  answer: "3+\\frac{10}{2x-3}"},
        {problem: "\\frac{6x+5}{2x-1}",  answer: "3+\\frac{8}{2x-1}"},
        // k=4, c=2 (a=8)
        {problem: "\\frac{8x+7}{2x+1}",  answer: "4+\\frac{3}{2x+1}"},
        {problem: "\\frac{8x+11}{2x+3}", answer: "4-\\frac{1}{2x+3}"},
        {problem: "\\frac{8x+3}{2x-1}",  answer: "4+\\frac{7}{2x-1}"},
        // k=2, c=3 (a=6)
        {problem: "\\frac{6x+11}{3x+2}", answer: "2+\\frac{7}{3x+2}"},
        {problem: "\\frac{6x+13}{3x+4}", answer: "2+\\frac{5}{3x+4}"},
        {problem: "\\frac{6x-1}{3x+2}",  answer: "2-\\frac{5}{3x+2}"},
        {problem: "\\frac{6x-5}{3x+1}",  answer: "2-\\frac{7}{3x+1}"},
        {problem: "\\frac{6x+1}{3x-2}",  answer: "2+\\frac{5}{3x-2}"},
        {problem: "\\frac{6x-7}{3x+1}",  answer: "2-\\frac{9}{3x+1}"},
        // k=3, c=3 (a=9)
        {problem: "\\frac{9x+7}{3x+2}",  answer: "3+\\frac{1}{3x+2}"},
        {problem: "\\frac{9x+4}{3x-1}",  answer: "3+\\frac{7}{3x-1}"},
        {problem: "\\frac{9x+11}{3x+2}", answer: "3+\\frac{5}{3x+2}"},
        {problem: "\\frac{9x-5}{3x+1}",  answer: "3-\\frac{8}{3x+1}"},
        {problem: "\\frac{9x-4}{3x+1}",  answer: "3-\\frac{7}{3x+1}"},
        {problem: "\\frac{9x+14}{3x+4}", answer: "3+\\frac{2}{3x+4}"},
        {problem: "\\frac{9x-1}{3x+2}",  answer: "3-\\frac{7}{3x+2}"},
        // k=2, c=4 (a=8)
        {problem: "\\frac{8x+11}{4x+3}", answer: "2+\\frac{5}{4x+3}"},
        {problem: "\\frac{8x+13}{4x+3}", answer: "2+\\frac{7}{4x+3}"},
        {problem: "\\frac{8x+7}{4x-1}",  answer: "2+\\frac{9}{4x-1}"},
        {problem: "\\frac{8x-1}{4x+3}",  answer: "2-\\frac{7}{4x+3}"},
        // k=2, c=5 (a=10)
        {problem: "\\frac{10x+7}{5x+1}",  answer: "2+\\frac{5}{5x+1}"},
        {problem: "\\frac{10x+9}{5x+2}",  answer: "2+\\frac{5}{5x+2}"},
        {problem: "\\frac{10x+13}{5x+4}", answer: "2+\\frac{5}{5x+4}"},
    ],
    'Write in the form a + b/(x+r)'
);
