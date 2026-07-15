// levels/multiplicationIndexLawHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'multiplicationIndexLawHard',
    'Index Law Multiplication (Hard)',
    [
            // Cognitive Level 1: Three Term Products (From textbook)
            {problem: "3a \\times 5a \\times a^4", answer: "15a^6"},
            {problem: "3x^4 \\times 5xy^2 \\times 10y^4", answer: "150x^5y^6"},
            {problem: "2xy^3 \\times 3x^4y \\times 2x^2y^2", answer: "12x^7y^6"},
            {problem: "4x^6y^7 \\times xy \\times 5xy^2", answer: "20x^8y^{10}"},
            
            // Additional three term products for reinforcement
            {problem: "2a^2 \\times 3a^3 \\times 4a^4", answer: "24a^9"},
            {problem: "5b \\times 2b^5 \\times 3b^2", answer: "30b^8"},
            {problem: "4x^3 \\times 2x^2 \\times 3x^4", answer: "24x^9"},
            {problem: "3x^4 \\times 5x \\times 2x^6", answer: "30x^{11}"},
            {problem: "6x^2 \\times 2x^3 \\times 4x^5", answer: "48x^{10}"},
            
            // Cognitive Level 2: Complex Multi-Variable Three Term Products
            {problem: "2xy^2 \\times 3x^3y \\times 4xy^3", answer: "24x^5y^6"},
            {problem: "5a^2b \\times 2ab^4 \\times 3a^3b^2", answer: "30a^6b^7"},
            {problem: "4x^3y^2 \\times 3xy^3 \\times 2x^2y", answer: "24x^6y^6"},
            {problem: "3x^4y \\times 2xy^2 \\times 5x^2y^4", answer: "30x^7y^7"},
            {problem: "6x^2y^3 \\times xy \\times 2x^4y^2", answer: "12x^7y^6"},
            {problem: "4x^3y^4 \\times 2xy^2 \\times 3x^2y", answer: "24x^6y^7"},
            {problem: "5x^5y^2 \\times 3xy^4 \\times 2x^3y", answer: "30x^9y^7"},
            
            // Cognitive Level 4: Mixed Positive and Negative Coefficients
            {problem: "-3x^2 \\times 4x^3 \\times (-2x)", answer: "24x^6"},
            {problem: "5a^4 \\times (-2a^2) \\times 3a^3", answer: "-30a^9"},
            {problem: "-4b^3 \\times (-3b^2) \\times 2b^5", answer: "24b^{10}"},
            {problem: "6x^5 \\times (-2x) \\times (-3x^4)", answer: "36x^{10}"},
            {problem: "-2x^6 \\times 5x^3 \\times (-4x^2)", answer: "40x^{11}"},
            {problem: "3x^4 \\times (-5x^2) \\times (-2x^6)", answer: "30x^{12}"},
            
            // Cognitive Level 5: Multi-Variable with Negative Coefficients
            {problem: "-2xy^3 \\times 3x^4y \\times (-4x^2y^2)", answer: "24x^7y^6"},
            {problem: "5a^3b^2 \\times (-3ab^4) \\times 2a^2b", answer: "-30a^6b^7"},
            {problem: "-4x^2y^3 \\times (-2xy) \\times 3x^4y^2", answer: "24x^7y^6"},
            {problem: "6x^5y \\times (-xy^2) \\times (-2x^3y^4)", answer: "12x^9y^7"},
            {problem: "-3x^4y^2 \\times 4xy^3 \\times (-2x^2y)", answer: "24x^7y^6"},
            
            // Pattern recognition and reordering with exponents
            {problem: "2ab \\times (-3ba)", answer: "-6a^2b^2"},
            {problem: "5xy \\times (-4yx)", answer: "-20x^2y^2"},
            {problem: "3xy \\times 7yx", answer: "21x^2y^2"},
            {problem: "(-4xy) \\times (-6yx)", answer: "24x^2y^2"},
            {problem: "8xy \\times (-2yx)", answer: "-16x^2y^2"},
            {problem: "(-5xy) \\times 3yx", answer: "-15x^2y^2"},
            {problem: "6xy \\times (-4yx)", answer: "-24x^2y^2"},
            {problem: "(-7xy) \\times (-2yx)", answer: "14x^2y^2"},
            {problem: "9xy \\times 3yx", answer: "27x^2y^2"},
            {problem: "(-ab^2) \\times 4b^2a", answer: "-4a^2b^4"},
            {problem: "5x^2y \\times (-3yx^2)", answer: "-15x^4y^2"},
            {problem: "(-2x^3y) \\times 7yx^3", answer: "-14x^6y^2"},
            
            // Complex multi-factor with exponents
            {problem: "4x^3y^2 \\times (-2x^3y^2)", answer: "-8x^6y^4"},
            {problem: "8x^2 \\times (-2y) \\times 3a \\times (-b)", answer: "48x^2yab"},

            // Three or more factors with multi-variable terms
            {problem: "x^2 \\times y^3 \\times x^4 \\times y^7", answer: "x^6y^{10}"},
            {problem: "2a^3 \\times 3b^2 \\times a^4b^3", answer: "6a^7b^5"},
            {problem: "4x^2y \\times xy^3 \\times 2x^3y^2", answer: "8x^6y^6"},
            {problem: "3x^4y \\times 2xy^2 \\times x^2y^3", answer: "6x^7y^6"},
            {problem: "5x^3y^2 \\times xy \\times 2x^2y^4", answer: "10x^6y^7"},

            // Three distinct letter variables
            {problem: "xy^4a \\times 4xy", answer: "4x^2y^5a"},
            {problem: "3abx \\times 2a^2bx^3", answer: "6a^3b^2x^4"},
            {problem: "4x^2ya^3 \\times 3xy^4a", answer: "12x^3y^5a^4"},
            {problem: "5x^3y^2a \\times 2xy^3a^4", answer: "10x^4y^5a^5"},
            {problem: "6x^4y^3a^2 \\times xy^2a^5", answer: "6x^5y^5a^7"},
            {problem: "2x^5y^4a^3 \\times 3x^2ya^2", answer: "6x^7y^5a^5"},

            // Fraction coefficients
            {problem: "\\frac{1}{5}x^2 \\times x", answer: "\\frac{1}{5}x^3"},
            {problem: "\\frac{1}{4}x^4 \\times \\frac{2}{3}x^3", answer: "\\frac{1}{6}x^7"},
            {problem: "\\frac{3}{5}x \\times \\frac{3x}{5}", answer: "\\frac{9}{25}x^2"},
            {problem: "\\frac{2}{3}a^3 \\times \\frac{3}{4}a^2", answer: "\\frac{1}{2}a^5"},
            {problem: "\\frac{1}{2}x^4y \\times \\frac{4}{3}xy^2", answer: "\\frac{2}{3}x^5y^3"},
            {problem: "\\frac{3}{7}x^2y \\times \\frac{7}{6}xy^3", answer: "\\frac{1}{2}x^3y^4"},
            {problem: "\\frac{5}{8}x^3y^2 \\times \\frac{4}{5}xy^4", answer: "\\frac{1}{2}x^4y^6"},
            {problem: "\\frac{2}{9}x^5y \\times \\frac{9}{4}x^2y^3", answer: "\\frac{1}{2}x^7y^4"},
        ]
);
