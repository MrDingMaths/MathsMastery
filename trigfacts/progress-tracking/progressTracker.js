// progressTracker.js - Trig Facts wrapper
// Instantiates shared ProgressTracker with TrigFacts-specific config
window.progressTracker = new ProgressTracker('tf_progress_data_v5', {
    enableMistakes: false,
    oldVersionKeys: [
        'tf_progress_data_v1'
    ]
});
for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && key.startsWith('tf_bestTime_v5_')) localStorage.removeItem(key);
}
