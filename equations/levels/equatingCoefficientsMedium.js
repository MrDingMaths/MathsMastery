import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel('equatingCoefficientsMedium', 'Equating Coefficients (Medium)', [
    // existing
    { problem: '(x-2)^2+x+a(x+b)=x^2+1',               inputs: { vars: ['a', 'b'] }, answer: { a: '3',  b: '-1' } },
    // Pattern A: (x+p)²+a(x+b)=known  —  find a from x-coeff, then substitute into const for b
    { problem: '(x+2)^2+a(x+b)=x^2+5x+1',              inputs: { vars: ['a', 'b'] }, answer: { a: '1',  b: '-3' } },
    { problem: '(x+3)^2+a(x+b)=x^2+7x+1',              inputs: { vars: ['a', 'b'] }, answer: { a: '1',  b: '-8' } },
    { problem: '(x+1)^2+a(x+b)=x^2+4x-3',              inputs: { vars: ['a', 'b'] }, answer: { a: '2',  b: '-2' } },
    { problem: '(x-2)^2+a(x+b)=x^2+x-1',               inputs: { vars: ['a', 'b'] }, answer: { a: '5',  b: '-1' } },
    { problem: '(x+4)^2+a(x+b)=x^2+2x+4',              inputs: { vars: ['a', 'b'] }, answer: { a: '-6', b: '2'  } },
    { problem: '(x+1)^2+a(x+b)=x^2+7x-14',             inputs: { vars: ['a', 'b'] }, answer: { a: '5',  b: '-3' } },
    { problem: '(x+3)^2+a(x+b)=x^2+8x+1',              inputs: { vars: ['a', 'b'] }, answer: { a: '2',  b: '-4' } },
    { problem: '(x+5)^2+a(x+b)=x^2+6x+13',             inputs: { vars: ['a', 'b'] }, answer: { a: '-4', b: '3'  } },
    { problem: '(x-3)^2+a(x+b)=x^2+2x+17',             inputs: { vars: ['a', 'b'] }, answer: { a: '8',  b: '1'  } },
    { problem: '(x-1)^2+a(x+b)=x^2+x+13',              inputs: { vars: ['a', 'b'] }, answer: { a: '3',  b: '4'  } },
    { problem: '(x+2)^2+a(x+b)=x^2+10x+22',            inputs: { vars: ['a', 'b'] }, answer: { a: '6',  b: '3'  } },
    { problem: '(x+3)^2+a(x+b)=x^2+9x+3',              inputs: { vars: ['a', 'b'] }, answer: { a: '3',  b: '-2' } },
    { problem: '(x+4)^2+a(x+b)=x^2+5x+10',             inputs: { vars: ['a', 'b'] }, answer: { a: '-3', b: '2'  } },
    { problem: '(x-2)^2+a(x+b)=x^2+2x+16',             inputs: { vars: ['a', 'b'] }, answer: { a: '6',  b: '2'  } },
    { problem: '(x-3)^2+a(x+b)=x^2-2x+21',             inputs: { vars: ['a', 'b'] }, answer: { a: '4',  b: '3'  } },
    { problem: '(x+6)^2+a(x+b)=x^2+8x+44',             inputs: { vars: ['a', 'b'] }, answer: { a: '-4', b: '-2' } },
    { problem: '(x+4)^2+a(x+b)=x^2+10x+6',             inputs: { vars: ['a', 'b'] }, answer: { a: '2',  b: '-5' } },
    { problem: '(x+4)^2+a(x+b)=x^2+3x+1',              inputs: { vars: ['a', 'b'] }, answer: { a: '-5', b: '3'  } },
    // Pattern B: (x+a)(x+p)+q(x+b)=known  —  find a from x-coeff, then b from const
    { problem: '(x+a)(x+3)+2(x+b)=x^2+9x+10',          inputs: { vars: ['a', 'b'] }, answer: { a: '4',  b: '-1' } },
    { problem: '(x+a)(x+3)+2(x+b)=x^2+7x+12',          inputs: { vars: ['a', 'b'] }, answer: { a: '2',  b: '3'  } },
    { problem: '(x+a)(x-2)+3(x+b)=x^2+6x-4',           inputs: { vars: ['a', 'b'] }, answer: { a: '5',  b: '2'  } },
    { problem: '(x+a)(x-2)+3(x+b)=x^2+4x-3',           inputs: { vars: ['a', 'b'] }, answer: { a: '3',  b: '1'  } },
    { problem: '(x+a)(x+4)-(x+b)=x^2+5x+5',            inputs: { vars: ['a', 'b'] }, answer: { a: '2',  b: '3'  } },
    { problem: '(x+a)(x+1)+4(x+b)=x^2+8x+11',          inputs: { vars: ['a', 'b'] }, answer: { a: '3',  b: '2'  } },
    { problem: '(x+a)(x+5)-2(x+b)=x^2+6x+7',           inputs: { vars: ['a', 'b'] }, answer: { a: '3',  b: '4'  } },
    // Pattern C: a or bracket coefficient unknown, sequential solve
    { problem: '2(x+a)^2+(x+b)=2x^2+9x+11',            inputs: { vars: ['a', 'b'] }, answer: { a: '2',  b: '3'  } },
    { problem: '3(x+a)^2+(x+b)=3x^2+13x+17',           inputs: { vars: ['a', 'b'] }, answer: { a: '2',  b: '5'  } },
    { problem: '(x+a)^2+2(x+b)=x^2+8x+7',              inputs: { vars: ['a', 'b'] }, answer: { a: '3',  b: '-1' } },
    { problem: '(x+a)^2+4(x+b)=x^2+14x+21',            inputs: { vars: ['a', 'b'] }, answer: { a: '5',  b: '-1' } },
]);
