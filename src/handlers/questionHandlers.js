'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

export const nextQuestionIndex = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
}
const createQuestionDOM = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  
  return createQuestionElement(currentQuestion);
}

const clearQuestionContainer = () => {
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(createQuestionDOM());
}
export const showCurrentQuestion = () => {
  createQuestionDOM();
  clearQuestionContainer();
}
