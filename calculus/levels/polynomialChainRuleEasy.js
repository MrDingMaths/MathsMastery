import { BaseLevel } from './BaseLevel.js';

export default new BaseLevel('polynomialChainRuleEasy', 'Polynomial Chain Rule — Easy', [
  // §3.1 Set 1
  { problem: '\\frac{d}{dx}((2x+1)^3)', answer: '6(2x+1)^2' },
  { problem: '\\frac{d}{dx}((3x+1)^3)', answer: '9(3x+1)^2' },
  { problem: '\\frac{d}{dx}((4x+1)^3)', answer: '12(4x+1)^2' },
  { problem: '\\frac{d}{dx}((5x+1)^3)', answer: '15(5x+1)^2' },
  { problem: '\\frac{d}{dx}\\left(\\left(\\frac{x}{5}+1\\right)^3\\right)', answer: '\\frac{3}{5}\\left(\\frac{x}{5}+1\\right)^2' },
  // §3.1 Set 2
  { problem: '\\frac{d}{dx}((3x+2)^2)', answer: '6(3x+2)' },
  { problem: '\\frac{d}{dx}((3x+2)^3)', answer: '9(3x+2)^2' },
  { problem: '\\frac{d}{dx}((3x+2)^4)', answer: '12(3x+2)^3' },
  { problem: '\\frac{d}{dx}((3x+2)^5)', answer: '15(3x+2)^4' },
  { problem: '\\frac{d}{dx}((3x+2)^{-5})', answer: '-15(3x+2)^{-6}' },
  // §3.1 Set 3
  { problem: '\\frac{d}{dx}((2x+1)^4)', answer: '8(2x+1)^3' },
  { problem: '\\frac{d}{dx}((2x+3)^4)', answer: '8(2x+3)^3' },
  { problem: '\\frac{d}{dx}((2x+5)^4)', answer: '8(2x+5)^3' },
  { problem: '\\frac{d}{dx}((2x-5)^4)', answer: '8(2x-5)^3' },
  { problem: '\\frac{d}{dx}((2x-5)^4+3)', answer: '8(2x-5)^3' },
  // §3.1 Set 4 (skip a — duplicate of Set 1a)
  { problem: '\\frac{d}{dx}(2(2x+1)^3)', answer: '12(2x+1)^2' },
  { problem: '\\frac{d}{dx}(3(2x+1)^3)', answer: '18(2x+1)^2' },
  { problem: '\\frac{d}{dx}(-3(2x+1)^3)', answer: '-18(2x+1)^2' },
  { problem: '\\frac{d}{dx}\\left(\\frac{(2x+1)^3}{4}\\right)', answer: '\\frac{3}{2}(2x+1)^2' },
  // §3.2 — linear inner functions (a,b,g,h,i,j)
  { problem: '\\frac{d}{dx}((3x+7)^4)', answer: '12(3x+7)^3' },
  { problem: '\\frac{d}{dx}((5-4x)^7)', answer: '-28(5-4x)^6' },
  { problem: '\\frac{d}{dx}((5x-7)^5)', answer: '25(5x-7)^4' },
  { problem: '\\frac{d}{dx}((7x+3)^7)', answer: '49(7x+3)^6' },
  { problem: '\\frac{d}{dx}(9(5x+3)^4)', answer: '180(5x+3)^3' },
  { problem: '\\frac{d}{dx}((4-3x)^7)', answer: '-21(4-3x)^6' },
  // §3.4 — added/subtracted constant outside (linear inner; migrated from Medium)
  { problem: '\\frac{d}{dx}(4+(x-5)^6)', answer: '6(x-5)^5' },
  { problem: '\\frac{d}{dx}(24-7(x-5)^2)', answer: '-14(x-5)' },
  // §3.8 — more linear inner functions for variety
  { problem: '\\frac{d}{dx}((4x-3)^5)', answer: '20(4x-3)^4' },
  { problem: '\\frac{d}{dx}((6x+1)^3)', answer: '18(6x+1)^2' },
  { problem: '\\frac{d}{dx}((1-2x)^6)', answer: '-12(1-2x)^5' },
  { problem: '\\frac{d}{dx}(5(2x-1)^4)', answer: '40(2x-1)^3' },
  { problem: '\\frac{d}{dx}((3x-7)^6)', answer: '18(3x-7)^5' },
  { problem: '\\frac{d}{dx}(-2(5-x)^4)', answer: '8(5-x)^3' },
  { problem: '\\frac{d}{dx}((x-1)^6)', answer: '6(x-1)^5' },
], { mode: 'derivative', toleranceDp: 2 });
