/**
 * Leaderboard module.
 * Plain script — exposes window.Leaderboard class.
 * Handles fetching, submitting, and rendering leaderboard entries on the success screen.
 */
class Leaderboard {
    /**
     * Upsert the signed-in user's best time for a level.
     * @param {string} app - 'algebra' | 'mathsfacts' | 'trigfacts'
     * @param {string} levelKey
     * @param {number} bestTime - seconds
     * @param {Object} rating - { key, name } from StorageManager.getRating()
     */
    static async submitEntry(app, levelKey, bestTime, rating) {
        const user = window.supabaseUser;
        if (!user || !window.supabaseClient) return;

        const displayName = user.user_metadata?.full_name || user.user_metadata?.name || 'Anonymous';

        await window.supabaseClient
            .from('leaderboard_entries')
            .upsert({
                user_id: user.id,
                app,
                level_key: levelKey,
                best_time: bestTime,
                rating_key: rating.key,
                rating_name: rating.name,
                display_name: displayName,
                updated_at: new Date().toISOString()
            }, { onConflict: 'user_id,app,level_key' });
    }

    /**
     * Fetch top 10 entries for an app + level, ordered by best_time ascending.
     * Returns [] if Supabase is unavailable or the query fails.
     */
    static async fetchTop10(app, levelKey) {
        if (!window.supabaseClient) return [];

        const { data, error } = await window.supabaseClient
            .from('leaderboard_entries')
            .select('display_name, best_time, rating_key, rating_name, user_id')
            .eq('app', app)
            .eq('level_key', levelKey)
            .order('best_time', { ascending: true })
            .limit(10);

        if (error) {
            console.error('Leaderboard fetch error:', error);
            return [];
        }
        return data || [];
    }

    /**
     * Render the leaderboard into the success screen.
     * Idempotent — removes any previous leaderboard container first.
     * If submitParams is provided, awaits the upsert before fetching so the
     * current user's new record is included in the results.
     * @param {string} app
     * @param {string} levelKey
     * @param {string|null} currentUserId
     * @param {{ bestTime: number, rating: Object }|null} submitParams
     */
    static async renderOnSuccessScreen(app, levelKey, currentUserId, submitParams = null) {
        if (submitParams) {
            await this.submitEntry(app, levelKey, submitParams.bestTime, submitParams.rating)
                .catch(err => console.error('Leaderboard submit error:', err));
        }
        const existing = document.getElementById('leaderboard-card');
        if (existing) {
            existing.parentElement?.classList.remove('success-layout');
            existing.remove();
        }

        const entries = await this.fetchTop10(app, levelKey);

        const container = document.createElement('div');
        container.id = 'leaderboard-container';
        container.className = 'leaderboard-container';

        if (entries.length === 0) {
            container.innerHTML = '<p class="leaderboard-empty">Sign in to be the first on the leaderboard!</p>';
        } else {
            const ratingEmojis = {
                'true-mastery': '💖',
                'mastery': '🏆',
                'expert': '⭐',
                'developing': '🎯',
                'beginner': '🌱'
            };

            let html = '<h3 class="leaderboard-title">🏅 Top 10</h3>';
            html += '<ol class="leaderboard-list">';
            entries.forEach((entry, i) => {
                const isCurrentUser = currentUserId && entry.user_id === currentUserId;
                const emoji = ratingEmojis[entry.rating_key] || '📚';
                const timeFormatted = _leaderboardFormatTime(entry.best_time);
                const highlightClass = isCurrentUser ? ' leaderboard-entry-you' : '';
                const rankLabel = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;

                html += `<li class="leaderboard-entry${highlightClass}">
                    <span class="leaderboard-rank">${rankLabel}</span>
                    <span class="leaderboard-name">${_leaderboardEscapeHtml(entry.display_name)}${isCurrentUser ? ' <span class="leaderboard-you-badge">you</span>' : ''}</span>
                    <span class="leaderboard-time">${timeFormatted}</span>
                    <span class="leaderboard-rating-emoji">${emoji}</span>
                </li>`;
            });
            html += '</ol>';
            container.innerHTML = html;
        }

        // Wrap in a card and insert as a sibling after the success screen
        const card = document.createElement('div');
        card.id = 'leaderboard-card';
        card.className = 'leaderboard-card';
        card.appendChild(container);

        const successScreen = document.getElementById('success-screen');
        if (successScreen) {
            successScreen.after(card);
            successScreen.parentElement.classList.add('success-layout');
        }
    }
}

function _leaderboardFormatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}:${String(secs).padStart(2, '0')}` : `${secs}s`;
}

function _leaderboardEscapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
