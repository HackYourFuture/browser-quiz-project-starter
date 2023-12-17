import '../public/style.scss';
import '../public/questionPage.scss';
import '../public/fireworks.scss';
import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);
