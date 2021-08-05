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
  let elementChosenAnswer = event.target;
  let elementAnswer = event.target.getAttribute('data-value');
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  if (elementAnswer === currentQuestion.correct) {
    elementChosenAnswer.style.pointerEvents = 'none';
    elementChosenAnswer.classList.add('correctAnswer');
  } else {
    elementChosenAnswer.style.pointerEvents = 'none';
    elementChosenAnswer.classList.add('wrongAnswer');
  }
};

export const countDownTimer = () => {
  const startingMinutes = 10;
  let time = startingMinutes * 60;
  const countdownEl = document.getElementById('timer');
  const timeOver = setInterval(updateCountDown, 1000);
  function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if (time <= 0) {
      clearInterval(timeOver);
    }
    countdownEl.textContent = ` ${minutes} : ${seconds}`;
    time--;
  }
};
// countDownTimer();
