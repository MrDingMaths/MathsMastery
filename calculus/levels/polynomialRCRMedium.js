import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialRCRMedium', 'Polynomial Reverse Chain Rule — Medium', [
  // Fractional coefficient in argument
  { problem: '\\int\\left(\\frac{x}{3}-7\\right)^4\\,dx', answer: '\\frac{3}{5}\\left(\\frac{x}{3}-7\\right)^5+C' },
  { problem: '\\int\\left(\\frac{x}{4}-7\\right)^6\\,dx', answer: '\\frac{4}{7}\\left(\\frac{x}{4}-7\\right)^7+C' },
  { problem: '\\int\\left(1-\\frac{x}{5}\\right)^3\\,dx', answer: '-\\frac{5}{4}\\left(1-\\frac{x}{5}\\right)^4+C' },
  // 1/(ax+b)^n
  { problem: '\\int\\frac{1}{(x+1)^3}\\,dx', answer: '-\\frac{1}{2(x+1)^2}+C' },
  { problem: '\\int\\frac{1}{(x-5)^4}\\,dx', answer: '-\\frac{1}{3(x-5)^3}+C' },
  { problem: '\\int\\frac{1}{(3x-4)^2}\\,dx', answer: '-\\frac{1}{3(3x-4)}+C' },
  { problem: '\\int\\frac{1}{(2-x)^5}\\,dx', answer: '\\frac{1}{4(2-x)^4}+C' },
  { problem: '\\int\\frac{3}{(x-7)^6}\\,dx', answer: '-\\frac{3}{5(x-7)^5}+C' },
  { problem: '\\int\\frac{8}{(4x+1)^5}\\,dx', answer: '-\\frac{1}{2(4x+1)^4}+C' },
  { problem: '\\int\\frac{2}{(3-5x)^4}\\,dx', answer: '\\frac{2}{15(3-5x)^3}+C' },
  { problem: '\\int\\frac{4}{5(1-4x)^2}\\,dx', answer: '\\frac{1}{5-20x}+C' },
  { problem: '\\int\\frac{7}{8(3x+2)^5}\\,dx', answer: '-\\frac{7}{96(3x+2)^4}+C' },
  { problem: '\\int\\frac{1}{(1-4x)^2}\\,dx', answer: '\\frac{1}{4(1-4x)}+C' },
  // √(ax+b) and related
  { problem: '\\int\\sqrt{2x-1}\\,dx', answer: '\\frac{1}{3}(2x-1)^{\\frac{3}{2}}+C' },
  { problem: '\\int\\sqrt{7-4x}\\,dx', answer: '-\\frac{1}{6}(7-4x)^{\\frac{3}{2}}+C' },
  { problem: '\\int\\sqrt[3]{4x-1}\\,dx', answer: '\\frac{3}{16}(4x-1)^{\\frac{4}{3}}+C' },
  { problem: '\\int\\frac{1}{\\sqrt{3x+5}}\\,dx', answer: '\\frac{2}{3}\\sqrt{3x+5}+C' },
  { problem: '\\int\\sqrt{7-2x}\\,dx', answer: '-\\frac{\\sqrt{(7-2x)^3}}{3}+C' },
  // f'(x)·[f(x)]^n where f is quadratic or higher
  { problem: '\\int x^2(x^3+5)^3\\,dx', answer: '\\frac{(x^3+5)^4}{12}+C' },
  { problem: '\\int x\\sqrt{1-x^2}\\,dx', answer: '-\\frac{\\sqrt{(1-x^2)^3}}{3}+C' },
], { mode: 'integral', toleranceDp: 2 });
