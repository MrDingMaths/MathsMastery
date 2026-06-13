// config.js
// Level metadata lives in shared/levelRegistry.js (loaded as a classic script
// before this module). Edit it there to add or rename levels.
export const CONFIG = {
    LEVEL_GROUPS: window.LevelRegistry.calculus.LEVEL_GROUPS,
    REQUIRED_STREAK: 10,
    FEEDBACK_DELAY_CORRECT: 300,
    FEEDBACK_DELAY_INCORRECT: 1000,
    POSITIVE_FEEDBACK: ["Awesome!", "Great Job!", "You got it!", "Fantastic!", "Brilliant!", "Keep it up!", "Nice!", "Correct!"],
    SECOND_CHANCE_FEEDBACK: ["Try again", "Not quite right", "Have another go!", "Take another shot at it!"],
    RATING_THRESHOLDS: [
        { maxAvg: 2, name: "Maths Queen", key: "true-mastery" },
        { maxAvg: 3, name: "Mastery", key: "mastery" },
        { maxAvg: 4, name: "Expert", key: "expert" },
        { maxAvg: 5, name: "Developing", key: "developing" },
        { maxAvg: Infinity, name: "Beginner", key: "beginner" }
    ],
    LEVEL_DIFFICULTY_MULTIPLIERS: {
        // Differentiation
        'polynomialDiff':         2.0,
        'polynomialChainRule':    3.0,
        'polynomialProductRule':  3.5,
        'polynomialQuotientRule': 3.5,
        'polynomialMixedRules':   5.0,
        'exponentialDiff':        2.5,
        'exponentialDiffRules':   4.5,
        'logarithmicDiff':        3.0,
        'logarithmicDiffRules':   5.0,
        'trigDiff':               2.5,
        'trigDiffRules':          4.5,
        'mixedDiff':              6.0,
        // Integration
        'polynomialInt':          2.5,
        'exponentialInt':         3.0,
        'rationalInt':            3.5,
        'trigInt':                3.0,
        'mixedInt':               5.0,
        'polynomialRCR':          4.0,
        'exponentialRCR':         4.0,
        'rationalRCR':            4.0,
        'trigRCR':                4.0,
        'mixedRCR':               6.0,
        // Extension
        'inverseTrigDiff':            5.5,
        'inverseTrigInt':             6.0,
        'integrationBySubstitution':  7.0,
        'sinCosSquaredInt':           6.5,
        'extensionMixedInt':          8.0,
    },
    STORAGE_PREFIX: 'calculus_bestTime_v1_',
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};
