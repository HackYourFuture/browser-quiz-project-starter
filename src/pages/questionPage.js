'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  CURRENT_SCORE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';
import { updateScore } from '../views/scoreView.js';
import { finalSummaryPage } from './finalSummaryPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  userInterface.appendChild(createScoreElement(quizData.finalScore));

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  answersListElement.addEventListener('click', () => {
    setTimeout(() => {
      document.getElementById(NEXT_QUESTION_BUTTON_ID) &&
        document
          .getElementById(NEXT_QUESTION_BUTTON_ID)
          .classList.remove('hide');
    }, 300);
  });

  const correctAnswer = (e) => {
    if (!(currentQuestion['selected'] === null)) return;
    const selectedAnswer = e.target;
    const correctAnswer = currentQuestion.correct;

    if (selectedAnswer.dataset.key === correctAnswer) {
      selectedAnswer.classList.add('correct');
      quizData.finalScore++;
    } else {
      selectedAnswer.classList.add('wrong');
    }

    currentQuestion['selected'] = selectedAnswer.dataset.key;

    if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
      finalSummaryPage();
    }

    updateScore();

  };

  answersListElement.addEventListener('click', correctAnswer);

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};
