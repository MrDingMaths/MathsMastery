// levels/multiplyTermsMedium.js
import { BaseLevel } from './BaseLevel.js';
// Custom generateQuestion: 70% chance to convert \times to implied multiplication
class MultiplyTermsMediumLevel extends BaseLevel {
    constructor() {
        super('multiplyTermsMedium', 'Multiplying Terms (Medium)', [
            // Multiplying Two Negative Terms
            {problem: "(-3x) \\times (-4)", answer: "12x"},
            {problem: "(-7x) \\times (-2y)", answer: "14xy"},
            {problem: "(-5a) \\times (-3)", answer: "15a"},
            {problem: "(-4y) \\times (-6b)", answer: "24by"},
            {problem: "(-2x) \\times (-7)", answer: "14x"},
            {problem: "(-8x) \\times (-3y)", answer: "24xy"},
            {problem: "(-6x) \\times (-2)", answer: "12x"},
            {problem: "(-9x) \\times (-4y)", answer: "36xy"},
            {problem: "(-3x) \\times (-5)", answer: "15x"},
            {problem: "(-7x) \\times (-2y)", answer: "14yx"},

            // Products of Three Simple Factors
            {problem: "5a \\times (-2) \\times 3b", answer: "-30ab"},
            {problem: "6 \\times x \\times (-4)", answer: "-24x"},
            {problem: "3x \\times 2 \\times 4y", answer: "24xy"},
            {problem: "7x \\times (-3) \\times 2y", answer: "-42xy"},
            {problem: "4 \\times (-5) \\times 3x", answer: "-60x"},
            {problem: "2a \\times 6 \\times (-3)", answer: "-36a"},
            {problem: "(-4) \\times 3y \\times 5", answer: "-60y"},
            {problem: "8x \\times (-1) \\times 2y", answer: "-16xy"},
            {problem: "(-2) \\times 4x \\times 3y", answer: "-24yx"},
            {problem: "7 \\times (-2x) \\times 3", answer: "-42x"},

            // Additional problems from user list
            {problem: "-3x \\times 2y", answer: "-6yx"},
            {problem: "-5a \\times -3b", answer: "15ab"},
            {problem: "x \\times 2y \\times 7a", answer: "14xya"},
            {problem: "-4x \\times 3 \\times 2y", answer: "-24xy"},
            {problem: "5x \\times (-4) \\times 2y", answer: "-40xy"},
        ]);
        this.impliedMultiplicationChance = 0.7;
    }

    generateQuestion() {
        let question = { ...BaseLevel.prototype.generateQuestion.call(this) };

        if (Math.random() < this.impliedMultiplicationChance) {
            question.problem = this.convertToImpliedMultiplication(question.problem);
        }

        return question;
    }

    convertToImpliedMultiplication(problem) {
        let result = problem;
        result = result.replace(/(\d+)\s*\\times\s*(\d*[a-zA-Z][^\s]*)/g, '$1($2)');
        result = result.replace(/([a-zA-Z0-9]+)\s*\\times\s*(\([^)]+\))/g, '$1$2');
        result = result.replace(/(\d*[a-zA-Z]+)\s*\\times\s*(\([^)]+\))/g, '$1$2');
        return result;
    }
}

export default new MultiplyTermsMediumLevel();
