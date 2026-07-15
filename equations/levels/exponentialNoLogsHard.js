import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
const Q2 = (eq1, eq2, x, y) => ({ problem: [eq1, eq2], inputs: { vars: ['x', 'y'] }, answer: { x, y } });
export default new BaseLevel('exponentialNoLogsHard', 'Exponential Equations (No Logs) (Hard)', [
    // Two-base equations with fraction answers
    Q('32^{2x+3}=128^{2x}', '15/4'),
    Q('25^{x+3}=125^{3x}', '6/7'),
    Q('27^{2x+3}=9^{2x-1}', '-11/2'),
    Q('49^{2x-3}=343^{2x-1}', '-3/2'),
    Q('8^{5x-1}=\\frac{1}{2}', '2/15'),
    // Linear exponent with fraction base, complex RHS
    Q('\\left(\\frac{3}{4}\\right)^{2x+1}=\\frac{64}{27}', '-2'),
    Q('\\left(\\frac{2}{5}\\right)^{3x-5}=\\frac{25}{4}', '1'),
    Q('\\left(\\frac{3}{2}\\right)^{3x+2}=\\frac{16}{81}', '-2'),
    Q('\\left(\\frac{7}{4}\\right)^{1-x}=\\frac{4}{7}', '2'),
    Q('3^{2x-1}=\\frac{1}{81}', '-3/2'),
    Q('7^{2x+3}=\\frac{1}{49}', '-5/2'),
    // Two-base cross matching
    Q('2^{3x-3}=8^{2-x}', '3/2'),
    Q('3^{-4x}=9^{6-x}', '-6'),
    // Products and quotients of exponentials
    Q('5^{3x}\\times 25^{-2x+1}=125', '-1'),
    Q('2^{-3x}\\times 4^{2x-2}=16', '8'),
    Q('16^{2-x}=\\frac{1}{8^{x}}', '8'),
    Q('\\frac{3^{x-2}}{9^{1-x}}=9', '2'),
    Q('\\frac{5^{3x-3}}{25^{x-3}}=125', '0'),
    Q('\\frac{36^{3+2x}}{6^{x}}=1', '-2'),
    // Complex combinations
    Q('\\left(\\frac{1}{5}\\right)^{x+1}=\\left(\\frac{1}{125}\\right)^{x-1}', '2'),
    Q('\\sqrt{2^{4x}\\times 4^{2x}\\times 8^{4x}}=256^{x}', '0'),
    // M1 hard series
    Q('121^{x}\\times\\sqrt[3]{11}=1331', '4/3'),
    Q('\\frac{\\sqrt[3]{5}}{5}=5^{x}', '-2/3'),
    Q('\\left(\\frac{1}{36}\\right)^{5x+8}=216', '-19/10'),
    Q('\\left(\\frac{1}{8}\\right)^{1-2x}=128^{x}', '-3'),
    Q('\\left(\\frac{25}{\\sqrt[3]{5}}\\right)^{\\frac{x}{2}}=5', '6/5'),
    Q('1000=\\frac{100^{x}}{\\sqrt[5]{10^{x}}}', '5/3'),
    Q('\\frac{9^{x}}{27^{5-x}}=\\sqrt{243}', '7/2'),
    Q('\\frac{\\sqrt[3]{5^{x}}}{\\sqrt{5}}=25^{4}', '51/2'),
    // Simultaneous exponential systems
    Q2('7^{2x-y}=49', '2^{x+y}=128', '3', '4'),
    Q2('8^{x}\\div 4^{y}=4', '11^{y-x}=\\frac{1}{11}', '0', '-1'),
    Q2('13^{x+4y}=1', '25^{x+5y}=5', '-2', '1/2'),
    Q2('2^{x}+3^{y}=17', '2^{x+1}-3^{y+1}=-11', '3', '2'),
]);
