'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement, createReferenceElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement, getKeyByValue, checkAnswer } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

export const incrementQuestionIndex = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
};

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion);
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionElement);
};

export const showCurrentReference = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const currentReference = currentQuestion.links;
  const referenceElement = createReferenceElement(currentReference);
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  questionContainer.appendChild(referenceElement);
};

export const clearQuizContainer = () => {
  const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
  clearDOMElement(quizContainer);
};

export function handleSelectedAnswer(evt) {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  currentQuestion.selected = getKeyByValue(currentQuestion.answers, evt.target.textContent);
};

export function handleQuestionResult() {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  return checkAnswer(currentQuestion.selected, currentQuestion.correct);
};
