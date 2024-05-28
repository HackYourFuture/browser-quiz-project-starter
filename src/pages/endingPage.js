import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { createEnding } from '../views/endingView.js';

export const initEndingPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);
  const scoreTotal=createEnding();
  userinterface.appendChild(scoreTotal);
  document
  .getElementById(START_QUIZ_BUTTON_ID)
  .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  initQuestionPage();
};
