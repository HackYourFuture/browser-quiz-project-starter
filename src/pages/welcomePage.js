'use strict';

import { createWelcomeElement } from '../views/welcomeView.js';
import { router } from '../router.js';
import {START_QUIZ_BUTTON_ID} from '../constants.js';

export const welcomePage = (userInterface) => {
  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', function() {router('question')});
};
