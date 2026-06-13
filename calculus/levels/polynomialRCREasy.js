import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialRCREasy', 'Polynomial Reverse Chain Rule — Easy', [
  { problem: '\\int(2x+7)^4\\,dx', answer: '\\frac{(2x+7)^5}{10}+C' },
  { problem: '\\int(4-3x)^6\\,dx', answer: '-\\frac{(4-3x)^7}{21}+C' },
  { problem: '\\int(x+1)^5\\,dx', answer: '\\frac{(x+1)^6}{6}+C' },
  { problem: '\\int(x+2)^3\\,dx', answer: '\\frac{(x+2)^4}{4}+C' },
  { problem: '\\int(4-x)^4\\,dx', answer: '-\\frac{(4-x)^5}{5}+C' },
  { problem: '\\int(3-x)^2\\,dx', answer: '-\\frac{(3-x)^3}{3}+C' },
  { problem: '\\int(3x+1)^4\\,dx', answer: '\\frac{(3x+1)^5}{15}+C' },
  { problem: '\\int(4x-3)^7\\,dx', answer: '\\frac{(4x-3)^8}{32}+C' },
  { problem: '\\int(5-2x)^6\\,dx', answer: '-\\frac{(5-2x)^7}{14}+C' },
  { problem: '\\int(1-5x)^7\\,dx', answer: '-\\frac{(1-5x)^8}{40}+C' },
  { problem: '\\int(2x+9)^{11}\\,dx', answer: '\\frac{(2x+9)^{12}}{24}+C' },
  { problem: '\\int 3(2x-1)^{10}\\,dx', answer: '\\frac{3(2x-1)^{11}}{22}+C' },
  { problem: '\\int 4(5x-4)^6\\,dx', answer: '\\frac{4(5x-4)^7}{35}+C' },
  { problem: '\\int 7(3-2x)^3\\,dx', answer: '-\\frac{7(3-2x)^4}{8}+C' },
], { mode: 'integral', toleranceDp: 2 });
