import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialDiffEasy', 'Polynomial Functions — Easy', [
  // §1.1
  { problem: '\\frac{d}{dx}(x^7)', answer: '7x^6' },
  { problem: '\\frac{d}{dx}(9x^5)', answer: '45x^4' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{3}x^6\\right)', answer: '2x^5' },
  { problem: '\\frac{d}{dx}(3x^2-5x)', answer: '6x-5' },
  { problem: '\\frac{d}{dx}(x^4+x^2+x+1)', answer: '4x^3+2x+1' },
  { problem: '\\frac{d}{dx}(2-3x-5x^3)', answer: '-3-15x^2' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^6}{3}-\\frac{x^4}{2}+x^2-2\\right)', answer: '2x^5-2x^3+2x' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^4}{4}+\\frac{x^3}{3}+\\frac{x^2}{2}+x+1\\right)', answer: 'x^3+x^2+x+1' },
  // §1.4 (a–m): quadratic/simple polynomial drills
  { problem: '\\frac{d}{dx}(x^2)', answer: '2x' },
  { problem: '\\frac{d}{dx}(x^2+3x)', answer: '2x+3' },
  { problem: '\\frac{d}{dx}(x^2-3x)', answer: '2x-3' },
  { problem: '\\frac{d}{dx}(x^2-5x)', answer: '2x-5' },
  { problem: '\\frac{d}{dx}(x^2-5)', answer: '2x' },
  { problem: '\\frac{d}{dx}(x^2+5)', answer: '2x' },
  { problem: '\\frac{d}{dx}(x^2+6)', answer: '2x' },
  { problem: '\\frac{d}{dx}(x^2+3x+6)', answer: '2x+3' },
  { problem: '\\frac{d}{dx}(x^2+3x+5)', answer: '2x+3' },
  { problem: '\\frac{d}{dx}(x^2+2x+5)', answer: '2x+2' },
  { problem: '\\frac{d}{dx}(x^2+x-5)', answer: '2x+1' },
  { problem: '\\frac{d}{dx}(x^2-x-5)', answer: '2x-1' },
  { problem: '\\frac{d}{dx}(x^2-2x-5)', answer: '2x-2' },
  // §1.6 — higher-degree single terms and longer polynomials (still direct power rule)
  { problem: '\\frac{d}{dx}(x^{10})', answer: '10x^9' },
  { problem: '\\frac{d}{dx}(2x^6-5x^4)', answer: '12x^5-20x^3' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^8}{4}\\right)', answer: '2x^7' },
  { problem: '\\frac{d}{dx}(4x^3+7x)', answer: '12x^2+7' },
  { problem: '\\frac{d}{dx}(6x^5-2x^3+x)', answer: '30x^4-6x^2+1' },
  { problem: '\\frac{d}{dx}(8x^4-3x^2+2x-9)', answer: '32x^3-6x+2' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{2}x^4+\\frac{2}{3}x^3\\right)', answer: '2x^3+2x^2' },
  { problem: '\\frac{d}{dx}(5x^3+4x^2-7x+6)', answer: '15x^2+8x-7' },
  { problem: '\\frac{d}{dx}(x^5-x^4+x^3-x^2)', answer: '5x^4-4x^3+3x^2-2x' },
  { problem: '\\frac{d}{dx}(7-4x+9x^2)', answer: '18x-4' },
  { problem: '\\frac{d}{dx}(10x^2-7x+3)', answer: '20x-7' },
], { mode: 'derivative' });
