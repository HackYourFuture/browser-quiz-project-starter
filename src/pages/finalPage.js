import {START_QUIZ_BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import {quizData} from '../data.js'
import { initQuestionPage } from './questionPage.js';

export const initFinalPage = ()=>{
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const score =  document.createElement('div');
    score.innerHTML = String.raw`
      
      <h1 class="score-p">your score is:  ${quizData.score} </h1>

      <button id="${START_QUIZ_BUTTON_ID}">restart quiz</button>
    `;
    userInterface.appendChild(score)
    document.getElementById(START_QUIZ_BUTTON_ID).addEventListener('click', startQuiz);
}
const startQuiz = () => {
    quizData.score=0
    quizData.currentQuestionIndex=0 // restart the score and the current Question index
    initQuestionPage();
  };