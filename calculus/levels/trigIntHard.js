import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigIntHard', 'Trigonometric — Hard', [
  // Definite integrals with bounds at multiples of π/6, π/4, π/3
  { problem: '\\int_0^{\\frac{\\pi}{3}}\\sin x\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\cos x\\,dx', answer: '\\frac{1}{\\sqrt{2}}' },
  { problem: '\\int_{\\frac{\\pi}{4}}^{\\frac{\\pi}{2}}\\cos x\\,dx', answer: '1-\\frac{1}{\\sqrt{2}}' },
  { problem: '\\int_{\\frac{\\pi}{3}}^{\\frac{\\pi}{2}}\\sin x\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{6}}\\sin x\\,dx', answer: '1-\\frac{\\sqrt{3}}{2}' },
  { problem: '\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}}\\cos x\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{6}}\\sec^2 x\\,dx', answer: '\\frac{1}{\\sqrt{3}}' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sec^2 x\\,dx', answer: '1' },
  // Definite integrals with linear argument ax
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\cos(2x)\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{6}}\\sin(3x)\\,dx', answer: '\\frac{1}{3}' },
  { problem: '\\int_0^{\\frac{\\pi}{8}}\\sec^2(2x)\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}}\\sin(2x)\\,dx', answer: '\\frac{1}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}\\sin(2x)\\,dx', answer: '\\frac{1}{2}' },
  // Definite integrals with phase-shifted argument ax+b
  { problem: '\\int_0^{\\pi}\\sin\\left(x+\\frac{\\pi}{4}\\right)\\,dx', answer: '\\sqrt{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}\\cos\\left(x+\\frac{\\pi}{6}\\right)\\,dx', answer: '\\frac{\\sqrt{3}-1}{2}' },
  { problem: '\\int_0^{\\frac{\\pi}{3}}2\\cos\\left(x+\\frac{\\pi}{6}\\right)\\,dx', answer: '1' },
  { problem: '\\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}}2\\sin\\left(x-\\frac{\\pi}{6}\\right)\\,dx', answer: '1' },
  // Definite integrals of sums of trig functions
  { problem: '\\int_0^{\\frac{\\pi}{2}}(\\cos x+\\sin x)\\,dx', answer: '2' },
  { problem: '\\int_0^{\\pi}(\\sin x+\\cos 2x)\\,dx', answer: '2' },
  { problem: '\\int_0^{\\frac{\\pi}{2}}(2\\sin x-\\cos 2x)\\,dx', answer: '2' },
  { problem: '\\int_0^{\\frac{\\pi}{4}}(\\cos x+\\sec^2 x)\\,dx', answer: '1+\\frac{1}{\\sqrt{2}}' },
  // Definite integrals with negative bounds
  { problem: '\\int_{-\\frac{\\pi}{2}}^0\\sin x\\,dx', answer: '-1' },
  { problem: '\\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}}\\cos x\\,dx', answer: '2' },
  { problem: '\\int_{-\\frac{\\pi}{4}}^{\\frac{\\pi}{4}}\\sec^2 x\\,dx', answer: '2' },
  // Indefinite integrals with ax+b argument (both a and b non-trivial)
  { problem: '\\int 3\\sin(2x+1)\\,dx', answer: '-\\frac{3}{2}\\cos(2x+1)+C' },
  { problem: '\\int 4\\cos(3x-1)\\,dx', answer: '\\frac{4}{3}\\sin(3x-1)+C' },
  { problem: '\\int 6\\sec^2(2x+5)\\,dx', answer: '3\\tan(2x+5)+C' },
  { problem: '\\int 2\\sin(1-3x)\\,dx', answer: '\\frac{2}{3}\\cos(1-3x)+C' },
  { problem: '\\int 5\\cos(4-x)\\,dx', answer: '-5\\sin(4-x)+C' },
  { problem: '\\int\\frac{1}{2}\\sec^2(2x-3)\\,dx', answer: '\\frac{1}{4}\\tan(2x-3)+C' },
  // Extended definite integrals across multiple periods
  { problem: '\\int_{\\pi}^{2\\pi}\\sin\\frac{x}{4}\\,dx', answer: '2\\sqrt{2}' },
  { problem: '\\int_{\\pi}^{2\\pi}\\cos\\left(3x+\\frac{\\pi}{2}\\right)\\,dx', answer: '\\frac{2}{3}' },
], { mode: 'integral', toleranceDp: 2 });
