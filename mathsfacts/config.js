/**
 * Configuration constants for Maths Facts Challenge
 * Central configuration file containing all game settings, level definitions,
 * difficulty adjustments, rating thresholds, and UI parameters
 */
export const CONFIG = {
    // Level metadata lives in shared/levelRegistry.js (loaded as a classic
    // script before this module). Edit it there to add or rename levels.
    LEVEL_GROUPS: window.LevelRegistry.mathsfacts.LEVEL_GROUPS,

    /**
     * Custom abbreviations for skill path display
     * Maps level names to short display format with optional KaTeX rendering
     * Used to create compact node labels in the skill path visualization
     */
    LEVEL_ABBREVIATIONS: {
        // Number Bonds
        'Bonds to 10': { text: '10', useKaTeX: false },
        'Bonds to 20': { text: '20', useKaTeX: false },
        'Mixed Bonds 10-20': { text: '10-20', useKaTeX: false },
        'Bonds to 100': { text: '100', useKaTeX: false },
        'Bonds to -10': { text: '-10', useKaTeX: false },
        'Bonds to -20': { text: '-20', useKaTeX: false },
        'Add & Subtract Negatives': { text: '-n \\pm', useKaTeX: true },

        // Multiplication & Division
        '× 2 4 5 10': { text: '\\times 2', useKaTeX: true },
        '× 3 6 9': { text: '\\times 3', useKaTeX: true },
        '× 2 to 12': { text: '\\times 12', useKaTeX: true },
        '× Negatives': { text: '\\times -', useKaTeX: true },
        'Integer Operations': { text: '-3^2', useKaTeX: true },
        '×÷ 100': { text: '\\times 100', useKaTeX: true },
        '×÷ Powers of 10': { text: '10^n', useKaTeX: true },
        'Doubling': { text: '\\times 2', useKaTeX: true },
        'Perfect Squares': { text: 'n^2', useKaTeX: true },
        'Unit Conversions': { text: 'mm→cm', useKaTeX: false },

        // Fractions Decimals Percentages
        'HCF': { text: 'HCF', useKaTeX: false },
        'LCM': { text: 'LCM', useKaTeX: false },
        'Equivalent Fractions': { text: '\\frac{a}{b} = \\frac{an}{bn}', useKaTeX: true },
        'Simplifying Fractions': { text: '\\frac{\\div n}{\\div n}', useKaTeX: true },
        'Common FDP Equivalences': { text: '\\frac{1}{2} = 0.5', useKaTeX: true },
        'FDP Conversions': { text: '\\frac{a}{b} \\leftrightarrow \\%', useKaTeX: true },
        'Rounding Decimals': { text: '2.7\\ldots', useKaTeX: true },
        'Fraction of a Quantity': { text: '\\frac{1}{2} \\times n', useKaTeX: true },
        'Percentage of a Quantity': { text: '\\% \\times n', useKaTeX: true },
        'Increase Decrease by Percentage': { text: '\\% \\pm', useKaTeX: true }
    },

    /**
     * Category mappings for progress tracking filters
     * Maps group names to category identifiers for drill filtering in progress UI
     */
    CATEGORY_MAP: {
        'Number Bonds': 'bonds',
        'Multiplication & Division': 'multiplication',
        'Fractions Decimals Percentages': 'fractions'
    },

    // Number of consecutive correct answers required to complete a level
    REQUIRED_STREAK: 10,
    // UI timing delays in milliseconds
    FEEDBACK_DELAY_CORRECT: 300,    // Brief pause after correct answers
    FEEDBACK_DELAY_INCORRECT: 1000,  // Longer pause to show correct answer after mistakes
    // Random positive reinforcement messages for correct answers
    POSITIVE_FEEDBACK: ["Awesome!", "Great Job!", "You got it!", "Fantastic!", "Brilliant!", "Keep it up!"],
    // Encouraging messages for first incorrect attempt to support learning
    SECOND_CHANCE_FEEDBACK: ["Try again", "Not quite right", "Have another go!", "Take another shot at it!"],
    /**
     * Performance rating system based on average time per question
     * Ratings progress from beginner to true mastery based on speed and accuracy
     */
    RATING_THRESHOLDS: [
        { maxAvg: 2, name: "Maths Queen", key: "true-mastery" },
        { maxAvg: 3, name: "Mastery", key: "mastery" },
        { maxAvg: 4, name: "Expert", key: "expert" },
        { maxAvg: 5, name: "Developing", key: "developing" },
        { maxAvg: Infinity, name: "Beginner", key: "beginner" }
    ],
    /**
     * Difficulty adjustment multipliers for performance rating calculations
     * Higher multipliers make it easier to achieve good ratings on harder topics
     * Ensures fair assessment across different mathematical domains
     */
    LEVEL_DIFFICULTY_MULTIPLIERS: {
        // Number Bonds
        'bonds10': 1.0,
        'bonds20': 1.0,
        'mixed10-20': 1.0,
        'bonds100': 1.5,
        'bonds-10': 1.5,
        'bonds-20': 1.5,
        'negAddSub': 1.5,

        // Multiplication & Division
        'group245': 1.0,
        'group369': 1.0,
        'multall': 1.0,
        'mixed-negative-mult': 1.5,
        'integerOperations': 1.5,
        'multiplyDivideBy100': 1.5,
        'powersOf10': 2.0,
        'double100': 1.5,
        'squares': 1.0,
        'unitConversions': 3.0,

        // Fractions Decimals Percentages
        'hcf': 1.5,
        'lcm': 1.5,
        'equivFractions': 1.5,
        'simplifyFractions': 2.5,
        'fdpConversions': 2.0,
        'fdpConversionsMultiples': 2.0,
        'roundingDecimals': 2.0,
        'fractionOfQuantity': 2.0,
        'percentageOfQuantity': 1.5,
        'increaseDecreasePercentage': 2.0,

        // Fallback multiplier for any levels not explicitly configured
        'default': 1.0
    },
    // Confetti animation particle counts for different celebration levels
    CONFETTI: { 
        CORRECT: 40,     // Moderate celebration for individual correct answers
        SUCCESS: 150     // Major celebration for level completion
    }
};