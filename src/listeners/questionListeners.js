'use strict';

import { handleNextQuestion, handleSelectedAnswer, handleQuestionResult } from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};

export const selectedAnswer = (e) => {
  handleSelectedAnswer(e)
};

export const questionResult = () => {
  handleQuestionResult()
};
