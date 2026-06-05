// shared/progressUI.js - UI components for progress tracking
// Plain script (not ES module) — instantiated by per-app gameController
class ProgressUI {
    constructor(progressTracker, progressChart, progressShare) {
        this.progressTracker = progressTracker;
        this.progressChart = progressChart;
        this.progressShare = progressShare;
        this.isVisible = false;
        this.currentView = 'drills';
        this.MQ = null;
        this.init();
    }

    init() {
        this.createProgressModal();
        this.attachEventListeners();
        // Only init MathQuill if mistakes are enabled (needed for rendering LaTeX in mistakes table)
        if (this.progressTracker.enableMistakes && typeof MathQuill !== 'undefined') {
            this.MQ = MathQuill.getInterface(2);
        }
        this.updateContent();
    }

    // Create progress button that appears on the main screen
    createProgressButton() {
        const container = document.createElement('div');
        container.id = 'progress-header-area';
        container.className = 'progress-header-area';

        const button = document.createElement('button');
        button.id = 'progress-btn';
        button.className = 'progress-btn';
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span>Progress</span>
        `;

        const statsBar = document.createElement('div');
        statsBar.className = 'summary-cards inline-summary-cards';
        statsBar.innerHTML = `
            <div class="summary-card">
                <div class="card-icon">📚</div>
                <div class="card-value" id="inline-total-drills">0</div>
                <div class="card-label">Total Attempts</div>
            </div>
            <div class="summary-card">
                <div class="card-icon">✅</div>
                <div class="card-value" id="inline-total-attempts">0</div>
                <div class="card-label">Questions Answered</div>
            </div>
            <div class="summary-card">
                <div class="card-icon">⏱️</div>
                <div class="card-value" id="inline-total-time">0:00</div>
                <div class="card-label">Time Practising</div>
            </div>
            <div class="summary-card">
                <div class="card-icon">📈</div>
                <div class="card-value" id="inline-avg-improvement">0%</div>
                <div class="card-label">Avg Improvement</div>
            </div>
        `;

        container.appendChild(button);
        container.appendChild(statsBar);

        // Insert before mastery progress section
        const masteryProgressSection = document.getElementById('mastery-progress-section');
        if (masteryProgressSection) {
            masteryProgressSection.parentNode.insertBefore(container, masteryProgressSection);
        } else {
            const settingsScreen = document.getElementById('settings-screen');
            if (settingsScreen) {
                settingsScreen.appendChild(container);
            }
        }
    }

    // Build category filter buttons dynamically from CONFIG.LEVEL_GROUPS
    _buildCategoryFilters() {
        const config = window.CONFIG;
        if (!config || !config.LEVEL_GROUPS) {
            return '<button class="filter-btn active" data-category="all">All</button>';
        }
        const groupNames = Object.keys(config.LEVEL_GROUPS);
        const buttons = ['<button class="filter-btn active" data-category="all">All</button>'];
        groupNames.forEach(name => {
            // Use a short label: first word or abbreviation
            const shortLabel = name.split(' ')[0];
            const categoryKey = name.toLowerCase().replace(/[^a-z0-9]/g, '_');
            buttons.push(`<button class="filter-btn" data-category="${categoryKey}">${shortLabel}</button>`);
        });
        return buttons.join('\n                                                ');
    }

    // Create the main progress modal
    createProgressModal() {
        const modal = document.createElement('div');
        modal.id = 'progress-modal';
        modal.className = 'progress-modal hidden';

        const mistakesTabBtn = this.progressTracker.enableMistakes
            ? '<button class="tab-btn" data-view="mistakes">Mistakes</button>'
            : '';

        const mistakesTabContent = this.progressTracker.enableMistakes ? `
                    <!-- Mistakes Tab -->
                    <div id="mistakes-content" class="tab-content">
                        <div class="mistakes-controls">
                            <button id="practice-mistakes" class="btn btn-primary" title="Practice all your mistakes">Practise Mistakes</button>
                            <button id="clear-mistakes" class="btn btn-danger" title="Clear all recorded mistakes">Clear All Mistakes</button>
                        </div>

                        <div class="mistakes-table">
                            <table id="mistakes-table">
                                <thead>
                                    <tr>
                                        <th>Level</th>
                                        <th>Question</th>
                                        <th>Correct Answer</th>
                                        <th>Your Answer</th>
                                        <th>Date</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody id="mistakes-tbody"></tbody>
                            </table>
                        </div>

                        <div id="no-mistakes-message" class="no-mistakes hidden">
                            <div class="no-mistakes-icon">🎯</div>
                            <h3>No mistakes recorded yet!</h3>
                            <p>Keep practising and any incorrect answers will appear here for you to review.</p>
                        </div>
                    </div>` : '';

        modal.innerHTML = `
            <div class="progress-modal-content">
                <div class="progress-header">
                    <h2>Progress</h2>
                    <button class="close-btn" id="close-progress">×</button>
                </div>

                <div class="progress-tabs">
                    <button class="tab-btn" data-view="overview">Overview</button>
                    <button class="tab-btn active" data-view="drills">Improvement</button>
                    <button class="tab-btn" data-view="history">History</button>
                    ${mistakesTabBtn}
                </div>

                <div class="progress-content">
                    <!-- Overview Tab -->
                    <div id="overview-content" class="tab-content">
                        <div class="summary-cards">
                            <div class="summary-card">
                                <div class="card-icon">📚</div>
                                <div class="card-value" id="total-drills">0</div>
                                <div class="card-label">Total Attempts</div>
                            </div>
                            <div class="summary-card">
                                <div class="card-icon">✅</div>
                                <div class="card-value" id="total-attempts">0</div>
                                <div class="card-label">Questions Answered</div>
                            </div>
                            <div class="summary-card">
                                <div class="card-icon">⏱️</div>
                                <div class="card-value" id="total-time">0:00</div>
                                <div class="card-label">Time Practising</div>
                            </div>
                            <div class="summary-card">
                                <div class="card-icon">📈</div>
                                <div class="card-value" id="avg-improvement">0%</div>
                                <div class="card-label">Avg Improvement</div>
                            </div>
                        </div>

                        <div class="recent-activity">
                            <h3>Recent Activity</h3>
                            <div id="recent-sessions"></div>
                        </div>
                    </div>

                    <!-- Drill Progress Tab -->
                    <div id="drills-content" class="tab-content active">
                        <div class="drill-layout">
                            <div class="drill-sidebar" id="drill-sidebar">
                                <div class="sidebar-header">
                                    <h3>Select Drill</h3>
                                    <button class="sidebar-toggle" id="sidebar-toggle" title="Hide Sidebar">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M15 7L10 12L15 17"/>
                                        </svg>
                                    </button>
                                </div>

                                <div class="drill-selector-grid">
                                    <div class="selector-header">
                                        <div class="search-filter">
                                            <input type="text" id="drill-search" placeholder="Search drills..." />
                                            <div class="category-filters">
                                                ${this._buildCategoryFilters()}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="drill-grid" id="drill-grid">
                                        <!-- Drill cards will be populated here -->
                                    </div>
                                </div>
                            </div>

                            <div class="drill-main-content" id="drill-main-content">
                                <button class="show-sidebar-btn" id="show-sidebar-btn" title="Show Sidebar">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M9 18l6-6-6-6"/>
                                    </svg>
                                </button>
                                <div class="chart-container">

                                    <canvas id="progress-chart"></canvas>
                                </div>

                                <div class="drill-stats" id="drill-stats"></div>
                            </div>
                        </div>
                    </div>

                    <!-- History Tab -->
                    <div id="history-content" class="tab-content">
                        <div class="history-controls">
                            <button id="clear-data" class="btn btn-danger">Clear All Data</button>
                        </div>

                        <div class="history-table">
                            <table id="history-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Drill</th>
                                        <th>Time</th>
                                        <th>Performance</th>
                                    </tr>
                                </thead>
                                <tbody id="history-tbody"></tbody>
                            </table>
                        </div>
                    </div>
                    ${mistakesTabContent}
                </div>

                <div class="progress-actions">
                    <button id="print-report" class="btn btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                        </svg>
                        Print Report
                    </button>
                    <button id="download-chart" class="btn btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        Download Chart
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    // Attach event listeners
    attachEventListeners() {
        document.getElementById('progress-btn')?.addEventListener('click', () => this.show());
        document.getElementById('close-progress')?.addEventListener('click', () => this.hide());

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.view));
        });

        document.getElementById('drill-search')?.addEventListener('input', (e) => {
            this.filterDrills(e.target.value);
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterByCategory(e.target.dataset.category));
        });

        document.getElementById('sidebar-toggle')?.addEventListener('click', () => this.toggleSidebar());
        document.getElementById('show-sidebar-btn')?.addEventListener('click', () => this.toggleSidebar());

        document.getElementById('print-report')?.addEventListener('click', () => this.progressShare.generatePrintableReport());
        document.getElementById('download-chart')?.addEventListener('click', () => this.progressShare.downloadChartImage());
        document.getElementById('clear-data')?.addEventListener('click', () => this.confirmClearData());

        // Mistakes management (only if enabled)
        if (this.progressTracker.enableMistakes) {
            document.getElementById('practice-mistakes')?.addEventListener('click', () => this.practiceAllMistakes());
            document.getElementById('clear-mistakes')?.addEventListener('click', () => this.confirmClearMistakes());
        }

        document.getElementById('progress-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'progress-modal') {
                this.hide();
            }
        });
    }

    show() {
        const modal = document.getElementById('progress-modal');
        modal.classList.remove('hidden');
        this.isVisible = true;
        this.updateContent();
        this.populateSelectors();
        this.switchTab(this.currentView);
    }

    hide() {
        const modal = document.getElementById('progress-modal');
        modal.classList.add('hidden');
        this.isVisible = false;
    }

    switchTab(view) {
        this.currentView = view;

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${view}-content`)?.classList.add('active');

        setTimeout(() => {
            if (view === 'drills') {
                this.initializeDrillChart();
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => this.filterByCategory(e.target.dataset.category));
                });
                // Auto-select first drill if none is selected yet
                const selected = document.querySelector('.drill-card.selected');
                if (!selected) {
                    const firstCard = document.querySelector('.drill-card');
                    if (firstCard) {
                        this.selectDrillCard(firstCard.dataset.drillKey, firstCard);
                        this.showDrillProgress(firstCard.dataset.drillKey);
                    }
                }
            } else if (view === 'mistakes' && this.progressTracker.enableMistakes) {
                this.renderMistakesMath();
            }
        }, 100);
    }

    updateContent() {
        const summary = this.progressTracker.getProgressSummary();

        document.getElementById('total-drills').textContent = summary.totalAttempts;
        document.getElementById('total-attempts').textContent = summary.totalQuestionsAnswered;
        document.getElementById('total-time').textContent = this.progressShare.formatTime(summary.totalTimeSpent);
        document.getElementById('avg-improvement').textContent = `${summary.averageImprovement || 0}%`;

        const inlineDrills = document.getElementById('inline-total-drills');
        if (inlineDrills) {
            inlineDrills.textContent = summary.totalAttempts;
            document.getElementById('inline-total-attempts').textContent = summary.totalQuestionsAnswered;
            document.getElementById('inline-total-time').textContent = this.progressShare.formatTime(summary.totalTimeSpent);
            document.getElementById('inline-avg-improvement').textContent = `${summary.averageImprovement || 0}%`;
        }

        const recentSessions = this.progressTracker.getRecentSessions(10);
        const sessionsHtml = recentSessions.map(session => {
            const date = new Date(session.timestamp);
            return `
                <div class="session-item">
                    <div class="session-date">${date.toLocaleDateString()}</div>
                    <div class="session-drill">${this.progressChart.getLevelNameFromKey(session.levelKey)}</div>
                    <div class="session-time">${this.progressShare.formatTime(session.time)}</div>
                </div>
            `;
        }).join('');

        document.getElementById('recent-sessions').innerHTML = sessionsHtml || '<p>No recent activity</p>';

        this.updateHistoryTable();

        if (this.progressTracker.enableMistakes) {
            this.updateMistakesTable();
        }
    }

    populateSelectors() {
        const allProgress = this.progressTracker.getAllProgress();
        this.populateDrillGrid(allProgress);
    }

    populateDrillGrid(allProgress) {
        const drillGrid = document.getElementById('drill-grid');
        if (!drillGrid) return;

        const drillKeys = Object.keys(allProgress);

        drillGrid.innerHTML = drillKeys.map(key => {
            const drill = allProgress[key];
            const drillName = this.progressChart.getLevelNameFromKey(key);
            const category = this.getDrillCategory(key);
            const rating = this.getPerformanceRating(drill.bestTime, key);

            const showRating = rating.class === 'rating-queen' || rating.class === 'rating-mastery';

            return `
                <div class="drill-card" data-drill-key="${key}" data-category="${category}">
                    <div class="drill-card-header">
                        <h4 class="drill-name">${drillName}</h4>
                        ${showRating ? `<div class="drill-rating ${rating.class}">${rating.emoji}</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');

        const cards = drillGrid.querySelectorAll('.drill-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const drillKey = card.dataset.drillKey;
                this.selectDrillCard(drillKey, card);
                this.showDrillProgress(drillKey);
            });
        });

    }

    // Get drill category by searching CONFIG.LEVEL_GROUPS
    getDrillCategory(key) {
        const config = window.CONFIG;
        if (config && config.LEVEL_GROUPS) {
            for (const [groupName, levels] of Object.entries(config.LEVEL_GROUPS)) {
                if (levels.some(level => level.key === key)) {
                    return groupName.toLowerCase().replace(/[^a-z0-9]/g, '_');
                }
            }
        }
        return 'other';
    }

    // Get performance rating using shared RatingUtils
    getPerformanceRating(totalTime, levelKey = null) {
        if (!totalTime) return { emoji: '⚪', class: 'rating-none' };

        if (window.RatingUtils) {
            try {
                const config = window.CONFIG;
                const rating = window.RatingUtils.getRating(totalTime, levelKey, config?.REQUIRED_STREAK || 15, config);
                return window.RatingUtils.toProgressUIFormat(rating);
            } catch (error) {
                console.warn('Error using RatingUtils:', error);
            }
        }

        if (window.StorageManager && window.StorageManager.getRating) {
            const rating = window.StorageManager.getRating(totalTime, levelKey);
            if (rating) {
                const emojiMap = {
                    'true-mastery': '💖',
                    'mastery': '🏆',
                    'expert': '⭐',
                    'developing': '🎯',
                    'beginner': '🌱'
                };
                return {
                    emoji: emojiMap[rating.key] || '📚',
                    class: `rating-${rating.key === 'true-mastery' ? 'queen' : rating.key}`
                };
            }
        }

        return { emoji: '📚', class: 'rating-beginner' };
    }

    selectDrillCard(drillKey, selectedCard) {
        document.querySelectorAll('.drill-card').forEach(card => {
            card.classList.remove('selected');
        });
        selectedCard.classList.add('selected');
    }

    filterDrills(searchText) {
        const cards = document.querySelectorAll('.drill-card');
        const lowercaseSearch = searchText.toLowerCase();

        cards.forEach(card => {
            const drillName = card.querySelector('.drill-name').textContent.toLowerCase();
            card.style.display = drillName.includes(lowercaseSearch) ? 'block' : 'none';
        });
    }

    filterByCategory(category) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });

        document.querySelectorAll('.drill-card').forEach(card => {
            if (category === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = card.dataset.category === category ? 'block' : 'none';
            }
        });
    }

    initializeDrillChart() {
        const chartContainer = document.querySelector('#drills-content .chart-container');
        if (!chartContainer) return;

        let canvas = document.getElementById('progress-chart');
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.id = 'progress-chart';
            chartContainer.appendChild(canvas);
        } else if (canvas.parentElement !== chartContainer) {
            chartContainer.appendChild(canvas);
        }

        this.progressChart.canvas = canvas;
        this.progressChart.ctx = canvas.getContext('2d');
    }

    toggleSidebar() {
        const sidebar = document.getElementById('drill-sidebar');
        const mainContent = document.getElementById('drill-main-content');
        const toggleBtn = document.getElementById('sidebar-toggle');
        const showSidebarBtn = document.getElementById('show-sidebar-btn');

        if (sidebar && mainContent) {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');

            const isCollapsed = sidebar.classList.contains('collapsed');

            if (toggleBtn) {
                const svg = toggleBtn.querySelector('svg path');
                svg.setAttribute('d', isCollapsed ? 'M9 18l6-6-6-6' : 'M15 7L10 12L15 17');
                toggleBtn.setAttribute('title', isCollapsed ? 'Show Sidebar' : 'Hide Sidebar');
            }

            if (showSidebarBtn) {
                showSidebarBtn.style.display = isCollapsed ? 'flex' : 'none';
            }
        }
    }

    showDrillProgress(levelKey) {
        if (!levelKey) return;

        const levelName = this.progressChart.getLevelNameFromKey(levelKey);

        this.initializeDrillChart();

        if (!this.progressChart.canvas || !this.progressChart.ctx) {
            console.error('Canvas not initialized');
            return;
        }

        this.progressChart.initChart(levelKey, levelName);

        const drill = this.progressTracker.getDrillProgress(levelKey);
        if (drill) {
            const rating = this.getPerformanceRating(drill.bestTime, levelKey);
            const statsHtml = `
                <div class="stats-header">
                    <h4>Performance Statistics</h4>
                    <div class="performance-badge ${rating.class}">
                        ${rating.emoji} ${rating.class.replace('rating-', '').replace('-', ' ').toUpperCase()}
                    </div>
                </div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-label">Best Time</div>
                        <div class="stat-value">${this.progressShare.formatTime(drill.bestTime)}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">⏱️</div>
                        <div class="stat-label">Average Time</div>
                        <div class="stat-value">${this.progressShare.formatTime(Math.round(drill.averageTime))}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">📚</div>
                        <div class="stat-label">Total Attempts</div>
                        <div class="stat-value">${drill.totalAttempts}</div>
                    </div>
                    ${drill.firstAttemptTime && drill.bestTime ? `
                    <div class="stat-item">
                        <div class="stat-icon">🚀</div>
                        <div class="stat-label">Overall Progress</div>
                        <div class="stat-value">${((drill.firstAttemptTime - drill.bestTime) / drill.firstAttemptTime * 100).toFixed(1)}% faster</div>
                    </div>
                    ` : ''}
                </div>
            `;
            document.getElementById('drill-stats').innerHTML = statsHtml;
        }
    }

    updateHistoryTable() {
        const sessions = this.progressTracker.getRecentSessions(500);
        const tbody = document.getElementById('history-tbody');

        if (tbody) {
            const tableRows = sessions.map(session => {
                const date = new Date(session.timestamp);
                const drill = this.progressTracker.getDrillProgress(session.levelKey);
                const isBest = drill && session.time === drill.bestTime;

                return `<tr>` +
                    `<td class="date-column">${date.toLocaleString()}</td>` +
                    `<td class="drill-column">${this.progressChart.getLevelNameFromKey(session.levelKey)}</td>` +
                    `<td class="time-column">${this.progressShare.formatTime(session.time)}</td>` +
                    `<td class="performance-column">${isBest ? '⭐ Personal Best!' : `${(session.averageTimePerQuestion / 1000).toFixed(1)}s/question`}</td>` +
                    `</tr>`;
            }).join('');

            tbody.innerHTML = tableRows;
        }
    }

    confirmClearData() {
        if (confirm('Are you sure you want to clear all progress data? This action cannot be undone.')) {
            if (confirm('This will permanently delete all your progress. Are you absolutely sure?')) {
                this.progressTracker.resetData();
                this.clearBestTimes();
                alert('All progress data has been cleared.');
                this.updateContent();
                this.populateSelectors();
            }
        }
    }

    clearBestTimes() {
        // Individual bestTime keys no longer exist.
        // Blob is cleared by progressTracker.resetData() in confirmClearData().
    }

    // --- Mistakes methods (only called when enableMistakes is true) ---

    updateMistakesTable() {
        const mistakes = this.progressTracker.getAllMistakes();
        const tbody = document.getElementById('mistakes-tbody');
        const noMistakesMessage = document.getElementById('no-mistakes-message');
        const mistakesTable = document.querySelector('.mistakes-table');

        if (tbody && mistakesTable && noMistakesMessage) {
            if (mistakes.length === 0) {
                mistakesTable.style.display = 'none';
                noMistakesMessage.classList.remove('hidden');
            } else {
                mistakesTable.style.display = 'block';
                noMistakesMessage.classList.add('hidden');

                const tableRows = mistakes.map(mistake => {
                    const date = new Date(mistake.timestamp);
                    return `<tr data-mistake-id="${mistake.id}">` +
                        `<td class="level-column">${mistake.levelName}</td>` +
                        `<td class="question-column"><div class="math-display" data-latex="${mistake.question.replace(/"/g, '&quot;')}">${mistake.question}</div></td>` +
                        `<td class="correct-answer-column"><div class="math-display" data-latex="${mistake.correctAnswer.replace(/"/g, '&quot;')}">${mistake.correctAnswer}</div></td>` +
                        `<td class="student-answer-column"><div class="math-display" data-latex="${mistake.studentAnswer.replace(/"/g, '&quot;')}">${mistake.studentAnswer}</div></td>` +
                        `<td class="date-column">${date.toLocaleDateString()}</td>` +
                        `<td class="actions-column">
                            <button class="btn btn-small btn-danger delete-mistake-btn" data-mistake-id="${mistake.id}" title="Remove this mistake">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                                </svg>
                            </button>
                        </td>` +
                        `</tr>`;
                }).join('');

                tbody.innerHTML = tableRows;

                tbody.querySelectorAll('.delete-mistake-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        this.deleteMistake(e.currentTarget.dataset.mistakeId);
                    });
                });
            }
        }
    }

    renderMistakesMath() {
        if (!this.MQ) return;

        document.querySelectorAll('#mistakes-tbody .math-display').forEach(element => {
            try {
                let latex = element.getAttribute('data-latex');
                if (!latex) latex = element.textContent.trim();
                element.textContent = '';
                const staticMath = this.MQ.StaticMath(element);
                staticMath.latex(latex);
            } catch (error) {
                console.warn('Error rendering math:', error);
            }
        });
    }

    deleteMistake(mistakeId) {
        if (confirm('Are you sure you want to remove this mistake from your list?')) {
            const success = this.progressTracker.deleteMistake(mistakeId);
            if (success) {
                this.updateMistakesTable();
            } else {
                alert('Error deleting mistake. Please try again.');
            }
        }
    }

    practiceAllMistakes() {
        const mistakes = this.progressTracker.getAllMistakes();

        if (mistakes.length <= 5) {
            alert('You need at least 5 mistakes to practise. Play more levels to build your mistake list.');
            return;
        }

        this.hide();

        const mistakesLevel = {
            key: 'practiceAllMistakes',
            name: 'Practise Mistakes',
            value: 'mistakes',
            type: 'mistakes'
        };

        if (window.gameController) {
            window.gameController.startGame(mistakesLevel);
        } else {
            alert('Game controller not available. Please refresh the page and try again.');
        }
    }

    confirmClearMistakes() {
        if (confirm('Are you sure you want to clear all recorded mistakes? This action cannot be undone.')) {
            const success = this.progressTracker.clearAllMistakes();
            if (success) {
                this.updateMistakesTable();
                alert('All mistakes have been cleared.');
            } else {
                alert('Error clearing mistakes. Please try again.');
            }
        }
    }
}
