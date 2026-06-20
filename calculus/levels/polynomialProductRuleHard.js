import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialProductRuleHard', 'Polynomial Product Rule — Hard', [
  // §4.2f
  { problem: '\\frac{d}{dx}((2x-3)^4(2x+3)^5)', answer: '6(2x-3)^3(2x+3)^4(6x-1)' },
  // §4.4
  { problem: '\\frac{d}{dx}((x^2-10)^3x^4)', answer: '10x^3(x^2-10)^2(x^2-4)' },
  // §4.5 — product rule with square roots
  { problem: '\\frac{d}{dx}(6x\\sqrt{x+1})', answer: '\\frac{3(3x+2)}{\\sqrt{x+1}}' },
  { problem: '\\frac{d}{dx}(-4x\\sqrt{1-2x})', answer: '\\frac{4(3x-1)}{\\sqrt{1-2x}}' },
  { problem: '\\frac{d}{dx}(10x^2\\sqrt{2x-1})', answer: '\\frac{10x(5x-2)}{\\sqrt{2x-1}}' },
  // §4.10 — monomial × square root of a linear function
  { problem: '\\frac{d}{dx}(x\\sqrt{x+3})', answer: '\\frac{3(x+2)}{2\\sqrt{x+3}}' },
  { problem: '\\frac{d}{dx}(x\\sqrt{2x+1})', answer: '\\frac{3x+1}{\\sqrt{2x+1}}' },
  { problem: '\\frac{d}{dx}(x^2\\sqrt{x-1})', answer: '\\frac{x(5x-4)}{2\\sqrt{x-1}}' },
  { problem: '\\frac{d}{dx}(2x\\sqrt{3x+1})', answer: '\\frac{9x+2}{\\sqrt{3x+1}}' },
  { problem: '\\frac{d}{dx}(x^2\\sqrt{2x+3})', answer: '\\frac{x(5x+6)}{\\sqrt{2x+3}}' },
  { problem: '\\frac{d}{dx}(-3x\\sqrt{1-x})', answer: '\\frac{3(3x-2)}{2\\sqrt{1-x}}' },
  { problem: '\\frac{d}{dx}(x^3\\sqrt{x+1})', answer: '\\frac{x^2(7x+6)}{2\\sqrt{x+1}}' },
  { problem: '\\frac{d}{dx}(x\\sqrt{4-x})', answer: '\\frac{8-3x}{2\\sqrt{4-x}}' },
  { problem: '\\frac{d}{dx}(4x\\sqrt{2x-1})', answer: '\\frac{4(3x-1)}{\\sqrt{2x-1}}' },
  { problem: '\\frac{d}{dx}(x^2\\sqrt{3-x})', answer: '\\frac{x(12-5x)}{2\\sqrt{3-x}}' },
  { problem: '\\frac{d}{dx}(3x^2\\sqrt{3x-2})', answer: '\\frac{3x(15x-8)}{2\\sqrt{3x-2}}' },
  { problem: '\\frac{d}{dx}(x\\sqrt{3x+2})', answer: '\\frac{9x+4}{2\\sqrt{3x+2}}' },
  { problem: '\\frac{d}{dx}(x^2\\sqrt{x+4})', answer: '\\frac{x(5x+16)}{2\\sqrt{x+4}}' },
  { problem: '\\frac{d}{dx}(2x^2\\sqrt{x+2})', answer: '\\frac{x(5x+8)}{\\sqrt{x+2}}' },
  { problem: '\\frac{d}{dx}(x\\sqrt{5x+4})', answer: '\\frac{15x+8}{2\\sqrt{5x+4}}' },
  { problem: '\\frac{d}{dx}(3x\\sqrt{2-x})', answer: '\\frac{3(4-3x)}{2\\sqrt{2-x}}' },
  { problem: '\\frac{d}{dx}(x^3\\sqrt{2x+1})', answer: '\\frac{x^2(7x+3)}{\\sqrt{2x+1}}' },
  { problem: '\\frac{d}{dx}(6x^2\\sqrt{x+1})', answer: '\\frac{3x(5x+4)}{\\sqrt{x+1}}' },
  { problem: '\\frac{d}{dx}(x\\sqrt{6x-1})', answer: '\\frac{9x-1}{\\sqrt{6x-1}}' },
  // §4.11 — product of two bracket-powers with different linear coefficients
  { problem: '\\frac{d}{dx}((3x-1)^3(3x+1)^4)', answer: '3(3x-1)^2(3x+1)^3(21x-1)' },
  { problem: '\\frac{d}{dx}((x-2)^4(x+2)^3)', answer: '(x-2)^3(x+2)^2(7x+2)' },
  { problem: '\\frac{d}{dx}((2x+1)^5(3x-2)^3)', answer: '(2x+1)^4(3x-2)^2(48x-11)' },
  { problem: '\\frac{d}{dx}((4x-3)^3(2x+1)^4)', answer: '4(4x-3)^2(2x+1)^3(14x-3)' },
  { problem: '\\frac{d}{dx}((x+1)^2(2x-1)^5)', answer: '2(x+1)(2x-1)^4(7x+4)' },
  { problem: '\\frac{d}{dx}((3x+2)^4(x-1)^3)', answer: '3(3x+2)^3(x-1)^2(7x-2)' },
  { problem: '\\frac{d}{dx}((x-1)^4(x+3)^3)', answer: '(x-1)^3(x+3)^2(7x+9)' },
], { mode: 'derivative' });
