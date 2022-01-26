'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { GET_RESULT_BUTTON_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { router } from '../router.js';

export const initQuestionPage = (userInterface) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex++];
  let alreadyChosen = false;
  const questionElement = getQuestionElement(
    currentQuestion.text,
    isLastQuestion()
  );
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.setAttribute('data-key', key);
    answersListElement.appendChild(answerElement);
  }
  const options = Array.from(answersListElement.children);
  options.forEach( option => {
    if (!alreadyChosen){
      option.addEventListener('click', chooseAnswer);
    }
  })

  function chooseAnswer(e) {
    alreadyChosen = true;
    currentQuestion.selected = e.target.dataset.key;
    options.forEach((option) => {
      if (option.dataset.key !== currentQuestion.selected) {
        option.className = '';
      }
      
    });

    if (currentQuestion.selected !== currentQuestion.correct) {
      e.target.classList.add('wrong-select');
    } else {
      e.target.classList.add('correct-select');
    }

    const correctAnswer = document.querySelector(
      `li[data-key="${currentQuestion.correct}"]`
    );
    correctAnswer.style.backgroundColor = 'green';
    
  }
  
  document
    .getElementById(
      isLastQuestion() ? GET_RESULT_BUTTON_ID : NEXT_QUESTION_BUTTON_ID
    )
    .addEventListener('click', nextStep);
};

const nextStep = () => {
  if (isLastQuestion()) {
    router('result');
  } else {
    router('question');
  }
};

const isLastQuestion = () => {
  return quizData.currentQuestionIndex < quizData.questions.length
    ? false
    : true;
};
