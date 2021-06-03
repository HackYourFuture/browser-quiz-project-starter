'use strict';

import { quizData } from '../data.js';
import handleInitializer from '../handlers/handleInitializer.js';
import initializeLandingPage from '../handlers/initializeLandingPage.js';

const resetTheQuiz = () => {
  quizData.currentQuestionIndex = 0;
  quizData.correctAnswerScore = 0;
  quizData.selectedQuestionsIndex = [];
  initializeLandingPage();
};

export default resetTheQuiz;
