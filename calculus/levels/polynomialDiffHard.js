import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialDiffHard', 'Polynomial Functions — Hard', [
  // §2.3 — fractional powers
  { problem: '\\frac{d}{dx}(x^{-\\frac{1}{2}})', answer: '-\\frac{1}{2}x^{-\\frac{3}{2}}' },
  { problem: '\\frac{d}{dx}(x^{\\frac{3}{2}})', answer: '\\frac{3}{2}x^{\\frac{1}{2}}' },
  { problem: '\\frac{d}{dx}(6x^{\\frac{2}{3}})', answer: '4x^{-\\frac{1}{3}}' },
  { problem: '\\frac{d}{dx}(12x^{-\\frac{1}{3}})', answer: '-4x^{-\\frac{4}{3}}' },
  { problem: '\\frac{d}{dx}(4x^{\\frac{1}{4}}+8x^{-\\frac{1}{2}})', answer: 'x^{-\\frac{3}{4}}-4x^{-\\frac{3}{2}}' },
  { problem: '\\frac{d}{dx}(7x^{\\frac{7}{3}})', answer: '\\frac{49}{3}x^{\\frac{4}{3}}' },
  // §2.4, §2.5 — classic surd drills
  { problem: '\\frac{d}{dx}(\\sqrt{x})', answer: '\\frac{1}{2\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}(x^2\\sqrt{x})', answer: '\\frac{5}{2}x^{\\frac{3}{2}}' },
  // §2.6 — surd forms
  { problem: '\\frac{d}{dx}(x\\sqrt{x})', answer: '\\frac{3\\sqrt{x}}{2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{\\sqrt{x}}\\right)', answer: '-\\frac{1}{2x\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{x\\sqrt{x}}\\right)', answer: '-\\frac{3}{2x^2\\sqrt{x}}' },
  // §2.7 — a·√x forms
  { problem: '\\frac{d}{dx}(3\\sqrt{x})', answer: '\\frac{3}{2\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}(10\\sqrt{x})', answer: '\\frac{5}{\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{49x})', answer: '\\frac{7}{2\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{7x})', answer: '\\frac{\\sqrt{7}}{2\\sqrt{x}}' },
  // §2.8 (b–c; a duplicates §2.2d; d has parameter)
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{3x}\\right)', answer: '-\\frac{1}{3x^2}' },
  { problem: '\\frac{d}{dx}\\left(-\\frac{7}{3x}\\right)', answer: '\\frac{7}{3x^2}' },
  // §2.9 — expand expressions with fractions then differentiate
  { problem: '\\frac{d}{dx}\\left(\\left(x+\\frac{1}{x}\\right)^2\\right)', answer: '2x-\\frac{2}{x^3}' },
  { problem: '\\frac{d}{dx}\\left(\\left(x-\\frac{2}{x}\\right)^2\\right)', answer: '2x-\\frac{8}{x^3}' },
  { problem: '\\frac{d}{dx}\\left(\\left(\\sqrt{x}-\\frac{1}{\\sqrt{x}}\\right)^2\\right)', answer: '1-\\frac{1}{x^2}' },
  // §2.10 — divide then differentiate
  { problem: '\\frac{d}{dx}\\left(\\frac{x^3-3x+8}{x^2}\\right)', answer: '1+3x^{-2}-16x^{-3}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+6x\\sqrt{x}+x}{x}\\right)', answer: '1+3x^{-\\frac{1}{2}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x-2\\sqrt{x}}{\\sqrt{x}}\\right)', answer: '\\frac{3}{2}x^{-\\frac{1}{2}}' },
  // §2.11 — further fractional-power single terms and surd rewrites
  { problem: '\\frac{d}{dx}(x^{\\frac{5}{2}})', answer: '\\frac{5}{2}x^{\\frac{3}{2}}' },
  { problem: '\\frac{d}{dx}(4x^{\\frac{3}{4}})', answer: '3x^{-\\frac{1}{4}}' },
  { problem: '\\frac{d}{dx}(2\\sqrt{x}-5x^{-\\frac{3}{2}})', answer: 'x^{-\\frac{1}{2}}+\\frac{15}{2}x^{-\\frac{5}{2}}' },
  { problem: '\\frac{d}{dx}(x^3\\sqrt{x})', answer: '\\frac{7}{2}x^{\\frac{5}{2}}' },
  { problem: '\\frac{d}{dx}(\\sqrt[3]{x})', answer: '\\frac{1}{3}x^{-\\frac{2}{3}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2}{\\sqrt{x}}\\right)', answer: '-x^{-\\frac{3}{2}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+\\sqrt{x}}{x}\\right)', answer: '1-\\frac{1}{2}x^{-\\frac{3}{2}}' },
  { problem: '\\frac{d}{dx}((\\sqrt{x}+1)^2)', answer: '1+\\frac{1}{\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^4-x^2+2}{x^3}\\right)', answer: '1+x^{-2}-6x^{-4}' },
], { mode: 'derivative' });
