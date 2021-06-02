'use strict';

import { quizData } from '../data.js';
import handleInitializer from '../handlers/handleInitializer.js';

const resetTheQuiz = () => {
  quizData.currentQuestionIndex = 0;
  quizData.correctAnswerScore = 0;
  quizData.selectedQuestionsIndex = [];
  handleInitializer();
};

export default resetTheQuiz;
