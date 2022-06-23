'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import {
  createQuestionElement,
  createProgressElement,
} from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createAlertElement } from '../views/questionView.js';


let currentAnswerElement= [];
export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  document.title = currentQuestion.text.substring(0, 60) + '...';
  const questionElement = createQuestionElement(currentQuestion.text);
  const userProgress = createProgressElement(
    quizData.questions.length,
    quizData.currentQuestionIndex + 1,
    0
  );

  userInterface.appendChild(userProgress);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', function () {
      quizData.currentQuestionAnswer = key;
      currentAnswerElement = answerElement;
      answersListElement
        .querySelectorAll('.selected')
        .forEach((element) => element.classList.remove('selected'));
      answerElement.classList.add('selected');
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  const correctAnswer = quizData.questions[quizData.currentQuestionIndex].correct;
  const addClass = quizData.currentQuestionAnswer === correctAnswer ? 'correct' : 'wrong';
  const body = document.getElementById(USER_INTERFACE_ID);
  if (quizData.currentQuestionAnswer===null) {
    const alertElement = createAlertElement();
    body.appendChild(alertElement);
    quizData.currentQuestionIndex = quizData.currentQuestionIndex -1;
  } else if(quizData.currentQuestionAnswer === correctAnswer ) {
    currentAnswerElement.classList.remove('selected')
    currentAnswerElement.classList.add(addClass)
  } else {
    currentAnswerElement.classList.remove('selected')
    currentAnswerElement.classList.add(addClass)
  }
  quizData.currentQuestionAnswer = null
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  document.getElementById(NEXT_QUESTION_BUTTON_ID).removeEventListener('click', nextQuestion);

  setTimeout(() => {
    initQuestionPage();
    currentAnswerElement.classList.remove(addClass)
  }, 1500);
};
