import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = ''; 

  const welcomeElement = createWelcomeElement(); // creat element
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz); // make the button start quiz
};

const startQuiz = () => { // when you click start quiz   the function start working
  initQuestionPage();
};
