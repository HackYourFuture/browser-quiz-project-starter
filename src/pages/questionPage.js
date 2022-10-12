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

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  console.log(currentQuestion);
  localStorage.setItem('currentQuestionIndex', quizData.currentQuestionIndex)

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);
  // const answer = localStorage.getItem('selectedAnswer');
  // console.log(answer);
  // if (answer[quizData.currentQuestionIndex]) {
  //   currentQuestion.selected = answer[quizData.currentQuestionIndex];
  //   // TODO show the button later
  // }
  const correctAnswer = (event) => {
    if (currentQuestion.selected != null) {
      return;
    }

    const selectedAnswer = event.target.innerText[0];
    console.log(selectedAnswer);
    console.log('test');
    const correctAnswer = currentQuestion.correct;

    if (selectedAnswer === correctAnswer) {


    } else {
      console.log(false);
    }
  }

  const showCorrectAnswer = () => {
    if (currentQuestion.selected != null) {
      return;
    }

    const correctAnswerElement = document.getElementById(currentQuestion.correct);
    setInterval(() => {
      correctAnswerElement.style.backgroundColor = 'green';
      correctAnswerElement.style.color = 'white';
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
