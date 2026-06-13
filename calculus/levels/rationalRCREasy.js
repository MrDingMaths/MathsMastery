import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('rationalRCREasy', 'Rational Reverse Chain Rule — Easy', [
  { problem: '\\int\\frac{3x^2}{x^3+5}\\,dx', answer: '\\ln|x^3+5|+C' },
  { problem: '\\int\\frac{6x}{3x^2+1}\\,dx', answer: '\\ln|3x^2+1|+C' },
  { problem: '\\int\\frac{2x}{x^2-9}\\,dx', answer: '\\ln|x^2-9|+C' },
  { problem: '\\int\\frac{6x+1}{3x^2+x}\\,dx', answer: '\\ln|3x^2+x|+C' },
  { problem: '\\int\\frac{2x+1}{x^2+x-3}\\,dx', answer: '\\ln|x^2+x-3|+C' },
  { problem: '\\int\\frac{5-6x}{2+5x-3x^2}\\,dx', answer: '\\ln|2+5x-3x^2|+C' },
  { problem: '\\int\\frac{3x^2}{x^3-5}\\,dx', answer: '\\ln|x^3-5|+C' },
  { problem: '\\int\\frac{4x^3+1}{x^4+x-5}\\,dx', answer: '\\ln|x^4+x-5|+C' },
  { problem: '\\int\\frac{5x^4}{x^5-2}\\,dx', answer: '\\ln|x^5-2|+C' },
  { problem: '\\int\\frac{3x^2}{x^3-7}\\,dx', answer: '\\ln|x^3-7|+C' },
  { problem: '\\int\\frac{4x}{2x^2+1}\\,dx', answer: '\\ln|2x^2+1|+C' },
], { mode: 'integral', toleranceDp: 2 });
