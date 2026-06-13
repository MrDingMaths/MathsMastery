import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigDiffEasy', 'Trigonometric Functions — Easy', [
  { problem: '\\frac{d}{dx}(\\sin x)', answer: '\\cos x' },
  { problem: '\\frac{d}{dx}(\\cos x)', answer: '-\\sin x' },
  { problem: '\\frac{d}{dx}(\\tan x)', answer: '\\sec^2 x' },
  { problem: '\\frac{d}{dx}(2\\sin x)', answer: '2\\cos x' },
  { problem: '\\frac{d}{dx}(3\\cos x)', answer: '-3\\sin x' },
  { problem: '\\frac{d}{dx}(3\\sin x)', answer: '3\\cos x' },
  { problem: '\\frac{d}{dx}(5\\cos x)', answer: '-5\\sin x' },
  { problem: '\\frac{d}{dx}(5\\sin x)', answer: '5\\cos x' },
  { problem: '\\frac{d}{dx}(3-2\\sin x)', answer: '-2\\cos x' },
  { problem: '\\frac{d}{dx}(-9\\cos x)', answer: '9\\sin x' },
  { problem: '\\frac{d}{dx}(\\sin x-\\cos x)', answer: '\\cos x+\\sin x' },
  { problem: '\\frac{d}{dx}(7\\cos x)', answer: '-7\\sin x' },
  { problem: '\\frac{d}{dx}(-7\\sin x)', answer: '-7\\cos x' },
  { problem: '\\frac{d}{dx}(4-\\tan x)', answer: '-\\sec^2 x' },
  { problem: '\\frac{d}{dx}(\\cos x+\\tan x)', answer: '-\\sin x+\\sec^2 x' },
  { problem: '\\frac{d}{dx}(4\\tan x)', answer: '4\\sec^2 x' },
  { problem: '\\frac{d}{dx}(\\sec x)', answer: '\\sec x\\tan x' },
  { problem: '\\frac{d}{dx}(\\csc x)', answer: '-\\csc x\\cot x' },
  { problem: '\\frac{d}{dx}(\\cot x)', answer: '-\\csc^2 x' },
], { mode: 'derivative', toleranceDp: 2 });
