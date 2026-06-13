import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigIntEasy', 'Trigonometric — Easy', [
  { problem: '\\int\\sec^2 x\\,dx', answer: '\\tan x+C' },
  { problem: '\\int\\cos x\\,dx', answer: '\\sin x+C' },
  { problem: '\\int\\sin x\\,dx', answer: '-\\cos x+C' },
  { problem: '\\int(-\\sin x)\\,dx', answer: '\\cos x+C' },
  { problem: '\\int 2\\cos x\\,dx', answer: '2\\sin x+C' },
  { problem: '\\int\\cos 2x\\,dx', answer: '\\frac{1}{2}\\sin 2x+C' },
  { problem: '\\int\\frac{1}{2}\\cos x\\,dx', answer: '\\frac{1}{2}\\sin x+C' },
  { problem: '\\int\\cos\\frac{x}{2}\\,dx', answer: '2\\sin\\frac{x}{2}+C' },
  { problem: '\\int\\sin 2x\\,dx', answer: '-\\frac{1}{2}\\cos 2x+C' },
  { problem: '\\int\\sec^2(5x)\\,dx', answer: '\\frac{1}{5}\\tan(5x)+C' },
  { problem: '\\int\\cos 3x\\,dx', answer: '\\frac{1}{3}\\sin 3x+C' },
  { problem: '\\int\\sec^2\\frac{x}{3}\\,dx', answer: '3\\tan\\frac{x}{3}+C' },
  { problem: '\\int\\sin\\frac{x}{2}\\,dx', answer: '-2\\cos\\frac{x}{2}+C' },
  { problem: '\\int\\left(-\\cos\\frac{x}{5}\\right)\\,dx', answer: '-5\\sin\\frac{x}{5}+C' },
  { problem: '\\int(-4\\sin 2x)\\,dx', answer: '2\\cos 2x+C' },
  { problem: '\\int\\frac{1}{4}\\sin\\frac{x}{4}\\,dx', answer: '-\\cos\\frac{x}{4}+C' },
  { problem: '\\int 12\\sec^2\\frac{x}{3}\\,dx', answer: '36\\tan\\frac{x}{3}+C' },
  { problem: '\\int 2\\cos\\frac{x}{3}\\,dx', answer: '6\\sin\\frac{x}{3}+C' },
  { problem: '\\int\\sin(5x)\\,dx', answer: '-\\frac{1}{5}\\cos(5x)+C' },
], { mode: 'integral', toleranceDp: 2 });
