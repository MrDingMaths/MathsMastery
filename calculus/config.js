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
    // Multipliers calibrated from James Ding's leaderboard best times: a level's
    // value makes (best_time × 1.1) land exactly on the Maths Queen boundary
    // (effective_avg = 2). Keep these in sync with the server-side
    // recalculate_rating() Postgres trigger.
    LEVEL_DIFFICULTY_MULTIPLIERS: {
        // Differentiation — Polynomial
        'polynomialDiffEasy': 1.5,          'polynomialDiffMedium': 4,            'polynomialDiffHard': 5,
        'polynomialChainRuleEasy': 3.5,     'polynomialChainRuleMedium': 7,       'polynomialChainRuleHard': 8,
        'polynomialProductRuleEasy': 14,    'polynomialProductRuleMedium': 20,    'polynomialProductRuleHard': 20,
        'polynomialQuotientRuleEasy': 9,    'polynomialQuotientRuleMedium': 10,   'polynomialQuotientRuleHard': 11,
        'polynomialMixedRulesEasy': 5,      'polynomialMixedRulesMedium': 11,     'polynomialMixedRulesHard': 13,
        // Differentiation — Exponential
        'exponentialDiffEasy': 3,           'exponentialDiffMedium': 5,           'exponentialDiffHard': 9,
        'exponentialDiffRulesEasy': 6,      'exponentialDiffRulesMedium': 7,      'exponentialDiffRulesHard': 9,
        // Differentiation — Logarithmic
        'logarithmicDiffEasy': 2.5,         'logarithmicDiffMedium': 8,           'logarithmicDiffHard': 12,
        'logarithmicDiffRulesEasy': 7,      'logarithmicDiffRulesMedium': 15,     'logarithmicDiffRulesHard': 22,
        // Differentiation — Trig
        'trigDiffEasy': 2,                  'trigDiffMedium': 4,                  'trigDiffHard': 12,
        'trigDiffRulesEasy': 8,             'trigDiffRulesMedium': 8,             'trigDiffRulesHard': 10,
        // Differentiation — Mixed
        'mixedDiffEasy': 5,                 'mixedDiffMedium': 8,                 'mixedDiffHard': 12,
        // Integration — Basic
        'polynomialIntEasy': 2,             'polynomialIntMedium': 5,             'polynomialIntHard': 14,
        'exponentialIntEasy': 2.5,          'exponentialIntMedium': 7,            'exponentialIntHard': 5,
        'rationalIntEasy': 2.5,             'rationalIntMedium': 5,               'rationalIntHard': 17,
        'trigIntEasy': 2.5,                 'trigIntMedium': 6,                   'trigIntHard': 10,
        'mixedIntEasy': 3.5,                'mixedIntMedium': 5,                  'mixedIntHard': 12,
        // Integration — Reverse Chain Rule
        'polynomialRCREasy': 4,             'polynomialRCRMedium': 10,            'polynomialRCRHard': 12,
        'exponentialRCREasy': 4,            'exponentialRCRMedium': 6,            'exponentialRCRHard': 12,
        'rationalRCREasy': 3,               'rationalRCRMedium': 4,               'rationalRCRHard': 11,
        'trigRCREasy': 4,                   'trigRCRMedium': 6,                   'trigRCRHard': 10,
        'mixedRCREasy': 4,                  'mixedRCRMedium': 6,                  'mixedRCRHard': 11,
        // Extension — placeholders (levels locked / coming soon, not yet rated)
        'inverseTrigDiffEasy': 20,          'inverseTrigDiffMedium': 20,          'inverseTrigDiffHard': 20,
        'inverseTrigIntEasy': 20,           'inverseTrigIntMedium': 20,           'inverseTrigIntHard': 20,
        'integrationBySubstitutionEasy': 20,'integrationBySubstitutionMedium': 20,'integrationBySubstitutionHard': 20,
        'sinCosSquaredIntEasy': 20,         'sinCosSquaredIntMedium': 20,         'sinCosSquaredIntHard': 20,
        'extensionMixedIntEasy': 20,        'extensionMixedIntMedium': 20,        'extensionMixedIntHard': 20,
    },
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};
