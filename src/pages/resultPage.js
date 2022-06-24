'use strict';

import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import {
  clearAllDataFromStorage,
  getNumberOfCorrectsFromStorage,
} from '../lib/storage.js';
import { createResultElement } from '../views/resultView.js';
import { createProgressElement } from '../views/userProgressView.js';

export const initResultPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const userProgress = createProgressElement(
    quizData.questions.length,
    quizData.currentQuestionIndex + 1,
    getNumberOfCorrectsFromStorage()
  );

  const resultElement = createResultElement(quizData.questions);

  userInterface.appendChild(userProgress);
  userInterface.appendChild(resultElement);
  clearAllDataFromStorage();
};
