'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

export const incrementQuestionIndex = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
}
const createQuestionDOM = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  
  return createQuestionElement(currentQuestion);
}

const clearQuestionContainer = () => {
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  return questionContainer;
}

const addToQuestionContainer = () => {
  const questionDOM = createQuestionDOM();
  const questionContainer = clearQuestionContainer();
  questionContainer.appendChild(questionDOM);
}


export const showCurrentQuestion = () => {
  createQuestionDOM();
  clearQuestionContainer();
  addToQuestionContainer();
}
