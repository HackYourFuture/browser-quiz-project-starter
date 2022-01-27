'use strict';

import { quizData } from './data.js';
import { router } from './router.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;
  quizData.wrongSum = 0;
  quizData.correctSum = 0;

  router('welcome');
};

window.addEventListener('load', loadApp);
