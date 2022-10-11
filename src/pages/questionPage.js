'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createScoreElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const socreOfCorrectAnswers = createScoreElement("Score");
  userInterface.appendChild(socreOfCorrectAnswers);

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }



  const buttonDeActivation= document.querySelectorAll('.test');

             buttonDeActivation.forEach((buttonId) => {
              buttonId.addEventListener('click',function() {
                const y = buttonId.id; 
                 if ( currentQuestion.correct === y){
                  buttonId.style.background = "green";
                  quizData.finalScore = quizData.finalScore + 1;
                 
                  myDisplay(quizData.finalScore);                 

                  myDisplay(`score ${quizData.finalScore}`);
                  answerButtonDisable();

                 } 
                 else {
                  buttonId.style.background="red";
                  console.log(quizData.finalScore);

                  myDisplay(quizData.finalScore);
                  
                  answerButtonDisable();
                 } 
              });  // end addEventListener
                
              });  // end forEach
            
      
      

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

  

  const answerButtonDisable = () => {
    const buttonDeActivation= document.querySelectorAll('.test');
    buttonDeActivation.forEach((buttonDeactive) => {
     buttonDeactive.disabled=true;
    });
};
 

function myDisplay(score) {
  
  document.getElementById("updatedScore").innerHTML += score;
}

  const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
   
   
  initQuestionPage();
};


