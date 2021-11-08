'use strict';

import { handleNextQuestion,handleSelectedAnswer } from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  handleNextQuestion();
};
export const selectedAnswer = ()=> {
  handleSelectedAnswer()
}