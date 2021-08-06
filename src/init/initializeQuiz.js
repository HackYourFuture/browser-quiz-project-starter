'use strict';
import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { createNextQuestionButtonElement } from '../views/questionViews.js';
import { quizData } from '../data.js';
import { startTheGame } from '../handlers/starTheGameHandlers.js';
export const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;
  setupQuizHTML();
  showCurrentQuestion();
};
const nextEl = getDOMElement('btn-4'); //I call my btn-4 in our HTML
const setupQuizHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });
  quizContainer.appendChild(questionContainer);
  const nextQuestionButton = createNextQuestionButtonElement();
  //quizContainer.appendChild(nextQuestionButton); //this is the old location of our next question button
  nextEl.appendChild(nextQuestionButton); //here i append thih into my btn-4class
  console.log(quizContainer);
  userInterfaceContainer.appendChild(quizContainer);
};
window.addEventListener('load', startTheGame);
