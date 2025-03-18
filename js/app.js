import { QuizCard } from './components/Card.js';
import { quizData } from './data/quizData.js';
import { Statistics } from './utils/Statistics.js';

class App {
    constructor() {
        this.allQuestions = [];
        this.compileAllQuestions();
        this.initializeEventListeners();
        this.loadQuizzes();
    }

    initializeEventListeners() {
        const randomizeBtn = document.getElementById('randomizeBtn');
        const startAllBtn = document.getElementById('startAllBtn');
        const modeSelect = document.getElementById('quizMode');

        randomizeBtn.addEventListener('click', () => this.randomizeQuizzes());
        startAllBtn.addEventListener('click', () => this.startAllQuestions());
        modeSelect.addEventListener('change', (e) => this.handleModeChange(e.target.value));
    }

    compileAllQuestions() {
        this.allQuestions = quizData.chapters.reduce((acc, chapter) => {
            // Add chapter reference to each question
            const questionsWithChapter = chapter.questions.map(q => ({
                ...q,
                chapterTitle: chapter.title,
                chapterId: chapter.id
            }));
            return [...acc, ...questionsWithChapter];
        }, []);
    }

    startAllQuestions() {
        const quizInterface = document.getElementById('quizInterface');
        const quizCards = document.getElementById('quizCards');
        
        // Hide cards and show quiz interface
        quizCards.classList.add('hidden');
        quizInterface.classList.remove('hidden');

        // Initialize quiz with all questions
        const card = new QuizCard();
        const combinedQuiz = {
            id: "all",
            title: "Complete Quiz",
            description: "All chapters combined",
            questions: this.allQuestions,
            hints: ["Answer all questions from all chapters"]
        };
        
        card.startQuiz(combinedQuiz);
    }

    // Start a random subset of questions
    startRandomQuestions() {
        // Get a random selection of 10 questions
        const randomQuestions = [...this.allQuestions]
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);

        const quizInterface = document.getElementById('quizInterface');
        const quizCards = document.getElementById('quizCards');
        
        // Hide cards and show quiz interface
        quizCards.classList.add('hidden');
        quizInterface.classList.remove('hidden');

        // Initialize quiz with random questions
        const card = new QuizCard();
        const randomQuiz = {
            id: "random",
            title: "Random Quiz",
            description: "Random selection of questions",
            questions: randomQuestions,
            hints: ["A random selection of questions from all chapters"]
        };
        
