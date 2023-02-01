//import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  initWelcomePage();
};

window.addEventListener('load', loadApp);
