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
for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && (key.startsWith('mf_bestTime_v1_') || key.startsWith('mf_bestTime_v5_'))) {
        localStorage.removeItem(key);
    }
}
