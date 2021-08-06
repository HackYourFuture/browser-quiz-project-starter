'use strict';

import { handleNextQuestion ,handleCheckAnswer } from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};

export const checkAnswer = (event) => {
  handleCheckAnswer(event.target);
};