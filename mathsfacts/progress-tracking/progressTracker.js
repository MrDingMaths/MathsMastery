// progressTracker.js - Maths Facts wrapper
// Instantiates shared ProgressTracker with MathsFacts-specific config
window.progressTracker = new ProgressTracker('mf_progress_data_v4', {
    enableMistakes: false,
    oldVersionKeys: [
        'mf_progress_data_v3',
        'mf_progress_data_v2',
        'mf_progress_data_v1',
        'mf_progress_data'
    ]
});
window.progressTracker.migrateIndividualBestTimeKeys('mf_bestTime_v1_');
window.progressTracker.migrateIndividualBestTimeKeys('mf_bestTime_v5_');
