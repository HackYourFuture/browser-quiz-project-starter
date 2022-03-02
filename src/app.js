import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  const appRoot = document.getElementById('app-root');
  quizData.currentQuestionIndex = 0;

  initWelcomePage(appRoot);
};

window.addEventListener('load', loadApp);
