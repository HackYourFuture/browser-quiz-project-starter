'use strict';

import { handleNextQuestion } from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};
export const displayUserAnswer = () => {
  const theAnswer = document.getElementsByClassName('answer-options');
  theAnswer.addEventListener('click', checkingUserAnswer);
};
