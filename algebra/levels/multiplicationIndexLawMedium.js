// levels/multiplicationIndexLawMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'multiplicationIndexLawMedium',
    'Index Law Multiplication (Medium)',
    [
            // Cognitive Level 1: Two Variables (Basic multi-variable patterns)
            {problem: "x^3y^3 \\times x^4y^2", answer: "x^7y^5"},
            {problem: "x^7y^3 \\times x^2y", answer: "x^9y^4"},
            {problem: "x^2y \\times y^2", answer: "x^2y^3"},
            
            // Additional two-variable questions
            {problem: "a^3b^2 \\times a^2b^4", answer: "a^5b^6"},
            {problem: "x^4y^3 \\times x^2y^5", answer: "x^6y^8"},
            {problem: "x^5y^2 \\times x^3y^6", answer: "x^8y^8"},
            {problem: "x^2y^4 \\times x^6y^3", answer: "x^8y^7"},
            {problem: "x^3y^5 \\times x^4y^2", answer: "x^7y^7"},
            {problem: "x^6y^2 \\times x^2y^4", answer: "x^8y^6"},
            {problem: "x^4y^3 \\times x^3y^4", answer: "x^7y^7"},
            {problem: "x^2y^6 \\times x^5y^2", answer: "x^7y^8"},
            
            // Basic coefficient × first-power single variable
            {problem: "3a \\times 4a", answer: "12a^2"},
            {problem: "5y \\times 2y", answer: "10y^2"},
            {problem: "3x \\times 5x", answer: "15x^2"},
            {problem: "4x \\times 3x", answer: "12x^2"},
            {problem: "9x \\times x", answer: "9x^2"},
            {problem: "2x \\times 8x", answer: "16x^2"},
            {problem: "3x \\times x", answer: "3x^2"},
            {problem: "2x \\times x", answer: "2x^2"},
            {problem: "x \\times 7x", answer: "7x^2"},
            {problem: "x \\times 3x", answer: "3x^2"},
            {problem: "6x \\times 2x", answer: "12x^2"},
            {problem: "9x \\times 4x", answer: "36x^2"},
            {problem: "5x \\times 2x", answer: "10x^2"},

            // Cognitive Level 2: Coefficients with Single Variables
            {problem: "3x^3 \\times 5x^2", answer: "15x^5"},
            {problem: "4x^2 \\times 5x^3", answer: "20x^5"},
            {problem: "2x^3 \\times 5x^4", answer: "10x^7"},
            {problem: "7x^2 \\times 2x^3", answer: "14x^5"},
            {problem: "2x^4 \\times 3x^3", answer: "6x^7"},
            
            // Additional coefficient questions
            {problem: "3a^4 \\times 2a^3", answer: "6a^7"},
            {problem: "4b^5 \\times 3b^2", answer: "12b^7"},
            {problem: "5x^3 \\times 4x^4", answer: "20x^7"},
            {problem: "6x^2 \\times 2x^5", answer: "12x^7"},
            {problem: "3x^6 \\times 4x^3", answer: "12x^9"},
            {problem: "2x^4 \\times 7x^2", answer: "14x^6"},
            {problem: "8x^3 \\times 2x^4", answer: "16x^7"},
            {problem: "3x^5 \\times 5x^3", answer: "15x^8"},
            
            // Cognitive Level 3: Coefficients with Two Variables
            {problem: "5x^3y^5 \\times xy^4", answer: "5x^4y^9"},
            {problem: "4x^4y^2 \\times 2x^2y^2", answer: "8x^6y^4"},
            {problem: "5x^4y \\times 4x^3y", answer: "20x^7y^2"},
            {problem: "2x^2y^2 \\times 4x^3y^5", answer: "8x^5y^7"},
            {problem: "7a^2b^3 \\times 2a^2b", answer: "14a^4b^4"},
            {problem: "3a^2b \\times 5ab^5", answer: "15a^3b^6"},
            {problem: "3x^7y \\times 6x^2y", answer: "18x^9y^2"},
            
            // Additional coefficient + multi-variable questions
            {problem: "2x^3y^2 \\times 3x^2y^4", answer: "6x^5y^6"},
            {problem: "4x^5y^3 \\times 3x^2y^2", answer: "12x^7y^5"},
            {problem: "5x^4y^2 \\times 2x^3y^5", answer: "10x^7y^7"},
            {problem: "3y^6x^4 \\times 4y^2x^3", answer: "12y^8x^7"},
            {problem: "6y^3x^5 \\times 2y^4x^2", answer: "12y^7x^7"},
            {problem: "2a^7b^3 \\times 5a^2b^4", answer: "10a^9b^7"},
            {problem: "3x^5y^6 \\times 4x^3y^2", answer: "12x^8y^8"},
            
            // Cognitive Level 4: Higher Powers with Coefficients
            {problem: "7x^2 \\times 4x^{12}", answer: "28x^{14}"},
            {problem: "4y^3 \\times 7y^{10}", answer: "28y^{13}"},
            {problem: "11x \\times 10x^3", answer: "110x^4"},
            {problem: "7x \\times 12x^3y^5", answer: "84x^4y^5"},
            {problem: "x^8 \\times 2x^8", answer: "2x^{16}"},
            
            // Additional higher power questions
            {problem: "3b^{10} \\times 4b^5", answer: "12b^{15}"},
            {problem: "5x^8 \\times 2x^7", answer: "10x^{15}"},
            {problem: "6x^9 \\times 3x^4", answer: "18x^{13}"},
            {problem: "2x^{12} \\times 7x^6", answer: "14x^{18}"},
            {problem: "4x^{11} \\times 5x^8", answer: "20x^{19}"},
            
            // Cognitive Level 5: Two variables, large exponents
            {problem: "9yx^2 \\times 2yx^5", answer: "18y^2x^7"},
            {problem: "2y^{10}x^2 \\times y^5x^3", answer: "2y^{15}x^5"},
            
            // Cognitive Level 6: Two-factor, two variables, coefficient
            {problem: "3x^3y^2 \\times y^5", answer: "3x^3y^7"},
            
            // Cognitive Level 7: Negative Coefficients
            {problem: "-7x^2y^3 \\times 2x^5y", answer: "-14x^7y^4"},
            {problem: "-4ab^2 \\times a^4b", answer: "-4a^5b^3"},
            {problem: "2x^4y \\times (-8x^2)", answer: "-16x^6y"},
            
            // Additional negative coefficient questions
            {problem: "-3x^5y^2 \\times 4x^2y^3", answer: "-12x^7y^5"},
            {problem: "5x^3y^4 \\times (-2x^4y)", answer: "-10x^7y^5"},
            {problem: "-6x^2y^5 \\times 3x^3y^2", answer: "-18x^5y^7"},
            {problem: "4x^6y^3 \\times (-2x^2y^4)", answer: "-8x^8y^7"},
            {problem: "-2x^4y^6 \\times 5x^3y^2", answer: "-10x^7y^8"},
            
            // Mixed complexity reinforcement
            {problem: "6ab^3 \\times 2a^4b^2", answer: "12a^5b^5"},
            {problem: "3x^5y^2 \\times 4x^2y^6", answer: "12x^7y^8"},
            {problem: "5x^4y^3 \\times 2x^6y^4", answer: "10x^{10}y^7"},
            {problem: "4x^7y^2 \\times 3x^3y^8", answer: "12x^{10}y^{10}"},
            
            // Moved from Multiply Terms - Questions with negative coefficients and same variable products
            {problem: "7x \\times (-3x)", answer: "-21x^2"},
            {problem: "(-4x) \\times 6x", answer: "-24x^2"},
            {problem: "8x \\times (-x)", answer: "-8x^2"},
            {problem: "(-6x) \\times (-2x)", answer: "12x^2"},
            {problem: "7x \\times (-4x)", answer: "-28x^2"},
            {problem: "(-5x) \\times 2x", answer: "-10x^2"},
            {problem: "(-3x) \\times (-7x)", answer: "21x^2"},
            {problem: "3a \\times 3a", answer: "9a^2"},
            {problem: "4x \\times 4x", answer: "16x^2"},
            {problem: "5x \\times 5x", answer: "25x^2"},
            {problem: "(-2y) \\times (-2y)", answer: "4y^2"},
            {problem: "6x \\times 6x", answer: "36x^2"},
            {problem: "(-3x) \\times (-3x)", answer: "9x^2"},
            {problem: "7x \\times 7x", answer: "49x^2"},
            {problem: "(-4x) \\times (-4x)", answer: "16x^2"},
            {problem: "8x \\times 8x", answer: "64x^2"},
            {problem: "(-5x) \\times (-5x)", answer: "25x^2"},
            {problem: "9x \\times 9x", answer: "81x^2"},
            {problem: "(-6x) \\times (-6x)", answer: "36x^2"},
            {problem: "-4a \\times (-3a)", answer: "12a^2"},
            
            // Multi-variable same variable products from Multiply Terms
            {problem: "7a \\times 3ab", answer: "21a^2b"},
            {problem: "5xy \\times (-3y)", answer: "-15xy^2"},
            {problem: "4xy \\times 2x", answer: "8x^2y"},
            {problem: "6xy \\times 3x", answer: "18x^2y"},
            {problem: "(-2xy) \\times 4x", answer: "-8x^2y"},
            {problem: "3xy \\times (-5x)", answer: "-15x^2y"},
            {problem: "8ab \\times 2a", answer: "16a^2b"},
            {problem: "(-4xy) \\times 3x", answer: "-12x^2y"},
            {problem: "5xy \\times (-2x)", answer: "-10x^2y"},
            {problem: "7xy \\times 4x", answer: "28x^2y"},
            {problem: "(-3xy) \\times (-6x)", answer: "18x^2y"},
            {problem: "2xy \\times 9x", answer: "18x^2y"},
            {problem: "-3xy \\times (-6y)", answer: "18xy^2"}
        ]
);
