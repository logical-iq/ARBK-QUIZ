export class Statistics {
    static getStats() {
        return JSON.parse(localStorage.getItem('quizStats')) || {
            totalAttempts: 0,
            totalCorrect: 0,
            chapterStats: {},
            history: []
        };
    }

    static saveQuizAttempt(quizData, score, totalQuestions) {
        const stats = this.getStats();
        const timestamp = new Date().toISOString();
        const percentage = Math.round((score / totalQuestions) * 100);

        const attempt = {
            timestamp,
            chapterId: quizData.id,
            chapterTitle: quizData.title,
            score,
            totalQuestions,
            percentage
        };

        // Update overall stats
        stats.totalAttempts++;
        stats.totalCorrect += score;

        // Update chapter specific stats
        if (!stats.chapterStats[quizData.id]) {
            stats.chapterStats[quizData.id] = {
                attempts: 0,
                highestScore: 0,
                totalCorrect: 0
            };
        }

        const chapterStats = stats.chapterStats[quizData.id];
        chapterStats.attempts++;
        chapterStats.totalCorrect += score;
        chapterStats.highestScore = Math.max(chapterStats.highestScore, percentage);

        // Add to history (keep last 50 attempts)
        stats.history.unshift(attempt);
        stats.history = stats.history.slice(0, 50);

        localStorage.setItem('quizStats', JSON.stringify(stats));
        return stats;
    }

    static getChapterStats(chapterId) {
        const stats = this.getStats();
        return stats.chapterStats[chapterId] || null;
    }

    static clearStats() {
        localStorage.removeItem('quizStats');
    }
}
