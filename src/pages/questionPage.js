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
  userInterface.innerHTML = ''; // for start empty page
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  localStorage.setItem('currentQuestionIndex', quizData.currentQuestionIndex); // store index of question  with refresh show same question
  const questionElement = createQuestionElement(currentQuestion);
  userInterface.appendChild(questionElement);
  const scoreElement = createScoreElement();
  userInterface.insertBefore(scoreElement, userInterface.firstChild);
  const selectedAnswer = localStorage.getItem('selectedAnswer'); // after refresh for show the selection again store the selected answer

  const nextBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextBtn.classList.add('disabled'); // without selection next btn has to be disable. add style for this

  if (!selectedAnswer) {  // if is there a selected option, after refresh page, button should be available
    nextBtn.classList.remove('disabled');
  }

  const showCorrectAnswer = (event) => {
    const selectedAnswer = event.target.innerText[0]; // keep the selected answer's first letter
    localStorage.setItem('selectedAnswer', selectedAnswer); // store selected answer in the local storage and show it again after refresh the page

    const correctAnswerElement = document.getElementById( // assign correct value from data to a new variable
      currentQuestion.correct
    );
    const selectedAnswerElement = document.getElementById(
      event.target.innerText[0]
    );

    if(selectedAnswer) {
      nextBtn.classList.remove('disabled');
      disableAnswersList('none');
    }

    setTimeout(() => {
      const isCorrectAnswer = event.target.innerText[0] === currentQuestion.correct; // check the answer
      if (isCorrectAnswer) {
        setElementStyle(correctAnswerElement, selectedAnswerElement, isCorrectAnswer);
        quizData.finalScore++; // each right answer increase score
        updateScore();
      } else {
        setElementStyle(correctAnswerElement, selectedAnswerElement, false);
      }
      nextBtn.classList.remove('disabled');  // after selection, next button should be able
      localStorage.setItem('finalScore', quizData.finalScore);
    }, 300);

  };

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) { //create the options of each question
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', showCorrectAnswer); // with click call the func and check correction
  }

  if (selectedAnswer == 0 || selectedAnswer == null) { // with refresh page, check options and next button's situation. it should same before the refresh
    // after selected question, disabled the others.
    disableAnswersList('all');
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
    disableAnswersList('none');
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => {
      nextQuestion();
    })

  if (storedIndex) { // sending the parametres to setElementStyle then it cahnge style for options depending on true or false
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
const setElementStyle = ( // coloring process for options
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

export const disableAnswersList = (status) => {
  const liTags = document.getElementsByTagName('li');
  for (let liTag of liTags) {
    // after selected question, disabled the others.
    liTag.style.pointerEvents = status;
  }
};

const nextQuestion = () => {
  if (quizData.currentQuestionIndex < 9) { //each click increase index and show next question
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    localStorage.setItem('selectedAnswer', 0); // for new selection set null of selected answer. before selection should delete.
    initQuestionPage();
  }
  else { //after last question show the finish page
    initFinishPage();
  }
};
