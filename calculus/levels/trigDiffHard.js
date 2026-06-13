import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigDiffHard', 'Trigonometric Functions — Hard', [
  { problem: '\\frac{d}{dx}(-5\\tan(x^3+2x))', answer: '-5(3x^2+2)\\sec^2(x^3+2x)' },
  { problem: '\\frac{d}{dx}(\\tan(e^{2x}))', answer: '2e^{2x}\\sec^2(e^{2x})' },
  { problem: '\\frac{d}{dx}\\left(\\sin\\left(\\frac{1}{x}\\right)\\right)', answer: '-\\frac{1}{x^2}\\cos\\left(\\frac{1}{x}\\right)' },
  { problem: '\\frac{d}{dx}\\left(\\tan(\\sqrt{x})\\right)', answer: '\\frac{1}{2\\sqrt{x}}\\sec^2(\\sqrt{x})' },
  { problem: '\\frac{d}{dx}(\\sin^4(2x))', answer: '8\\cos(2x)\\sin^3(2x)' },
  { problem: '\\frac{d}{dx}(\\sin^2(7x))', answer: '14\\sin(7x)\\cos(7x)' },
  { problem: '\\frac{d}{dx}(\\cos^5(3x))', answer: '-15\\cos^4(3x)\\sin(3x)' },
  { problem: '\\frac{d}{dx}((1-\\cos(3x))^3)', answer: '9\\sin(3x)(1-\\cos(3x))^2' },
  { problem: '\\frac{d}{dx}(\\tan^3(5x-4))', answer: '15\\tan^2(5x-4)\\sec^2(5x-4)' },
  { problem: '\\frac{d}{dx}\\left(\\frac{\\sin^5 x}{5}-\\frac{\\sin^7 x}{7}\\right)', answer: '\\sin^4 x\\cos^3 x' },
  { problem: '\\frac{d}{dx}(\\cos^2(3x+\\pi))', answer: '-6\\sin(3x)\\cos(3x)' },
  { problem: '\\frac{d}{dx}\\left(\\sin\\left(\\frac{\\pi}{2}-x^2\\right)\\right)', answer: '-2x\\sin(x^2)' },
  { problem: '\\frac{d}{dx}((2x+\\tan 7x)^9)', answer: '9(2+7\\sec^2 7x)(2x+\\tan 7x)^8' },
  { problem: '\\frac{d}{dx}(\\sin^2 x)', answer: '\\sin 2x' },
  { problem: '\\frac{d}{dx}(3\\cos^3 5x)', answer: '-45\\sin 5x\\cos^2 5x' },
  { problem: '\\frac{d}{dx}\\left(\\sqrt{\\sin 2x}\\right)', answer: '\\frac{\\cos 2x}{\\sqrt{\\sin 2x}}' },
], { mode: 'derivative', toleranceDp: 2 });
