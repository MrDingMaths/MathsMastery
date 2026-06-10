// levels/completeTheSquareHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'completeTheSquareHard',
    'Complete the Square (Hard)',
    [
        // From provided questions (Q16–19) — non-monic |a| ≥ 2
        {problem: "3x^2+6x+1",   answer: "3(x+1)^2-2"},
        {problem: "4x^2+8x+3",   answer: "4(x+1)^2-1"},
        {problem: "2x^2+12x+1",  answer: "2(x+3)^2-17"},
        {problem: "-3x^2-9x+2",  answer: "-3\\left(x+\\frac{3}{2}\\right)^2+\\frac{35}{4}"},

        // Generated — integer answers
        {problem: "3x^2-6x+2",   answer: "3(x-1)^2-1"},
        {problem: "4x^2-8x+1",   answer: "4(x-1)^2-3"},
        {problem: "2x^2+4x+3",   answer: "2(x+1)^2+1"},
        {problem: "5x^2+10x-3",  answer: "5(x+1)^2-8"},
        {problem: "-2x^2+8x-5",  answer: "-2(x-2)^2+3"},
        {problem: "-3x^2+6x+4",  answer: "-3(x-1)^2+7"},
        {problem: "3x^2+12x-2",  answer: "3(x+2)^2-14"},
        {problem: "4x^2-8x-3",   answer: "4(x-1)^2-7"},
        {problem: "2x^2+8x+5",   answer: "2(x+2)^2-3"},
        {problem: "5x^2-20x+11", answer: "5(x-2)^2-9"},
        {problem: "-2x^2+4x+7",  answer: "-2(x-1)^2+9"},
        {problem: "-3x^2-12x+5", answer: "-3(x+2)^2+17"},
        {problem: "-4x^2+16x-9", answer: "-4(x-2)^2+7"},
        {problem: "3x^2-18x+22", answer: "3(x-3)^2-5"},

        // Generated — fractional answers
        {problem: "2x^2+6x+1",   answer: "2\\left(x+\\frac{3}{2}\\right)^2-\\frac{7}{2}"},
        {problem: "3x^2-3x+1",   answer: "3\\left(x-\\frac{1}{2}\\right)^2+\\frac{1}{4}"},
        {problem: "-2x^2+6x-1",  answer: "-2\\left(x-\\frac{3}{2}\\right)^2+\\frac{7}{2}"},
        {problem: "4x^2+4x-3",   answer: "4\\left(x+\\frac{1}{2}\\right)^2-4"},
        {problem: "2x^2-10x+5",  answer: "2\\left(x-\\frac{5}{2}\\right)^2-\\frac{15}{2}"},
        {problem: "3x^2+9x-2",   answer: "3\\left(x+\\frac{3}{2}\\right)^2-\\frac{35}{4}"},
        {problem: "2x^2-6x+1",   answer: "2\\left(x-\\frac{3}{2}\\right)^2-\\frac{7}{2}"},
        {problem: "-3x^2+9x-1",  answer: "-3\\left(x-\\frac{3}{2}\\right)^2+\\frac{23}{4}"},
        {problem: "2x^2+2x-5",   answer: "2\\left(x+\\frac{1}{2}\\right)^2-\\frac{11}{2}"},
        {problem: "4x^2-12x+5",  answer: "4\\left(x-\\frac{3}{2}\\right)^2-4"},
        {problem: "-2x^2-6x+3",  answer: "-2\\left(x+\\frac{3}{2}\\right)^2+\\frac{15}{2}"},
        {problem: "5x^2+5x-2",   answer: "5\\left(x+\\frac{1}{2}\\right)^2-\\frac{13}{4}"},
    ],
    'Write in the form k(x+a)²+b'
);
