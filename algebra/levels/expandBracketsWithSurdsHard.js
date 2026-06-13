// levels/expandBracketsWithSurdsHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'expandBracketsWithSurdsHard',
    'Expanding Surds (Hard)',
    [
            // Very complex single term expansions
            {problem: "-2\\sqrt{8}(2\\sqrt{2} - 3\\sqrt{20})", answer: "-16 + 24\\sqrt{10}"},
            {problem: "2\\sqrt{3}(\\sqrt{6} - \\sqrt{3}) - \\sqrt{50}", answer: "\\sqrt{2} - 6"},
            
            // Complex multi-bracket expansions
            {problem: "(5 + \\sqrt{5})(5 + 5\\sqrt{5})", answer: "50 + 30\\sqrt{5}"},
            {problem: "(5 + 5\\sqrt{5})^2", answer: "150 + 50\\sqrt{5}"},
            
            // Advanced FOIL expansions
            {problem: "(3\\sqrt{2} - 1)(\\sqrt{6} - \\sqrt{3})", answer: "7\\sqrt{3} - 4\\sqrt{6}"},
            {problem: "(3 - 2\\sqrt{7})(\\sqrt{21} - 4\\sqrt{3})", answer: "11\\sqrt{21} - 26\\sqrt{3}"},
            {problem: "(2\\sqrt{6} + 5)(\\sqrt{30} - 2\\sqrt{5})", answer: "2\\sqrt{5} + \\sqrt{30}"},
            {problem: "(3\\sqrt{5} + 1)(\\sqrt{7} + 2\\sqrt{35})", answer: "5\\sqrt{35} + 31\\sqrt{7}"},
            {problem: "(4\\sqrt{2} + \\sqrt{7})(3\\sqrt{14} - 5)", answer: "19\\sqrt{7} + \\sqrt{2}"},
            {problem: "(3\\sqrt{3} + 4)(\\sqrt{6} - 2\\sqrt{2})", answer: "\\sqrt{2} - 2\\sqrt{6}"},
            {problem: "(5 - 3\\sqrt{2})(2\\sqrt{10} + 3\\sqrt{5})", answer: "\\sqrt{10} + 3\\sqrt{5}"},
            
            // Expressions with fractions
            {problem: "(1 + \\frac{1}{\\sqrt{2}})^2", answer: "\\frac{3}{2} + \\sqrt{2}"},
            {problem: "(\\sqrt{3} - \\frac{1}{\\sqrt{3}})^2", answer: "\\frac{4}{3}"},
            
            // Complex perfect squares
            {problem: "(2\\sqrt{7} + \\sqrt{5})^2", answer: "33 + 4\\sqrt{35}"},
            {problem: "(3\\sqrt{2} - 2\\sqrt{3})^2", answer: "30 - 12\\sqrt{6}"},
            {problem: "(5\\sqrt{3} - 2\\sqrt{8})^2", answer: "107 - 40\\sqrt{6}"},
            {problem: "(3\\sqrt{5} + 4\\sqrt{7})^2", answer: "157 + 24\\sqrt{35}"},
            {problem: "(5\\sqrt{6} + 3\\sqrt{5})^2", answer: "195 + 30\\sqrt{30}"},
            
            // Additional hard complexity questions
            {problem: "\\sqrt{12}(\\sqrt{27} - 2\\sqrt{3}) + \\sqrt{48}", answer: "6 + 4\\sqrt{3}"},
            {problem: "2\\sqrt{18}(\\sqrt{8} - 3) - 4\\sqrt{2}", answer: "24 - 22\\sqrt{2}"},
            {problem: "-3\\sqrt{20}(2\\sqrt{5} - \\sqrt{45}) + \\sqrt{80}", answer: "30 + 4\\sqrt{5}"},
            
            // Nested bracket expansions
            {problem: "\\sqrt{2}(\\sqrt{8} + \\sqrt{18}) - 2(\\sqrt{2} + 1)", answer: "8 - 2\\sqrt{2}"},
            {problem: "3\\sqrt{5}(2\\sqrt{10} + \\sqrt{5}) - \\sqrt{125}", answer: "30\\sqrt{2} + 15 - 5\\sqrt{5}"},
            {problem: "\\sqrt{6}(\\sqrt{24} - 2\\sqrt{6}) + 3\\sqrt{2}", answer: "3\\sqrt{2}"},
            
            // Triple bracket expressions
            {problem: "\\sqrt{3}(\\sqrt{12} + 2)(\\sqrt{3} - 1)", answer: "4\\sqrt{3}"},
            {problem: "2\\sqrt{2}(\\sqrt{8} - 1)(\\sqrt{2} + 2)", answer: "12 + 4\\sqrt{2}"},
            
            // Advanced multi-step problems
            {problem: "3(\\sqrt{7} + 2)^2 - 2\\sqrt{7}(\\sqrt{7} - 3)", answer: "19 + 18\\sqrt{7}"},
            {problem: "(2\\sqrt{5} + 3\\sqrt{2})^2", answer: "38 + 12\\sqrt{10}"},
            {problem: "2\\sqrt{3}(\\sqrt{12} + 3) + (\\sqrt{3} + 1)^2", answer: "16 + 8\\sqrt{3}"},
            
            // Rationalization with expansion
            {problem: "(2\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - 2\\sqrt{2})", answer: "2 - 3\\sqrt{6}"},
            
            // Complex coefficient manipulations
            {problem: "4\\sqrt{6}(\\sqrt{54} - 2\\sqrt{6}) + 3\\sqrt{24}", answer: "24 + 6\\sqrt{6}"},
            {problem: "-2\\sqrt{12}(3\\sqrt{3} - \\sqrt{27}) - \\sqrt{48}", answer: "-4\\sqrt{3}"},
            {problem: "5\\sqrt{8}(\\sqrt{32} - 3\\sqrt{2}) + 2\\sqrt{18}", answer: "20 + 6\\sqrt{2}"},
            
            // Extreme complexity
            {problem: "(\\sqrt{7} + \\sqrt{11})(\\sqrt{77} - \\sqrt{7}\\sqrt{11})", answer: "0"},
            {problem: "(3\\sqrt{2} + \\sqrt{5})(2\\sqrt{2} - \\sqrt{5})", answer: "7 - \\sqrt{10}"},
            {problem: "(\\sqrt{7} + 2\\sqrt{3})(2\\sqrt{7} - \\sqrt{3})", answer: "8 + 3\\sqrt{21}"},
            
            // Final challenging questions
            {problem: "\\sqrt{5}(\\sqrt{20} + \\sqrt{45}) - 2(\\sqrt{5} + \\sqrt{45})", answer: "25 - 8\\sqrt{5}"},
            {problem: "(\\sqrt{12} + \\sqrt{8})(\\sqrt{27} - \\sqrt{18}) + \\sqrt{72}", answer: "6 + 6\\sqrt{2}"},
            {problem: "3\\sqrt{2}(\\sqrt{32} + 2\\sqrt{8}) - (\\sqrt{2} + 4)^2", answer: "30 - 8\\sqrt{2}"}
        ]
);
