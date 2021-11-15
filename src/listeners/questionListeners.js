'use strict';

import {
  showCurrentQuestion,
  incrementQuestionIndex,
  deleteQuestionCard,
  showCurrentScore,
  handleSelectedAnswer,
  handleQuestionResult,
  showQuizResult
} from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  incrementQuestionIndex();
  showCurrentQuestion();
  deleteQuestionCard();
  showCurrentScore();
};

export const selectedAnswer = (e) => {
  handleSelectedAnswer(e);
  handleQuestionResult();
};

export const showResult = () => {
  showQuizResult();
}
