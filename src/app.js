import { quizData } from './data.js';
import { loadPage } from './helpers/loadPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  loadPage(initWelcomePage, quizData);
};

window.addEventListener('load', loadApp);
