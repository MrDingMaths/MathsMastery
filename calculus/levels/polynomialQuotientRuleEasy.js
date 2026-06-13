import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialQuotientRuleEasy', 'Polynomial Quotient Rule — Easy', [
  // §5.1
  { problem: '\\frac{d}{dx}\\left(\\frac{3x}{x+5}\\right)', answer: '\\frac{15}{(x+5)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{2x^2-1}\\right)', answer: '\\frac{-2x^2-1}{(2x^2-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^3}{x^2-4}\\right)', answer: '\\frac{x^2(x^2-12)}{(x^2-4)^2}' },
  // §5.2 (a–b)
  { problem: '\\frac{d}{dx}\\left(\\frac{x+1}{x-1}\\right)', answer: '-\\frac{2}{(x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x}{x+2}\\right)', answer: '\\frac{4}{(x+2)^2}' },
  // §5.5 — monomial over a linear denominator
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{x+3}\\right)', answer: '\\frac{3}{(x+3)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{x-4}\\right)', answer: '-\\frac{4}{(x-4)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{2x+1}\\right)', answer: '\\frac{1}{(2x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{3x-2}\\right)', answer: '-\\frac{2}{(3x-2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x}{x-3}\\right)', answer: '-\\frac{6}{(x-3)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x}{x+1}\\right)', answer: '\\frac{3}{(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{5x}{x+2}\\right)', answer: '\\frac{10}{(x+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{5x+2}\\right)', answer: '\\frac{2}{(5x+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x}{2x-1}\\right)', answer: '-\\frac{3}{(2x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{4-x}\\right)', answer: '\\frac{4}{(4-x)^2}' },
  // §5.6 — linear over linear
  { problem: '\\frac{d}{dx}\\left(\\frac{x+2}{x+1}\\right)', answer: '-\\frac{1}{(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x-1}{x+2}\\right)', answer: '\\frac{3}{(x+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x+1}{x-1}\\right)', answer: '-\\frac{3}{(x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{3x-1}{x+2}\\right)', answer: '\\frac{7}{(x+2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x+5}{x-2}\\right)', answer: '-\\frac{7}{(x-2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{4x+1}{2x-1}\\right)', answer: '-\\frac{6}{(2x-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x-3}{x+3}\\right)', answer: '\\frac{6}{(x+3)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{2x-3}{x+1}\\right)', answer: '\\frac{5}{(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x+1}{2x+1}\\right)', answer: '-\\frac{1}{(2x+1)^2}' },
  // §5.7 — monomial over a quadratic, and quadratic over linear
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{x+1}\\right)', answer: '\\frac{x(x+2)}{(x+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{x-2}\\right)', answer: '\\frac{x(x-4)}{(x-2)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{x^2+1}\\right)', answer: '\\frac{1-x^2}{(x^2+1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{x^2-1}\\right)', answer: '\\frac{-x^2-1}{(x^2-1)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{x+4}\\right)', answer: '\\frac{x(x+8)}{(x+4)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x}{x^2+4}\\right)', answer: '\\frac{4-x^2}{(x^2+4)^2}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{x^2}{2x+1}\\right)', answer: '\\frac{2x(x+1)}{(2x+1)^2}' },
], { mode: 'derivative', toleranceDp: 2 });
