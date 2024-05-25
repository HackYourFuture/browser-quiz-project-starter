import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
  if (quizData.currentQuestionIndex===7) {
    console.log("first")
  }
};

window.addEventListener('load', loadApp);