        card.startQuiz(randomQuiz);
    }

    // Start a quiz with incorrectly answered questions from previous attempts
    startMistakesQuiz() {
        const stats = Statistics.getStats();
        const mistakeQuestions = [];
        
        // Collect questions that were answered incorrectly in the past
        if (stats.history && stats.history.length > 0) {
            stats.history.forEach(attempt => {
                if (attempt.wrongQuestions && attempt.wrongQuestions.length > 0) {
                    attempt.wrongQuestions.forEach(wrongQ => {
                        // Find the question in allQuestions
                        const fullQuestion = this.allQuestions.find(q => 
                            q.id === wrongQ.id && q.chapterId === wrongQ.chapterId
                        );
                        if (fullQuestion && !mistakeQuestions.some(mq => mq.id === fullQuestion.id)) {
                            mistakeQuestions.push(fullQuestion);
                        }
                    });
                }
            });
        }
        
        if (mistakeQuestions.length === 0) {
            alert("No previously incorrectly answered questions found. Try taking some quizzes first!");
            return;
        }

        const quizInterface = document.getElementById('quizInterface');
        const quizCards = document.getElementById('quizCards');
        
        // Hide cards and show quiz interface
        quizCards.classList.add('hidden');
        quizInterface.classList.remove('hidden');

        // Initialize quiz with mistake questions
        const card = new QuizCard();
        const mistakesQuiz = {
            id: "mistakes",
            title: "Review Mistakes",
            description: "Questions you previously answered incorrectly",
            questions: mistakeQuestions,
            hints: ["Focus on these questions to improve your score"]
        };
        
        card.startQuiz(mistakesQuiz);
    }

    randomizeQuizzes() {
        const quizCards = document.getElementById('quizCards');
        const cardsArray = Array.from(quizCards.children);
        
        // Fisher-Yates shuffle algorithm
        for (let i = cardsArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
        }
        
        // Clear and re-append cards in new order
        quizCards.innerHTML = '';
        cardsArray.forEach(card => quizCards.appendChild(card));
    }

    handleModeChange(mode) {
        const startAllBtn = document.getElementById('startAllBtn');
        const randomizeBtn = document.getElementById('randomizeBtn');
        
        switch(mode) {
            case 'all':
                startAllBtn.textContent = "Start All Questions";
                startAllBtn.classList.remove('hidden');
                randomizeBtn.classList.add('hidden');
                break;
            case 'random':
                startAllBtn.textContent = "Start Random Quiz";
                startAllBtn.classList.remove('hidden');
                randomizeBtn.classList.add('hidden');
                startAllBtn.onclick = () => this.startRandomQuestions();
                break;
            case 'mistakes':
                startAllBtn.textContent = "Review Mistakes";
                startAllBtn.classList.remove('hidden');
                randomizeBtn.classList.add('hidden');
                startAllBtn.onclick = () => this.startMistakesQuiz();
                break;
            case 'chapter':
                startAllBtn.classList.add('hidden');
                randomizeBtn.classList.remove('hidden');
                this.loadQuizzes(); // Reset to original order
                break;
        }
    }

    loadQuizzes() {
        const quizCards = document.getElementById('quizCards');
        const questionCount = document.getElementById('questionCount');
        const stats = Statistics.getStats();
        
        // Update total questions count
        const totalQuestions = this.allQuestions.length;
        questionCount.textContent = `${totalQuestions} Total Questions`;
        
        // Use the imported quiz data
        console.log('Quiz data loaded:', quizData);
        
        if (!quizData || !quizData.chapters) {
            console.error('Failed to load quiz data or invalid format');
            quizCards.innerHTML = '<p class="text-red-500">Error loading quizzes</p>';
            return;
        }

        // Clear existing cards
        quizCards.innerHTML = '';

        // Create and append cards for each chapter
        quizData.chapters.forEach(chapter => {
            console.log(`Creating card for chapter ${chapter.id}: ${chapter.title} with ${chapter.questions.length} questions`);
            const card = new QuizCard();
            const cardElement = card.render(chapter);
            quizCards.appendChild(cardElement);
        });

        // Add statistics summary
        const statsCard = document.createElement('div');
        statsCard.className = 'col-span-full bg-white rounded-lg shadow-lg p-6';
        statsCard.innerHTML = `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-gray-800">Your Progress</h3>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div class="p-4 bg-blue-50 rounded-lg text-center">
                        <p class="text-2xl font-bold text-blue-600">${stats.totalAttempts}</p>
                        <p class="text-sm text-blue-800">Total Attempts</p>
                    </div>
                    <div class="p-4 bg-green-50 rounded-lg text-center">
                        <p class="text-2xl font-bold text-green-600">
                            ${stats.totalAttempts ? Math.round((stats.totalCorrect / (stats.totalAttempts * this.allQuestions.length)) * 100) : 0}%
                        </p>
                        <p class="text-sm text-green-800">Average Score</p>
                    </div>
                    <div class="p-4 bg-purple-50 rounded-lg text-center">
                        <p class="text-2xl font-bold text-purple-600">${Object.keys(stats.chapterStats).length}</p>
                        <p class="text-sm text-purple-800">Chapters Attempted</p>
                    </div>
                    <div class="p-4 bg-yellow-50 rounded-lg text-center cursor-pointer" onclick="document.getElementById('statsHistory').classList.toggle('hidden')">
                        <p class="text-2xl font-bold text-yellow-600">${stats.history.length}</p>
                        <p class="text-sm text-yellow-800">Recent Attempts</p>
                    </div>
                </div>
                <div id="statsHistory" class="hidden mt-4">
                    <h4 class="font-semibold text-gray-700 mb-2">Recent Activity</h4>
                    <div class="max-h-60 overflow-y-auto">
                        ${stats.history.map(attempt => `
                            <div class="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                                <div>
                                    <p class="text-sm font-medium text-gray-800">${attempt.chapterTitle}</p>
                                    <p class="text-xs text-gray-500">${new Date(attempt.timestamp).toLocaleString()}</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-sm font-medium text-blue-600">${attempt.score}/${attempt.totalQuestions}</p>
                                    <p class="text-xs text-gray-500">${attempt.percentage}%</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        quizCards.appendChild(statsCard);
    }

    getQuestionsForChapter(chapterId) {
        // In a real implementation, this would load from quizzes.json
        // For now, return an empty array to test the UI
        return [];
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new App();
});
