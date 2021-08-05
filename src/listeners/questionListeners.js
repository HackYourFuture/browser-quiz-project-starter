'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';
import { handleCheckAnswer } from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};

export const checkAnswer = () => {
  handleCheckAnswer();
};