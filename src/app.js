import { initQuestionPage } from './pages/initQuestionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

document.addEventListener('DOMContentLoaded', () => {
  initWelcomePage();
  initQuestionPage();
});
