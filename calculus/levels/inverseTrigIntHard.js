import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('inverseTrigIntHard', 'Integrating Inverse Trig — Hard', [
  { problem: '\\int\\frac{x}{\\sqrt{1-x^4}}\\,dx', answer: '\\frac{1}{2}\\sin^{-1}(x^2)+C' },
  { problem: '\\int\\frac{x^2}{\\sqrt{1-4x^6}}\\,dx', answer: '\\frac{1}{6}\\sin^{-1}(2x^3)+C' },
  { problem: '\\int\\frac{x^2}{1+4x^6}\\,dx', answer: '\\frac{1}{6}\\tan^{-1}(2x^3)+C' },
  { problem: '\\int_{\\frac{1}{2}}^{\\frac{\\sqrt{3}}{2}}\\frac{\\frac{1}{2}}{\\frac{1}{4}+x^2}\\,dx', answer: '\\frac{\\pi}{12}' },
  { problem: '\\int_{\\frac{\\sqrt{3}}{6}}^{\\frac{1}{6}}\\frac{-1}{\\sqrt{\\frac{1}{9}-x^2}}\\,dx', answer: '\\frac{\\pi}{6}' },
  { problem: '\\int_{-\\frac{3\\sqrt{2}}{4}}^{\\frac{3}{4}}\\frac{1}{\\sqrt{\\frac{9}{4}-x^2}}\\,dx', answer: '\\frac{5\\pi}{12}' },
  { problem: '\\int_0^{\\frac{1}{6}}\\frac{1}{\\sqrt{1-9x^2}}\\,dx', answer: '\\frac{\\pi}{18}' },
  { problem: '\\int_{\\frac{1}{2}}^{\\frac{\\sqrt{3}}{2}}\\frac{2}{1+4x^2}\\,dx', answer: '\\frac{\\pi}{12}' },
  { problem: '\\int_{-\\frac{1}{2}}^{\\frac{1}{2}}\\frac{1}{\\sqrt{1-3x^2}}\\,dx', answer: '\\frac{2\\pi\\sqrt{3}}{9}' },
  { problem: '\\int\\frac{1}{\\sqrt{5-4x-x^2}}\\,dx', answer: '\\sin^{-1}\\left(\\frac{x+2}{3}\\right)+C' },
  { problem: '\\int\\frac{1}{x^2+2x+4}\\,dx', answer: '\\frac{1}{\\sqrt{3}}\\tan^{-1}\\left(\\frac{x+1}{\\sqrt{3}}\\right)+C' },
  { problem: '\\int\\frac{1}{\\sqrt{4-2x-x^2}}\\,dx', answer: '\\sin^{-1}\\left(\\frac{x+1}{\\sqrt{5}}\\right)+C' },
  { problem: '\\int_1^2\\frac{1}{\\sqrt{3+2x-x^2}}\\,dx', answer: '\\frac{\\pi}{6}' },
  { problem: '\\int_3^7\\frac{1}{x^2-6x+25}\\,dx', answer: '\\frac{\\pi}{16}' },
], { mode: 'integral', toleranceDp: 4 });
