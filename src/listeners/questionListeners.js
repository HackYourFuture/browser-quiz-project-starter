'use strict';

import {
  showCurrentQuestion,
  incrementQuestionIndex,
  showCurrentReference,
  deleteQuestionCard,
  clearQuizContainer,
  handleSelectedAnswer,
  handleQuestionResult,
} from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  incrementQuestionIndex();
  showCurrentQuestion();
  showCurrentReference();
  deleteQuestionCard();
};

export const selectedAnswer = (e) => {
  handleSelectedAnswer(e);
  handleQuestionResult();
};
