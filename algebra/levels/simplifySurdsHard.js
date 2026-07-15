// levels/simplifySurdsHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'simplifySurdsHard',
    'Surd Simplification (Hard)',
    [
            // Fully-extracted multi-variable perfect squares
            {problem: "\\sqrt{x^6y^4}", answer: "x^3y^2"},
            {problem: "\\sqrt{4x^8y^6}", answer: "2x^4y^3"},
            {problem: "\\sqrt{9a^{10}b^8}", answer: "3a^5b^4"},
            {problem: "\\sqrt{16x^{12}y^{14}}", answer: "4x^6y^7"},
            {problem: "\\sqrt{25x^6y^{10}}", answer: "5x^3y^5"},
            {problem: "\\sqrt{64x^{24}y^{30}}", answer: "8x^{12}y^{15}"},
            {problem: "\\sqrt{121x^{16}y^{14}}", answer: "11x^8y^7"},
            {problem: "\\sqrt{x^{10}y^{12}a^8}", answer: "x^5y^6a^4"},
            {problem: "\\sqrt{49a^{14}b^{16}x^6}", answer: "7a^7b^8x^3"},
            {problem: "\\sqrt{100x^{20}y^{18}}", answer: "10x^{10}y^9"},
            // Remainder left under the root
            {problem: "\\sqrt{a^2b}", answer: "a\\sqrt{b}"},
            {problem: "\\sqrt{a^5b^3}", answer: "a^2b\\sqrt{ab}"},
            {problem: "\\sqrt{x^3y^5}", answer: "xy^2\\sqrt{xy}"},
            {problem: "\\sqrt{8x^7y^3}", answer: "2x^3y\\sqrt{2xy}"},
            {problem: "\\sqrt{18a^5b^7}", answer: "3a^2b^3\\sqrt{2ab}"},
            {problem: "\\sqrt{32x^9y^5}", answer: "4x^4y^2\\sqrt{2xy}"},
            {problem: "\\sqrt{50x^7y^9}", answer: "5x^3y^4\\sqrt{2xy}"},
            {problem: "\\sqrt{12x^2y^4}", answer: "2xy^2\\sqrt{3}"},
            {problem: "\\sqrt{75a^6b^2}", answer: "5a^3b\\sqrt{3}"},
            {problem: "\\sqrt{108x^4y^8}", answer: "6x^2y^4\\sqrt{3}"},
            {problem: "\\sqrt{48x^5y^2}", answer: "4x^2y\\sqrt{3x}"},
            {problem: "\\sqrt{72a^3b^6}", answer: "6ab^3\\sqrt{2a}"},
            {problem: "\\sqrt{98x^9}", answer: "7x^4\\sqrt{2x}"},
            // Cube roots with variables
            {problem: "\\sqrt[3]{a^6b^3}", answer: "a^2b"},
            {problem: "\\sqrt[3]{27x^9y^3}", answer: "3x^3y"},
            {problem: "\\sqrt[3]{8x^6y^{12}}", answer: "2x^2y^4"},
            {problem: "\\sqrt[3]{16x^4}", answer: "2x\\sqrt[3]{2x}"},
            {problem: "\\sqrt[3]{54a^7}", answer: "3a^2\\sqrt[3]{2a}"},
            {problem: "\\sqrt[3]{x^7y^5}", answer: "x^2y\\sqrt[3]{xy^2}"},
            // Surd quotients that simplify to a single term
            {problem: "\\frac{\\sqrt{50x^3}}{\\sqrt{2x}}", answer: "5x"},
            {problem: "\\frac{\\sqrt{18a^5}}{\\sqrt{2a}}", answer: "3a^2"},
            {problem: "\\frac{\\sqrt{72x^4}}{\\sqrt{2}}", answer: "6x^2"},
            {problem: "\\frac{\\sqrt{48a^3b}}{\\sqrt{3ab}}", answer: "4a"},
            // Squaring surds with variable radicands
            {problem: "(3\\sqrt{2x})^2", answer: "18x"},
            {problem: "(2\\sqrt{5a})^2", answer: "20a"},
            {problem: "(4\\sqrt{xy})^2", answer: "16xy"},
            // A couple of numeric questions (small radicands) for fluency
            {problem: "\\frac{\\sqrt{72}}{\\sqrt{2}}", answer: "6"},
            {problem: "\\frac{\\sqrt{200}}{\\sqrt{8}}", answer: "5"},
            {problem: "\\sqrt{\\frac{72}{2}}", answer: "6"}
        ]
);
