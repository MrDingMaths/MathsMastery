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
        'polynomialDiffEasy': 1.5,          'polynomialDiffMedium': 2.5,          'polynomialDiffHard': 4.0,
        'polynomialChainRuleEasy': 2.5,     'polynomialChainRuleMedium': 3.5,     'polynomialChainRuleHard': 5.0,
        'polynomialProductRuleEasy': 2.5,   'polynomialProductRuleMedium': 3.5,   'polynomialProductRuleHard': 5.5,
        'polynomialQuotientRuleEasy': 2.5,  'polynomialQuotientRuleMedium': 3.5,  'polynomialQuotientRuleHard': 5.5,
        'polynomialMixedRulesEasy': 3.5,    'polynomialMixedRulesMedium': 5.0,    'polynomialMixedRulesHard': 7.0,
        // Differentiation — Exponential
        'exponentialDiffEasy': 2.0,         'exponentialDiffMedium': 3.0,         'exponentialDiffHard': 4.5,
        'exponentialDiffRulesEasy': 3.5,    'exponentialDiffRulesMedium': 4.5,    'exponentialDiffRulesHard': 6.5,
        // Differentiation — Logarithmic
        'logarithmicDiffEasy': 2.5,         'logarithmicDiffMedium': 3.5,         'logarithmicDiffHard': 5.0,
        'logarithmicDiffRulesEasy': 3.5,    'logarithmicDiffRulesMedium': 5.0,    'logarithmicDiffRulesHard': 7.0,
        // Differentiation — Trig
        'trigDiffEasy': 2.0,                'trigDiffMedium': 3.0,                'trigDiffHard': 4.5,
        'trigDiffRulesEasy': 3.5,           'trigDiffRulesMedium': 4.5,           'trigDiffRulesHard': 6.5,
        // Differentiation — Mixed
        'mixedDiffEasy': 4.0,               'mixedDiffMedium': 6.0,               'mixedDiffHard': 8.0,
        // Integration — Basic
        'polynomialIntEasy': 2.0,           'polynomialIntMedium': 3.0,           'polynomialIntHard': 4.5,
        'exponentialIntEasy': 2.5,          'exponentialIntMedium': 3.5,          'exponentialIntHard': 5.0,
        'rationalIntEasy': 2.5,             'rationalIntMedium': 3.5,             'rationalIntHard': 5.0,
        'trigIntEasy': 2.5,                 'trigIntMedium': 3.5,                 'trigIntHard': 5.0,
        'mixedIntEasy': 3.5,                'mixedIntMedium': 5.0,                'mixedIntHard': 7.0,
        // Integration — Reverse Chain Rule
        'polynomialRCREasy': 3.0,           'polynomialRCRMedium': 4.5,           'polynomialRCRHard': 6.0,
        'exponentialRCREasy': 3.0,          'exponentialRCRMedium': 4.5,          'exponentialRCRHard': 6.0,
        'rationalRCREasy': 3.0,             'rationalRCRMedium': 4.5,             'rationalRCRHard': 6.0,
        'trigRCREasy': 3.0,                 'trigRCRMedium': 4.5,                 'trigRCRHard': 6.0,
        'mixedRCREasy': 4.5,                'mixedRCRMedium': 6.5,                'mixedRCRHard': 8.5,
        // Extension
        'inverseTrigDiffEasy': 4.0,         'inverseTrigDiffMedium': 5.5,         'inverseTrigDiffHard': 7.5,
        'inverseTrigIntEasy': 4.5,          'inverseTrigIntMedium': 6.0,          'inverseTrigIntHard': 8.0,
        'integrationBySubstitutionEasy': 5.0,'integrationBySubstitutionMedium': 7.0,'integrationBySubstitutionHard': 9.0,
        'sinCosSquaredIntEasy': 4.5,        'sinCosSquaredIntMedium': 6.5,        'sinCosSquaredIntHard': 8.5,
        'extensionMixedIntEasy': 5.5,       'extensionMixedIntMedium': 7.5,       'extensionMixedIntHard': 10.0,
    },
    STORAGE_PREFIX: 'calculus_bestTime_v1_',
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};
