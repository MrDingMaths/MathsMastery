// Algebra progress-tracker wrapper — see shared/progressTracker.js for the factory.
window.initProgressTracker('algebra', {
    enableMistakes: true,
    oldVersionKeys: [
        'algebra_progress_data_v4',
        'algebra_progress_data_v3',
        'algebra_progress_data_v2',
        'algebra_progress_data_v1',
        'algebra_progress_data'
    ]
});
