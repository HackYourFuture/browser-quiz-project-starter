'use strict';

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.append(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  const second = `<img src="./public/images/rocket.gif" width="500" frameBorder="0" class="startGif" allowFullScreen></img>`

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";
  userInterface.innerHTML = second;
  setTimeout(() => {
    initQuestionPage();
  }, 5000);

};
