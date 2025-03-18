import { Statistics } from '../utils/Statistics.js';

export class QuizCard {
    constructor() {
        this.template = document.createElement('div');
        this.template.className = 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow';
    }

    render(quizData) {
        if (!quizData) {
            console.error('No quiz data provided');
            return null;
        }

        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow';
        
        card.innerHTML = `
            <div class="space-y-4">
                <h3 class="text-xl font-bold text-gray-800">${quizData.title}</h3>
                <p class="text-gray-600">${quizData.description || ''}</p>
                <div class="mt-4">
                    <h4 class="font-semibold text-gray-700 mb-2">Hints:</h4>
                    <ul class="list-disc pl-5 text-gray-600 space-y-1">
                        ${quizData.hints?.map(hint => `<li>${hint}</li>`).join('') || ''}
                    </ul>
                </div>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-sm text-gray-500">
                        ${quizData.questions?.length || 0} questions
                    </span>
                    <button class="start-quiz-btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Start Quiz
                    </button>
                </div>
            </div>
        `;

        const startButton = card.querySelector('.start-quiz-btn');
        startButton.addEventListener('click', () => this.startQuiz(quizData));

        return card;
    }

    startQuiz(quizData) {
        if (!quizData.questions || quizData.questions.length === 0) {
            alert('No questions available for this quiz');
            return;
        }

        console.log(`Starting quiz with ${quizData.questions.length} questions`);
        
        this.questions = quizData.questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalQuestions = this.questions.length;
        this.quizData = quizData; // Store quiz data for statistics
        
        this.showQuestion(this.currentQuestionIndex);
    }

    showQuestion(index) {
        const question = this.questions[index];
        const container = document.getElementById('questionDisplay');
        
        container.innerHTML = `
            <div class="space-y-6">
                <div class="flex justify-between items-center">
                    <div class="space-y-1">
                        <h3 class="text-xl font-bold text-gray-800">Question ${index + 1} of ${this.questions.length}</h3>
                        <div class="flex items-center space-x-2">
                            <div class="h-2 bg-blue-100 rounded-full w-48">
                                <div class="h-2 bg-blue-600 rounded-full" style="width: ${(index + 1) / this.questions.length * 100}%"></div>
                            </div>
                            <span class="text-sm text-gray-500">Progress: ${Math.round((index + 1) / this.questions.length * 100)}%</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <span class="text-2xl font-bold text-blue-600">${this.score}</span>
                        <span class="text-gray-500">/${this.questions.length}</span>
                    </div>
                </div>
                
                <div class="p-6 bg-gray-50 rounded-lg">
                    <p class="text-lg text-gray-800">${question.text}</p>
                </div>

                <form id="questionForm" class="space-y-4">
                    ${Object.entries(question.options).map(([key, value]) => `
                        <label class="flex items-center p-4 bg-white border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <input 
                                type="${question.type === 'multiple' ? 'checkbox' : 'radio'}"
                                name="answer"
                                value="${key}"
                                class="h-5 w-5 text-blue-600 focus:ring-blue-500 cursor-pointer"
                            >
                            <span class="ml-3 text-gray-700">${key}. ${value}</span>
                        </label>
                    `).join('')}
                    
                    <div id="feedback" class="hidden mt-4 p-4 rounded-lg"></div>

                    <div class="flex justify-between items-center pt-4">
                        ${index > 0 ? `
                            <button type="button" class="prev-btn px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
                                ← Previous
                            </button>
                        ` : '<div></div>'}
                        <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            ${index === this.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        </button>
                    </div>
                </form>
            </div>
        `;

        this.setupQuestionEventListeners(container, question);
    }

