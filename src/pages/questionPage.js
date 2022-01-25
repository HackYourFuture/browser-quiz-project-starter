'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { router } from '../router.js';

export const initQuestionPage = (userInterface) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  console.log(currentQuestion);

  const questionElement = getQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    console.log(key);
    answerElement.setAttribute('data-key', key);
    console.log(answerElement.dataset);
    answersListElement.appendChild(answerElement);
  }
  console.log(answersListElement);
  answersListElement.addEventListener('click', chooseAnswer);
  function chooseAnswer(e) {
    currentQuestion.selected = e.target.dataset.key;
    console.log(e.target);
    if (currentQuestion.selected !== currentQuestion.correct) {
      console.log('false');
      e.target.style.border = '2px solid red';
    } else {
      console.log('true');
      e.target.style.border = '2px solid green';
    }
    console.dir(this);
    const options = Array.from(this.children);
    console.log(options);
    options.forEach((option) => {
      if (option.dataset.key !== currentQuestion.selected) {
        option.style.border = '';
      }
      
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  router('question');
};
