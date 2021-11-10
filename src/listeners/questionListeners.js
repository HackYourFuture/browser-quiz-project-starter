'use strict';

import { showCurrentQuestion, incrementQuestionIndex, clearQuizContainer } from '../handlers/questionHandlers.js';
export const nextQuestion = () => {
  incrementQuestionIndex();
  showCurrentQuestion();
};
