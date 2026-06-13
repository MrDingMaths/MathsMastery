import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('rationalIntEasy', 'Rational — Easy', [
  { problem: '\\int\\frac{2}{x}\\,dx', answer: '2\\ln|x|+C' },
  { problem: '\\int\\frac{1}{3x}\\,dx', answer: '\\frac{1}{3}\\ln|x|+C' },
  { problem: '\\int\\frac{4}{5x}\\,dx', answer: '\\frac{4}{5}\\ln|x|+C' },
  { problem: '\\int\\frac{3}{2x}\\,dx', answer: '\\frac{3}{2}\\ln|x|+C' },
  { problem: '\\int\\frac{1}{4x+1}\\,dx', answer: '\\frac{1}{4}\\ln|4x+1|+C' },
  { problem: '\\int\\frac{1}{5x-3}\\,dx', answer: '\\frac{1}{5}\\ln|5x-3|+C' },
  { problem: '\\int\\frac{6}{3x+2}\\,dx', answer: '2\\ln|3x+2|+C' },
  { problem: '\\int\\frac{15}{5x+1}\\,dx', answer: '3\\ln|5x+1|+C' },
  { problem: '\\int\\frac{4}{4x+3}\\,dx', answer: '\\ln|4x+3|+C' },
  { problem: '\\int\\frac{1}{3-x}\\,dx', answer: '-\\ln|3-x|+C' },
  { problem: '\\int\\frac{1}{7-2x}\\,dx', answer: '-\\frac{1}{2}\\ln|7-2x|+C' },
  { problem: '\\int\\frac{4}{5x-1}\\,dx', answer: '\\frac{4}{5}\\ln|5x-1|+C' },
  { problem: '\\int\\frac{12}{1-3x}\\,dx', answer: '-4\\ln|1-3x|+C' },
  { problem: '\\int\\frac{3}{5x+7}\\,dx', answer: '\\frac{3}{5}\\ln|5x+7|+C' },
], { mode: 'integral', toleranceDp: 2 });
