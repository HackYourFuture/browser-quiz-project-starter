'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_Interface_ELM } from '../constants.js';
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
  const links = document.querySelector('.link');
  if (currentQuestion !== undefined) {
    currentQuestion.links.forEach((link) => {
      links.innerHTML = `<a href='${link.href}' target='_blank'>Need help?</a>`;
    });
  }

  quizData.questionItem++;
  document.querySelector(
    '.question'
  ).textContent = `Question ${quizData.questionItem} / ${quizData.questions.length}`;
  document.querySelector(
    '.score'
  ).textContent = `Correct Answers ${quizData.score} / ${quizData.questions.length}`;
  const disabledBtn = getDOMElement('next-question-button');
  disabledBtn.setAttribute('disabled', 'disabled');

  disabledBtn.classList.add('disabled');
  if (currentQuestion !== undefined) {
    countDownTimer();
  }
};
//
export const handleNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  stopTimer();
  const removeTimer = document.querySelector('.timer');
  QUIZ_Interface_ELM.removeChild(removeTimer);
  console.log(QUIZ_Interface_ELM);

  showCurrentQuestion();
};
//
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
    elementChosenAnswer.style.pointerEvents = 'none';
    elementChosenAnswer.classList.add('correctAnswer');
    quizData.score++;
    document.querySelector(
      '.score'
    ).textContent = `Correct Answers ${quizData.score} / ${quizData.questions.length} `;
  };
  const inCorrect = () => {
    elementChosenAnswer.style.pointerEvents = 'none';
    const rightAnswerElement = document.querySelector(
      `[data-value=${rightAnswer}]`
    );
    elementChosenAnswer.classList.add('wrongAnswer');
    rightAnswerElement.classList.add('rightAnswer');
  };
  if (elementAnswer === currentQuestion.correct) {
    correct();
  } else {
    inCorrect();
  }
};
