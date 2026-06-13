// questionGenerator.js
import * as Levels from './levels/index.js';

export class QuestionGenerator {
    constructor() {
        this.lastQuestionIndex = -1;
        this.lastQuestionsByLevel = {}; // Track last questions per level
        this.mistakeQuestions = []; // Store questions from mistakes
        this.mistakeQuestionIndex = 0; // Track current question in mistakes practice
    }

    generateQuestion(levelKey) {
        if (levelKey === 'practiceAllMistakes') {
            return this.generateMistakeQuestion();
        }
        const level = Levels[levelKey];
        if (level) return level.generateQuestion();
        console.log('Level not yet implemented:', levelKey);
        return { problem: '\\frac{d}{dx}\\left(x^2\\right)', answer: '2x', mode: 'derivative' };
    }

    // Generate questions from recorded mistakes
    generateMistakeQuestion() {
        if (this.mistakeQuestions.length === 0) {
            this.loadMistakeQuestions();
        }

        if (this.mistakeQuestions.length === 0) {
            return { problem: 'No mistakes to practice', answer: 'Keep practising!', mode: 'derivative' };
        }

        const currentQuestion = this.mistakeQuestions[this.mistakeQuestionIndex];
        this.mistakeQuestionIndex = (this.mistakeQuestionIndex + 1) % this.mistakeQuestions.length;

        return {
            problem: currentQuestion.question,
            answer: currentQuestion.correctAnswer,
            mode: currentQuestion.mode || 'derivative',
            toleranceDp: currentQuestion.toleranceDp,
            originalMistake: currentQuestion
        };
    }

    loadMistakeQuestions() {
        this.mistakeQuestions = [];

        if (window.progressTracker) {
            const allMistakes = window.progressTracker.getAllMistakes();

            this.mistakeQuestions = allMistakes.map(mistake => ({
                question: mistake.question,
                correctAnswer: mistake.correctAnswer,
                levelName: mistake.levelName,
                levelKey: mistake.levelKey,
                mistakeId: mistake.id,
                originalStudentAnswer: mistake.studentAnswer
            }));

            this.shuffleArray(this.mistakeQuestions);
            this.mistakeQuestionIndex = 0;

            console.log(`Loaded ${this.mistakeQuestions.length} mistake questions for practice`);
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    resetMistakesPractice() {
        this.mistakeQuestions = [];
        this.mistakeQuestionIndex = 0;
    }
}
