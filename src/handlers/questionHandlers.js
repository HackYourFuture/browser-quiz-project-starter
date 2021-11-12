'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID, SPAN_ID } from '../constants.js';
import { createQuestionElement, createScoreElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement, getKeyByValue, checkAnswer, getCardElements, getCurrentItem, getInactiveCardElements } from '../utils/DOMUtils.js';
import { quizData, animationData } from '../data.js';

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

export const showCurrentScore = () => {
  const currentScore = quizData.currentTotalScore;
  const scoreSpan = getDOMElement(SPAN_ID);
  scoreSpan.innerText = currentScore;
};

export const deleteQuestionCard = () => {

  const card = getCardElements();
  let currentItem = getCurrentItem();
  const inactive = getInactiveCardElements();
  let layer = inactive.length;

  animationData.i += 1;
  animationData.step += 10;
  layer -= 1;

  if (animationData.i < card.length) {
    const nextItem = card[animationData.i];

    currentItem = nextItem.classList.add("active");
    document.getElementById("step").style.width = animationData.step + "%";

    card[layer].style.height = "0";
    card[layer].style.padding = "0";
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
  const isCorrect = checkAnswer(currentQuestion.selected, currentQuestion.correct);
  if (isCorrect) {
    quizData.currentTotalScore += 1
  }
};
