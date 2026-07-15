// levels/expandDifferenceOfTwoSquaresHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'expandDifferenceOfTwoSquaresHard',
    'Expanding Difference of Two Squares (Hard)',
    [
            
            // Textbook questions with fractions
            {problem: "(x+\\frac{1}{3})(x-\\frac{1}{3})", answer: "x^2-\\frac{1}{9}"},
            {problem: "(x+\\frac{3}{4})(x-\\frac{3}{4})", answer: "x^2-\\frac{9}{16}"},
            {problem: "\\left(\\frac{x}{3}+\\frac{4}{5}\\right)\\left(\\frac{x}{3}-\\frac{4}{5}\\right)", answer: "\\frac{x^2}{9}-\\frac{16}{25}"},
            {problem: "\\left(\\frac{x}{2}+\\frac{y}{7}\\right)\\left(\\frac{x}{2}-\\frac{y}{7}\\right)", answer: "\\frac{x^2}{4}-\\frac{y^2}{49}"},
            {problem: "(2x-\\frac{3}{7})(2x+\\frac{3}{7})", answer: "4x^2-\\frac{9}{49}"},
            {problem: "\\left(\\frac{7}{3}-5x\\right)\\left(\\frac{7}{3}+5x\\right)", answer: "\\frac{49}{9}-25x^2"},
            
            // Reciprocal terms
            {problem: "(x+\\frac{1}{x})(x-\\frac{1}{x})", answer: "x^2-\\frac{1}{x^2}"},
            {problem: "\\left(\\frac{4}{x}-x\\right)\\left(\\frac{4}{x}+x\\right)", answer: "\\frac{16}{x^2}-x^2"},
            {problem: "(3x+\\frac{1}{x})(3x-\\frac{1}{x})", answer: "9x^2-\\frac{1}{x^2}"},
            {problem: "\\left(\\frac{4a}{3}+2\\right)\\left(\\frac{4a}{3}-2\\right)", answer: "\\frac{16a^2}{9}-4"},
            {problem: "(xy-\\frac{1}{y})(xy+\\frac{1}{y})", answer: "x^2y^2-\\frac{1}{y^2}"},
            
            // Composite binomial as a term — applying DoTS where one "term" is itself a binomial
            {problem: "(x+(y-2))(x-(y-2))", answer: "x^2-(y-2)^2"},
            {problem: "(x+(y+3))(x-(y+3))", answer: "x^2-(y+3)^2"},
            {problem: "(a+(2b-1))(a-(2b-1))", answer: "a^2-(2b-1)^2"},
            {problem: "(3x+(y+2))(3x-(y+2))", answer: "9x^2-(y+2)^2"},
            {problem: "(x+(y+z))(x-(y+z))", answer: "x^2-(y+z)^2"},
            {problem: "((a+b)+(c+d))((a+b)-(c+d))", answer: "(a+b)^2-(c+d)^2"},
            
            // Additional fraction patterns
            {problem: "(x+\\frac{2}{5})(x-\\frac{2}{5})", answer: "x^2-\\frac{4}{25}"},
            {problem: "(x+\\frac{5}{6})(x-\\frac{5}{6})", answer: "x^2-\\frac{25}{36}"},
            {problem: "(x-\\frac{7}{8})(x+\\frac{7}{8})", answer: "x^2-\\frac{49}{64}"},
            {problem: "\\left(\\frac{2}{3}+x\\right)\\left(\\frac{2}{3}-x\\right)", answer: "\\frac{4}{9}-x^2"},
            {problem: "\\left(\\frac{5}{4}-x\\right)\\left(\\frac{5}{4}+x\\right)", answer: "\\frac{25}{16}-x^2"},
            {problem: "\\left(\\frac{9}{7}+x\\right)\\left(\\frac{9}{7}-x\\right)", answer: "\\frac{81}{49}-x^2"},
            
            // Fractions with coefficients
            {problem: "(3x+\\frac{1}{2})(3x-\\frac{1}{2})", answer: "9x^2-\\frac{1}{4}"},
            {problem: "(4x-\\frac{2}{3})(4x+\\frac{2}{3})", answer: "16x^2-\\frac{4}{9}"},
            {problem: "(5x+\\frac{3}{8})(5x-\\frac{3}{8})", answer: "25x^2-\\frac{9}{64}"},
            {problem: "(2x-\\frac{5}{9})(2x+\\frac{5}{9})", answer: "4x^2-\\frac{25}{81}"},
            {problem: "(6x+\\frac{1}{7})(6x-\\frac{1}{7})", answer: "36x^2-\\frac{1}{49}"},
            
            // Two-variable fractions
            {problem: "\\left(\\frac{x}{2}+\\frac{y}{3}\\right)\\left(\\frac{x}{2}-\\frac{y}{3}\\right)", answer: "\\frac{x^2}{4}-\\frac{y^2}{9}"},
            {problem: "\\left(\\frac{a}{5}+\\frac{b}{4}\\right)\\left(\\frac{a}{5}-\\frac{b}{4}\\right)", answer: "\\frac{a^2}{25}-\\frac{b^2}{16}"},
            {problem: "\\left(\\frac{x}{7}-\\frac{y}{6}\\right)\\left(\\frac{x}{7}+\\frac{y}{6}\\right)", answer: "\\frac{x^2}{49}-\\frac{y^2}{36}"},
            {problem: "\\left(\\frac{2x}{3}+\\frac{3y}{4}\\right)\\left(\\frac{2x}{3}-\\frac{3y}{4}\\right)", answer: "\\frac{4x^2}{9}-\\frac{9y^2}{16}"},
            {problem: "\\left(\\frac{3a}{8}-\\frac{2b}{5}\\right)\\left(\\frac{3a}{8}+\\frac{2b}{5}\\right)", answer: "\\frac{9a^2}{64}-\\frac{4b^2}{25}"},
            
            // Complex reciprocal patterns
            {problem: "\\left(\\frac{2}{x}+x\\right)\\left(\\frac{2}{x}-x\\right)", answer: "\\frac{4}{x^2}-x^2"},
            {problem: "\\left(\\frac{3}{y}-y\\right)\\left(\\frac{3}{y}+y\\right)", answer: "\\frac{9}{y^2}-y^2"},
            {problem: "\\left(\\frac{5}{x}+2x\\right)\\left(\\frac{5}{x}-2x\\right)", answer: "\\frac{25}{x^2}-4x^2"},
            {problem: "\\left(\\frac{1}{2a}+3a\\right)\\left(\\frac{1}{2a}-3a\\right)", answer: "\\frac{1}{4a^2}-9a^2"},
            {problem: "\\left(\\frac{4}{3b}-2b\\right)\\left(\\frac{4}{3b}+2b\\right)", answer: "\\frac{16}{9b^2}-4b^2"},
            
            // Mixed complex fractions
            {problem: "(2x+\\frac{y}{3})(2x-\\frac{y}{3})", answer: "4x^2-\\frac{y^2}{9}"},
            {problem: "\\left(\\frac{x}{4}+3y\\right)\\left(\\frac{x}{4}-3y\\right)", answer: "\\frac{x^2}{16}-9y^2"},
            {problem: "(5a-\\frac{b}{2})(5a+\\frac{b}{2})", answer: "25a^2-\\frac{b^2}{4}"},
            {problem: "\\left(\\frac{x}{6}+4y\\right)\\left(\\frac{x}{6}-4y\\right)", answer: "\\frac{x^2}{36}-16y^2"},
            {problem: "(3x-\\frac{y}{5})(3x+\\frac{y}{5})", answer: "9x^2-\\frac{y^2}{25}"},
            
            // Advanced reciprocal with variables
            {problem: "(ab+\\frac{1}{ab})(ab-\\frac{1}{ab})", answer: "a^2b^2-\\frac{1}{a^2b^2}"},
            {problem: "\\left(\\frac{xy}{2}-\\frac{2}{xy}\\right)\\left(\\frac{xy}{2}+\\frac{2}{xy}\\right)", answer: "\\frac{x^2y^2}{4}-\\frac{4}{x^2y^2}"},
            {problem: "\\left(\\frac{3}{xy}+xy\\right)\\left(\\frac{3}{xy}-xy\\right)", answer: "\\frac{9}{x^2y^2}-x^2y^2"},
            
            // Nested fraction expressions
            {problem: "\\left(\\frac{3x}{5}+\\frac{2}{7}\\right)\\left(\\frac{3x}{5}-\\frac{2}{7}\\right)", answer: "\\frac{9x^2}{25}-\\frac{4}{49}"},
            {problem: "\\left(\\frac{5a}{2}+\\frac{3}{b}\\right)\\left(\\frac{5a}{2}-\\frac{3}{b}\\right)", answer: "\\frac{25a^2}{4}-\\frac{9}{b^2}"}
        ]
);
