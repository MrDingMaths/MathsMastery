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
for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i);
    if (key && key.startsWith('algebra_bestTime_v1_')) localStorage.removeItem(key);
}
