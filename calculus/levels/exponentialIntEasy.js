import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('exponentialIntEasy', 'Exponentials — Easy', [
  { problem: '\\int e^{2x}\\,dx', answer: '\\frac{1}{2}e^{2x}+C' },
  { problem: '\\int e^{3x}\\,dx', answer: '\\frac{1}{3}e^{3x}+C' },
  { problem: '\\int e^{\\frac{x}{3}}\\,dx', answer: '3e^{\\frac{x}{3}}+C' },
  { problem: '\\int e^{\\frac{x}{2}}\\,dx', answer: '2e^{\\frac{x}{2}}+C' },
  { problem: '\\int 10e^{2x}\\,dx', answer: '5e^{2x}+C' },
  { problem: '\\int 12e^{3x}\\,dx', answer: '4e^{3x}+C' },
  { problem: '\\int e^{4x+5}\\,dx', answer: '\\frac{1}{4}e^{4x+5}+C' },
  { problem: '\\int e^{4x-2}\\,dx', answer: '\\frac{1}{4}e^{4x-2}+C' },
  { problem: '\\int 6e^{3x+2}\\,dx', answer: '2e^{3x+2}+C' },
  { problem: '\\int 4e^{4x+3}\\,dx', answer: 'e^{4x+3}+C' },
  { problem: '\\int e^{7-2x}\\,dx', answer: '-\\frac{1}{2}e^{7-2x}+C' },
  { problem: '\\int\\frac{1}{2}e^{1-3x}\\,dx', answer: '-\\frac{1}{6}e^{1-3x}+C' },
], { mode: 'integral' });
