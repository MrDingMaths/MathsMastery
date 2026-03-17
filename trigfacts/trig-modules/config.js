// Configuration
export const CONFIG = {
    LEVEL_GROUPS: {
        "Working in Degrees": [
            { key: 'exact_deg_mixed', name: 'Exact Values', type: 'exact', unit: 'deg' },
            { key: 'reference_angles', name: 'Reference Angles', type: 'reference_angles' },
            { key: 'equiv_deg', name: 'Equivalent Ratios', type: 'equivalent', unit: 'deg' },
            { key: 'quad_deg', name: 'Exact Values in all Quadrants', type: 'quadrant', unit: 'deg' },
        ],
        "Degree and Radian Conversion": [
            { key: 'simplify_fractions', name: 'Simplify Fractions<br>over 180', type: 'simplify_fractions' },
            { key: 'deg_to_rad', name: 'Degrees to Radians', type: 'conversion', direction: 'd2r' },
            { key: 'rad_to_deg', name: 'Radians to Degrees', type: 'conversion', direction: 'r2d' },
            { key: 'conv_mixed', name: 'Mixed Conversion', type: 'conversion', direction: 'mixed' },
        ],
        "Working in Radians": [
            { key: 'exact_rad_mixed', name: 'Exact Values', type: 'exact', unit: 'rad' },
            { key: 'reference_angles_rad', name: 'Reference Angles', type: 'reference_angles_rad' },
            { key: 'equiv_rad', name: 'Equivalent Ratios', type: 'equivalent', unit: 'rad' },
            { key: 'quad_rad', name: 'Exact Values in all Quadrants', type: 'quadrant', unit: 'rad' },
        ],
    },
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
        'simplify_fractions': 1.0,   // Pure arithmetic
        'exact_deg_mixed': 1,      // Basic recall (degrees)
        'deg_to_rad': 2.0,           // Conversion formula
        'rad_to_deg': 2.0,           // Conversion formula
        'conv_mixed': 2.5,           // Mixed direction conversion
        'reference_angles': 1.0,     // Reference angles (degrees)
        'exact_rad_mixed': 1.5,      // Exact values in radians
        'reference_angles_rad': 1, // Reference angles (radians)
        'quad_deg': 4.0,             // All quadrants (degrees)
        'equiv_deg': 2,            // Equivalent ratios (degrees)
        'quad_rad': 5.0,             // All quadrants (radians)
        'equiv_rad': 2.5,            // Equivalent ratios (radians)
        'default': 1.0
    }
};
