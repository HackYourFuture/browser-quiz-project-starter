import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  // testing questions page for now, we need to change this back to welcome page initiator once it's ready
  initQuestionPage();
};

window.addEventListener('load', loadApp);
