'use strict';

import {
  showCurrentQuestion,
  incrementQuestionIndex,
  showCurrentScore,
  deleteQuestionCard,
  clearQuizContainer,
  handleSelectedAnswer,
  handleQuestionResult,
} from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  incrementQuestionIndex();
  showCurrentQuestion();
  showCurrentScore();
  deleteQuestionCard();
};

export const selectedAnswer = (e) => {
  handleSelectedAnswer(e);
  handleQuestionResult();
};
