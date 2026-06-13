import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('rationalIntMedium', 'Rational — Medium', [
  // Definite integrals of 1/x (exact)
  { problem: '\\int_1^5\\frac{1}{x}\\,dx', answer: '\\ln 5' },
  { problem: '\\int_1^3\\frac{1}{x}\\,dx', answer: '\\ln 3' },
  { problem: '\\int_{-8}^{-2}\\frac{1}{x}\\,dx', answer: '-2\\ln 2' },
  { problem: '\\int_1^4\\frac{1}{2x}\\,dx', answer: '\\ln 2' },
  { problem: '\\int_{-15}^{-5}\\frac{1}{5x}\\,dx', answer: '-\\frac{1}{5}\\ln 3' },
  // Definite with e bounds
  { problem: '\\int_1^e\\frac{1}{x}\\,dx', answer: '1' },
  { problem: '\\int_1^{e^2}\\frac{1}{x}\\,dx', answer: '2' },
  { problem: '\\int_e^{e^4}\\frac{1}{x}\\,dx', answer: '3' },
  { problem: '\\int_{\\sqrt{e}}^e\\frac{1}{x}\\,dx', answer: '\\frac{1}{2}' },
  // Definite with decimal answers (toleranceDp: 4)
  { problem: '\\int_0^1\\frac{1}{x+1}\\,dx', answer: '0.6931' },
  { problem: '\\int_{-7}^{-5}\\frac{1}{x+2}\\,dx', answer: '-0.5108' },
  { problem: '\\int_{-5}^{-2}\\frac{1}{2x+3}\\,dx', answer: '-0.9730' },
  { problem: '\\int_1^2\\frac{3}{5-2x}\\,dx', answer: '1.648' },
  { problem: '\\int_{-1}^1\\frac{3}{7-3x}\\,dx', answer: '0.9163' },
  // Other exact definite
  { problem: '\\int_3^5\\frac{1}{x-2}\\,dx', answer: '\\ln 3' },
  { problem: '\\int_{-5}^{-3}\\frac{1}{x}\\,dx', answer: '\\ln 3-\\ln 5' },
  { problem: '\\int_e^{e^2}\\frac{5}{x}\\,dx', answer: '5' },
  // Divide polynomial by x, then integrate
  { problem: '\\int\\frac{x+1}{x}\\,dx', answer: 'x+\\ln|x|+C' },
  { problem: '\\int\\frac{x+3}{5x}\\,dx', answer: '\\frac{1}{5}x+\\frac{3}{5}\\ln|x|+C' },
  { problem: '\\int\\frac{1-8x}{9x}\\,dx', answer: '\\frac{1}{9}\\ln|x|-\\frac{8}{9}x+C' },
  { problem: '\\int\\frac{3x^2-2x}{x^2}\\,dx', answer: '3x-2\\ln|x|+C' },
  { problem: '\\int\\frac{2x^2+x-4}{x}\\,dx', answer: 'x^2+x-4\\ln|x|+C' },
  { problem: '\\int\\frac{x^4-x+2}{x^2}\\,dx', answer: '\\frac{1}{3}x^3-\\ln|x|-\\frac{2}{x}+C' },
], { mode: 'integral', toleranceDp: 4 });
