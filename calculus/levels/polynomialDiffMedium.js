import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialDiffMedium', 'Polynomial Functions — Medium', [
  // §1.2 — expand first then differentiate
  { problem: '\\frac{d}{dx}(3x(4-2x))', answer: '12-12x' },
  { problem: '\\frac{d}{dx}(x(x^2+1))', answer: '3x^2+1' },
  { problem: '\\frac{d}{dx}(x^2(3-2x-4x^2))', answer: '6x-6x^2-16x^3' },
  { problem: '\\frac{d}{dx}((x+4)(x-2))', answer: '2x+2' },
  { problem: '\\frac{d}{dx}((2x+1)(2x-1))', answer: '8x' },
  { problem: '\\frac{d}{dx}((x-7)^2)', answer: '2x-14' },
  { problem: '\\frac{d}{dx}((x^2+3)^2)', answer: '4x^3+12x' },
  { problem: '\\frac{d}{dx}(x(7-x)^2)', answer: '3x^2-28x+49' },
  { problem: '\\frac{d}{dx}((x^2+3)(x-5))', answer: '3x^2-10x+3' },
  // §1.4 (n–u) — cubic and higher polynomials
  { problem: '\\frac{d}{dx}(2x^2-2x-5)', answer: '4x-2' },
  { problem: '\\frac{d}{dx}(3x^2-2x-5)', answer: '6x-2' },
  { problem: '\\frac{d}{dx}(3x^3-2x^2-5x)', answer: '9x^2-4x-5' },
  { problem: '\\frac{d}{dx}(2x^3-2x^2-5x)', answer: '6x^2-4x-5' },
  { problem: '\\frac{d}{dx}(2x^3+2x^2-5x)', answer: '6x^2+4x-5' },
  { problem: '\\frac{d}{dx}(2x^3+2-5x)', answer: '6x^2-5' },
  { problem: '\\frac{d}{dx}(3x^3-5x+2)', answer: '9x^2-5' },
  { problem: '\\frac{d}{dx}(2-5x-2x^3)', answer: '-5-6x^2' },
  // §1.5 — simplify then differentiate
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{6}-x\\right)', answer: '\\frac{x}{3}-1' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^4}{2}-\\frac{x^3}{3}+4\\right)', answer: '2x^3-x^2' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{3}x^6(x^2-3)\\right)', answer: '\\frac{8x^7}{3}-6x^5' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x^3+5x}{x}\\right)', answer: '4x' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+2x}{4x}\\right)', answer: '\\frac{1}{4}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x^5-3x^4+6x^3-2x^2}{3x^2}\\right)', answer: '3x^2-2x+2' },
  // §2.1 — negative integer powers
  { problem: '\\frac{d}{dx}(x^{-1})', answer: '-x^{-2}' },
  { problem: '\\frac{d}{dx}(x^{-5})', answer: '-5x^{-6}' },
  { problem: '\\frac{d}{dx}(3x^{-1})', answer: '-3x^{-2}' },
  { problem: '\\frac{d}{dx}(5x^{-2})', answer: '-10x^{-3}' },
  { problem: '\\frac{d}{dx}\\left(-\\frac{4x^{-3}}{3}\\right)', answer: '4x^{-4}' },
  { problem: '\\frac{d}{dx}\\left(2x^{-2}+\\frac{x^{-8}}{2}\\right)', answer: '-4x^{-3}-4x^{-9}' },
  // §2.2 — 1/x^n form
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{x}\\right)', answer: '-\\frac{1}{x^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{x^2}\\right)', answer: '-\\frac{2}{x^3}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{x^4}\\right)', answer: '-\\frac{4}{x^5}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3}{x}\\right)', answer: '-\\frac{3}{x^2}' },
  // §4.1 — expand and differentiate
  { problem: '\\frac{d}{dx}(x^3(x-2))', answer: '4x^3-6x^2' },
  { problem: '\\frac{d}{dx}((2x+1)(x-5))', answer: '4x-9' },
  { problem: '\\frac{d}{dx}((x^2-3)(x^2+3))', answer: '4x^3' },
], { mode: 'derivative' });
