'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  showCurrentQuestion();
};

export const handleCheckAnswer = (selectedAnswer) => {
const current_question = quizData.questions[quizData.currentQuestionIndex]
  if (selectedAnswer === current_question.correct) {
    selectedAnswer.style.cssText = "background-color : green; color: white;"
  } else {
  selectedAnswer.style.cssText = "background-color : red; color: white;"
  }
}

