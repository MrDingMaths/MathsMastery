// levels/completeTheSquareHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'completeTheSquareHard',
    'Complete the Square (Hard)',
    [
        // Non-monic, fractional completion — original provided question
        {problem: "-3x^2-9x+2",  answer: "-3\\left(x+\\frac{3}{2}\\right)^2+\\frac{35}{4}"},

        // Fractional completion — existing set
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

        // New — fractional completion
        {problem: "2x^2+14x+5",  answer: "2\\left(x+\\frac{7}{2}\\right)^2-\\frac{39}{2}"},
        {problem: "2x^2-14x+7",  answer: "2\\left(x-\\frac{7}{2}\\right)^2-\\frac{35}{2}"},
        {problem: "-2x^2+10x-3", answer: "-2\\left(x-\\frac{5}{2}\\right)^2+\\frac{19}{2}"},
        {problem: "-2x^2-10x+3", answer: "-2\\left(x+\\frac{5}{2}\\right)^2+\\frac{31}{2}"},
        {problem: "3x^2+3x-2",   answer: "3\\left(x+\\frac{1}{2}\\right)^2-\\frac{11}{4}"},
        {problem: "3x^2-9x+5",   answer: "3\\left(x-\\frac{3}{2}\\right)^2-\\frac{7}{4}"},
        {problem: "3x^2+15x+4",  answer: "3\\left(x+\\frac{5}{2}\\right)^2-\\frac{59}{4}"},
        {problem: "-3x^2+3x+2",  answer: "-3\\left(x-\\frac{1}{2}\\right)^2+\\frac{11}{4}"},
        {problem: "4x^2+12x+3",  answer: "4\\left(x+\\frac{3}{2}\\right)^2-6"},
        {problem: "4x^2-4x+1",   answer: "4\\left(x-\\frac{1}{2}\\right)^2"},
        {problem: "4x^2+20x+7",  answer: "4\\left(x+\\frac{5}{2}\\right)^2-18"},
        {problem: "5x^2+15x-1",  answer: "5\\left(x+\\frac{3}{2}\\right)^2-\\frac{49}{4}"},
        {problem: "5x^2-15x+7",  answer: "5\\left(x-\\frac{3}{2}\\right)^2-\\frac{17}{4}"},
        {problem: "-5x^2+5x+2",  answer: "-5\\left(x-\\frac{1}{2}\\right)^2+\\frac{13}{4}"},
        {problem: "-5x^2+15x-3", answer: "-5\\left(x-\\frac{3}{2}\\right)^2+\\frac{33}{4}"},
        {problem: "-4x^2+4x+3",  answer: "-4\\left(x-\\frac{1}{2}\\right)^2+4"},
        {problem: "-4x^2-12x+5", answer: "-4\\left(x+\\frac{3}{2}\\right)^2+14"},
    ],
    'Write in the form k(x+a)²+b'
);
