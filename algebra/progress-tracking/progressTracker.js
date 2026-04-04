// progressTracker.js - Algebra wrapper
// Instantiates shared ProgressTracker with Algebra-specific config
window.progressTracker = new ProgressTracker('algebra_progress_data_v4', {
    enableMistakes: true,
    oldVersionKeys: [
        'algebra_progress_data_v3',
        'algebra_progress_data_v2',
        'algebra_progress_data_v1',
        'algebra_progress_data'
    ]
});
window.progressTracker.migrateIndividualBestTimeKeys('algebra_bestTime_v1_');
