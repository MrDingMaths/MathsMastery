import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('trigIntHard', 'Trigonometric — Hard', [
  { problem: '\\int_{\\pi}^{2\\pi}\\sin\\frac{x}{4}\\,dx', answer: '2\\sqrt{2}' },
  { problem: '\\int_{\\pi}^{2\\pi}\\cos\\left(3x+\\frac{\\pi}{2}\\right)\\,dx', answer: '\\frac{2}{3}' },
], { mode: 'integral', toleranceDp: 2 });
