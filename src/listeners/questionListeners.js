'use strict';

import { showCurrentQuestion, incrementQuestionIndex, clearQuizContainer, handleSelectedAnswer } from '../handlers/questionHandlers.js';

export const nextQuestion = () => {
  incrementQuestionIndex();
  showCurrentQuestion();
};
export const selectedAnswer = (e)=> {
  handleSelectedAnswer(e)
}
