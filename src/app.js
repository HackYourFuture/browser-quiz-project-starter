'use strict';

import { quizData } from './data.js';
import { initFinishPage } from './pages/finishPage.js';
import { initQuestionPage } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  const storedIndex = localStorage.getItem('currentQuestionIndex');
  quizData.currentQuestionIndex = storedIndex ? parseInt(storedIndex) : 0;
  const storedFinalScore = localStorage.getItem('finalScore');
  quizData.finalScore = storedFinalScore ? parseInt(storedFinalScore) : 0;
  const selectedAnswer = localStorage.getItem('selectedAnswer');


  if (parseInt(storedIndex) > 9) { // storedIndex==9 -> refresh page -> it goes finish page 
    initFinishPage();
  } else if (storedIndex) {
    initQuestionPage(storedIndex);
  }
  else {
    initWelcomePage();
  }

};

window.addEventListener('load', loadApp);
