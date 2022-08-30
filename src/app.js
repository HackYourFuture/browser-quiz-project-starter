'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { finalSummaryPage } from './pages/finalSummaryPage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  // console.log(quizData)
  // initWelcomePage();
  finalSummaryPage()
};

window.addEventListener('load', loadApp);
