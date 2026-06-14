import { BaseLevel } from './BaseLevel.js';

// Hard (3+ steps): definite integrals of f'/f (logs of ratios) and harder
// recognition — including trig, exponential and logarithmic inners.
export default new BaseLevel('rationalRCRHard', 'Rational Reverse Chain Rule — Hard', [
  // Definite — polynomial denominators
  { problem: '\\int_2^3\\frac{3x^2-1}{x^3-x}\\,dx', answer: '2\\ln 2' },
  { problem: '\\int_e^{2e}\\frac{2x+2}{x^2+2x}\\,dx', answer: '\\ln\\frac{4(e+1)}{e+2}' },
  { problem: '\\int_1^7\\frac{x^2}{x^3+2}\\,dx', answer: '\\frac{1}{3}\\ln 115' },
  { problem: '\\int_0^3\\frac{4x+1}{2x^2+x+1}\\,dx', answer: '\\ln 22' },
  { problem: '\\int_0^1\\frac{2x}{x^2+1}\\,dx', answer: '\\ln 2' },
  { problem: '\\int_1^2\\frac{x}{x^2+1}\\,dx', answer: '\\frac{1}{2}\\ln\\frac{5}{2}' },
  { problem: '\\int_0^1\\frac{x^2}{x^3+1}\\,dx', answer: '\\frac{1}{3}\\ln 2' },
  { problem: '\\int_0^1\\frac{3x^2}{x^3+1}\\,dx', answer: '\\ln 2' },
  { problem: '\\int_0^1\\frac{2x+1}{x^2+x+1}\\,dx', answer: '\\ln 3' },
  { problem: '\\int_0^1\\frac{2x+2}{x^2+2x+1}\\,dx', answer: '2\\ln 2' },
  { problem: '\\int_1^2\\frac{2x-2}{x^2-2x+2}\\,dx', answer: '\\ln 2' },
  { problem: '\\int_2^3\\frac{2x-3}{x^2-3x+3}\\,dx', answer: '\\ln 3' },
  { problem: '\\int_0^2\\frac{x}{x^2+4}\\,dx', answer: '\\frac{1}{2}\\ln 2' },
  { problem: '\\int_0^1\\frac{4x^3}{x^4+1}\\,dx', answer: '\\ln 2' },
  { problem: '\\int_1^2\\frac{3x^2}{x^3+1}\\,dx', answer: '\\ln\\frac{9}{2}' },
  { problem: '\\int_0^1\\frac{2x-1}{x^2-x+1}\\,dx', answer: '0' },
  { problem: '\\int_2^4\\frac{2x-1}{x^2-x}\\,dx', answer: '\\ln 6' },
  { problem: '\\int_0^1\\frac{6x^2+2}{x^3+x+1}\\,dx', answer: '2\\ln 3' },
  { problem: '\\int_1^2\\frac{2x+3}{x^2+3x}\\,dx', answer: '\\ln\\frac{5}{2}' },
  // Definite — exponential inner
  { problem: '\\int_0^{\\ln 2}\\frac{e^x}{e^x+1}\\,dx', answer: '\\ln\\frac{3}{2}' },
  { problem: '\\int_0^{\\ln 3}\\frac{e^x}{e^x+1}\\,dx', answer: '\\ln 2' },
  // Definite — trig inner
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\tan x\\,dx', answer: '\\frac{1}{2}\\ln 2' },
  { problem: '\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\frac{\\cos x}{\\sin x}\\,dx', answer: '\\frac{1}{2}\\ln 3' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\frac{\\cos x}{1+\\sin x}\\,dx', answer: '\\ln 2' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\frac{\\sec^2 x}{1+\\tan x}\\,dx', answer: '\\ln 2' },
  // Definite — logarithmic inner
  { problem: '\\int_1^e\\frac{\\ln x}{x}\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_e^{e^2}\\frac{1}{x\\ln x}\\,dx', answer: '\\ln 2' },
  { problem: '\\int_1^e\\frac{(\\ln x)^2}{x}\\,dx', answer: '\\frac{1}{3}' },
  // Harder recognition — coefficient adjustment within a definite integral
  { problem: '\\int_0^1\\frac{x}{x^2+2}\\,dx', answer: '\\frac{1}{2}\\ln\\frac{3}{2}' },
  { problem: '\\int_0^2\\frac{x^2}{x^3+1}\\,dx', answer: '\\frac{1}{3}\\ln 9' },
], { mode: 'integral', toleranceDp: 2 });
