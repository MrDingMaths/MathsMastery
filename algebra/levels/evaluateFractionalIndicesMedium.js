// levels/evaluateFractionalIndicesMedium.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'evaluateFractionalIndicesMedium',
    'Fractional Indices (Medium)',
    [
            // Negative fractional indices (reciprocals of roots)
            {problem: "4^{-\\frac{1}{2}}", answer: "\\frac{1}{2}"},
            {problem: "8^{-\\frac{1}{3}}", answer: "\\frac{1}{2}"},
            {problem: "32^{-\\frac{1}{5}}", answer: "\\frac{1}{2}"},
            {problem: "81^{-\\frac{1}{4}}", answer: "\\frac{1}{3}"},
            {problem: "25^{-\\frac{1}{2}}", answer: "\\frac{1}{5}"},
            {problem: "27^{-\\frac{1}{3}}", answer: "\\frac{1}{3}"},
            {problem: "1000^{-\\frac{1}{3}}", answer: "\\frac{1}{10}"},
            {problem: "256^{-\\frac{1}{4}}", answer: "\\frac{1}{4}"},
            {problem: "9^{-\\frac{1}{2}}", answer: "\\frac{1}{3}"},
            {problem: "400^{-\\frac{1}{2}}", answer: "\\frac{1}{20}"},
            {problem: "10000^{-\\frac{1}{4}}", answer: "\\frac{1}{10}"},
            {problem: "64^{-\\frac{1}{6}}", answer: "\\frac{1}{2}"},
            {problem: "729^{-\\frac{1}{6}}", answer: "\\frac{1}{3}"},
            {problem: "16^{-\\frac{1}{2}}", answer: "\\frac{1}{4}"},
            {problem: "125^{-\\frac{1}{3}}", answer: "\\frac{1}{5}"},
            {problem: "36^{-\\frac{1}{2}}", answer: "\\frac{1}{6}"},
            {problem: "49^{-\\frac{1}{2}}", answer: "\\frac{1}{7}"},
            {problem: "512^{-\\frac{1}{3}}", answer: "\\frac{1}{8}"},
            {problem: "243^{-\\frac{1}{5}}", answer: "\\frac{1}{3}"},
            {problem: "1024^{-\\frac{1}{5}}", answer: "\\frac{1}{4}"},
            
            // Fractional powers greater than 1 (compound operations)
            {problem: "27^{\\frac{2}{3}}", answer: "9"},
            {problem: "64^{\\frac{2}{3}}", answer: "16"},
            {problem: "9^{\\frac{3}{2}}", answer: "27"},
            {problem: "16^{\\frac{5}{4}}", answer: "32"},
            {problem: "4^{\\frac{5}{2}}", answer: "32"},
            {problem: "8^{\\frac{2}{3}}", answer: "4"},
            {problem: "32^{\\frac{3}{5}}", answer: "8"},
            {problem: "36^{\\frac{3}{2}}", answer: "216"},
            {problem: "8^{\\frac{4}{3}}", answer: "16"},
            {problem: "27000^{\\frac{2}{3}}", answer: "900"},
            {problem: "27^{\\frac{4}{3}}", answer: "81"},
            {problem: "25^{\\frac{3}{2}}", answer: "125"},
            {problem: "16^{\\frac{3}{2}}", answer: "64"},
            {problem: "100^{\\frac{3}{2}}", answer: "1000"},
            {problem: "49^{\\frac{3}{2}}", answer: "343"},
            
            // Negative bases (odd roots only)
            {problem: "(-125)^{\\frac{1}{3}}", answer: "-5"},
            {problem: "(-32)^{\\frac{1}{5}}", answer: "-2"},
            {problem: "(-8)^{\\frac{1}{3}}", answer: "-2"},
            {problem: "(-27)^{\\frac{1}{3}}", answer: "-3"},
            {problem: "(-64)^{\\frac{1}{3}}", answer: "-4"},
            {problem: "(-216)^{\\frac{1}{3}}", answer: "-6"},
            {problem: "(-343)^{\\frac{1}{3}}", answer: "-7"},
            {problem: "(-512)^{\\frac{1}{3}}", answer: "-8"},
            {problem: "(-729)^{\\frac{1}{3}}", answer: "-9"},
            {problem: "(-1000)^{\\frac{1}{3}}", answer: "-10"},
            
            // Decimal bases (simple cases)
            {problem: "0.25^{\\frac{1}{2}}", answer: "\\frac{1}{2}"},
            {problem: "0.16^{\\frac{1}{2}}", answer: "\\frac{2}{5}"},
            {problem: "0.36^{\\frac{1}{2}}", answer: "\\frac{3}{5}"},
            {problem: "0.64^{\\frac{1}{2}}", answer: "\\frac{4}{5}"},
            {problem: "0.01^{\\frac{1}{2}}", answer: "\\frac{1}{10}"},
            {problem: "0.04^{\\frac{1}{2}}", answer: "\\frac{1}{5}"},
            {problem: "0.09^{\\frac{1}{2}}", answer: "\\frac{3}{10}"},
            {problem: "0.49^{\\frac{1}{2}}", answer: "\\frac{7}{10}"},
            {problem: "0.81^{\\frac{1}{2}}", answer: "\\frac{9}{10}"},
            {problem: "0.0001^{\\frac{1}{2}}", answer: "\\frac{1}{100}"},
            
            // Simple fractional bases
            {problem: "\\left(\\frac{16}{25}\\right)^{\\frac{1}{2}}", answer: "\\frac{4}{5}"},
            {problem: "\\left(\\frac{9}{49}\\right)^{\\frac{1}{2}}", answer: "\\frac{3}{7}"},
            {problem: "\\left(\\frac{4}{81}\\right)^{\\frac{1}{2}}", answer: "\\frac{2}{9}"},
            {problem: "\\left(\\frac{8}{27}\\right)^{\\frac{1}{3}}", answer: "\\frac{2}{3}"},
            {problem: "\\left(\\frac{64}{125}\\right)^{\\frac{1}{3}}", answer: "\\frac{4}{5}"},
            {problem: "\\left(\\frac{16}{81}\\right)^{\\frac{1}{4}}", answer: "\\frac{2}{3}"},
            {problem: "\\left(\\frac{256}{625}\\right)^{\\frac{1}{4}}", answer: "\\frac{4}{5}"},
            {problem: "\\left(\\frac{1000}{343}\\right)^{\\frac{1}{3}}", answer: "\\frac{10}{7}"},
            {problem: "\\left(\\frac{1}{4}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{2}"},
            {problem: "\\left(\\frac{1}{9}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{3}"},
            {problem: "\\left(\\frac{1}{16}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{4}"},
            {problem: "\\left(\\frac{1}{25}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{5}"},
            {problem: "\\left(\\frac{1}{36}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{6}"},
            {problem: "\\left(\\frac{1}{49}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{7}"},
            {problem: "\\left(\\frac{1}{64}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{8}"},
            {problem: "\\left(\\frac{1}{81}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{9}"},
            {problem: "\\left(\\frac{1}{100}\\right)^{\\frac{1}{2}}", answer: "\\frac{1}{10}"},
            
            // Additional cube root fractions
            {problem: "\\left(\\frac{1}{8}\\right)^{\\frac{1}{3}}", answer: "\\frac{1}{2}"},
            {problem: "\\left(\\frac{1}{27}\\right)^{\\frac{1}{3}}", answer: "\\frac{1}{3}"},
            {problem: "\\left(\\frac{1}{64}\\right)^{\\frac{1}{3}}", answer: "\\frac{1}{4}"},
            {problem: "\\left(\\frac{1}{125}\\right)^{\\frac{1}{3}}", answer: "\\frac{1}{5}"},
            {problem: "\\left(\\frac{1}{216}\\right)^{\\frac{1}{3}}", answer: "\\frac{1}{6}"},
            
            // Mixed compound operations
            {problem: "125^{\\frac{4}{3}}", answer: "625"},
            {problem: "243^{\\frac{4}{5}}", answer: "81"},
            
            // Additional problems
            {problem: "(9^3)^{\\frac{1}{2}}", answer: "27"},
            {problem: "0.008^{\\frac{1}{3}}", answer: "\\frac{1}{5}"},
            {problem: "\\left(\\frac{1}{343}\\right)^{\\frac{1}{3}}", answer: "\\frac{1}{7}"},
            {problem: "64^{\\frac{5}{6}}", answer: "32"}
        ]
);
