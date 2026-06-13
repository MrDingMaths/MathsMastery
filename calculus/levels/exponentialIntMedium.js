import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialIntMedium', 'Exponentials — Medium', [
  // Basic definite integrals
  { problem: '\\int_0^1 e^x\\,dx', answer: 'e-1' },
  { problem: '\\int_1^2 e^x\\,dx', answer: 'e^2-e' },
  { problem: '\\int_{-1}^3 e^{-x}\\,dx', answer: 'e-e^{-3}' },
  { problem: '\\int_{-2}^0 e^{-x}\\,dx', answer: 'e^2-1' },
  { problem: '\\int_0^2 e^{2x}\\,dx', answer: '\\frac{1}{2}(e^4-1)' },
  { problem: '\\int_{-1}^2 20e^{-5x}\\,dx', answer: '4(e^5-e^{-10})' },
  { problem: '\\int_{-3}^1 8e^{-4x}\\,dx', answer: '2(e^{12}-e^{-4})' },
  { problem: '\\int_{-1}^3 9e^{6x}\\,dx', answer: '\\frac{3}{2}(e^{18}-e^{-6})' },
  { problem: '\\int_{-1}^1 e^{2x+1}\\,dx', answer: '\\frac{1}{2}(e^3-e^{-1})' },
  { problem: '\\int_{-2}^0 e^{4x-3}\\,dx', answer: '\\frac{1}{4}(e^{-3}-e^{-11})' },
  { problem: '\\int_{-2}^{-1} e^{3x+2}\\,dx', answer: '\\frac{1}{3}(e^{-1}-e^{-4})' },
  { problem: '\\int_1^2 6e^{3x+1}\\,dx', answer: '2e^4(e^3-1)' },
  { problem: '\\int_2^3 12e^{4x-5}\\,dx', answer: '3e^3(e^4-1)' },
  { problem: '\\int_1^2 12e^{8-3x}\\,dx', answer: '4e^2(e^3-1)' },
  // 1/e^x type (rewrite as e^{-kx})
  { problem: '\\int\\frac{1}{e^x}\\,dx', answer: '-e^{-x}+C' },
  { problem: '\\int\\frac{1}{e^{2x}}\\,dx', answer: '-\\frac{1}{2}e^{-2x}+C' },
  { problem: '\\int\\frac{1}{e^{3x}}\\,dx', answer: '-\\frac{1}{3}e^{-3x}+C' },
  { problem: '\\int\\frac{-3}{e^{3x}}\\,dx', answer: 'e^{-3x}+C' },
  { problem: '\\int\\frac{6}{e^{2x}}\\,dx', answer: '-3e^{-2x}+C' },
  { problem: '\\int\\frac{8}{e^{-2x}}\\,dx', answer: '4e^{2x}+C' },
  // Expand bracket first
  { problem: '\\int e^x(e^x+1)\\,dx', answer: '\\frac{1}{2}e^{2x}+e^x+C' },
  { problem: '\\int e^{-x}(2e^{-x}-1)\\,dx', answer: 'e^{-x}-e^{-2x}+C' },
  { problem: '\\int(e^x-1)^2\\,dx', answer: '\\frac{1}{2}e^{2x}-2e^x+x+C' },
  // 1/e^{ax+b} (rewrite, then integrate)
  { problem: '\\int\\frac{1}{e^{x-1}}\\,dx', answer: '-e^{1-x}+C' },
  { problem: '\\int\\frac{1}{e^{3x-1}}\\,dx', answer: '-\\frac{1}{3}e^{1-3x}+C' },
  { problem: '\\int\\frac{1}{e^{2x+5}}\\,dx', answer: '-\\frac{1}{2}e^{-2x-5}+C' },
  { problem: '\\int\\frac{4}{e^{2x-1}}\\,dx', answer: '-2e^{1-2x}+C' },
  { problem: '\\int\\frac{10}{e^{2-5x}}\\,dx', answer: '2e^{5x-2}+C' },
  { problem: '\\int\\frac{12}{e^{3x-5}}\\,dx', answer: '-4e^{5-3x}+C' },
  // Divide by e^{kx}
  { problem: '\\int\\frac{e^x+1}{e^x}\\,dx', answer: 'x-e^{-x}+C' },
  { problem: '\\int\\frac{e^{2x}+1}{e^x}\\,dx', answer: 'e^x-e^{-x}+C' },
  { problem: '\\int\\frac{e^x-1}{e^{2x}}\\,dx', answer: '\\frac{1}{2}e^{-2x}-e^{-x}+C' },
  { problem: '\\int\\frac{e^x-3}{e^{3x}}\\,dx', answer: 'e^{-3x}-\\frac{1}{2}e^{-2x}+C' },
  { problem: '\\int\\frac{2e^{2x}-3e^x}{e^{4x}}\\,dx', answer: 'e^{-3x}-e^{-2x}+C' },
  { problem: '\\int\\frac{2e^x-e^{2x}}{e^{3x}}\\,dx', answer: 'e^{-x}-e^{-2x}+C' },
  // Rewrite (e^x)^n and roots of e^x
  { problem: '\\int\\frac{1}{(e^x)^2}\\,dx', answer: '-\\frac{1}{2}e^{-2x}+C' },
  { problem: '\\int\\frac{1}{(e^x)^3}\\,dx', answer: '-\\frac{1}{3}e^{-3x}+C' },
  { problem: '\\int\\sqrt{e^x}\\,dx', answer: '2e^{\\frac{x}{2}}+C' },
  { problem: '\\int\\sqrt[3]{e^x}\\,dx', answer: '3e^{\\frac{x}{3}}+C' },
  { problem: '\\int\\frac{1}{\\sqrt{e^x}}\\,dx', answer: '-2e^{-\\frac{x}{2}}+C' },
  { problem: '\\int\\frac{1}{\\sqrt[3]{e^x}}\\,dx', answer: '-3e^{-\\frac{x}{3}}+C' },
  // Mixed indefinite
  { problem: '\\int\\left(\\frac{e^x}{3}-e^{5x-2}\\right)\\,dx', answer: '\\frac{e^x}{3}-\\frac{e^{5x-2}}{5}+C' },
], { mode: 'integral' });
