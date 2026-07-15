// levels/evaluateFractionalIndicesHard.js
import { BaseLevel } from './BaseLevel.js';
export default new BaseLevel(
    'evaluateFractionalIndicesHard',
    'Fractional Indices (Hard)',
    [
            // Complex fractional bases with positive fractional indices
            {problem: "\\left(\\frac{1}{9}\\right)^{\\frac{3}{2}}", answer: "\\frac{1}{27}"},
            {problem: "\\left(\\frac{4}{25}\\right)^{\\frac{3}{2}}", answer: "\\frac{8}{125}"},
            {problem: "\\left(\\frac{27}{1000}\\right)^{\\frac{4}{3}}", answer: "\\frac{81}{10000}"},
            {problem: "\\left(\\frac{1}{16}\\right)^{\\frac{3}{2}}", answer: "\\frac{1}{64}"},
            {problem: "\\left(\\frac{1}{25}\\right)^{\\frac{3}{2}}", answer: "\\frac{1}{125}"},
            {problem: "\\left(\\frac{1}{36}\\right)^{\\frac{3}{2}}", answer: "\\frac{1}{216}"},
            {problem: "\\left(\\frac{1}{49}\\right)^{\\frac{3}{2}}", answer: "\\frac{1}{343}"},
            {problem: "\\left(\\frac{1}{64}\\right)^{\\frac{5}{6}}", answer: "\\frac{1}{32}"},
            {problem: "\\left(\\frac{1}{81}\\right)^{\\frac{3}{4}}", answer: "\\frac{1}{27}"},
            {problem: "\\left(\\frac{1}{100}\\right)^{\\frac{3}{2}}", answer: "\\frac{1}{1000}"},
            
            // Negative fractional powers (reciprocals of fractional powers)
            {problem: "27^{-\\frac{2}{3}}", answer: "\\frac{1}{9}"},
            {problem: "25^{-\\frac{3}{2}}", answer: "\\frac{1}{125}"},
            {problem: "64^{-\\frac{2}{3}}", answer: "\\frac{1}{16}"},
            {problem: "625^{-\\frac{3}{4}}", answer: "\\frac{1}{125}"},
            {problem: "16^{-\\frac{3}{2}}", answer: "\\frac{1}{64}"},
            {problem: "36^{-\\frac{3}{2}}", answer: "\\frac{1}{216}"},
            {problem: "49^{-\\frac{3}{2}}", answer: "\\frac{1}{343}"},
            {problem: "100^{-\\frac{3}{2}}", answer: "\\frac{1}{1000}"},
            {problem: "256^{-\\frac{3}{4}}", answer: "\\frac{1}{64}"},
            
            // Negative fractional indices with fractional bases (reciprocals)
            {problem: "\\left(\\frac{9}{4}\\right)^{-\\frac{1}{2}}", answer: "\\frac{2}{3}"},
            {problem: "\\left(\\frac{49}{144}\\right)^{-\\frac{1}{2}}", answer: "\\frac{12}{7}"},
            {problem: "\\left(\\frac{8}{125}\\right)^{-\\frac{1}{3}}", answer: "\\frac{5}{2}"},
            {problem: "\\left(\\frac{1296}{625}\\right)^{-\\frac{1}{4}}", answer: "\\frac{5}{6}"},
            {problem: "\\left(\\frac{8}{27}\\right)^{-\\frac{1}{3}}", answer: "\\frac{3}{2}"},
            {problem: "\\left(\\frac{16}{25}\\right)^{-\\frac{1}{2}}", answer: "\\frac{5}{4}"},
            {problem: "\\left(\\frac{25}{36}\\right)^{-\\frac{1}{2}}", answer: "\\frac{6}{5}"},
            {problem: "\\left(\\frac{36}{49}\\right)^{-\\frac{1}{2}}", answer: "\\frac{7}{6}"},
            {problem: "\\left(\\frac{49}{64}\\right)^{-\\frac{1}{2}}", answer: "\\frac{8}{7}"},
            {problem: "\\left(\\frac{64}{81}\\right)^{-\\frac{1}{2}}", answer: "\\frac{9}{8}"},
            {problem: "\\left(\\frac{81}{100}\\right)^{-\\frac{1}{2}}", answer: "\\frac{10}{9}"},
            {problem: "\\left(\\frac{100}{121}\\right)^{-\\frac{1}{2}}", answer: "\\frac{11}{10}"},
            {problem: "\\left(\\frac{121}{144}\\right)^{-\\frac{1}{2}}", answer: "\\frac{12}{11}"},
            {problem: "\\left(\\frac{144}{169}\\right)^{-\\frac{1}{2}}", answer: "\\frac{13}{12}"},
            {problem: "\\left(\\frac{169}{196}\\right)^{-\\frac{1}{2}}", answer: "\\frac{14}{13}"},
            
            // Complex compound operations with fractional bases
            {problem: "\\left(\\frac{8}{27}\\right)^{\\frac{4}{3}}", answer: "\\frac{16}{81}"},
            {problem: "\\left(\\frac{27}{8}\\right)^{-\\frac{4}{3}}", answer: "\\frac{16}{81}"},
            {problem: "\\left(\\frac{4}{9}\\right)^{\\frac{5}{2}}", answer: "\\frac{32}{243}"},
            {problem: "\\left(\\frac{1}{4}\\right)^{\\frac{5}{2}}", answer: "\\frac{1}{32}"},
            {problem: "\\left(\\frac{1}{9}\\right)^{\\frac{5}{2}}", answer: "\\frac{1}{243}"},
            {problem: "\\left(\\frac{1}{16}\\right)^{\\frac{5}{4}}", answer: "\\frac{1}{32}"},
            {problem: "\\left(\\frac{1}{32}\\right)^{\\frac{6}{5}}", answer: "\\frac{1}{64}"},
            
            // Challenging negative fractional powers with fractional bases
            {problem: "\\left(\\frac{4}{9}\\right)^{-\\frac{3}{2}}", answer: "\\frac{27}{8}"},
            {problem: "\\left(\\frac{9}{16}\\right)^{-\\frac{3}{2}}", answer: "\\frac{64}{27}"},
            {problem: "\\left(\\frac{16}{25}\\right)^{-\\frac{3}{2}}", answer: "\\frac{125}{64}"},
            {problem: "\\left(\\frac{25}{36}\\right)^{-\\frac{3}{2}}", answer: "\\frac{216}{125}"},
            {problem: "\\left(\\frac{36}{49}\\right)^{-\\frac{3}{2}}", answer: "\\frac{343}{216}"},
            {problem: "\\left(\\frac{49}{64}\\right)^{-\\frac{3}{2}}", answer: "\\frac{512}{343}"},
            
            // Advanced cube and fourth root operations
            {problem: "\\left(\\frac{8}{125}\\right)^{-\\frac{2}{3}}", answer: "\\frac{25}{4}"},
            {problem: "\\left(\\frac{27}{64}\\right)^{-\\frac{2}{3}}", answer: "\\frac{16}{9}"},
            {problem: "\\left(\\frac{64}{216}\\right)^{-\\frac{2}{3}}", answer: "\\frac{9}{4}"},
            {problem: "\\left(\\frac{125}{343}\\right)^{-\\frac{2}{3}}", answer: "\\frac{49}{25}"},
            {problem: "\\left(\\frac{216}{512}\\right)^{-\\frac{2}{3}}", answer: "\\frac{16}{9}"},
            {problem: "\\left(\\frac{343}{729}\\right)^{-\\frac{2}{3}}", answer: "\\frac{81}{49}"},
            {problem: "\\left(\\frac{512}{1000}\\right)^{-\\frac{2}{3}}", answer: "\\frac{25}{16}"},
            {problem: "\\left(\\frac{27}{125}\\right)^{-\\frac{2}{3}}", answer: "\\frac{25}{9}"},
            {problem: "\\left(\\frac{1}{216}\\right)^{-\\frac{2}{3}}", answer: "36"},
            {problem: "\\left(\\frac{64}{343}\\right)^{-\\frac{2}{3}}", answer: "\\frac{49}{16}"},
            
            // Complex fourth root operations
            {problem: "\\left(\\frac{16}{625}\\right)^{-\\frac{3}{4}}", answer: "\\frac{125}{8}"},
            {problem: "\\left(\\frac{16}{81}\\right)^{-\\frac{3}{4}}", answer: "\\frac{27}{8}"},
            {problem: "\\left(\\frac{81}{16}\\right)^{-\\frac{3}{4}}", answer: "\\frac{8}{27}"},
            
            // Mix of very challenging problems
            {problem: "\\left(\\frac{1}{128}\\right)^{-\\frac{4}{7}}", answer: "16"},
            {problem: "\\left(\\frac{1}{243}\\right)^{-\\frac{4}{5}}", answer: "81"},
            {problem: "\\left(\\frac{1}{243}\\right)^{-\\frac{3}{5}}", answer: "27"},
            {problem: "\\left(\\frac{1}{32}\\right)^{-\\frac{3}{5}}", answer: "8"},
            
            // Additional challenging problems
            {problem: "\\left(\\frac{125}{64}\\right)^{\\frac{2}{3}}", answer: "\\frac{25}{16}"},
            {problem: "\\left(\\frac{1}{25}\\right)^{-\\frac{3}{2}}", answer: "125"},
            {problem: "4^{-1\\frac{1}{2}}", answer: "\\frac{1}{8}"},
            {problem: "125^{-\\frac{2}{3}}", answer: "\\frac{1}{25}"},
            {problem: "(-8)^{\\frac{2}{3}}", answer: "4"},
            {problem: "\\left(\\frac{4}{25}\\right)^{-\\frac{3}{2}}", answer: "\\frac{125}{8}"}
        ]
);
