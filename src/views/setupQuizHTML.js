'use strict';

import createDOMElement from "../utils/createDOMElement.js";
import createNextQuestionButtonElement from './createNextQuestionButtonElement.js'
import {TIMER_ID, SCORE_ID, QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID} from '../constants.js';



const setupQuizHTML = () =>{
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const scoreContainer = createDOMElement('div');
  const scoreText = createDOMElement('p', {id: SCORE_ID});
  const timerContainer = createDOMElement('p', {id: TIMER_ID});
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });
  
  quizContainer.appendChild(timerContainer);
  scoreContainer.appendChild(scoreText);
  quizContainer.appendChild(scoreContainer);

  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);
  return quizContainer;
}

export default setupQuizHTML;