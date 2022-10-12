'use strict';

import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  const storedIndex = localStorage.getItem('currentQuestionIndex');
  quizData.currentQuestionIndex = storedIndex ? parseInt(storedIndex) : 0;
  const storedFinalScore = localStorage.getItem('finalScore');
  quizData.finalScore = storedFinalScore ? parseInt(storedFinalScore) : 0;
  const answers = localStorage.getItem('selectedAnswer');
  if (!answers) {
    localStorage.setItem('selectedAnswers', JSON.stringify([]));
  }
  if (storedIndex) {
    initQuestionPage();
  }
  else {
    initQuestionPage();
  }

};

window.addEventListener('load', loadApp);
