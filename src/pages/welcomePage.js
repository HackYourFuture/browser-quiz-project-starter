'use strict';

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID, ACTIVE_BUTTON_ANIMATION} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';
import {setButtonActive} from './button.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', ()=>{
      setButtonActive(START_QUIZ_BUTTON_ID,startQuiz);
    });
};

const startQuiz = () => {
  initQuestionPage();
};
