import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialChainRuleMedium', 'Polynomial Chain Rule — Medium', [
  // §3.1 Set 5 — quadratic inner functions
  { problem: '\\frac{d}{dx}((x^2+1)^4)', answer: '8x(x^2+1)^3' },
  { problem: '\\frac{d}{dx}((x^2+5)^4)', answer: '8x(x^2+5)^3' },
  { problem: '\\frac{d}{dx}((x^2-5)^4)', answer: '8x(x^2-5)^3' },
  { problem: '\\frac{d}{dx}((7x^2-5)^4)', answer: '56x(7x^2-5)^3' },
  { problem: '\\frac{d}{dx}((7x^3-5)^4)', answer: '84x^2(7x^3-5)^3' },
  // §3.1 Set 6
  { problem: '\\frac{d}{dx}((x^2+3)^5)', answer: '10x(x^2+3)^4' },
  { problem: '\\frac{d}{dx}((7x^2+3x)^5)', answer: '5(14x+3)(7x^2+3x)^4' },
  { problem: '\\frac{d}{dx}((7x^2-3x)^5)', answer: '5(14x-3)(7x^2-3x)^4' },
  { problem: '\\frac{d}{dx}((7x^2-3x)^5+11)', answer: '5(14x-3)(7x^2-3x)^4' },
  { problem: '\\frac{d}{dx}((7x^2-3x)^5+11x)', answer: '5(14x-3)(7x^2-3x)^4+11' },
  // §3.2 — non-linear inner functions (c,d,e,f,k,l)
  { problem: '\\frac{d}{dx}((x^2+1)^{12})', answer: '24x(x^2+1)^{11}' },
  { problem: '\\frac{d}{dx}(8(7-x^2)^4)', answer: '-64x(7-x^2)^3' },
  { problem: '\\frac{d}{dx}((x^2+4x+1)^9)', answer: '9(2x+4)(x^2+4x+1)^8' },
  { problem: '\\frac{d}{dx}(-3(x^3+x+1)^6)', answer: '-18(3x^2+1)(x^3+x+1)^5' },
  { problem: '\\frac{d}{dx}\\left(6\\left(\\frac{x}{2}-1\\right)^4\\right)', answer: '12\\left(\\frac{x}{2}-1\\right)^3' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2}{3}\\left(5-\\frac{x}{3}\\right)^4\\right)', answer: '-\\frac{8}{9}\\left(5-\\frac{x}{3}\\right)^3' },
  // §3.3 Set 1 — trinomial inner functions
  { problem: '\\frac{d}{dx}((x^2+x+1)^5)', answer: '5(2x+1)(x^2+x+1)^4' },
  { problem: '\\frac{d}{dx}((x^2+2x+1)^5)', answer: '10(x+1)(x^2+2x+1)^4' },
  { problem: '\\frac{d}{dx}((3x^2+2x+1)^5)', answer: '10(3x+1)(3x^2+2x+1)^4' },
  { problem: '\\frac{d}{dx}((3x^2-2x+1)^5)', answer: '10(3x-1)(3x^2-2x+1)^4' },
  { problem: '\\frac{d}{dx}(6(3x^2-2x+1)^5)', answer: '60(3x-1)(3x^2-2x+1)^4' },
  { problem: '\\frac{d}{dx}((2x^2+x-3)^4)', answer: '4(4x+1)(2x^2+x-3)^3' },
  // §3.4 (d,e,f — a,b migrated to Easy as linear-inner; c has abstract parameters)
  { problem: '\\frac{d}{dx}((x^2-1)^3)', answer: '6x(x^2-1)^2' },
  { problem: '\\frac{d}{dx}((x^2-4x)^4)', answer: '4(2x-4)(x^2-4x)^3' },
  { problem: '\\frac{d}{dx}((2x+x^2)^5)', answer: '10(1+x)(2x+x^2)^4' },
  // §3.5 — chain rule with negative integer powers
  { problem: '\\frac{d}{dx}((7x-5)^{-6})', answer: '-42(7x-5)^{-7}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{3+5x}\\right)', answer: '-5(3+5x)^{-2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{4}{2x-1}\\right)', answer: '-8(2x-1)^{-2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3}{4(5x+6)^7}\\right)', answer: '-\\frac{105}{4}(5x+6)^{-8}' },
  // §3.9 — more quadratic inner functions
  { problem: '\\frac{d}{dx}((x^2-9)^4)', answer: '8x(x^2-9)^3' },
  { problem: '\\frac{d}{dx}((2x^2+3)^4)', answer: '16x(2x^2+3)^3' },
], { mode: 'derivative', toleranceDp: 2 });
