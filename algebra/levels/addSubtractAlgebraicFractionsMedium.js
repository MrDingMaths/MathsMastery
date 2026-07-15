// levels/addSubtractAlgebraicFractionsMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'addSubtractAlgebraicFractionsMedium',
    'Adding Subtracting Algebraic Fractions (Medium)',
    [

            // Textbook questions
            {problem: "\\frac{a}{2} + \\frac{a}{3}", answer: "\\frac{5a}{6}"},
            {problem: "\\frac{a}{4} + \\frac{a}{5}", answer: "\\frac{9a}{20}"},
            {problem: "\\frac{x}{2} + \\frac{x}{5}", answer: "\\frac{7x}{10}"},
            {problem: "\\frac{x}{4} + \\frac{x}{2}", answer: "\\frac{3x}{4}"},
            {problem: "\\frac{2x}{5} + \\frac{3x}{7}", answer: "\\frac{29x}{35}"},
            {problem: "\\frac{2x}{5} + \\frac{2x}{3}", answer: "\\frac{16x}{15}"},
            {problem: "\\frac{7x}{6} + \\frac{2x}{5}", answer: "\\frac{47x}{30}"},
            {problem: "\\frac{x}{4} + \\frac{3x}{8}", answer: "\\frac{5x}{8}"},
            {problem: "\\frac{x}{2} - \\frac{x}{3}", answer: "\\frac{x}{6}"},
            {problem: "\\frac{2x}{5} - \\frac{x}{3}", answer: "\\frac{x}{15}"},
            {problem: "\\frac{9x}{11} - \\frac{x}{2}", answer: "\\frac{7x}{22}"},
            {problem: "\\frac{8y}{3} - \\frac{5y}{6}", answer: "\\frac{11y}{6}"},
            {problem: "\\frac{x}{3} - \\frac{x}{2}", answer: "-\\frac{x}{6}"},
            {problem: "\\frac{6x}{7} - \\frac{7x}{6}", answer: "-\\frac{13x}{42}"},
            {problem: "9x - \\frac{3x}{4}", answer: "\\frac{33x}{4}"},
            {problem: "4x + \\frac{x}{3}", answer: "\\frac{13x}{3}"},
            {problem: "3x + \\frac{x}{2}", answer: "\\frac{7x}{2}"},
            {problem: "\\frac{a}{5} + 2a", answer: "\\frac{11a}{5}"},
            {problem: "\\frac{8x}{3} - 2x", answer: "\\frac{2x}{3}"},
            {problem: "\\frac{y}{4} + \\frac{y}{2}", answer: "\\frac{3y}{4}"},
            {problem: "\\frac{x}{3} - \\frac{x}{9}", answer: "\\frac{2x}{9}"},
            {problem: "\\frac{2a}{3} + \\frac{3a}{2}", answer: "\\frac{13a}{6}"},
            {problem: "\\frac{7b}{10} - \\frac{19b}{30}", answer: "\\frac{b}{15}"},
            {problem: "\\frac{x}{7} + \\frac{x}{2}", answer: "\\frac{9x}{14}"},
            {problem: "\\frac{x}{3} + \\frac{x}{15}", answer: "\\frac{2x}{5}"},
            {problem: "\\frac{x}{4} - \\frac{x}{8}", answer: "\\frac{x}{8}"},
            {problem: "\\frac{x}{9} + \\frac{x}{5}", answer: "\\frac{14x}{45}"},
            {problem: "\\frac{y}{7} - \\frac{y}{8}", answer: "\\frac{y}{56}"},
            {problem: "\\frac{a}{2} + \\frac{a}{11}", answer: "\\frac{13a}{22}"},
            {problem: "\\frac{b}{3} - \\frac{b}{9}", answer: "\\frac{2b}{9}"},
            {problem: "\\frac{x}{3} - \\frac{x}{6}", answer: "\\frac{x}{6}"},
            {problem: "\\frac{x}{6} + \\frac{3x}{4}", answer: "\\frac{11x}{12}"},
            {problem: "\\frac{a}{4} + \\frac{2a}{7}", answer: "\\frac{15a}{28}"},
            {problem: "\\frac{2x}{5} + \\frac{x}{10}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{x}{9} - \\frac{3x}{7}", answer: "-\\frac{20x}{63}"},
            {problem: "\\frac{b}{2} - \\frac{7b}{9}", answer: "-\\frac{5b}{18}"},
            {problem: "\\frac{9y}{8} + \\frac{2y}{5}", answer: "\\frac{61y}{40}"},
            {problem: "\\frac{4x}{7} - \\frac{x}{5}", answer: "\\frac{13x}{35}"},
            {problem: "\\frac{3x}{4} - \\frac{x}{3}", answer: "\\frac{5x}{12}"},

            // Additional questions for cognitive complexity
            {problem: "\\frac{2x}{3} + \\frac{x}{4}", answer: "\\frac{11x}{12}"},
            {problem: "\\frac{3x}{5} - \\frac{x}{2}", answer: "\\frac{x}{10}"},
            {problem: "\\frac{x}{6} + \\frac{2x}{9}", answer: "\\frac{7x}{18}"},
            {problem: "\\frac{4x}{7} - \\frac{2x}{3}", answer: "-\\frac{2x}{21}"},
            {problem: "\\frac{x}{8} + \\frac{3x}{10}", answer: "\\frac{17x}{40}"},
            {problem: "\\frac{5x}{6} - \\frac{x}{4}", answer: "\\frac{7x}{12}"},
            {problem: "\\frac{7x}{10} - \\frac{3x}{8}", answer: "\\frac{13x}{40}"},
            
            // Whole numbers mixed with fractions
            {problem: "2 + \\frac{x}{3}", answer: "\\frac{6+x}{3}"},
            {problem: "\\frac{y}{4} + 3", answer: "\\frac{y+12}{4}"},
            {problem: "5 - \\frac{2x}{3}", answer: "\\frac{15-2x}{3}"},
            {problem: "\\frac{3x}{5} - 1", answer: "\\frac{3x-5}{5}"},
            {problem: "\\frac{a}{2} + 4", answer: "\\frac{a+8}{2}"},
            {problem: "6 - \\frac{5b}{4}", answer: "\\frac{24-5b}{4}"},
            
            // Three terms with different denominators
            {problem: "\\frac{x}{2} + \\frac{x}{3} + \\frac{x}{6}", answer: "x"},
            {problem: "\\frac{x}{4} + \\frac{x}{6} - \\frac{x}{12}", answer: "\\frac{x}{3}"},
            {problem: "\\frac{2x}{3} - \\frac{x}{4} + \\frac{x}{6}", answer: "\\frac{7x}{12}"},
            {problem: "\\frac{x}{5} + \\frac{2x}{3} - \\frac{x}{15}", answer: "\\frac{4x}{5}"},
            
            // Mixed denominators requiring larger LCD
            {problem: "\\frac{x}{12} + \\frac{x}{8}", answer: "\\frac{5x}{24}"},
            {problem: "\\frac{2x}{15} - \\frac{x}{10}", answer: "\\frac{x}{30}"},
            {problem: "\\frac{x}{14} + \\frac{3x}{21}", answer: "\\frac{3x}{14}"},
            {problem: "\\frac{4x}{9} - \\frac{x}{6}", answer: "\\frac{5x}{18}"},
            {problem: "\\frac{5x}{18} - \\frac{2x}{12}", answer: "\\frac{x}{9}"},

            // Migrated from Hard: numeric denominators, single variable
            {problem: "5 - \\frac{2x}{7}", answer: "\\frac{35-2x}{7}"},
            {problem: "-\\frac{2a}{3} + \\frac{5a}{4}", answer: "\\frac{7a}{12}"},
            {problem: "\\frac{3b}{5} - \\frac{7b}{2}", answer: "-\\frac{29b}{10}"},
            {problem: "-\\frac{4x}{7} - \\frac{2x}{9}", answer: "-\\frac{50x}{63}"},
            {problem: "\\frac{6x}{11} + \\frac{3x}{8}", answer: "\\frac{81x}{88}"},

            // Migrated from addSubtractFractionsWithBinomialNumerator (no binomial numerators)
            {problem: "\\frac{x}{2} + \\frac{3x}{4}", answer: "\\frac{5x}{4}"},
            {problem: "\\frac{2x}{5} - \\frac{3x}{2} - \\frac{x}{3}", answer: "-\\frac{43x}{30}"},
            {problem: "\\frac{x}{4} - \\frac{2x}{3} + \\frac{5x}{6}", answer: "\\frac{5x}{12}"},
            {problem: "\\frac{5x}{8} - \\frac{5x}{6} + \\frac{3x}{4}", answer: "\\frac{13x}{24}"}
        ]
);