    setupQuestionEventListeners(container, question) {
        const form = container.querySelector('#questionForm');
        const prevBtn = container.querySelector('.prev-btn');
        const feedback = container.querySelector('#feedback');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.currentQuestionIndex--;
                this.showQuestion(this.currentQuestionIndex);
            });
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const answers = formData.getAll('answer');
            
            if (answers.length === 0) {
                feedback.innerHTML = `
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm text-yellow-700">Please select an answer before continuing</p>
                            </div>
                        </div>
                    </div>
                `;
                feedback.classList.remove('hidden');
                return;
            }

            const isCorrect = this.checkAnswer(answers, question);
            
            feedback.innerHTML = isCorrect ? `
                <div class="bg-green-50 border-l-4 border-green-400 p-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-green-700">Correct! Well done!</p>
                        </div>
                    </div>
                </div>
            ` : `
                <div class="bg-red-50 border-l-4 border-red-400 p-4">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-red-700">Incorrect. The correct answer was: ${question.correctAnswer}</p>
                        </div>
                    </div>
                </div>
            `;
            feedback.classList.remove('hidden');

            if (isCorrect) this.score++;

            // Wait for 1.5 seconds before moving to next question
            setTimeout(() => {
                if (this.currentQuestionIndex < this.questions.length - 1) {
                    this.currentQuestionIndex++;
                    this.showQuestion(this.currentQuestionIndex);
                } else {
                    this.showFinalScore();
                }
            }, 1500);
        });
    }

    checkAnswer(selectedAnswers, question) {
        if (question.type === 'single') {
            return selectedAnswers[0] === question.correctAnswer;
        } else {
            const correctAnswers = new Set(question.correctAnswer);
            const selected = new Set(selectedAnswers);
            return (
                selected.size === correctAnswers.size && 
                [...selected].every(answer => correctAnswers.has(answer))
            );
        }
    }

    showFinalScore() {
        const quizInterface = document.getElementById('quizInterface');
        const quizResult = document.getElementById('quizResult');
        const quizCards = document.getElementById('quizCards');
        
        // Save statistics
        const stats = Statistics.saveQuizAttempt(this.quizData, this.score, this.questions.length);
        const chapterStats = Statistics.getChapterStats(this.quizData.id);
        
        quizInterface.classList.add('hidden');
        quizResult.classList.remove('hidden');
        
        quizResult.innerHTML = `
            <div class="text-center space-y-6">
                <h3 class="text-2xl font-bold text-gray-800">Quiz Completed!</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="p-4 bg-blue-50 rounded-lg">
                        <p class="text-4xl font-bold text-blue-600">${this.score} / ${this.questions.length}</p>
                        <p class="text-lg text-blue-800">Current Score</p>
                    </div>
                    ${chapterStats ? `
                        <div class="p-4 bg-green-50 rounded-lg">
                            <p class="text-4xl font-bold text-green-600">${chapterStats.highestScore}%</p>
                            <p class="text-lg text-green-800">Chapter Best</p>
                        </div>
                        <div class="p-4 bg-purple-50 rounded-lg">
                            <p class="text-4xl font-bold text-purple-600">${chapterStats.attempts}</p>
                            <p class="text-lg text-purple-800">Total Attempts</p>
                        </div>
                    ` : ''}
                </div>
                <p class="text-gray-600">You got ${Math.round((this.score/this.questions.length) * 100)}% correct</p>
                <div class="space-x-4">
                    <button class="restart-quiz-btn px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                        Restart Quiz
                    </button>
                    <button class="return-menu-btn px-6 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                        Return to Menu
                    </button>
                </div>
            </div>
        `;

        const restartButton = quizResult.querySelector('.restart-quiz-btn');
        const returnButton = quizResult.querySelector('.return-menu-btn');

        restartButton.addEventListener('click', () => {
            quizResult.classList.add('hidden');
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.showQuestion(this.currentQuestionIndex);
            quizInterface.classList.remove('hidden');
        });

        returnButton.addEventListener('click', () => {
            quizResult.classList.add('hidden');
            quizCards.classList.remove('hidden');
            location.reload(); // Reset the entire app state
        });
    }
}
