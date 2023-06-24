import {
  ANSWERS_LIST_ID,
  HINT_BUTTON_ID,
  HINT_TEXT_ID,
  NEXT_QUESTION_BUTTON_ID,
  SCORE_ID,
  USER_INTERFACE_ID,
} from '../constants.js';

import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initFinalPage } from './finalPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const correctAnswer = currentQuestion.correct;
  const questionElement = createQuestionElement(
    currentQuestion.hint,
    currentQuestion.img,
  );

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  const handleRightAnswer = (key) => {
    const element = document.getElementById(key);
    if(!element.getAttribute('disabled')){
    // if you clicked on the right answer turn the background to green & disable choosing other answers buttons
    for (const [key] of Object.entries(currentQuestion.answers)) {
      const element = document.getElementById(key);
      element.setAttribute('disabled', 'true');
           
      if (key == correctAnswer) {
        element.style.backgroundColor = 'green';
   
      }
    }
    // if clicked on the wrong answer turn the background to red & disable choosing other answers buttons
    if (key !== correctAnswer) {
      element.style.backgroundColor = 'red';
    } else {
      quizData.score += 1;
      const score = document.getElementById(SCORE_ID);
      score.innerText = quizData.score;
      
    }
  }
  };
  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(
      key,
      answerText,
      handleRightAnswer
    );
    answersListElement.appendChild(answerElement);
  }
  const hintText = document.getElementById(HINT_TEXT_ID);
  const hintButton = document.getElementById(HINT_BUTTON_ID);
  hintButton.addEventListener('click', () => {
    if (hintText.style.opacity == 0) {
      hintText.style.opacity = 1;
      hintButton.innerText = 'hide hint';
    } else {
      hintText.style.opacity = 0;
      hintButton.innerText = 'show hint';
    }
  });

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

const Hint_Button = document.getElementById('hint-button');
const Hint_Text = document.getElementById('hint-text');
Hint_Text.style.display = 'none'
Hint_Button.addEventListener('click', function () {
  Hint_Text.style.display = 'block';
});

};

const nextQuestion = () => {
  if(quizData.currentQuestionIndex===quizData.questions.length-1){
    initFinalPage()

  }else{
    quizData.currentQuestionIndex = quizData.currentQuestionIndex += 1;
    initQuestionPage();
  }
};



