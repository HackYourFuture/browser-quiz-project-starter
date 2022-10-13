'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initFinishPage } from './finishPage.js';
import { createScoreElement, updateScore } from '../views/scoreView.js'

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  localStorage.setItem('currentQuestionIndex', quizData.currentQuestionIndex);

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);
  const scoreElement = createScoreElement();
  userInterface.insertBefore(scoreElement, userInterface.firstChild);

  const correctAnswer = (event) => {
    if (currentQuestion.selected != null) {
      return;
    }

    const selectedAnswer = event.target.innerText[0];
    localStorage.setItem('selectedAnswer', selectedAnswer);

    console.log(selectedAnswer);
    console.log('test');
    const correctAnswer = currentQuestion.correct;
  }

  const showCorrectAnswer = (event) => {
    if (currentQuestion.selected != null) {
      return;
    }

    const correctAnswerElement = document.getElementById(currentQuestion.correct);
    const selectedAnswerElement = document.getElementById(event.target.innerText[0]);
    const liTags = document.getElementsByTagName('li');
    setTimeout(() => {
      if (event.target.innerText[0] === currentQuestion.correct) {
        correctAnswerElement.style.backgroundColor = 'green';
        correctAnswerElement.style.color = 'white';
        quizData.finalScore++;
        updateScore();
      } else {
        correctAnswerElement.style.backgroundColor = 'green';
        correctAnswerElement.style.color = 'white';
        selectedAnswerElement.style.backgroundColor = 'red';
        selectedAnswerElement.style.color = 'white';
      }
      for (let liTag of liTags) {  // after selected question, disabled the others.
        liTag.style.pointerEvents = 'none'
      }
      localStorage.setItem('finalScore', quizData.finalScore);
    }, 1000);

  }

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', correctAnswer);
    answerElement.addEventListener('click', showCorrectAnswer);
  }
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};



const nextQuestion = () => {
  if (quizData.currentQuestionIndex < 9) {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    initQuestionPage();
  } else {
    initFinishPage();
  }
};
