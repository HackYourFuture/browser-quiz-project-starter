import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import { startCountdown } from '../views/countdown.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', () => {
      setInterval(startCountdown, 1000);
    });
};


const startQuiz = () => {
  initQuestionPage();
};
