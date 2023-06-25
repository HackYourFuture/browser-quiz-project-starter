import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

// const loadApp =

window.addEventListener('load', () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
});
