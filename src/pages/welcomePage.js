import { clearElement } from '../helpers/dom-helpers.js';
import { createWelcomeView } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const root = document.getElementById('root');
  clearElement(root);

  const { startQuizButton } = createWelcomeView(root);
  startQuizButton.addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
};
