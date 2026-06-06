// Configuration
// Level metadata lives in shared/levelRegistry.js (loaded as a classic script
// before this module). Edit it there to add or rename levels.
export const CONFIG = {
    LEVEL_GROUPS: window.LevelRegistry.trigfacts.LEVEL_GROUPS,
    REQUIRED_STREAK: 10,
    FEEDBACK_DELAY_CORRECT: 400,
    FEEDBACK_DELAY_INCORRECT: 1500,
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
        'simplify_fractions': 1.8,   // Pure arithmetic
        'exact_deg_mixed': 1,      // Basic recall (degrees)
        'deg_to_rad': 1.8,           // Conversion formula
        'rad_to_deg': 1.8,           // Conversion formula
        'conv_mixed': 2,           // Mixed direction conversion
        'reference_angles': 1.0,     // Reference angles (degrees)
        'exact_rad_mixed': 1.8,      // Exact values in radians
        'reference_angles_rad': 1, // Reference angles (radians)
        'quad_deg': 2.2,             // All quadrants (degrees)
        'equiv_deg': 1.6,            // Equivalent ratios (degrees)
        'quad_rad': 3.4,             // All quadrants (radians)
        'equiv_rad': 2.2,            // Equivalent ratios (radians)
        'default': 1.0
    }
};
