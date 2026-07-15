import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialProductRuleEasy', 'Polynomial Product Rule — Easy', [
  // §4.2
  { problem: '\\frac{d}{dx}(x(3-2x)^5)', answer: '3(3-2x)^4(1-4x)' },
  { problem: '\\frac{d}{dx}(x^3(x+1)^4)', answer: 'x^2(x+1)^3(7x+3)' },
  // §4.3
  { problem: '\\frac{d}{dx}(x(x^2+1)^5)', answer: '(x^2+1)^4(11x^2+1)' },
  // §4.6 — monomial × linear bracket-power
  { problem: '\\frac{d}{dx}(x(2x+1)^4)', answer: '(2x+1)^3(10x+1)' },
  { problem: '\\frac{d}{dx}(x(3x+2)^3)', answer: '2(3x+2)^2(6x+1)' },
  { problem: '\\frac{d}{dx}(x(x+4)^5)', answer: '2(x+4)^4(3x+2)' },
  { problem: '\\frac{d}{dx}(x^2(x+1)^3)', answer: 'x(x+1)^2(5x+2)' },
  { problem: '\\frac{d}{dx}(x^2(2x-1)^4)', answer: '2x(2x-1)^3(6x-1)' },
  { problem: '\\frac{d}{dx}(x^2(3x+1)^3)', answer: 'x(3x+1)^2(15x+2)' },
  { problem: '\\frac{d}{dx}(x^3(x-2)^4)', answer: 'x^2(x-2)^3(7x-6)' },
  { problem: '\\frac{d}{dx}(x^3(2x+1)^3)', answer: '3x^2(2x+1)^2(4x+1)' },
  { problem: '\\frac{d}{dx}(x(5-2x)^3)', answer: '(5-2x)^2(5-8x)' },
  { problem: '\\frac{d}{dx}(x(1-x)^4)', answer: '(1-x)^3(1-5x)' },
  { problem: '\\frac{d}{dx}(x^2(1-x)^3)', answer: 'x(1-x)^2(2-5x)' },
  { problem: '\\frac{d}{dx}(x(3x-1)^4)', answer: '(3x-1)^3(15x-1)' },
  { problem: '\\frac{d}{dx}(x(4x+3)^3)', answer: '(4x+3)^2(16x+3)' },
  { problem: '\\frac{d}{dx}(x^2(x+3)^3)', answer: 'x(x+3)^2(5x+6)' },
  { problem: '\\frac{d}{dx}(x^3(x+1)^3)', answer: '3x^2(x+1)^2(2x+1)' },
  { problem: '\\frac{d}{dx}(x(2x-3)^5)', answer: '3(2x-3)^4(4x-1)' },
  { problem: '\\frac{d}{dx}(x^2(2x+3)^3)', answer: '2x(2x+3)^2(5x+3)' },
  { problem: '\\frac{d}{dx}(x(x+5)^4)', answer: '5(x+5)^3(x+1)' },
  { problem: '\\frac{d}{dx}(x(x-3)^5)', answer: '3(x-3)^4(2x-1)' },
  { problem: '\\frac{d}{dx}(x^2(x-1)^4)', answer: '2x(x-1)^3(3x-1)' },
  { problem: '\\frac{d}{dx}(x(4-x)^3)', answer: '4(4-x)^2(1-x)' },
  { problem: '\\frac{d}{dx}(x(2x+5)^3)', answer: '(2x+5)^2(8x+5)' },
  // §4.7 — monomial × quadratic bracket-power
  { problem: '\\frac{d}{dx}(x(x^2+1)^4)', answer: '(x^2+1)^3(9x^2+1)' },
  { problem: '\\frac{d}{dx}(x(x^2+2)^3)', answer: '(x^2+2)^2(7x^2+2)' },
  { problem: '\\frac{d}{dx}(x^2(x^2+1)^3)', answer: '2x(x^2+1)^2(4x^2+1)' },
  { problem: '\\frac{d}{dx}(x^2(x^2-1)^2)', answer: '2x(x^2-1)(3x^2-1)' },
  { problem: '\\frac{d}{dx}(x(x-2)^4)', answer: '(x-2)^3(5x-2)' },
  { problem: '\\frac{d}{dx}(x^2(x+2)^3)', answer: 'x(x+2)^2(5x+4)' },
], { mode: 'derivative' });
