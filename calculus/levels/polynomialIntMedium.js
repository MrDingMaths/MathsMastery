import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialIntMedium', 'Polynomials — Medium', [
  // Negative integer exponents
  { problem: '\\int x^{-2}\\,dx', answer: '-x^{-1}+C' },
  { problem: '\\int x^{-3}\\,dx', answer: '-\\frac{1}{2}x^{-2}+C' },
  { problem: '\\int x^{-8}\\,dx', answer: '-\\frac{1}{7}x^{-7}+C' },
  { problem: '\\int 3x^{-4}\\,dx', answer: '-x^{-3}+C' },
  { problem: '\\int 9x^{-10}\\,dx', answer: '-x^{-9}+C' },
  { problem: '\\int 10x^{-6}\\,dx', answer: '-2x^{-5}+C' },
  // Fractional exponents
  { problem: '\\int x^{\\frac{1}{2}}\\,dx', answer: '\\frac{2}{3}x^{\\frac{3}{2}}+C' },
  { problem: '\\int x^{\\frac{1}{3}}\\,dx', answer: '\\frac{3}{4}x^{\\frac{4}{3}}+C' },
  { problem: '\\int x^{\\frac{1}{4}}\\,dx', answer: '\\frac{4}{5}x^{\\frac{5}{4}}+C' },
  { problem: '\\int x^{\\frac{2}{3}}\\,dx', answer: '\\frac{3}{5}x^{\\frac{5}{3}}+C' },
  { problem: '\\int x^{-\\frac{1}{2}}\\,dx', answer: '2x^{\\frac{1}{2}}+C' },
  { problem: '\\int 4x^{\\frac{1}{2}}\\,dx', answer: '\\frac{8}{3}x^{\\frac{3}{2}}+C' },
  // Expand bracket first
  { problem: '\\int x(x+2)\\,dx', answer: '\\frac{x^3}{3}+x^2+C' },
  { problem: '\\int x(4-x^2)\\,dx', answer: '2x^2-\\frac{x^4}{4}+C' },
  { problem: '\\int x^2(5-3x)\\,dx', answer: '\\frac{5x^3}{3}-\\frac{3x^4}{4}+C' },
  { problem: '\\int x^3(x-5)\\,dx', answer: '\\frac{x^5}{5}-\\frac{5x^4}{4}+C' },
  { problem: '\\int(x-3)^2\\,dx', answer: '\\frac{x^3}{3}-3x^2+9x+C' },
  { problem: '\\int(2x+1)^2\\,dx', answer: '\\frac{4x^3}{3}+2x^2+x+C' },
  { problem: '\\int(1-x^2)^2\\,dx', answer: 'x-\\frac{2x^3}{3}+\\frac{x^5}{5}+C' },
  { problem: '\\int(2-3x)(2+3x)\\,dx', answer: '4x-3x^3+C' },
  { problem: '\\int(x^2-3)(1-2x)\\,dx', answer: '\\frac{x^3}{3}-\\frac{x^4}{2}-3x+3x^2+C' },
  { problem: '\\int(x^2+3)^2\\,dx', answer: '\\frac{x^5}{5}+2x^3+9x+C' },
  // Divide first
  { problem: '\\int\\frac{x^2+2x}{x}\\,dx', answer: '\\frac{x^2}{2}+2x+C' },
  { problem: '\\int\\frac{x^7+x^8}{x^6}\\,dx', answer: '\\frac{x^2}{2}+\\frac{x^3}{3}+C' },
  { problem: '\\int\\frac{2x^3-x^4}{4x}\\,dx', answer: '\\frac{x^3}{6}-\\frac{x^4}{16}+C' },
  { problem: '\\int\\frac{20}{x^5}\\,dx', answer: '-\\frac{5}{x^4}+C' },
  { problem: '\\int\\frac{10x^3+4x}{2x}\\,dx', answer: '\\frac{5x^3}{3}+2x+C' },
  // Surd notation
  { problem: '\\int\\sqrt[3]{x}\\,dx', answer: '\\frac{3}{4}x^{\\frac{4}{3}}+C' },
  // Negative exponents with fractional/signed coefficients
  { problem: '\\int\\frac{1}{3}x^{-2}\\,dx', answer: '-\\frac{1}{3x}+C' },
  { problem: '\\int\\frac{x^{-5}}{7}\\,dx', answer: '-\\frac{1}{28x^4}+C' },
  { problem: '\\int\\left(-\\frac{1}{5}\\right)x^{-3}\\,dx', answer: '\\frac{1}{10x^2}+C' },
  { problem: '\\int(x^{-2}-x^{-5})\\,dx', answer: '\\frac{1}{4x^4}-\\frac{1}{x}+C' },
  { problem: '\\int(x^{-3}+x^{-4})\\,dx', answer: '-\\frac{1}{2x^2}-\\frac{1}{3x^3}+C' },
  // Difference of squares with surd
  { problem: '\\int(\\sqrt{x}-2)(\\sqrt{x}+2)\\,dx', answer: '\\frac{x^2}{2}-4x+C' },
], { mode: 'integral' });
