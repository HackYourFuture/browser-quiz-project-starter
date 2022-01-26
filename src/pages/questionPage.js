'use strict';

import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { GET_RESULT_BUTTON_ID } from '../constants.js';
import { getQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { router } from '../router.js';

export const initQuestionPage = (userInterface) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex++]; //get CURRENT object
  let alreadyChoosen = false;
  const questionElement = getQuestionElement(
    currentQuestion.text,
    isLastQuestion()
  ); //get Q-A div
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID); //get the answers UL

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    //populate it with LI's
    const answerElement = createAnswerElement(key, answerText);
    answerElement.setAttribute('data-key', key);
    answersListElement.appendChild(answerElement);
    //answerElement.addEventListener('click', chooseAnswer);
  }
  const options = Array.from(answersListElement.children);
  options.forEach( option => {
    if (!alreadyChoosen){
      option.addEventListener('click', chooseAnswer);
    }
  })
  //answersListElement.addEventListener('click', chooseAnswer);  //put EvListener on the UL

  function chooseAnswer(e) {
    alreadyChoosen = true;
    console.log(alreadyChoosen)
    currentQuestion.selected = e.target.dataset.key;
    //const options = Array.from(answersListElement.children);
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
  
  
   
   

  document //show the right button -> put EvListener on it -> on click choose the next step
    .getElementById(
      isLastQuestion() ? GET_RESULT_BUTTON_ID : NEXT_QUESTION_BUTTON_ID
    )
    .addEventListener('click', nextStep);
};

const nextStep = () => {
  //decide: where to go next - next Q or the RESULT page ?

  if (isLastQuestion()) {
    router('result');
  } else {
    router('question');
  }
};

const isLastQuestion = () => {
  //returns true/false - is the CURRENT Q the last or not?
  return quizData.currentQuestionIndex < quizData.questions.length
    ? false
    : true;
};
