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

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  //Update Score, Create Score Element
  const currentScore = updateScore(quizData.questions);
  const scoreElement = createScoreElement(currentScore);
  scoreElement.classList.add('score');
  userInterface.appendChild(scoreElement);

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  const correctAnswer = (e) => {
    const selectedAnswer = e.target;
    const correctAnswer = currentQuestion.correct;
    if (selectedAnswer.innerText[0] === correctAnswer) {
      selectedAnswer.classList.add('correct');

      if (currentQuestion['selected'] === null) {
        quizData.finalScore++;
      }
    } else {
      selectedAnswer.classList.add('wrong');
    }
    currentQuestion['selected'] = selectedAnswer.innerText[0];
    console.log(currentQuestion['selected']);
    const currentScore = updateScore(quizData.questions);
    const currentScoreElement = document.getElementById(CURRENT_SCORE_ID);
    currentScoreElement.innerHTML = currentScore;
  };
  answersListElement.addEventListener('click', correctAnswer);

  answersListElement.addEventListener('click', () => {
    setTimeout(() => {
      document.getElementById(NEXT_QUESTION_BUTTON_ID).classList.remove('hide');
    }, 2000);
  });

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  initQuestionPage();
};

export const updateScore = (quizDataQuestions) => {
  const correctAnswers = quizDataQuestions.filter(
    (question) => question.correct === question.selected
  );

  return correctAnswers.length;
};
