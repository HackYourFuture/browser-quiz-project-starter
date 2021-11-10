'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement, getKeyByValue } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

export const incrementQuestionIndex = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
}

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion);
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionElement);
}

export const clearQuizContainer = () => {
  const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
  clearDOMElement(quizContainer);
}

export function handleSelectedAnswer(evt) {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  currentQuestion.selected = getKeyByValue(currentQuestion.answers, evt.target.textContent)
}
