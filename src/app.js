'use strict';

import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { getAnswersFromStorage } from './lib/storage.js';

const loadApp = () => {
  const answers = getAnswersFromStorage();
  if (answers.length === 0) {
    quizData.currentQuestionIndex = 0;
    initWelcomePage();
  } else {
    quizData.currentQuestionIndex = answers.length;
    initQuestionPage();
  }
};

window.addEventListener('load', loadApp);
