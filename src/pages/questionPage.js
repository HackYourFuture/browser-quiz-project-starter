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
  let click = false;
  
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
      option.addEventListener('click', chooseAnswer);
  })

  function chooseAnswer(e) {
    click = true;
    currentQuestion.selected = e.target.dataset.key;
    
    if (currentQuestion.selected !== currentQuestion.correct) {
      e.target.classList.add('wrong-select');
      quizData.wrongSum++;
    }
    else {
      quizData.correctSum++;
    }
    
    const correctAnswer = document.querySelector(
      `li[data-key="${currentQuestion.correct}"]`
      );
      correctAnswer.style.backgroundColor = 'green';
      
      options.forEach((option) => {option.removeEventListener('click', chooseAnswer)});
  }
  
  document
    .getElementById(
      isLastQuestion() ? GET_RESULT_BUTTON_ID : NEXT_QUESTION_BUTTON_ID
    )
    .addEventListener('click', function() {nextStep(click);});
};

const nextStep = (click) => {
  if (!click) {
    document.getElementById(ANSWERS_LIST_ID).appendChild(document.createElement('p').appendChild(document.createTextNode('You have to Select Something!!!')));
  }
  else if (isLastQuestion()) {
    router('result');
  } else {
    router('question');
    console.log(`correct: ${quizData.correctSum}, wrong: ${quizData.wrongSum}`);
  }
};

const isLastQuestion = () => {
  return quizData.currentQuestionIndex < quizData.questions.length
    ? false
    : true;
};
