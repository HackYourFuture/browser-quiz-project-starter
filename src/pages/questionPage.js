'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { GET_RESULT_BUTTON_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { getAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { router } from '../router.js';

export const initQuestionPage = (userInterface) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex++];
  let click = false;
  let clickCount = 0;
  
  const questionElement = getQuestionElement(
    currentQuestion.text,
    isLastQuestion()
  );
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = getAnswerElement(key, answerText);
    answerElement.setAttribute('data-key', key);
    answersListElement.appendChild(answerElement);
  }

  for (const option of answersListElement.children) {
      option.addEventListener('click', chooseAnswer);
  }

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
      
      for (const option of answersListElement.children) {
        option.removeEventListener('click', chooseAnswer)
      };
  }

  const nextStep = (click) => {
  clickCount++;
  if (!click) {
    
    if(clickCount < 2){

      const clickError = document.createElement('p');
      clickError.innerHTML = 'You have to Select Something!!!';
      answersListElement.appendChild(clickError);
    }
  }
  else if (isLastQuestion()) {
    router('result');
  } else {
    router('question');
  }
};
  
  document
    .getElementById(
      isLastQuestion() ? GET_RESULT_BUTTON_ID : NEXT_QUESTION_BUTTON_ID
    )
    .addEventListener('click', function() {nextStep(click);});
};

const isLastQuestion = () => {
  return quizData.currentQuestionIndex < quizData.questions.length
    ? false
    : true;
};
