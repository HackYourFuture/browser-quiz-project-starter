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

export const handleAnswerCheck = (event) => {
  let elementCorrectAnswer = event.target;
  let userAnswer = event.target.getAttribute('data-value');
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const rightAnswer = () => {
    elementCorrectAnswer.classList.add('correctAnswer');
  };
  const wrongAnswer = () => {
    elementCorrectAnswer.classList.add('wrongAnswer');
    userAnswer = currentQuestion.correct;
    elementCorrectAnswer.classList.add('correctAnswer');
  };

  if (userAnswer !== currentQuestion.correct) {
    wrongAnswer();
  } else {
    rightAnswer();
  }
};
