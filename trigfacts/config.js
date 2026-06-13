// Configuration
// Level metadata lives in shared/levelRegistry.js (loaded as a classic script
// before this module). Edit it there to add or rename levels.
export const CONFIG = {
    LEVEL_GROUPS: window.LevelRegistry.trigfacts.LEVEL_GROUPS,
    REQUIRED_STREAK: 10,
    FEEDBACK_DELAY_CORRECT: 300,
    FEEDBACK_DELAY_INCORRECT: 1000,
    POSITIVE_FEEDBACK: ["Correct!", "Excellent!", "Nice one!", "Perfect!", "You know it!", "Awesome!", "Great!"],
    SECOND_CHANCE_FEEDBACK: ["Try again", "Not quite right", "Have another go!", "Take another shot at it!"],
    RATING_THRESHOLDS: [
        { maxAvg: 2, name: "Unit Circle Queen", key: "true-mastery" },
        { maxAvg: 3, name: "Trig Master", key: "mastery" },
        { maxAvg: 4, name: "Expert", key: "expert" },
        { maxAvg: 5, name: "Developing", key: "developing" },
        { maxAvg: Infinity, name: "Beginner", key: "beginner" }
    ],
    STORAGE_PREFIX: 'tf_bestTime_v5_',
    CONFETTI: { CORRECT: 40, SUCCESS: 150 },
    LEVEL_DIFFICULTY_MULTIPLIERS: {
        'reference_angles':     1.0,
        'reference_angles_rad': 1.0,
        'exact_deg_mixed':      1.5,
        'rad_to_deg':           2.0,
        'equiv_deg':            2.0,
        'simplify_fractions':   2.0,
        'deg_to_rad':           2.0,
        'exact_rad_mixed':      2.0,
        'conv_mixed':           2.5,
        'quad_deg':             2.5,
        'equiv_rad':            2.5,
        'quad_rad':             4.0,
        'default': 1.0
    }
};
