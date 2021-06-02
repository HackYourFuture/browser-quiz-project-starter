'use strict';

import {
  QUESTION_CONTAINER_ID,
  QUIZ_CONTAINER_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { showCurrentQuestion } from '../handlers/showCurrentQuestion.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import createNextQuestionButtonElement from '../views/createNextQuestionButtonElement.js';
import { quizData } from '../data.js';
import { progressBar } from '../handlers/handleNextQuestion.js';

const userInterfaceContainer = getDOMElement(USER_INTERFACE_ID);

const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;

  setupQuizHTML();

  showCurrentQuestion();
};

const setupQuizHTML = () => {
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });

  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);

  userInterfaceContainer.appendChild(quizContainer);
};

const startGame = () => {
  const startButton = createDOMElement('button', { id: 'start-game' });
  startButton.innerText = 'Start The Game';
  userInterfaceContainer.appendChild(startButton);
  startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    progressBar.classList.remove('hide');

    initializeQuiz();
  });
};

window.addEventListener('load', startGame);
