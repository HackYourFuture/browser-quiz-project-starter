import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

// const loadApp = 

window.addEventListener('load', () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
}); //run the loadApp function when the html and script loads into the browser