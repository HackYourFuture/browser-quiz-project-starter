import { clearElement } from '../helpers/dom-helpers.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById('root');
  clearElement(userInterface);

  userInterface.innerHTML = '';

  const { startQuizButton } = createWelcomeElement(userInterface);
  startQuizButton.addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
};
