import { BaseLevel } from './BaseLevel.js';
const Q = (problem, x) => ({ problem, inputs: { vars: ['x'] }, answer: { x } });
export default new BaseLevel('exponentialNoLogsMedium', 'Exponential Equations (No Logs) (Medium)', [
    // Base conversion â€” different powers of same base
    Q('8^{x}=16', '4/3'),
    Q('25^{x}=125', '3/2'),
    Q('81^{x}=9', '1/2'),
    Q('32^{x}=2', '1/5'),
    Q('10000^{x}=10', '1/4'),
    Q('7^{-x}=49', '-2'),
    Q('4^{-x}=256', '-4'),
    Q('16^{-x}=64', '-3/2'),
    Q('25^{-x}=125', '-3/2'),
    // Fraction bases
    Q('\\left(\\frac{3}{4}\\right)^{x}=\\frac{4}{3}', '-1'),
    Q('\\left(\\frac{2}{3}\\right)^{x}=\\frac{9}{4}', '-2'),
    Q('\\left(\\frac{2}{5}\\right)^{x}=\\frac{125}{8}', '-3'),
    Q('\\frac{1}{2^{x}}=8', '-3'),
    Q('\\frac{1}{3^{x}}=81', '-4'),
    // Linear exponent, two different bases
    Q('7^{x+9}=49', '-7'),
    Q('2^{x+1}=8^{x}', '1/2'),
    Q('9^{x+12}=81^{x+5}', '2'),
    Q('27^{x+3}=9^{2x}', '9'),
    Q('9^{x-1}=27^{2x-6}', '4'),
    Q('6^{2x-6}=1', '3'),
    Q('11^{3x-1}=11', '2/3'),
    // Surd RHS
    Q('3^{x}=\\sqrt{81}', '2'),
    Q('6^{x}=\\sqrt[3]{36}', '2/3'),
    Q('4^{x}=\\sqrt[4]{64}', '3/4'),
    Q('3^{x}=\\sqrt[9]{27}', '1/3'),
    Q('25^{x}=\\sqrt[5]{125}', '3/10'),
    Q('9^{x}=\\frac{1}{\\sqrt[3]{27}}', '-1/2'),
    // (1/n)^x forms
    Q('\\left(\\frac{1}{3}\\right)^{x}=\\frac{1}{81}', '4'),
    Q('\\left(\\frac{1}{3}\\right)^{x}=81', '-4'),
    Q('\\left(\\frac{1}{3}\\right)^{x}=27', '-3'),
    Q('\\left(\\frac{1}{3}\\right)^{x}=\\frac{1}{27}', '3'),
    Q('\\left(\\frac{1}{4}\\right)^{x}=64', '-3'),
    Q('\\left(\\frac{1}{4}\\right)^{x}=256', '-4'),
    Q('\\left(\\frac{1}{4}\\right)^{x}=\\frac{1}{256}', '4'),
    Q('\\left(\\frac{5}{25}\\right)^{x}=625', '-4'),
    // Linear exponent, simple
    Q('5^{x-1}=\\frac{1}{25}', '-1'),
    Q('3^{x-3}=\\frac{1}{9}', '1'),
    Q('10^{x-5}=\\frac{1}{1000}', '2'),
    // Decimal bases
    Q('(0.25)^{x}=0.5', '1/2'),
    Q('(0.04)^{x}=125', '-3/2'),
    Q('(0.0625)^{x+1}=\\frac{1}{2}', '-3/4'),
    // Product of exponentials (simple)
    Q('3^{x}\\times 9^{x}=27', '1'),
    Q('16^{-x}=\\frac{1}{32}', '5/4'),
    Q('8^{x}=4^{x+1}', '2'),
    // M1 series â€” medium
    Q('15^{x}=\\sqrt{15}', '1/2'),
    Q('15^{x}=\\frac{1}{\\sqrt{15}}', '-1/2'),
    Q('7^{x}=7\\sqrt{7}', '3/2'),
    Q('49^{x}=7', '1/2'),
    Q('3^{x}=\\sqrt[3]{9}', '2/3'),
    Q('7^{x}=\\frac{1}{\\sqrt{7}}', '-1/2'),
    Q('6^{x}=6\\sqrt{6}', '3/2'),
    Q('2^{5-2x}=\\frac{1}{4}', '7/2'),
    Q('\\left(\\frac{1}{3}\\right)^{x+1}=27', '-4'),
    Q('10^{x}\\times 100^{x}=0.001', '-1'),
    // Decimal RHS (requires converting decimal to fraction before matching bases)
    Q('10^{x}=0.0001', '-4'),
    Q('2^{x}=0.125', '-3'),
    Q('5^{x}=0.00032', '-5'),
    Q('5^{x}=0.2', '-1'),
]);
