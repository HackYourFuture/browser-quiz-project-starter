'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import {GET_RESULT_BUTTON_ID} from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { router } from '../router.js';

export const initQuestionPage = (userInterface) => {

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex++];  //get CURRENT object

  const questionElement = getQuestionElement(currentQuestion.text, isLastQuestion());  //get Q-A div
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID); //get the answers UL

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {  //populate it with LI's
    const answerElement = createAnswerElement(key, answerText);
    answerElement.setAttribute('data-key', key);
    answersListElement.appendChild(answerElement);
  }
  
  answersListElement.addEventListener('click', chooseAnswer);  //put EvListener on the UL

  function chooseAnswer(e) {
    currentQuestion.selected = e.target.dataset.key;

    if (currentQuestion.selected !== currentQuestion.correct) {
      e.target.style.border = '2px solid red';
    } else {
      e.target.style.border = '2px solid green';
    }

    const options = Array.from(this.children);
    options.forEach((option) => {
      if (option.dataset.key !== currentQuestion.selected) {
        option.style.border = '';
      }
    });

    const correctAnswer = document.querySelector(`li[data-key="${currentQuestion.correct}"]`);
    correctAnswer.style.backgroundColor = "green";
  }

  document  //show the right button -> put EvListener on it -> on click choose the next step
    .getElementById(isLastQuestion() ? GET_RESULT_BUTTON_ID : NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextStep);
};

const nextStep = () => { //decide: where to go next - next Q or the RESULT page ?

  if (isLastQuestion()) {
    router('result');
  }
  else {
    router('question');
  }
};

const isLastQuestion = () => { //returns true/false - is the CURRENT Q the last or not?
  return (quizData.currentQuestionIndex < quizData.questions.length ? false : true);
};
