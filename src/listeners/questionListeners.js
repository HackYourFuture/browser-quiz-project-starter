'use strict';

import {
  showCurrentQuestion,
  incrementQuestionIndex,
  showCurrentReference,
  showCurrentScore,
  clearQuizContainer,
  handleSelectedAnswer,
  handleQuestionResult,
} from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  incrementQuestionIndex();
  showCurrentQuestion();
  showCurrentReference();
  showCurrentScore();
};

export const selectedAnswer = (e) => {
  handleSelectedAnswer(e);
  handleQuestionResult();
};
