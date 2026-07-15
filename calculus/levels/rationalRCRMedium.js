import { BaseLevel } from './BaseLevel.js';

// Medium (2–3 steps): numerator off by a constant factor (×½, ×⅓, …),
// mixed-function numerator/denominator (e^x, trig, ln), or denominator scaling.
export default new BaseLevel('rationalRCRMedium', 'Rational Reverse Chain Rule — Medium', [
  // Coefficient adjustment needed (numerator ≠ exact f')
  { problem: '\\int\\frac{x}{4-x^2}\\,dx', answer: '-\\frac{\\ln|4-x^2|}{2}+C' },
  { problem: '\\int\\frac{x}{5x^2-4}\\,dx', answer: '\\frac{\\ln|5x^2-4|}{10}+C' },
  { problem: '\\int\\frac{x+3}{x^2+6x-1}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+6x-1|+C' },
  { problem: '\\int\\frac{3-x}{12x-3-2x^2}\\,dx', answer: '\\frac{1}{4}\\ln|12x-3-2x^2|+C' },
  { problem: '\\int\\frac{x^3-3x}{x^4-6x^2}\\,dx', answer: '\\frac{1}{4}\\ln|x^4-6x^2|+C' },
  { problem: '\\int\\frac{10x^3-7x}{5x^4-7x^2+8}\\,dx', answer: '\\frac{1}{2}\\ln|5x^4-7x^2+8|+C' },
  { problem: '\\int\\frac{x}{x^2+4}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+4|+C' },
  { problem: '\\int\\frac{x+1}{x^2+2x-5}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+2x-5|+C' },
  { problem: '\\int\\frac{x+3}{x^2+6x+2}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+6x+2|+C' },
  { problem: '\\int\\frac{x^2}{2x^3-7}\\,dx', answer: '\\frac{1}{6}\\ln|2x^3-7|+C' },
  { problem: '\\int\\frac{x^5}{2x^6+5}\\,dx', answer: '\\frac{1}{12}\\ln|2x^6+5|+C' },
  { problem: '\\int\\frac{x}{3-x^2}\\,dx', answer: '-\\frac{1}{2}\\ln|3-x^2|+C' },
  { problem: '\\int\\frac{x^2}{x^3+1}\\,dx', answer: '\\frac{1}{3}\\ln|x^3+1|+C' },
  { problem: '\\int\\frac{x+1}{x^2+2x+5}\\,dx', answer: '\\frac{1}{2}\\ln|x^2+2x+5|+C' },
  { problem: '\\int\\frac{6x^2}{x^3-4}\\,dx', answer: '2\\ln|x^3-4|+C' },
  // Exponential numerator/denominator
  { problem: '\\int\\frac{e^x}{1+e^x}\\,dx', answer: '\\ln(1+e^x)+C' },
  { problem: '\\int\\frac{e^{-x}}{1+e^{-x}}\\,dx', answer: '-\\ln(1+e^{-x})+C' },
  { problem: '\\int\\frac{e^x-e^{-x}}{e^x+e^{-x}}\\,dx', answer: '\\ln(e^x+e^{-x})+C' },
  { problem: '\\int\\frac{e^x}{e^x+3}\\,dx', answer: '\\ln|e^x+3|+C' },
  { problem: '\\int\\frac{e^{2x}}{e^{2x}+5}\\,dx', answer: '\\frac{1}{2}\\ln|e^{2x}+5|+C' },
  { problem: '\\int\\frac{e^{2x}}{e^{2x}-1}\\,dx', answer: '\\frac{1}{2}\\ln|e^{2x}-1|+C' },
  // Trig numerator/denominator
  { problem: '\\int\\frac{\\cos x}{2+\\sin x}\\,dx', answer: '\\ln|2+\\sin x|+C' },
  { problem: '\\int\\frac{\\sin x}{2-\\cos x}\\,dx', answer: '\\ln|2-\\cos x|+C' },
  { problem: '\\int\\frac{\\sec^2 x}{1+\\tan x}\\,dx', answer: '\\ln|1+\\tan x|+C' },
  { problem: '\\int\\frac{\\cos x}{3+2\\sin x}\\,dx', answer: '\\frac{1}{2}\\ln|3+2\\sin x|+C' },
  { problem: '\\int\\frac{\\sec^2 x}{4+3\\tan x}\\,dx', answer: '\\frac{1}{3}\\ln|4+3\\tan x|+C' },
  { problem: '\\int\\tan x\\,dx', answer: '-\\ln|\\cos x|+C' },
  // Logarithmic inner
  { problem: '\\int\\frac{(\\ln x)^2}{x}\\,dx', answer: '\\frac{(\\ln x)^3}{3}+C' },
  { problem: '\\int\\frac{\\ln x}{x}\\,dx', answer: '\\frac{(\\ln x)^2}{2}+C' },
  { problem: '\\int\\frac{1}{x\\ln x}\\,dx', answer: '\\ln|\\ln x|+C' },
], { mode: 'integral', toleranceDp: 2 });
