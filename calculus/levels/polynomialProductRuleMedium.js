import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialProductRuleMedium', 'Polynomial Product Rule — Medium', [
  // §4.2
  { problem: '\\frac{d}{dx}(x^5(1-x)^7)', answer: 'x^4(1-x)^6(5-12x)' },
  { problem: '\\frac{d}{dx}((x-1)(x-2)^3)', answer: '(x-2)^2(4x-5)' },
  { problem: '\\frac{d}{dx}(2(x+1)^3(x+2)^4)', answer: '2(x+1)^2(x+2)^3(7x+10)' },
  // §4.3
  { problem: '\\frac{d}{dx}(2\\pi x^3(1-x^2)^4)', answer: '2\\pi x^2(1-x^2)^3(3-11x^2)' },
  { problem: '\\frac{d}{dx}(-2x(x^2+x+1)^3)', answer: '-2(x^2+x+1)^2(7x^2+4x+1)' },
  // §4.8 — product of two linear bracket-powers
  { problem: '\\frac{d}{dx}((x+1)^2(x+2)^3)', answer: '(x+1)(x+2)^2(5x+7)' },
  { problem: '\\frac{d}{dx}((x-1)^3(x+2)^2)', answer: '(x-1)^2(x+2)(5x+4)' },
  { problem: '\\frac{d}{dx}((2x+1)^2(x-3)^3)', answer: '(2x+1)(x-3)^2(10x-9)' },
  { problem: '\\frac{d}{dx}((x+4)^3(2x-1)^2)', answer: '(x+4)^2(2x-1)(10x+13)' },
  { problem: '\\frac{d}{dx}((3x-2)^2(x+1)^4)', answer: '2(3x-2)(x+1)^3(9x-1)' },
  { problem: '\\frac{d}{dx}((x-2)^4(x+3)^2)', answer: '2(x-2)^3(x+3)(3x+4)' },
  { problem: '\\frac{d}{dx}((2x+3)^3(3x-1)^2)', answer: '6(2x+3)^2(3x-1)(5x+2)' },
  { problem: '\\frac{d}{dx}((x+1)^4(x-1)^3)', answer: '(x+1)^3(x-1)^2(7x-1)' },
  { problem: '\\frac{d}{dx}((2x-1)^3(2x+1)^2)', answer: '2(2x-1)^2(2x+1)(10x+1)' },
  { problem: '\\frac{d}{dx}((3x+1)^2(2x+1)^3)', answer: '6(3x+1)(2x+1)^2(5x+2)' },
  { problem: '\\frac{d}{dx}((x+2)^2(2x-3)^3)', answer: '2(x+2)(2x-3)^2(5x+3)' },
  { problem: '\\frac{d}{dx}((x-3)^2(x+4)^3)', answer: '(x-3)(x+4)^2(5x-1)' },
  { problem: '\\frac{d}{dx}((2x+5)^2(x-1)^3)', answer: '(2x+5)(x-1)^2(10x+11)' },
  { problem: '\\frac{d}{dx}((x+1)^5(x-2)^2)', answer: '(x+1)^4(x-2)(7x-8)' },
  { problem: '\\frac{d}{dx}((4x-1)^2(x+2)^3)', answer: '(4x-1)(x+2)^2(20x+13)' },
  { problem: '\\frac{d}{dx}(2(x+1)^2(x-3)^4)', answer: '4(x+1)(x-3)^3(3x-1)' },
  { problem: '\\frac{d}{dx}(5(x+2)^3(x-2)^2)', answer: '5(x+2)^2(x-2)(5x-2)' },
  { problem: '\\frac{d}{dx}((3x-2)^3(x+1)^2)', answer: '5(3x-2)^2(x+1)(3x+1)' },
  // §4.9 — monomial × trinomial-power, and quadratic bracket products
  { problem: '\\frac{d}{dx}(x(x^2+x+1)^3)', answer: '(x^2+x+1)^2(7x^2+4x+1)' },
  { problem: '\\frac{d}{dx}(x^2(x^2-x+1)^2)', answer: '2x(x^2-x+1)(3x^2-2x+1)' },
  { problem: '\\frac{d}{dx}((x^2+1)^2(x+1)^3)', answer: '(x^2+1)(x+1)^2(7x^2+4x+3)' },
  { problem: '\\frac{d}{dx}((x-1)^2(x^2+2)^2)', answer: '2(x-1)(x^2+2)(3x^2-2x+2)' },
  { problem: '\\frac{d}{dx}(-x(x^2-1)^3)', answer: '-(x^2-1)^2(7x^2-1)' },
  { problem: '\\frac{d}{dx}((x^2-4)^2(x+1)^2)', answer: '2(x^2-4)(x+1)(3x^2+2x-4)' },
  { problem: '\\frac{d}{dx}((2x+1)^2(x^2+1)^2)', answer: '4(2x+1)(x^2+1)(3x^2+x+1)' },
], { mode: 'derivative' });
