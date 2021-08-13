'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_Interface_BOX } from '../constants.js';
import { createQuestionElement } from '../views/questionViews.js';
import { clearDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';
import { countDownTimer, stopTimer } from '../components/timer.js';

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);

  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);

  const questionCounter = document.querySelector('.question');
  questionCounter.textContent = `Question ${quizData.questionItem} / ${quizData.questions.length}`;

  const scoreCounter = document.querySelector('.score');
  scoreCounter.textContent = `Correct Answers ${quizData.score} / ${quizData.questions.length}`;

  const disabledBtn = getDOMElement('next-question-button');
  disabledBtn.setAttribute('disabled', 'disabled');
  disabledBtn.classList.add('disabled');

  if (currentQuestion !== undefined) {
    quizData.questionItem++;
    const links = document.querySelector('.link');
    currentQuestion.links.forEach((link) => {
      links.innerHTML = `<a href='${link.href}' target='_blank'>Need help?</a>`;
    });
    countDownTimer();
  }
};

export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  const removeTimer = document.querySelector('.timer');
  QUIZ_Interface_BOX.removeChild(removeTimer);

  stopTimer();
  showCurrentQuestion();
};

export const handleAnswerCheck = (event) => {
  const enabledBtn = getDOMElement('next-question-button');
  enabledBtn.removeAttribute('disabled');
  enabledBtn.classList.remove('disabled');

  const elementChosenAnswer = event.target;
  const elementAnswer = event.target.getAttribute('data-value');

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const rightAnswer = currentQuestion.correct;

  document.querySelectorAll('.answer-options').forEach((answer) => {
    answer.style.pointerEvents = 'none';
  });

  const correct = () => {
    elementChosenAnswer.classList.add('correctAnswer');
    quizData.score++;

    let scoreCounter = document.querySelector('.score');
    scoreCounter.textContent = `Correct Answers ${quizData.score} / ${quizData.questions.length} `;
  };

  const inCorrect = () => {
    const rightAnswerElement = document.querySelector(
      `[data-value=${rightAnswer}]`
    );
    elementChosenAnswer.classList.add('wrongAnswer');
    rightAnswerElement.classList.add('rightAnswer');
  };

  if (elementAnswer === rightAnswer) {
    correct();
  } else {
    inCorrect();
  }
};
