import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('logarithmicDiffHard', 'Logarithmic Functions — Hard', [
  { problem: '\\frac{d}{dx}((\\ln x)^3)', answer: '\\frac{3(\\ln x)^2}{x}' },
  { problem: '\\frac{d}{dx}\\left(\\ln\\left(\\frac{1+x}{1-x}\\right)\\right)', answer: '\\frac{1}{1+x}+\\frac{1}{1-x}' },
  { problem: '\\frac{d}{dx}\\left(\\ln(\\sqrt{2-x})\\right)', answer: '-\\frac{1}{2(2-x)}' },
  { problem: '\\frac{d}{dx}((\\ln x)^4)', answer: '\\frac{4(\\ln x)^3}{x}' },
  { problem: '\\frac{d}{dx}((2\\ln x-3)^4)', answer: '\\frac{8(2\\ln x-3)^3}{x}' },
  { problem: '\\frac{d}{dx}\\left(\\frac{1}{\\ln x}\\right)', answer: '-\\frac{1}{x(\\ln x)^2}' },
  { problem: '\\frac{d}{dx}(\\ln(\\ln x))', answer: '\\frac{1}{x\\ln x}' },
  { problem: '\\frac{d}{dx}((\\ln x+x)^5)', answer: '\\frac{5(1+x)(\\ln x+x)^4}{x}' },
  { problem: '\\frac{d}{dx}(\\ln(5x+1)+x^2)', answer: '\\frac{10x^2+2x+5}{5x+1}' },
  { problem: '\\frac{d}{dx}((x^2+\\ln x)^6)', answer: '6\\left(2x+\\frac{1}{x}\\right)(x^2+\\ln x)^5' },
  { problem: '\\frac{d}{dx}\\left(\\ln\\left(\\frac{4x+1}{2x-7}\\right)\\right)', answer: '-\\frac{30}{(4x+1)(2x-7)}' },
], { mode: 'derivative', toleranceDp: 2 });
