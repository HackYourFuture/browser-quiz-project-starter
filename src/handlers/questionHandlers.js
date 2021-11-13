'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement, getKeyByValue, checkAnswer, getCardElements, getCurrentItem, getInactiveCardElements } from '../utils/DOMUtils.js';
import { quizData, animationData } from '../data.js';

export const incrementQuestionIndex = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
};

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  deleteQuestionCard();
};

export const deleteQuestionCard = () => {
  const card = getCardElements();
  let currentItem = getCurrentItem();
  const inactive = getInactiveCardElements();

  animationData.i += 1;
  animationData.step += 10;
  animationData.layer -= 1;

  if (animationData.i < card.length) {
    const nextItem = card[animationData.i - 1];

    currentItem = nextItem.classList.add("active");
    document.getElementById("step").style.width = animationData.step + "%";

    card[animationData.layer].style.height = "0";
    card[animationData.layer].style.padding = "0";
  }
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
