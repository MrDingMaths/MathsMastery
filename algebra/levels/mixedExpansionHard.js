// levels/mixedExpansionHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'mixedExpansionHard',
    'Mixed Expansion (Hard)',
    [

            // Complex multi-variable high-order expansions
            {problem: "2x(3 - x)(x^2 + 2)", answer: "-2x^4 + 6x^3 - 4x^2 + 12x"},
            {problem: "3x^2(3x^2 - 5)(4 - x^2)", answer: "-9x^6 + 51x^4 - 60x^2"},
            {problem: "2y^3(5y^2 + 3y^4) - 4y^2(2y^2 - y^4)", answer: "6y^7 + 4y^6 + 10y^5 - 8y^4"},

            // Complex coefficient operations
            {problem: "2(3x - 4)^2 - (3x - 4)(3x + 4)", answer: "9x^2 - 48x + 48"},
            {problem: "(x + y)^2 - (x - y)^2 + (x + y)(x - y)", answer: "x^2 + 4xy - y^2"},
            {problem: "(x^2 + y^2)^2 - 4x^2y^2", answer: "x^4 - 2x^2y^2 + y^4"},
            {problem: "-2x(x^2 + 2)^2", answer: "-2x^5 - 8x^3 - 8x"},

            // Special algebraic identities
            {problem: "(a + b)(a^2 - ab + b^2)", answer: "a^3 + b^3"},
            {problem: "(a - b)(a^2 + ab + b^2)", answer: "a^3 - b^3"},
            {problem: "(x + y - 2)(x - y + 2)", answer: "x^2 - y^2 + 4y - 4"},
            {problem: "((x + 3)(x - 3))^2", answer: "x^4 - 18x^2 + 81"},

            // Multi-step compound expansions
            {problem: "3a^2(4a^3 - b^4) + 2a^2(5a^3 + 3b^4)", answer: "22a^5 + 3a^2b^4"},
            {problem: "-(2x^2 - 3)^2", answer: "-4x^4 + 12x^2 - 9"},
            {problem: "(2a^2 + 5b^3)^2", answer: "4a^4 + 20a^2b^3 + 25b^6"},

            // Fractional expressions
            {problem: "(x + \\frac{1}{x})^2", answer: "x^2 + 2 + \\frac{1}{x^2}"},
            {problem: "(x + \\frac{2}{x})^2", answer: "x^2 + 4 + \\frac{4}{x^2}"},
            {problem: "(a - \\frac{2}{a})(a + \\frac{2}{a})", answer: "a^2 - \\frac{4}{a^2}"},
            {problem: "(x + \\frac{1}{\\sqrt{x}})^2", answer: "x^2 + 2\\sqrt{x} + \\frac{1}{x}"},
            {problem: "2(x + 3)^2 - (x + 3)(x - 3)", answer: "x^2 + 12x + 27"},

            // Additional complex expansions
            {problem: "3x^2(2x - 1)^2 + 4x(x + 2)^2", answer: "12x^4 - 8x^3 + 19x^2 + 16x"},
            {problem: "-2a^3(a^2 - 3a + 1) + a^2(4a^2 + a - 2)", answer: "-2a^5 + 10a^4 - a^3 - 2a^2"},
            {problem: "4y(y - 1)(y + 3) - 2y^2(y - 2)", answer: "2y^3 + 12y^2 - 12y"},
            {problem: "5x^2(x^2 + 2x - 1) - 3x(x^3 - x + 4)", answer: "2x^4 + 10x^3 - 2x^2 - 12x"},

            // Advanced rational expressions
            {problem: "\\left(\\frac{a}{b} + \\frac{b}{a}\\right)^2", answer: "\\frac{a^2}{b^2} + 2 + \\frac{b^2}{a^2}"},
            {problem: "\\left(\\frac{2x}{y} - \\frac{y}{2x}\\right)^2", answer: "\\frac{4x^2}{y^2} - 2 + \\frac{y^2}{4x^2}"},
            {problem: "\\left(\\frac{x}{y} + \\frac{y}{x}\\right)\\left(\\frac{x}{y} - \\frac{y}{x}\\right)", answer: "\\frac{x^2}{y^2} - \\frac{y^2}{x^2}"},

            // General algebraic expressions
            {problem: "(ax-b)(cx-d)", answer: "acx^2 - adx - bcx + bd"},
            {problem: "(ax+b)(cx+d)", answer: "acx^2 + adx + bcx + bd"},
            {problem: "(a+b)(a+x)", answer: "a^2 + ab + ax + bx"},
            {problem: "(a-b)(a+x)", answer: "a^2 - ab + ax - bx"},

            // Multi-variable expressions
            {problem: "(y-x)(a-y)", answer: "xy - xa - y^2 + ya"},
            {problem: "(2a-b)(3a+2)", answer: "6a^2 - 3ab + 4a - 2b"},
            {problem: "(xy-ya)(a+3x)", answer: "3x^2y - 2xya - ya^2"},

            // Complex rational expressions combining two-variable products
            {problem: "(3x-2y)(4x+5y) - (2x+y)(x-3y)", answer: "10x^2 + 12xy - 7y^2"},
            {problem: "(5a+3b)(2a-b) - (a+4b)(3a-2b)", answer: "7a^2 - 9ab + 5b^2"},
            {problem: "(4x-y)(x+2y) - (2x-3y)(x+y)", answer: "2x^2 + 8xy + y^2"},

            // Very challenging patterns
            {problem: "x(x+y)(x-y) + y(x+y)(x-y)", answer: "x^3 + x^2y - xy^2 - y^3"},
            {problem: "(x^2+1)(x^2-1)", answer: "x^4 - 1"},

            // Fractions with variables
            {problem: "(x + \\frac{1}{3})^2", answer: "x^2 + \\frac{2}{3}x + \\frac{1}{9}"},
            {problem: "(x - \\frac{2}{5})^2", answer: "x^2 - \\frac{4}{5}x + \\frac{4}{25}"},
            {problem: "(3x + \\frac{5}{7})^2", answer: "9x^2 + \\frac{30}{7}x + \\frac{25}{49}"},
            {problem: "(3x + \\frac{2}{5})^2", answer: "9x^2 + \\frac{12}{5}x + \\frac{4}{25}"},
            {problem: "\\left(\\frac{x}{5} - \\frac{3}{8}\\right)^2", answer: "\\frac{x^2}{25} - \\frac{3x}{20} + \\frac{9}{64}"},
            {problem: "\\left(\\frac{2x}{3} + \\frac{9y}{8}\\right)^2", answer: "\\frac{4x^2}{9} + \\frac{3xy}{2} + \\frac{81y^2}{64}"},

            // Reciprocal terms
            {problem: "(x - \\frac{1}{x})^2", answer: "x^2 - 2 + \\frac{1}{x^2}"},
            {problem: "(2 + \\frac{2}{a})^2", answer: "4 + \\frac{8}{a} + \\frac{4}{a^2}"},
            {problem: "\\left(\\frac{6}{x} - x\\right)^2", answer: "x^2 - 12 + \\frac{36}{x^2}"},
            {problem: "\\left(\\frac{3}{x} + 3x\\right)^2", answer: "9x^2 + 18 + \\frac{9}{x^2}"},

            // Higher powers with coefficients
            {problem: "(2x^2 + 3y^2)^2", answer: "4x^4 + 12x^2y^2 + 9y^4"},
            {problem: "(5a^3 - 2b^4)^2", answer: "25a^6 - 20a^3b^4 + 4b^8"},
            {problem: "(x^5 + 4y^2)^2", answer: "x^{10} + 8x^5y^2 + 16y^4"},
            {problem: "(3x^4 - 5y^3)^2", answer: "9x^8 - 30x^4y^3 + 25y^6"},

            // Fractions with powers
            {problem: "(x^2 + \\frac{1}{2})^2", answer: "x^4 + x^2 + \\frac{1}{4}"},
            {problem: "(y^3 - \\frac{1}{3})^2", answer: "y^6 - \\frac{2}{3}y^3 + \\frac{1}{9}"},
            {problem: "\\left(\\frac{a^3}{2} - \\frac{b^2}{3}\\right)^2", answer: "\\frac{a^6}{4} - \\frac{a^3b^2}{3} + \\frac{b^4}{9}"},
            {problem: "(2x^3 + \\frac{1}{x})^2", answer: "4x^6 + 4x^2 + \\frac{1}{x^2}"},

            // Additional complex fraction examples
            {problem: "(x + \\frac{1}{2})^2", answer: "x^2 + x + \\frac{1}{4}"},
            {problem: "(x - \\frac{3}{4})^2", answer: "x^2 - \\frac{3}{2}x + \\frac{9}{16}"},
            {problem: "(2x + \\frac{1}{4})^2", answer: "4x^2 + x + \\frac{1}{16}"},
            {problem: "\\left(\\frac{x}{2} + \\frac{1}{3}\\right)^2", answer: "\\frac{x^2}{4} + \\frac{x}{3} + \\frac{1}{9}"},
            {problem: "\\left(\\frac{x}{3} - \\frac{2}{5}\\right)^2", answer: "\\frac{x^2}{9} - \\frac{4x}{15} + \\frac{4}{25}"},

            // More reciprocal variations
            {problem: "\\left(\\frac{2}{x} + x\\right)^2", answer: "x^2 + 4 + \\frac{4}{x^2}"},
            {problem: "\\left(\\frac{1}{x} - 2x\\right)^2", answer: "4x^2 - 4 + \\frac{1}{x^2}"},
            {problem: "(3 + \\frac{1}{3x})^2", answer: "9 + \\frac{2}{x} + \\frac{1}{9x^2}"},
            {problem: "\\left(\\frac{5}{2x} - \\frac{x}{2}\\right)^2", answer: "\\frac{x^2}{4} - \\frac{5}{2} + \\frac{25}{4x^2}"},

            // Complex power combinations
            {problem: "(x^3 + 2y^2)^2", answer: "x^6 + 4x^3y^2 + 4y^4"},
            {problem: "(3a^2 - b^3)^2", answer: "9a^4 - 6a^2b^3 + b^6"},
            {problem: "(2x^4 + 3y^3)^2", answer: "4x^8 + 12x^4y^3 + 9y^6"},
            {problem: "(4x^5 - y^2)^2", answer: "16x^{10} - 8x^5y^2 + y^4"},

            // Mixed fraction and power terms
            {problem: "\\left(\\frac{x^2}{3} + \\frac{2}{x}\\right)^2", answer: "\\frac{x^4}{9} + \\frac{4x}{3} + \\frac{4}{x^2}"},
            {problem: "\\left(\\frac{3}{y^2} - y^3\\right)^2", answer: "y^6 - 6y + \\frac{9}{y^4}"},
            {problem: "(2x^2 + \\frac{1}{3x})^2", answer: "4x^4 + \\frac{4x}{3} + \\frac{1}{9x^2}"},

            // Complex coefficient fractions
            {problem: "\\left(\\frac{3x}{4} + \\frac{5y}{6}\\right)^2", answer: "\\frac{9x^2}{16} + \\frac{5xy}{4} + \\frac{25y^2}{36}"},
            {problem: "\\left(\\frac{2a}{5} - \\frac{3b}{7}\\right)^2", answer: "\\frac{4a^2}{25} - \\frac{12ab}{35} + \\frac{9b^2}{49}"},
            {problem: "\\left(\\frac{4x}{3} + \\frac{y}{2}\\right)^2", answer: "\\frac{16x^2}{9} + \\frac{4xy}{3} + \\frac{y^2}{4}"},

            // Very advanced combinations
            {problem: "(2x + \\frac{3}{x})^2", answer: "4x^2 + 12 + \\frac{9}{x^2}"},
            {problem: "\\left(\\frac{x^4}{4} + \\frac{2}{x^2}\\right)^2", answer: "\\frac{x^8}{16} + x^2 + \\frac{4}{x^4}"},
            {problem: "(3x - \\frac{1}{x})^2", answer: "9x^2 - 6 + \\frac{1}{x^2}"},

            // Additional challenging examples
            {problem: "\\left(\\frac{2x}{7} + \\frac{3}{14}\\right)^2", answer: "\\frac{4x^2}{49} + \\frac{6x}{49} + \\frac{9}{196}"},
            {problem: "\\left(\\frac{5y}{8} - \\frac{1}{4y}\\right)^2", answer: "\\frac{25y^2}{64} - \\frac{5}{16} + \\frac{1}{16y^2}"},
            {problem: "\\left(\\frac{a^5}{6} + \\frac{3b^3}{4}\\right)^2", answer: "\\frac{a^{10}}{36} + \\frac{a^5b^3}{4} + \\frac{9b^6}{16}"},

            // Final complex variations
            {problem: "\\left(\\frac{x^2}{2} + \\frac{3}{x}\\right)^2", answer: "\\frac{x^4}{4} + 3x + \\frac{9}{x^2}"},
            {problem: "\\left(\\frac{4x^2}{9} - \\frac{2}{3x}\\right)^2", answer: "\\frac{16x^4}{81} - \\frac{16x}{27} + \\frac{4}{9x^2}"},

            // Difference of squares with fractional terms
            {problem: "(x+\\frac{1}{3})(x-\\frac{1}{3})", answer: "x^2-\\frac{1}{9}"},
            {problem: "(x+\\frac{3}{4})(x-\\frac{3}{4})", answer: "x^2-\\frac{9}{16}"},
            {problem: "\\left(\\frac{x}{3}+\\frac{4}{5}\\right)\\left(\\frac{x}{3}-\\frac{4}{5}\\right)", answer: "\\frac{x^2}{9}-\\frac{16}{25}"},
            {problem: "\\left(\\frac{x}{2}+\\frac{y}{7}\\right)\\left(\\frac{x}{2}-\\frac{y}{7}\\right)", answer: "\\frac{x^2}{4}-\\frac{y^2}{49}"},
            {problem: "(2x-\\frac{3}{7})(2x+\\frac{3}{7})", answer: "4x^2-\\frac{9}{49}"},
            {problem: "\\left(\\frac{7}{3}-5x\\right)\\left(\\frac{7}{3}+5x\\right)", answer: "\\frac{49}{9}-25x^2"},

            // Reciprocal DOTS
            {problem: "(x+\\frac{1}{x})(x-\\frac{1}{x})", answer: "x^2-\\frac{1}{x^2}"},
            {problem: "\\left(\\frac{4}{x}-x\\right)\\left(\\frac{4}{x}+x\\right)", answer: "\\frac{16}{x^2}-x^2"},
            {problem: "(3x+\\frac{1}{x})(3x-\\frac{1}{x})", answer: "9x^2-\\frac{1}{x^2}"},
            {problem: "\\left(\\frac{4a}{3}+2\\right)\\left(\\frac{4a}{3}-2\\right)", answer: "\\frac{16a^2}{9}-4"},
            {problem: "(xy-\\frac{1}{y})(xy+\\frac{1}{y})", answer: "x^2y^2-\\frac{1}{y^2}"},

            // Complex expressions with nested parentheses
            {problem: "(x+(y-2))(x-(y-2))", answer: "x^2-(y-2)^2"},

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
