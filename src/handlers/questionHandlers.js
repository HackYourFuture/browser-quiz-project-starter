'use strict';

import { QUESTION_CONTAINER_ID, card, inactive } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
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

let currentItem = document.getElementsByClassName('card1');
let i = 0;
let step = 10;
let layer = inactive.length;
export const deleteQuestionCard = () => {
  i = i + 1;
  step += 10;
  layer -= 1;

  if (i < card.length) {
    const nextItem = card[i];

    currentItem = nextItem.classList.add("active");
    document.getElementById("step").style.width = step + "%";

    card[layer].style.height = "0";
    card[layer].style.padding = "0";
  }
}

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
