import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialQuotientRuleMedium', 'Polynomial Quotient Rule — Medium', [
  // §5.2 (c–h)
  { problem: '\\frac{d}{dx}\\left(\\frac{3-2x}{x+5}\\right)', answer: '-\\frac{13}{(x+5)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{1-x}\\right)', answer: '\\frac{x(2-x)}{(1-x)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2-1}{x^2+1}\\right)', answer: '\\frac{4x}{(x^2+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{1-x^2}\\right)', answer: '\\frac{1+x^2}{(1-x^2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^3-1}{x^3+1}\\right)', answer: '\\frac{6x^2}{(x^3+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2-9}{x^2-4}\\right)', answer: '\\frac{10x}{(x^2-4)^2}' },
  // §5.8 — quadratic over linear
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+1}{x-1}\\right)', answer: '\\frac{x^2-2x-1}{(x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2-2}{x+1}\\right)', answer: '\\frac{x^2+2x+2}{(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x^2+1}{x-2}\\right)', answer: '\\frac{2x^2-8x-1}{(x-2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+x}{x+2}\\right)', answer: '\\frac{x^2+4x+2}{(x+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2-x}{x-2}\\right)', answer: '\\frac{x^2-4x+2}{(x-2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+2x}{x-1}\\right)', answer: '\\frac{x^2-2x-2}{(x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2-4}{x+1}\\right)', answer: '\\frac{x^2+2x+4}{(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+4}{x-2}\\right)', answer: '\\frac{x^2-4x-4}{(x-2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+2}{2x-1}\\right)', answer: '\\frac{2(x^2-x-2)}{(2x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2-x+1}{x+1}\\right)', answer: '\\frac{x^2+2x-2}{(x+1)^2}' },
  // §5.9 — linear over quadratic
  { problem: '\\frac{d}{dx}\\left(\\frac{x+1}{x^2+1}\\right)', answer: '\\frac{-x^2-2x+1}{(x^2+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x-1}{x^2+2}\\right)', answer: '\\frac{-x^2+2x+2}{(x^2+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x}{x^2+1}\\right)', answer: '\\frac{2(1-x^2)}{(x^2+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x}{x^2-1}\\right)', answer: '\\frac{-3(x^2+1)}{(x^2-1)^2}' },
  // §5.10 — quadratic over quadratic, cubic over polynomial
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{x^2+1}\\right)', answer: '\\frac{2x}{(x^2+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{x^2-4}\\right)', answer: '\\frac{-8x}{(x^2-4)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+1}{x^2+4}\\right)', answer: '\\frac{6x}{(x^2+4)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2-1}{x^2+2}\\right)', answer: '\\frac{6x}{(x^2+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+3}{x^2-3}\\right)', answer: '\\frac{-12x}{(x^2-3)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2+5}{x^2-5}\\right)', answer: '\\frac{-20x}{(x^2-5)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1-x^2}{1+x^2}\\right)', answer: '\\frac{-4x}{(1+x^2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x^2-1}{x^2+1}\\right)', answer: '\\frac{6x}{(x^2+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^3}{x^2+1}\\right)', answer: '\\frac{x^2(x^2+3)}{(x^2+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^3}{x+1}\\right)', answer: '\\frac{x^2(2x+3)}{(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x^2}{x^2+1}\\right)', answer: '\\frac{6x}{(x^2+1)^2}' },
  // §5.16 — squared linear factor in the numerator or denominator (chain rule)
  { problem: '\\frac{d}{dx}\\left(\\frac{(x+1)^2}{x-1}\\right)', answer: '\\frac{(x+1)(x-3)}{(x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{(x-2)^2}{x+1}\\right)', answer: '\\frac{(x-2)(x+4)}{(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{(x+2)^2}{x-1}\\right)', answer: '\\frac{(x+2)(x-4)}{(x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{(x-3)^2}{x+2}\\right)', answer: '\\frac{(x-3)(x+7)}{(x+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{(2x+1)^2}{x}\\right)', answer: '\\frac{(2x+1)(2x-1)}{x^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{(x+1)^2}\\right)', answer: '\\frac{1-x}{(x+1)^3}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{(x-2)^2}\\right)', answer: '-\\frac{x+2}{(x-2)^3}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x}{(x+3)^2}\\right)', answer: '\\frac{2(3-x)}{(x+3)^3}' },
], { mode: 'derivative', toleranceDp: 2 });
