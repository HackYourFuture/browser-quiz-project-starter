'use strict';

import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { finalSummaryPage } from './pages/finalSummaryPage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();

};

window.addEventListener('load', loadApp);
