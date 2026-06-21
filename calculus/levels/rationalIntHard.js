import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('rationalIntHard', 'Rational — Hard', [
  // Improper rational — degree 1 numerator/denominator (divide first, then integrate)
  { problem: '\\int\\frac{x+3}{x-2}\\,dx', answer: 'x+5\\ln|x-2|+C' },
  { problem: '\\int\\frac{2x+1}{x+1}\\,dx', answer: '2x-\\ln|x+1|+C' },
  { problem: '\\int\\frac{3x+2}{x-1}\\,dx', answer: '3x+5\\ln|x-1|+C' },
  { problem: '\\int\\frac{2x-3}{x+2}\\,dx', answer: '2x-7\\ln|x+2|+C' },
  { problem: '\\int\\frac{x+5}{x+1}\\,dx', answer: 'x+4\\ln|x+1|+C' },
  { problem: '\\int\\frac{x+3}{x+1}\\,dx', answer: 'x+2\\ln|x+1|+C' },
  { problem: '\\int\\frac{3x-4}{x-2}\\,dx', answer: '3x+2\\ln|x-2|+C' },
  { problem: '\\int\\frac{4x+1}{2x-1}\\,dx', answer: '2x+\\frac{3}{2}\\ln|2x-1|+C' },
  { problem: '\\int\\frac{6x-5}{3x+1}\\,dx', answer: '2x-\\frac{7}{3}\\ln|3x+1|+C' },
  // Degree 2 numerator, degree 1 denominator (polynomial division gives linear quotient + fraction)
  { problem: '\\int\\frac{x^2+1}{x+1}\\,dx', answer: '\\frac{x^2}{2}-x+2\\ln|x+1|+C' },
  { problem: '\\int\\frac{x^2+x+1}{x-1}\\,dx', answer: '\\frac{x^2}{2}+2x+3\\ln|x-1|+C' },
  { problem: '\\int\\frac{x^2-3x+1}{x-2}\\,dx', answer: '\\frac{x^2}{2}-x-\\ln|x-2|+C' },
  { problem: '\\int\\frac{x^2+2x+3}{x+1}\\,dx', answer: '\\frac{x^2}{2}+x+2\\ln|x+1|+C' },
  // More improper rational integrals (polynomial division, no partial fractions)
  { problem: '\\int\\frac{2x^2+3x-5}{x+2}\\,dx', answer: 'x^2-x-3\\ln|x+2|+C' },
  { problem: '\\int\\frac{3x^2-x+4}{x-3}\\,dx', answer: '\\frac{3x^2}{2}+8x+28\\ln|x-3|+C' },
  { problem: '\\int\\frac{x^2+4x-7}{x+3}\\,dx', answer: '\\frac{x^2}{2}+x-10\\ln|x+3|+C' },
  { problem: '\\int\\frac{4x^2+5x+2}{2x+1}\\,dx', answer: 'x^2+\\frac{3x}{2}+\\frac{1}{4}\\ln|2x+1|+C' },
  { problem: '\\int\\frac{5x^2-2x+1}{x-1}\\,dx', answer: '\\frac{5x^2}{2}+3x+4\\ln|x-1|+C' },
  // Definite integrals of improper rational
  { problem: '\\int_3^5\\frac{x+3}{x-2}\\,dx', answer: '2+5\\ln 3' },
  { problem: '\\int_0^2\\frac{2x+1}{x+1}\\,dx', answer: '4-\\ln 3' },
  { problem: '\\int_0^4\\frac{x+3}{x+1}\\,dx', answer: '4+2\\ln 5' },
  { problem: '\\int_2^6\\frac{x+5}{x-1}\\,dx', answer: '4+6\\ln 5' },
  { problem: '\\int_1^5\\frac{x+5}{x+1}\\,dx', answer: '4+4\\ln 3' },
  { problem: '\\int_2^5\\frac{3x+2}{x-1}\\,dx', answer: '9+10\\ln 2' },
  // More definite improper rational integrals
  { problem: '\\int_0^2\\frac{x^2+1}{x+1}\\,dx', answer: '2\\ln 3' },
  { problem: '\\int_1^3\\frac{x^2+2x+3}{x+1}\\,dx', answer: '6+2\\ln 2' },
  { problem: '\\int_3^5\\frac{x^2-3x+1}{x-2}\\,dx', answer: '6-\\ln 3' },
  { problem: '\\int_4^5\\frac{3x^2-x+4}{x-3}\\,dx', answer: '\\frac{43}{2}+28\\ln 2' },
  { problem: '\\int_1^3\\frac{4x^2+5x+2}{2x+1}\\,dx', answer: '11+\\frac{1}{4}\\ln\\frac{7}{3}' },
  { problem: '\\int_0^3\\frac{x^2+1}{x+1}\\,dx', answer: '\\frac{3}{2}+4\\ln 2' },
], { mode: 'integral', toleranceDp: 2 });
