'use strict';

import {
  showCurrentQuestion,
  incrementQuestionIndex,
  deleteQuestionCard,
  handleSelectedAnswer,
  handleQuestionResult,
} from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  incrementQuestionIndex();
  showCurrentQuestion();
  deleteQuestionCard();
};

export const selectedAnswer = (e) => {
  handleSelectedAnswer(e);
  handleQuestionResult();
};
