// progressTracker.js - Trig Facts wrapper
// Instantiates shared ProgressTracker with TrigFacts-specific config
window.progressTracker = new ProgressTracker('tf_progress_data_v1', {
    enableMistakes: false,
    oldVersionKeys: []
});
window.progressTracker.migrateIndividualBestTimeKeys('tf_bestTime_v5_');
