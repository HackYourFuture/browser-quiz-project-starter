'use strict';

import createDOMElement from "../utils/createDOMElement.js";
import createNextQuestionButtonElement from './createNextQuestionButtonElement.js'
import {SCORE_ID, QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID} from '../constants.js';



const setupQuizHTML = () =>{
    const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const scoreContainer = createDOMElement('div');
  const scoreText = createDOMElement('p', {id: SCORE_ID});
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });

  scoreContainer.appendChild(scoreText);
  quizContainer.appendChild(scoreContainer);

  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);
  return quizContainer;
}

export default setupQuizHTML;