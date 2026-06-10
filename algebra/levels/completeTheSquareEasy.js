// levels/completeTheSquareEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'completeTheSquareEasy',
    'Complete the Square (Easy)',
    [
        // From provided questions (Q1–7) — monic quadratics
        {problem: "x^2-4x-1",    answer: "(x-2)^2-5"},
        {problem: "x^2-8x-11",   answer: "(x-4)^2-27"},
        {problem: "x^2-2x+6",    answer: "(x-1)^2+5"},
        {problem: "x^2-2x-3",    answer: "(x-1)^2-4"},
        {problem: "x^2-6x+9",    answer: "(x-3)^2"},
        {problem: "x^2+8x+10",   answer: "(x+4)^2-6"},
        {problem: "x^2+6x-5",    answer: "(x+3)^2-14"},

        // Generated
        {problem: "x^2+4x+1",    answer: "(x+2)^2-3"},
        {problem: "x^2+10x+5",   answer: "(x+5)^2-20"},
        {problem: "x^2-4x+7",    answer: "(x-2)^2+3"},
        {problem: "x^2+6x+2",    answer: "(x+3)^2-7"},
        {problem: "x^2-10x+3",   answer: "(x-5)^2-22"},
        {problem: "x^2+12x-1",   answer: "(x+6)^2-37"},
        {problem: "x^2-12x+30",  answer: "(x-6)^2-6"},
        {problem: "x^2+2x-5",    answer: "(x+1)^2-6"},
        {problem: "x^2+4x-3",    answer: "(x+2)^2-7"},
        {problem: "x^2-6x+2",    answer: "(x-3)^2-7"},
        {problem: "x^2+8x+5",    answer: "(x+4)^2-11"},
        {problem: "x^2-8x+10",   answer: "(x-4)^2-6"},
        {problem: "x^2+14x+4",   answer: "(x+7)^2-45"},
        {problem: "x^2-14x+8",   answer: "(x-7)^2-41"},
        {problem: "x^2+2x+8",    answer: "(x+1)^2+7"},
        {problem: "x^2-2x-8",    answer: "(x-1)^2-9"},
        {problem: "x^2+10x-3",   answer: "(x+5)^2-28"},
        {problem: "x^2-10x+20",  answer: "(x-5)^2-5"},
        {problem: "x^2+16x+50",  answer: "(x+8)^2-14"},
        {problem: "x^2-16x+55",  answer: "(x-8)^2-9"},
        {problem: "x^2+18x+77",  answer: "(x+9)^2-4"},
        {problem: "x^2-18x+76",  answer: "(x-9)^2-5"},
        {problem: "x^2+20x+95",  answer: "(x+10)^2-5"},
    ],
    'Write in the form k(x+a)²+b'
);
