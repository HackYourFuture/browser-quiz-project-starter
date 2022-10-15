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
import { createScoreElement, updateScore } from '../views/scoreView.js';

export const initQuestionPage = (storedIndex) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  localStorage.setItem('currentQuestionIndex', quizData.currentQuestionIndex);

  const questionElement = createQuestionElement(currentQuestion);
  userInterface.appendChild(questionElement);
  const scoreElement = createScoreElement();
  userInterface.insertBefore(scoreElement, userInterface.firstChild);

  const selectedAnswer = localStorage.getItem('selectedAnswer');

  // if (selectedAnswer != null) {
  //   setTimeout(disableAnswersList, 5);
  // }

  const nextBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextBtn.classList.add('disabled');

  if (selectedAnswer != null && quizData.currentQuestionIndex > 0) {
    // after selecting an option -> refresh page -> button available
    nextBtn.classList.remove('disabled');
  }

  const showCorrectAnswer = (event) => {
    if (currentQuestion.selected != null) {
      return;
    }
    nextBtn.classList.remove('disabled');
    const selectedAnswer = event.target.innerText[0];
    localStorage.setItem('selectedAnswer', selectedAnswer);

    const correctAnswerElement = document.getElementById(
      currentQuestion.correct
    );
    const selectedAnswerElement = document.getElementById(
      event.target.innerText[0]
    );

    disableAnswersList();

    setTimeout(() => {
      const isCorrectAnswer =
        event.target.innerText[0] === currentQuestion.correct;
      if (isCorrectAnswer) {
        setElementStyle(
          correctAnswerElement,
          selectedAnswerElement,
          isCorrectAnswer
        );
        quizData.finalScore++;
        updateScore();
      } else {
        setElementStyle(correctAnswerElement, selectedAnswerElement, false);
      }
      localStorage.setItem('finalScore', quizData.finalScore);
    }, 300);
  };

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', showCorrectAnswer);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
      nextQuestion();
    });

  if (storedIndex) {
    const selectedAnswer = localStorage.getItem('selectedAnswer');
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const correctAnswerElement = document.getElementById(
      currentQuestion.correct
    );
    const selectedAnswerElement = document.getElementById(selectedAnswer);
    const isCorrectAnswer = selectedAnswer === currentQuestion.correct;
    if (isCorrectAnswer) {
      setElementStyle(correctAnswerElement, selectedAnswerElement, true);
    } else {
      setElementStyle(correctAnswerElement, selectedAnswerElement, false);
    }
  }
};

/**
 *
 * @param {*} correctAnswerElement
 * @param {*} selectedAnswerElement
 * @param {Boolean} isCorrectAnswer
 */
const setElementStyle = (
  correctAnswerElement,
  selectedAnswerElement,
  isCorrectAnswer
) => {
  if (!selectedAnswerElement) return;
  if (isCorrectAnswer) {
    correctAnswerElement.style.backgroundColor = '#06b906bf';
    correctAnswerElement.style.color = 'white';
  } else {
    correctAnswerElement.style.backgroundColor = '#06b906bf';
    correctAnswerElement.style.color = 'white';
    selectedAnswerElement.style.backgroundColor = '#ff0000bd';
    selectedAnswerElement.style.color = 'white';
  }
};

export const disableAnswersList = () => {
  const liTags = document.getElementsByTagName('li');
  for (let liTag of liTags) {
    // after selected question, disabled the others.
    liTag.style.pointerEvents = 'none';
  }
};

const nextQuestion = () => {
  if (quizData.currentQuestionIndex < 9) {
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    localStorage.setItem('selectedAnswer', null);
    initQuestionPage();
  } else {
    initFinishPage();
  }
};
