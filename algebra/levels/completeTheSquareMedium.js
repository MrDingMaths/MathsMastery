// levels/completeTheSquareMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'completeTheSquareMedium',
    'Complete the Square (Medium)',
    [
        // From provided questions (Q8–15) — non-monic, integer results
        {problem: "2x^2+4x-10",  answer: "2(x+1)^2-12"},
        {problem: "3x^2-12x+9",  answer: "3(x-2)^2-3"},
        {problem: "2x^2-12x-14", answer: "2(x-3)^2-32"},
        {problem: "4x^2+16x-24", answer: "4(x+2)^2-40"},
        {problem: "-x^2-4x+3",   answer: "-(x+2)^2+7"},
        {problem: "-x^2+2x+2",   answer: "-(x-1)^2+3"},
        {problem: "-x^2+6x-4",   answer: "-(x-3)^2+5"},
        {problem: "-x^2+8x-8",   answer: "-(x-4)^2+8"},

        // Generated — positive leading coefficient
        {problem: "2x^2+8x-6",   answer: "2(x+2)^2-14"},
        {problem: "3x^2+18x+12", answer: "3(x+3)^2-15"},
        {problem: "5x^2-10x+3",  answer: "5(x-1)^2-2"},
        {problem: "2x^2+16x-3",  answer: "2(x+4)^2-35"},
        {problem: "2x^2-8x+4",   answer: "2(x-2)^2-4"},
        {problem: "3x^2+6x-5",   answer: "3(x+1)^2-8"},
        {problem: "4x^2-16x+7",  answer: "4(x-2)^2-9"},
        {problem: "2x^2+20x+3",  answer: "2(x+5)^2-47"},
        {problem: "3x^2-18x+20", answer: "3(x-3)^2-7"},
        {problem: "5x^2+20x-1",  answer: "5(x+2)^2-21"},
        {problem: "2x^2-4x-9",   answer: "2(x-1)^2-11"},
        {problem: "4x^2+8x-5",   answer: "4(x+1)^2-9"},

        // Generated — negative leading coefficient
        {problem: "-x^2+4x+1",   answer: "-(x-2)^2+5"},
        {problem: "-x^2-6x+5",   answer: "-(x+3)^2+14"},
        {problem: "-x^2+10x-20", answer: "-(x-5)^2+5"},
        {problem: "-x^2-2x+5",   answer: "-(x+1)^2+6"},
        {problem: "-x^2+12x-30", answer: "-(x-6)^2+6"},
        {problem: "-x^2-8x+3",   answer: "-(x+4)^2+19"},
        {problem: "-x^2+14x-44", answer: "-(x-7)^2+5"},
        {problem: "-x^2-10x+1",  answer: "-(x+5)^2+26"},
        {problem: "-x^2-12x-10", answer: "-(x+6)^2+26"},

        // Migrated from Hard — non-monic, integer completion
        {problem: "3x^2+6x+1",   answer: "3(x+1)^2-2"},
        {problem: "4x^2+8x+3",   answer: "4(x+1)^2-1"},
        {problem: "2x^2+12x+1",  answer: "2(x+3)^2-17"},
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
    ],
    'Write in the form k(x+a)²+b'
);
