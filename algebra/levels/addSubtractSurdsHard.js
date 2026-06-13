// levels/addSubtractSurdsHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'addSubtractSurdsHard',
    'Adding/Subtracting Surds (Hard)',
    [
            // Fractional coefficients from textbook
            {problem: "\\frac{\\sqrt{8}}{3} - \\frac{\\sqrt{2}}{5}", answer: "\\frac{7\\sqrt{2}}{15}"},
            {problem: "\\frac{\\sqrt{12}}{4} + \\frac{\\sqrt{3}}{6}", answer: "\\frac{2\\sqrt{3}}{3}"},
            {problem: "\\frac{3\\sqrt{5}}{4} - \\frac{\\sqrt{20}}{3}", answer: "\\frac{\\sqrt{5}}{12}"},
            {problem: "\\frac{\\sqrt{98}}{4} - \\frac{5\\sqrt{2}}{2}", answer: "-\\frac{3\\sqrt{2}}{4}"},
            {problem: "\\frac{2\\sqrt{75}}{5} - \\frac{3\\sqrt{3}}{2}", answer: "\\frac{\\sqrt{3}}{2}"},
            {problem: "\\frac{\\sqrt{63}}{9} - \\frac{4\\sqrt{7}}{5}", answer: "-\\frac{7\\sqrt{7}}{15}"},
            {problem: "\\frac{2\\sqrt{18}}{3} - \\frac{\\sqrt{72}}{2}", answer: "-\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{54}}{4} + \\frac{\\sqrt{24}}{7}", answer: "\\frac{29\\sqrt{6}}{28}"},
            {problem: "\\frac{\\sqrt{27}}{5} - \\frac{\\sqrt{108}}{10}", answer: "0"},
            {problem: "\\frac{5\\sqrt{48}}{6} + \\frac{2\\sqrt{147}}{3}", answer: "8\\sqrt{3}"},
            {problem: "\\frac{2\\sqrt{96}}{5} - \\frac{\\sqrt{600}}{7}", answer: "\\frac{6\\sqrt{6}}{35}"},
            {problem: "\\frac{3\\sqrt{125}}{14} - \\frac{2\\sqrt{80}}{21}", answer: "\\frac{29\\sqrt{5}}{42}"},
            
            // Additional complex fractional problems
            {problem: "\\frac{\\sqrt{32}}{6} + \\frac{3\\sqrt{2}}{4}", answer: "\\frac{17\\sqrt{2}}{12}"},
            {problem: "\\frac{2\\sqrt{50}}{7} - \\frac{\\sqrt{18}}{3}", answer: "\\frac{3\\sqrt{2}}{7}"},
            {problem: "\\frac{4\\sqrt{27}}{9} + \\frac{\\sqrt{12}}{6}", answer: "\\frac{5\\sqrt{3}}{3}"},
            {problem: "\\frac{\\sqrt{45}}{8} - \\frac{2\\sqrt{20}}{5}", answer: "-\\frac{17\\sqrt{5}}{40}"},
            
            // Mixed integer and fractional coefficients
            {problem: "2\\sqrt{3} + \\frac{\\sqrt{12}}{3}", answer: "\\frac{8\\sqrt{3}}{3}"},
            {problem: "\\frac{\\sqrt{18}}{2} - 3\\sqrt{2}", answer: "-\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\sqrt{5} + \\frac{2\\sqrt{45}}{3}", answer: "3\\sqrt{5}"},
            {problem: "\\frac{3\\sqrt{8}}{4} - \\sqrt{2}", answer: "\\frac{\\sqrt{2}}{2}"},
            
            // Complex multi-term expressions with fractions
            {problem: "\\frac{\\sqrt{12}}{3} + \\frac{2\\sqrt{27}}{9} - \\frac{\\sqrt{3}}{6}", answer: "\\frac{7\\sqrt{3}}{6}"},
            {problem: "\\frac{2\\sqrt{18}}{5} - \\frac{\\sqrt{8}}{4} + \\frac{3\\sqrt{2}}{10}", answer: "\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{50}}{4} - \\frac{\\sqrt{18}}{6}", answer: "\\frac{3\\sqrt{2}}{4}"},
            {problem: "\\frac{2\\sqrt{27}}{5} - \\frac{\\sqrt{12}}{4}", answer: "\\frac{7\\sqrt{3}}{10}"},
            
            // Nested radicals and complex expressions
            {problem: "\\sqrt{\\frac{49}{9}} + \\frac{2\\sqrt{7}}{3}", answer: "\\frac{7 + 2\\sqrt{7}}{3}"},
            
            // Algebraic manipulation with surds
            {problem: "\\frac{\\sqrt{a^2 \\times 3}}{a} + \\frac{2\\sqrt{3a^2}}{3a}", answer: "\\frac{5\\sqrt{3}}{3}"},
            {problem: "\\sqrt{\\frac{x^2}{4}} + \\frac{\\sqrt{4x^2}}{2}", answer: "\\frac{3x}{2}"},
                                  
            // Advanced simplification patterns
            {problem: "\\frac{\\sqrt{150} + \\sqrt{54}}{6}", answer: "\\frac{4\\sqrt{6}}{3}"},
            {problem: "\\frac{2\\sqrt{72} - \\sqrt{32}}{4}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{3\\sqrt{98} + \\sqrt{128}}{14}", answer: "\\frac{29\\sqrt{2}}{14}"},
            
            // Challenging zero results
            {problem: "\\frac{\\sqrt{48}}{6} - \\frac{2\\sqrt{3}}{3}", answer: "0"},
            {problem: "\\frac{3\\sqrt{32}}{8} - \\frac{3\\sqrt{2}}{2}", answer: "0"},
            {problem: "\\frac{\\sqrt{75}}{5} - \\frac{\\sqrt{27}}{3}", answer: "0"}            
        ]
);
