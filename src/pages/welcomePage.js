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
  const rocketGif = `<img src="./public/images/rocket.gif" width="100%" height='100%' border-radius= '10px;' frameBorder="0" class="startGif" allowFullScreen></img>`

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = "";
  userInterface.innerHTML = rocketGif;
  setTimeout(() => {
    initQuestionPage();
  }, 5000);

};
