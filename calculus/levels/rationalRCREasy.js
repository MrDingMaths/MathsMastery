import { BaseLevel } from './BaseLevel.js';

// Easy (1–2 steps): ∫ f'(x)/f(x) dx where the numerator is EXACTLY the
// derivative of the denominator. Answer is ln|f(x)|. Indefinite only.
export default new BaseLevel('rationalRCREasy', 'Rational Reverse Chain Rule — Easy', [
  // Quadratic / cubic denominators, numerator = exact derivative
  { problem: '\\int\\frac{3x^2}{x^3+5}\\,dx', answer: '\\ln|x^3+5|+C' },
  { problem: '\\int\\frac{6x}{3x^2+1}\\,dx', answer: '\\ln|3x^2+1|+C' },
  { problem: '\\int\\frac{2x}{x^2-9}\\,dx', answer: '\\ln|x^2-9|+C' },
  { problem: '\\int\\frac{2x}{x^2+1}\\,dx', answer: '\\ln|x^2+1|+C' },
  { problem: '\\int\\frac{6x+1}{3x^2+x}\\,dx', answer: '\\ln|3x^2+x|+C' },
  { problem: '\\int\\frac{2x+1}{x^2+x-3}\\,dx', answer: '\\ln|x^2+x-3|+C' },
  { problem: '\\int\\frac{2x+3}{x^2+3x+1}\\,dx', answer: '\\ln|x^2+3x+1|+C' },
  { problem: '\\int\\frac{2x-5}{x^2-5x+2}\\,dx', answer: '\\ln|x^2-5x+2|+C' },
  { problem: '\\int\\frac{2x+6}{x^2+6x+10}\\,dx', answer: '\\ln|x^2+6x+10|+C' },
  { problem: '\\int\\frac{2x-7}{x^2-7x+1}\\,dx', answer: '\\ln|x^2-7x+1|+C' },
  { problem: '\\int\\frac{2x+1}{x^2+x+1}\\,dx', answer: '\\ln|x^2+x+1|+C' },
  { problem: '\\int\\frac{2x-2}{x^2-2x+5}\\,dx', answer: '\\ln|x^2-2x+5|+C' },
  // Sign in the denominator
  { problem: '\\int\\frac{5-6x}{2+5x-3x^2}\\,dx', answer: '\\ln|2+5x-3x^2|+C' },
  { problem: '\\int\\frac{1-2x}{4+x-x^2}\\,dx', answer: '\\ln|4+x-x^2|+C' },
  // Coefficient already matching (a·denominator')
  { problem: '\\int\\frac{4x}{2x^2+1}\\,dx', answer: '\\ln|2x^2+1|+C' },
  { problem: '\\int\\frac{8x}{4x^2-3}\\,dx', answer: '\\ln|4x^2-3|+C' },
  { problem: '\\int\\frac{10x}{5x^2-2}\\,dx', answer: '\\ln|5x^2-2|+C' },
  { problem: '\\int\\frac{6x^2}{2x^3+5}\\,dx', answer: '\\ln|2x^3+5|+C' },
  { problem: '\\int\\frac{9x^2}{3x^3+1}\\,dx', answer: '\\ln|3x^3+1|+C' },
  // Cubic denominators
  { problem: '\\int\\frac{3x^2}{x^3-5}\\,dx', answer: '\\ln|x^3-5|+C' },
  { problem: '\\int\\frac{3x^2}{x^3-7}\\,dx', answer: '\\ln|x^3-7|+C' },
  { problem: '\\int\\frac{3x^2+2}{x^3+2x-4}\\,dx', answer: '\\ln|x^3+2x-4|+C' },
  { problem: '\\int\\frac{3x^2-1}{x^3-x+5}\\,dx', answer: '\\ln|x^3-x+5|+C' },
  { problem: '\\int\\frac{3x^2+4x}{x^3+2x^2-1}\\,dx', answer: '\\ln|x^3+2x^2-1|+C' },
  // Quartic / quintic denominators
  { problem: '\\int\\frac{4x^3+1}{x^4+x-5}\\,dx', answer: '\\ln|x^4+x-5|+C' },
  { problem: '\\int\\frac{4x^3}{x^4+1}\\,dx', answer: '\\ln|x^4+1|+C' },
  { problem: '\\int\\frac{4x^3-2x}{x^4-x^2+3}\\,dx', answer: '\\ln|x^4-x^2+3|+C' },
  { problem: '\\int\\frac{5x^4}{x^5-2}\\,dx', answer: '\\ln|x^5-2|+C' },
  { problem: '\\int\\frac{5x^4+1}{x^5+x-2}\\,dx', answer: '\\ln|x^5+x-2|+C' },
  { problem: '\\int\\frac{2x-7}{x^2-7x+12}\\,dx', answer: '\\ln|x^2-7x+12|+C' },
], { mode: 'integral', toleranceDp: 2 });
