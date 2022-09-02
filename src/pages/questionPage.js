'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { SKIP_QUESTION_BUTTON_ID } from '../constants.js';
import { FINISH_QUIZ_BUTTON_ID } from '../constants.js';
import { timerIntervalId } from '../views/timerViews.js';
import { initFinishPage } from './finishPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const amount = quizData.questions.length;
  const questionNumber = `Question [ ${quizData.currentQuestionIndex + 1} / ${amount} ]`;
  const score = `Score &nbsp&nbsp [ ${quizData.rightAnswers} / ${amount} ]`;
  const wrongAnswer = `&nbspWrong &nbsp [ ${quizData.wrongAnswers} / ${amount} ]`;
  const skipped = `Skipped [ ${quizData.skippedQuestions} / ${amount} ]`;

  const questionElement = createQuestionElement(currentQuestion.text, questionNumber, score, wrongAnswer, skipped);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    const correctAnswer = currentQuestion.correct;
    answersListElement.appendChild(answerElement);

    if (correctAnswer === key) {
      answerElement.id = 'right-answer';
    } else {
      answerElement.className = 'wrong-answer';
    }
  }

  const right = document.getElementById('right-answer');
  right.addEventListener('click', () => {
    if (currentQuestion.selected === null) {
      currentQuestion.selected = right;
      right.style.background = 'green';
      quizData.rightAnswers++;
      quizData.result.right++;
    }
  });

  const wrong = document.getElementsByClassName('wrong-answer');
  for (let i = 0; i < wrong.length; i++) {
    wrong[i].addEventListener('click', () => {
      if (currentQuestion.selected === null) {
        currentQuestion.selected = wrong[i];
        wrong[i].style.background = 'red';
        setTimeout(() => { right.style.background = 'green'; }, 500);
        quizData.wrongAnswers++;
        quizData.result.wrong++;
      }
    });
  }

  const toNextQuestion = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  toNextQuestion.addEventListener('click', () => {
    if (currentQuestion.selected === null) {
      currentQuestion.selected = wrong[0];
      right.style.background = 'green';
      quizData.wrongAnswers++;
      quizData.result.wrong++;
      setTimeout(() => { nextQuestion() }, 1000);
    } else {
      nextQuestion();
    }
  });

  const skipQuestion = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  skipQuestion.addEventListener('click', () => {
    if (currentQuestion.selected === null) {
      currentQuestion.selected = right;
      setTimeout(() => { right.style.background = 'green'; }, 100);
      setTimeout(() => { nextQuestion(); }, 1000);
      quizData.skippedQuestions++;
      quizData.result.skipped++;
    }
  });

  const finish = document.getElementById(FINISH_QUIZ_BUTTON_ID);
  if (quizData.currentQuestionIndex < 9) {
    finish.hidden = true;
  } else {
    toNextQuestion.hidden = true;
    finish.style.left = '26.7%';
  }
  finish.addEventListener('click', () => {
    clearInterval(timerIntervalId);
    setTimeout(() => {
      initFinishPage();
    }, 1500);
  });
}

const nextQuestion = () => {
  quizData.currentQuestionIndex++;

  initQuestionPage();
};