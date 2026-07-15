import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialChainRuleHard', 'Polynomial Chain Rule — Hard', [
  // §3.3 Set 2 — chain rule with square/cube roots (skip 2a — same function as 2b)
  { problem: '\\frac{d}{dx}(\\sqrt{3x+1})', answer: '\\frac{3}{2\\sqrt{3x+1}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{3x^2+x})', answer: '\\frac{6x+1}{2\\sqrt{3x^2+x}}' },
  { problem: '\\frac{d}{dx}(5\\sqrt{3x+1})', answer: '\\frac{15}{2\\sqrt{3x+1}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{5x+1})', answer: '\\frac{5}{2\\sqrt{5x+1}}' },
  { problem: '\\frac{d}{dx}(\\sqrt[3]{5x+1})', answer: '\\frac{5}{3\\sqrt[3]{(5x+1)^2}}' },
  // §3.3 Set 3 — chain rule with reciprocals (3a and 3b included as different written forms)
  { problem: '\\frac{d}{dx}((7x+3)^{-1})', answer: '-\\frac{7}{(7x+3)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{7x+3}\\right)', answer: '-\\frac{7}{(7x+3)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{5}{7x+3}\\right)', answer: '-\\frac{35}{(7x+3)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{(7x+3)^2}\\right)', answer: '-\\frac{14}{(7x+3)^3}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{\\sqrt{7x+3}}\\right)', answer: '-\\frac{7}{2(7x+3)^{\\frac{3}{2}}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{7x^2+3}\\right)', answer: '-\\frac{14x}{(7x^2+3)^2}' },
  // §3.6 — chain rule with fractional powers
  { problem: '\\frac{d}{dx}((7+2x)^{\\frac{4}{3}})', answer: '\\frac{8}{3}(7+2x)^{\\frac{1}{3}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{x+4})', answer: '\\frac{1}{2}(x+4)^{-\\frac{1}{2}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{5-3x})', answer: '-\\frac{3}{2}(5-3x)^{-\\frac{1}{2}}' },
  { problem: '\\frac{d}{dx}(4(2-5x)^{-\\frac{9}{4}})', answer: '45(2-5x)^{-\\frac{13}{4}}' },
  // §3.7 — chain rule with sqrt of quadratics
  { problem: '\\frac{d}{dx}(\\sqrt{x^2-2x+5})', answer: '\\frac{x-1}{\\sqrt{x^2-2x+5}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{x^2-2x})', answer: '\\frac{x-1}{\\sqrt{x^2-2x}}' },
  { problem: '\\frac{d}{dx}(7\\sqrt{x^2+1})', answer: '\\frac{7x}{\\sqrt{x^2+1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{1+\\sqrt{x}}\\right)', answer: '-\\frac{1}{2\\sqrt{x}(1+\\sqrt{x})^2}' },
  // §3.8 — more surd / fractional-power outer functions
  { problem: '\\frac{d}{dx}(\\sqrt{4x+5})', answer: '\\frac{2}{\\sqrt{4x+5}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{2x-1})', answer: '\\frac{1}{\\sqrt{2x-1}}' },
  { problem: '\\frac{d}{dx}((3x+2)^{\\frac{2}{3}})', answer: '2(3x+2)^{-\\frac{1}{3}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{x^2+9})', answer: '\\frac{x}{\\sqrt{x^2+9}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{x^2+4x})', answer: '\\frac{x+2}{\\sqrt{x^2+4x}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{\\sqrt{2x+1}}\\right)', answer: '-(2x+1)^{-\\frac{3}{2}}' },
  { problem: '\\frac{d}{dx}(\\sqrt[3]{2x+1})', answer: '\\frac{2}{3}(2x+1)^{-\\frac{2}{3}}' },
  { problem: '\\frac{d}{dx}(6\\sqrt{x^2+x+1})', answer: '\\frac{3(2x+1)}{\\sqrt{x^2+x+1}}' },
  { problem: '\\frac{d}{dx}((x^2-4)^{\\frac{3}{2}})', answer: '3x\\sqrt{x^2-4}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2}{\\sqrt{3x-1}}\\right)', answer: '-3(3x-1)^{-\\frac{3}{2}}' },
  { problem: '\\frac{d}{dx}(\\sqrt{5-2x})', answer: '-\\frac{1}{\\sqrt{5-2x}}' },
  { problem: '\\frac{d}{dx}((4x^2+1)^{\\frac{3}{2}})', answer: '12x\\sqrt{4x^2+1}' },
], { mode: 'derivative', toleranceDp: 2 });
