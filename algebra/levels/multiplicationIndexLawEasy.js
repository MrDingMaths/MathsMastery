// levels/multiplicationIndexLawEasy.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'multiplicationIndexLawEasy',
    'Index Law Multiplication (Easy)',
    [
            // Cognitive Level 1: Direct Application (Same base, add exponents)
            // Basic single variable multiplication
            {problem: "x^4 \\times x^3", answer: "x^7"},
            {problem: "a^6 \\times a^3", answer: "a^9"},
            {problem: "x^5 \\times x^3", answer: "x^8"},
            {problem: "y \\times y^4", answer: "y^5"},
            {problem: "x^2 \\times x", answer: "x^3"},
            {problem: "x^3 \\times x^4", answer: "x^7"},
            {problem: "x^2 \\times x^4", answer: "x^6"},
            {problem: "x \\times x^3", answer: "x^4"},
            {problem: "a^5 \\times a^4", answer: "a^9"},
            {problem: "x^3 \\times x^2", answer: "x^5"},
            {problem: "b \\times b^5", answer: "b^6"},
            
            // Additional basic questions for reinforcement
            {problem: "x^2 \\times x^2", answer: "x^4"},
            {problem: "x \\times x", answer: "x^2"},
            {problem: "x^3 \\times x", answer: "x^4"},
            {problem: "x^4 \\times x^2", answer: "x^6"},
            {problem: "x^5 \\times x", answer: "x^6"},
            {problem: "x^2 \\times x^3", answer: "x^5"},
            {problem: "x^4 \\times x", answer: "x^5"},
            
            // Cognitive Level 2: Pattern Recognition (Multiple terms, same base)
            {problem: "y^2 \\times y \\times y^4", answer: "y^7"},
            {problem: "b \\times b^5 \\times b^2", answer: "b^8"},
            {problem: "x^2 \\times x^4 \\times x^3", answer: "x^9"},
            {problem: "a^2 \\times a^4 \\times a^3", answer: "a^9"},
            {problem: "x^2 \\times x^3 \\times x^4", answer: "x^9"},
            {problem: "x^4 \\times x^3 \\times x", answer: "x^8"},
            {problem: "x^2 \\times x \\times x \\times x", answer: "x^5"},
            
            // Additional three-term questions
            {problem: "x \\times x^2 \\times x^3", answer: "x^6"},
            {problem: "x^3 \\times x \\times x^2", answer: "x^6"},
            {problem: "x^2 \\times x^2 \\times x^2", answer: "x^6"},
            {problem: "x \\times x \\times x^3", answer: "x^5"},
            {problem: "x^3 \\times x^2 \\times x", answer: "x^6"},
            {problem: "x^4 \\times x \\times x^3", answer: "x^8"},
            {problem: "x \\times x^3 \\times x^4", answer: "x^8"},
            
            // Cognitive Level 3: Higher Powers (Testing comfort with larger numbers)
            {problem: "x^{10} \\times x^3", answer: "x^{13}"},
            {problem: "x^7 \\times x^2", answer: "x^9"},
            {problem: "x^6 \\times x^3 \\times x^2", answer: "x^{11}"},
            {problem: "x^{10} \\times x^{12} \\times x^{14}", answer: "x^{36}"},
            
            // Additional higher power questions
            {problem: "x^8 \\times x^5", answer: "x^{13}"},
            {problem: "a^7 \\times a^6", answer: "a^{13}"},
            {problem: "b^9 \\times b^4", answer: "b^{13}"},
            {problem: "y^{12} \\times y^3", answer: "y^{15}"},
            {problem: "x^{11} \\times x^7", answer: "x^{18}"},
            {problem: "x^8 \\times x^8", answer: "x^{16}"},
            {problem: "x^{15} \\times x^5", answer: "x^{20}"},
            
            // Cognitive Level 4: Mixed Complexity (Various power combinations)
            {problem: "x^6 \\times x \\times x^4", answer: "x^{11}"},
            {problem: "x^3 \\times x^7 \\times x^2", answer: "x^{12}"},
            {problem: "x^5 \\times x^5 \\times x^5", answer: "x^{15}"},
            {problem: "x^4 \\times x^6 \\times x^3", answer: "x^{13}"},
            {problem: "x^2 \\times x^8 \\times x^4", answer: "x^{14}"},
            
            // Four-term combinations for advanced pattern recognition
            {problem: "x \\times x \\times x \\times x", answer: "x^4"},
            {problem: "a^2 \\times a \\times a^3 \\times a", answer: "a^7"},
            {problem: "b^3 \\times b^2 \\times b \\times b^4", answer: "b^{10}"},
            {problem: "x^5 \\times x \\times x^2 \\times x^3", answer: "x^{11}"},
            {problem: "x \\times x^4 \\times x^2 \\times x^6", answer: "x^{13}"},
            
            // Reinforcement questions with varied patterns
            {problem: "x^3 \\times x^3", answer: "x^6"},
            {problem: "x^4 \\times x^4", answer: "x^8"},
            {problem: "x^5 \\times x^5", answer: "x^{10}"},
            {problem: "x^6 \\times x^6", answer: "x^{12}"},
            {problem: "x^7 \\times x^7", answer: "x^{14}"},
            
            // Edge cases with exponent 1
            {problem: "x^1 \\times x^3", answer: "x^4"},
            {problem: "a^5 \\times a^1", answer: "a^6"},
            {problem: "b^1 \\times b^1", answer: "b^2"},
            {problem: "x^7 \\times x^1", answer: "x^8"},
            {problem: "x^1 \\times x^9", answer: "x^{10}"},
            
            {problem: "a \\times a", answer: "a^2"},
        ]
);
