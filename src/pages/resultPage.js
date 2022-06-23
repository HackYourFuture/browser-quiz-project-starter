'use strict';

import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import { createResultElement } from '../views/resultView.js';

export const initResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const resultElement = createResultElement(quizData.questions);

  userInterface.appendChild(resultElement);
};
