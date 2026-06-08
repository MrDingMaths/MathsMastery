// config.js
// Level metadata lives in shared/levelRegistry.js (loaded as a classic script
// before this module). Edit it there to add or rename levels.
export const CONFIG = {
    LEVEL_GROUPS: window.LevelRegistry.equations.LEVEL_GROUPS,
    REQUIRED_STREAK: 10,
    FEEDBACK_DELAY_CORRECT: 300,
    FEEDBACK_DELAY_INCORRECT: 1000,
    POSITIVE_FEEDBACK: ["Awesome!", "Great Job!", "You got it!", "Fantastic!", "Brilliant!", "Keep it up!", "Nice!", "Correct!"],
    SECOND_CHANCE_FEEDBACK: ["Try again", "Not quite right", "Have another go!", "Take another shot at it!"],
    RATING_THRESHOLDS: [
        { maxAvg: 1.5, name: "Maths Queen", key: "true-mastery" },
        { maxAvg: 2.5, name: "Mastery", key: "mastery" },
        { maxAvg: 3.5, name: "Expert", key: "expert" },
        { maxAvg: 5, name: "Developing", key: "developing" },
        { maxAvg: Infinity, name: "Beginner", key: "beginner" }
    ],
    LEVEL_DIFFICULTY_MULTIPLIERS: {
        'linearTwoStepEasy': 2.5,
        'quadraticFactorisableEasy': 4,
        'simultaneousLinearEasy': 5,
    },
    STORAGE_PREFIX: 'equations_bestTime_v1_',
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};
