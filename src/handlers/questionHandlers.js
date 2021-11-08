'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement, getKeyByValue } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

export const nextQuestionIndex = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
}

const createQuestionDOM = () => {  
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

const selectAnswer = (e) => {
    currentQuestion.selected =  getKeyByValue(currentQuestion.answers, e.target.innerHTML)
    console.log(currentQuestion)
}

document.addEventListener('click', selectAnswer) 

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  showCurrentQuestion();
};
