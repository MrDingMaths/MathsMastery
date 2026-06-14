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
  // Partial fractions with two distinct linear factors
  { problem: '\\int\\frac{1}{(x+1)(x+2)}\\,dx', answer: '\\ln|x+1|-\\ln|x+2|+C' },
  { problem: '\\int\\frac{2}{(x+1)(x+3)}\\,dx', answer: '\\ln|x+1|-\\ln|x+3|+C' },
  { problem: '\\int\\frac{3}{(x-1)(x+2)}\\,dx', answer: '\\ln|x-1|-\\ln|x+2|+C' },
  { problem: '\\int\\frac{4}{(x-2)(x+2)}\\,dx', answer: '\\ln|x-2|-\\ln|x+2|+C' },
  { problem: '\\int\\frac{5}{(x+2)(x-3)}\\,dx', answer: '\\ln|x-3|-\\ln|x+2|+C' },
  // Definite integrals of improper rational
  { problem: '\\int_3^5\\frac{x+3}{x-2}\\,dx', answer: '2+5\\ln 3' },
  { problem: '\\int_0^2\\frac{2x+1}{x+1}\\,dx', answer: '4-\\ln 3' },
  { problem: '\\int_0^4\\frac{x+3}{x+1}\\,dx', answer: '4+2\\ln 5' },
  { problem: '\\int_2^6\\frac{x+5}{x-1}\\,dx', answer: '4+6\\ln 5' },
  { problem: '\\int_1^5\\frac{x+5}{x+1}\\,dx', answer: '4+4\\ln 3' },
  { problem: '\\int_2^5\\frac{3x+2}{x-1}\\,dx', answer: '9+10\\ln 2' },
  // Definite integrals of partial fractions
  { problem: '\\int_3^5\\frac{1}{(x+1)(x+2)}\\,dx', answer: '\\ln\\frac{15}{14}' },
  { problem: '\\int_0^2\\frac{2}{(x+1)(x+3)}\\,dx', answer: '\\ln\\frac{9}{5}' },
  { problem: '\\int_3^7\\frac{4}{(x-2)(x+2)}\\,dx', answer: '\\ln\\frac{25}{9}' },
  { problem: '\\int_4^7\\frac{5}{(x+2)(x-3)}\\,dx', answer: '\\ln\\frac{8}{3}' },
  { problem: '\\int_2^5\\frac{3}{(x-1)(x+2)}\\,dx', answer: '\\ln\\frac{16}{7}' },
  { problem: '\\int_0^3\\frac{x^2+1}{x+1}\\,dx', answer: '\\frac{3}{2}+4\\ln 2' },
], { mode: 'integral', toleranceDp: 2 });
