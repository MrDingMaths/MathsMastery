/**
 * shared/timer.js
 * Game timer with pause/resume — shared across all three apps.
 * Uses 100ms interval for accurate display.
 * Times are tracked and returned in milliseconds.
 */
export class Timer {
    constructor(displayElement) {
        this.display = displayElement;
        this.reset();
        this.isPaused = false;
    }

    reset() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.startTime = 0;
        this.ms = 0;
        this.isPaused = false;
        if (this.display) {
            this.display.textContent = this.formatTime(0);
        }
    }

    start() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
        this.startTime = Date.now();
        this.ms = 0;
        this.isPaused = false;
        if (this.display) {
            this.display.textContent = this.formatTime(0);
        }
        this.interval = setInterval(() => {
            this.ms = Date.now() - this.startTime;
            if (this.display) {
                this.display.textContent = this.formatTime(this.ms);
            }
        }, 100);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    pause() {
        this.stop();
        this.isPaused = true;
    }

    resume() {
        if (this.isPaused && this.startTime) {
            const pausedMs = this.ms;
            this.startTime = Date.now() - pausedMs;
            this.isPaused = false;
            this.interval = setInterval(() => {
                this.ms = Date.now() - this.startTime;
                if (this.display) {
                    this.display.textContent = this.formatTime(this.ms);
                }
            }, 100);
        }
    }

    getMs() {
        return this.ms;
    }

    // Accepts milliseconds. precision: 0=whole seconds (default), 1=tenths, 2=hundredths
    formatTime(ms, precision = 0) {
        if (isNaN(ms) || ms < 0) ms = 0;
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const secs = (totalSeconds % 60).toString().padStart(2, '0');
        if (precision === 2) {
            const cs = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
            return minutes > 0 ? `${minutes}:${secs}.${cs}` : `${secs}.${cs}s`;
        } else if (precision === 1) {
            const tenths = Math.floor((ms % 1000) / 100);
            return minutes > 0 ? `${minutes}:${secs}.${tenths}` : `${secs}.${tenths}s`;
        }
        return minutes > 0 ? `${minutes}:${secs}` : `${secs}s`;
    }
}
