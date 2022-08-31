'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  //in this loop we will have :
  // this part key, answerText      //this part will have the data ex:["a",'constant, let, variable'...]
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    // assign a variable to the right answer ex: correctAnswer ="a"
    const correctAnswer = currentQuestion.correct;
    answersListElement.appendChild(answerElement);
    //key has value from the loop & give li.id the key
    answerElement.id = key;  
    
    // condition : if correctAnswer which is in the data.js(correct) === key (come from the loop)
    if (correctAnswer === key) {
      answerElement.className = 'right-answer'; //give li class   
    } else {
      answerElement.className = 'wrong-answer';
    }
  }

  const right = document.getElementsByClassName('right-answer')[0];
  right.addEventListener('click', (e) => {

    // if user didnt click on answer that means the currentQuestion.selected will still be empty
    if (currentQuestion.selected === null) {
      
      // now i got answer so now  currentQuestion.selected has value(so we cant click in other button)
      currentQuestion.selected = e.target.id;
      right.style.background = 'green';
      quizData.rightAnswers++; // add one right answer
    }
  });

  const wrong = document.getElementsByClassName('wrong-answer');
  for (let i = 0; i < wrong.length; i++) { 
    wrong[i].addEventListener('click', (e) => {
      if (currentQuestion.selected === null) {
        currentQuestion.selected = e.target.id;
        wrong[i].style.background = 'red';
   // in this line while I have wrong answer will give me the right one at the same time
        right.style.background = 'green';
      }
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
