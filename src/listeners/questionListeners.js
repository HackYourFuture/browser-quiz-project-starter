'use strict';

import { showCurrentQuestion, incrementQuestionIndex } from '../handlers/questionHandlers.js';
export const nextQuestion = () => {
  incrementQuestionIndex();
  showCurrentQuestion();
};
