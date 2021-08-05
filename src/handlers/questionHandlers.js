'use strict';

import { QUESTION_CONTAINER_ID, NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import { nextQuestion } from '../listeners/questionListeners.js';


export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  const nextQuestionButton = getDOMElement(NEXT_QUESTION_BUTTON_ID);
  nextQuestionButton.removeEventListener('click', nextQuestion)
  showCurrentQuestion();
};

/* This is Fikret code don't just commented out plz don't delete now
const playButton = document.querySelector('#play-btn');

function showContainer(){
const quizContainer = document.querySelector('.quiz-container');
quizContainer.classList.remove('hide');
playButton.classList.add('hide');
}

playButton.addEventListener('click',showContainer);*/