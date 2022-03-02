import { clearElement } from '../helpers/dom-helpers.js';
import { createWelcomeView } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById('user-interface');
  clearElement(userInterface);

  const { welcomeView, startQuizBtn } = createWelcomeView();
  userInterface.appendChild(welcomeView);

  startQuizBtn.addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
};
