import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialQuotientRuleHard', 'Polynomial Quotient Rule — Hard', [
  // §5.4
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}+1}{\\sqrt{x}+2}\\right)', answer: '\\frac{1}{2\\sqrt{x}(\\sqrt{x}+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x-3}{\\sqrt{x+1}}\\right)', answer: '\\frac{x+5}{2(x+1)\\sqrt{x+1}}' },
  // §5.11 — linear over root of a linear function
  { problem: '\\frac{d}{dx}\\left(\\frac{x+1}{\\sqrt{x+2}}\\right)', answer: '\\frac{x+3}{2(x+2)\\sqrt{x+2}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x-1}{\\sqrt{x+3}}\\right)', answer: '\\frac{x+7}{2(x+3)\\sqrt{x+3}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x+2}{\\sqrt{x-1}}\\right)', answer: '\\frac{x-4}{2(x-1)\\sqrt{x-1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x+1}{\\sqrt{x+1}}\\right)', answer: '\\frac{2x+3}{2(x+1)\\sqrt{x+1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{\\sqrt{x+1}}\\right)', answer: '\\frac{x+2}{2(x+1)\\sqrt{x+1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{\\sqrt{2x+1}}\\right)', answer: '\\frac{x+1}{(2x+1)\\sqrt{2x+1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x-1}{\\sqrt{2x+1}}\\right)', answer: '\\frac{x+2}{(2x+1)\\sqrt{2x+1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x+1}{\\sqrt{2x-1}}\\right)', answer: '\\frac{x-2}{(2x-1)\\sqrt{2x-1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x-1}{\\sqrt{x+2}}\\right)', answer: '\\frac{2x+9}{2(x+2)\\sqrt{x+2}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x}{\\sqrt{x+1}}\\right)', answer: '\\frac{3(x+2)}{2(x+1)\\sqrt{x+1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x}{\\sqrt{x-1}}\\right)', answer: '\\frac{x-2}{(x-1)\\sqrt{x-1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{\\sqrt{x-1}}\\right)', answer: '\\frac{x-2}{2(x-1)\\sqrt{x-1}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x+3}{\\sqrt{x+1}}\\right)', answer: '\\frac{x-1}{2(x+1)\\sqrt{x+1}}' },
  // §5.12 — quadratic over root of a linear function
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{\\sqrt{x+1}}\\right)', answer: '\\frac{x(3x+4)}{2(x+1)\\sqrt{x+1}}' },
  // §5.13 — (a + b√x) over a linear/quadratic, and root in the numerator
  { problem: '\\frac{d}{dx}\\left(\\frac{x+3}{\\sqrt{x}}\\right)', answer: '\\frac{x-3}{2x\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x-2}{\\sqrt{x}}\\right)', answer: '\\frac{x+2}{2x\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x-4}{\\sqrt{x}}\\right)', answer: '\\frac{x+4}{2x\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x+3}{\\sqrt{x}}\\right)', answer: '\\frac{2x-3}{2x\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x+5}{\\sqrt{x}}\\right)', answer: '\\frac{x-5}{2x\\sqrt{x}}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x-2}{\\sqrt{x}}\\right)', answer: '\\frac{3x+2}{2x\\sqrt{x}}' },
  // §5.14 — root in the numerator
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}}{x+1}\\right)', answer: '\\frac{1-x}{2\\sqrt{x}(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}}{x+2}\\right)', answer: '\\frac{2-x}{2\\sqrt{x}(x+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}}{x-1}\\right)', answer: '-\\frac{x+1}{2\\sqrt{x}(x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}}{2x+1}\\right)', answer: '\\frac{1-2x}{2\\sqrt{x}(2x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}}{2-x}\\right)', answer: '\\frac{x+2}{2\\sqrt{x}(2-x)^2}' },
  // §5.15 — (√x + a) over (√x + b)
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}+1}{\\sqrt{x}+3}\\right)', answer: '\\frac{1}{\\sqrt{x}(\\sqrt{x}+3)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}-1}{\\sqrt{x}+1}\\right)', answer: '\\frac{1}{\\sqrt{x}(\\sqrt{x}+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}+2}{\\sqrt{x}-1}\\right)', answer: '-\\frac{3}{2\\sqrt{x}(\\sqrt{x}-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sqrt{x}+3}{\\sqrt{x}+1}\\right)', answer: '-\\frac{1}{\\sqrt{x}(\\sqrt{x}+1)^2}' },
], { mode: 'derivative', toleranceDp: 2 });
