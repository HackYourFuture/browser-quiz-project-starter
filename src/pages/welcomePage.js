import { clearElement } from '../helpers/dom-helpers.js';
import { createWelcomeView } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = (appRoot) => {
  clearElement(appRoot);

  const welcomeView = createWelcomeView();
  appRoot.appendChild(welcomeView.root);

  welcomeView.startQuizBtn.addEventListener('click', () => startQuiz(appRoot));
};

const startQuiz = (appRoot) => {
  initQuestionPage(appRoot);
};
