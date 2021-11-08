'use strict';

import { showCurrentQuestion, nextQuestionIndex } from '../handlers/questionHandlers.js';
export const nextQuestion = () => {
  nextQuestionIndex();
  showCurrentQuestion();
};