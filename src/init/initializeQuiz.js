'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { createNextQuestionButtonElement } from '../views/questionViews.js';
import { quizData } from '../data.js';
import { countDownTimer } from '../components/timer.js';

export const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;
  // Math.floor(Math.random() * quizData.questions.length) + 1;
  setupQuizHTML();
  showCurrentQuestion();
  countDownTimer();
};
//console.log(quizData.questions[Math.floor(Math.random() * quizData.currentQuestionIndex)]);
//quizData.questions[Math.floor(Math.random() * quizData.currentQuestionIndex.length)];
const setupQuizHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });

  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);

  console.log(quizContainer);
  userInterfaceContainer.appendChild(quizContainer);
};

window.addEventListener('load', initializeQuiz);
