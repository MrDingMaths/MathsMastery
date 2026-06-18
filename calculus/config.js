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
        // Differentiation — Polynomial
        'polynomialDiffEasy': 20,           'polynomialDiffMedium': 20,           'polynomialDiffHard': 20,
        'polynomialChainRuleEasy': 20,      'polynomialChainRuleMedium': 20,      'polynomialChainRuleHard': 20,
        'polynomialProductRuleEasy': 20,    'polynomialProductRuleMedium': 20,    'polynomialProductRuleHard': 20,
        'polynomialQuotientRuleEasy': 20,   'polynomialQuotientRuleMedium': 20,   'polynomialQuotientRuleHard': 20,
        'polynomialMixedRulesEasy': 20,     'polynomialMixedRulesMedium': 20,     'polynomialMixedRulesHard': 20,
        // Differentiation — Exponential
        'exponentialDiffEasy': 20,          'exponentialDiffMedium': 20,          'exponentialDiffHard': 20,
        'exponentialDiffRulesEasy': 20,     'exponentialDiffRulesMedium': 20,     'exponentialDiffRulesHard': 20,
        // Differentiation — Logarithmic
        'logarithmicDiffEasy': 20,          'logarithmicDiffMedium': 20,          'logarithmicDiffHard': 20,
        'logarithmicDiffRulesEasy': 20,     'logarithmicDiffRulesMedium': 20,     'logarithmicDiffRulesHard': 20,
        // Differentiation — Trig
        'trigDiffEasy': 20,                 'trigDiffMedium': 20,                 'trigDiffHard': 20,
        'trigDiffRulesEasy': 20,            'trigDiffRulesMedium': 20,            'trigDiffRulesHard': 20,
        // Differentiation — Mixed
        'mixedDiffEasy': 20,                'mixedDiffMedium': 20,                'mixedDiffHard': 20,
        // Integration — Basic
        'polynomialIntEasy': 20,            'polynomialIntMedium': 20,            'polynomialIntHard': 20,
        'exponentialIntEasy': 20,           'exponentialIntMedium': 20,           'exponentialIntHard': 20,
        'rationalIntEasy': 20,              'rationalIntMedium': 20,              'rationalIntHard': 20,
        'trigIntEasy': 20,                  'trigIntMedium': 20,                  'trigIntHard': 20,
        'mixedIntEasy': 20,                 'mixedIntMedium': 20,                 'mixedIntHard': 20,
        // Integration — Reverse Chain Rule
        'polynomialRCREasy': 20,            'polynomialRCRMedium': 20,            'polynomialRCRHard': 20,
        'exponentialRCREasy': 20,           'exponentialRCRMedium': 20,           'exponentialRCRHard': 20,
        'rationalRCREasy': 20,              'rationalRCRMedium': 20,              'rationalRCRHard': 20,
        'trigRCREasy': 20,                  'trigRCRMedium': 20,                  'trigRCRHard': 20,
        'mixedRCREasy': 20,                 'mixedRCRMedium': 20,                 'mixedRCRHard': 20,
        // Extension
        'inverseTrigDiffEasy': 20,          'inverseTrigDiffMedium': 20,          'inverseTrigDiffHard': 20,
        'inverseTrigIntEasy': 20,           'inverseTrigIntMedium': 20,           'inverseTrigIntHard': 20,
        'integrationBySubstitutionEasy': 20,'integrationBySubstitutionMedium': 20,'integrationBySubstitutionHard': 20,
        'sinCosSquaredIntEasy': 20,         'sinCosSquaredIntMedium': 20,         'sinCosSquaredIntHard': 20,
        'extensionMixedIntEasy': 20,        'extensionMixedIntMedium': 20,        'extensionMixedIntHard': 20,
    },
    STORAGE_PREFIX: 'calculus_bestTime_v1_',
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};
