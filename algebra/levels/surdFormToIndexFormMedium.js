// levels/surdFormToIndexFormMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'surdFormToIndexFormMedium',
    'Surd Form to Index Form (Medium)',
    [
            // Fractions with coefficients to negative indices
            {problem: "\\frac{3}{4x^2}", answer: "\\frac{3}{4}x^{-2}"},
            {problem: "\\frac{1}{4x^2}", answer: "\\frac{1}{4}x^{-2}"},
            {problem: "\\frac{5}{2x^3}", answer: "\\frac{5}{2}x^{-3}"},
            {problem: "\\frac{7}{3x^4}", answer: "\\frac{7}{3}x^{-4}"},
            {problem: "\\frac{2}{5x}", answer: "\\frac{2}{5}x^{-1}"},
            {problem: "\\frac{4}{3x^5}", answer: "\\frac{4}{3}x^{-5}"},
            {problem: "\\frac{6}{7x^2}", answer: "\\frac{6}{7}x^{-2}"},
            {problem: "\\frac{8}{9x^3}", answer: "\\frac{8}{9}x^{-3}"},
            
            // Fractions under square roots
            {problem: "\\frac{1}{\\sqrt{x}}", answer: "x^{-\\frac{1}{2}}"},
            {problem: "\\frac{1}{\\sqrt[4]{x}}", answer: "x^{-\\frac{1}{4}}"},
            {problem: "\\frac{1}{\\sqrt[3]{x}}", answer: "x^{-\\frac{1}{3}}"},
            {problem: "\\frac{1}{\\sqrt[5]{x}}", answer: "x^{-\\frac{1}{5}}"},
            {problem: "\\frac{1}{\\sqrt[6]{x}}", answer: "x^{-\\frac{1}{6}}"},
            {problem: "\\frac{2}{\\sqrt{x}}", answer: "2x^{-\\frac{1}{2}}"},
            {problem: "\\frac{3}{\\sqrt[3]{x}}", answer: "3x^{-\\frac{1}{3}}"},
            {problem: "\\frac{5}{\\sqrt[4]{x}}", answer: "5x^{-\\frac{1}{4}}"},
            
            // Fractions with powers under roots
            {problem: "\\frac{4}{\\sqrt[3]{x^2}}", answer: "4x^{-\\frac{2}{3}}"},
            {problem: "\\frac{2}{3\\sqrt{x}}", answer: "\\frac{2}{3}x^{-\\frac{1}{2}}"},
            {problem: "\\frac{1}{4\\sqrt[3]{x^2}}", answer: "\\frac{1}{4}x^{-\\frac{2}{3}}"},
            {problem: "\\frac{4}{5\\sqrt[5]{x^3}}", answer: "\\frac{4}{5}x^{-\\frac{3}{5}}"},
            {problem: "\\frac{3}{7\\sqrt[4]{x^3}}", answer: "\\frac{3}{7}x^{-\\frac{3}{4}}"},
            {problem: "\\frac{5}{2\\sqrt{x^3}}", answer: "\\frac{5}{2}x^{-\\frac{3}{2}}"},
            {problem: "\\frac{7}{6\\sqrt[3]{x^4}}", answer: "\\frac{7}{6}x^{-\\frac{4}{3}}"},
            {problem: "\\frac{2}{9\\sqrt[5]{x^2}}", answer: "\\frac{2}{9}x^{-\\frac{2}{5}}"},
            
            // Perfect power with fractional indices
            {problem: "(16a^2b^8)^{\\frac{1}{2}}", answer: "4ab^4"},
            {problem: "(32x^{10}y^{15})^{\\frac{1}{5}}", answer: "2x^2y^3"},
            {problem: "(27x^6y^9)^{\\frac{1}{3}}", answer: "3x^2y^3"},
            {problem: "(81x^8y^{12})^{\\frac{1}{4}}", answer: "3x^2y^3"},
            {problem: "(64x^9y^{12})^{\\frac{1}{3}}", answer: "4x^3y^4"},
            {problem: "(25x^4y^6)^{\\frac{1}{2}}", answer: "5x^2y^3"},
            {problem: "\\sqrt[3]{125x^6y^9}", answer: "5x^2y^3"},
            {problem: "\\sqrt[5]{243x^{10}y^{15}}", answer: "3x^2y^3"},
            {problem: "\\sqrt[6]{64x^{12}y^{18}}", answer: "2x^2y^3"},

            // Fraction under surds
            {problem: "\\sqrt[3]{\\frac{8x^3}{27}}", answer: "\\frac{2x}{3}"},
            {problem: "\\sqrt{\\frac{4x^2}{9}}", answer: "\\frac{2x}{3}"},
            {problem: "\\sqrt{\\frac{25x^4}{16}}", answer: "\\frac{5x^2}{4}"},
            {problem: "\\sqrt[3]{\\frac{27x^6}{8}}", answer: "\\frac{3x^2}{2}"},
            {problem: "\\sqrt{\\frac{36x^6}{49}}", answer: "\\frac{6x^3}{7}"},
            
            // Multiplication of terms with surds
            {problem: "x^2 \\sqrt{x}", answer: "x^{\\frac{5}{2}}"},
            {problem: "x^3 \\sqrt{x}", answer: "x^{\\frac{7}{2}}"},
            {problem: "x^4 \\sqrt{x}", answer: "x^{\\frac{9}{2}}"},
            {problem: "x \\sqrt[3]{x}", answer: "x^{\\frac{4}{3}}"},
            {problem: "x^2 \\sqrt[3]{x}", answer: "x^{\\frac{7}{3}}"},
            {problem: "x^5 \\sqrt{x}", answer: "x^{\\frac{11}{2}}"},
            
            // Division of terms with surds
            {problem: "\\frac{\\sqrt{x}}{x^3}", answer: "x^{-\\frac{5}{2}}"},
            {problem: "\\frac{\\sqrt{x}}{x^2}", answer: "x^{-\\frac{3}{2}}"},
            {problem: "\\frac{\\sqrt{x}}{x}", answer: "x^{-\\frac{1}{2}}"},
            {problem: "\\frac{\\sqrt[3]{x}}{x^2}", answer: "x^{-\\frac{5}{3}}"},
            {problem: "\\frac{\\sqrt[4]{x}}{x^3}", answer: "x^{-\\frac{11}{4}}"},
            
            // Same base expressions
            {problem: "2\\sqrt{2}", answer: "2^{\\frac{3}{2}}"},
            {problem: "3\\sqrt{3}", answer: "3^{\\frac{3}{2}}"},
            {problem: "4\\sqrt{4}", answer: "8"},
            {problem: "5\\sqrt{5}", answer: "5^{\\frac{3}{2}}"},
            {problem: "2\\sqrt[3]{2}", answer: "2^{\\frac{4}{3}}"},
            {problem: "3\\sqrt[3]{3}", answer: "3^{\\frac{4}{3}}"}
        ]
);
