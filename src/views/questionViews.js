'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { createDOMElement } from '../utils/DOMUtils.js';
import { checkAnswer } from '../listeners/questionListeners.js';
import { startTimer } from '../listeners/questionListeners.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText, key) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;
  // set class for li
  answerElement.setAttribute('class', 'answer-options');
  answerElement.setAttribute('data-value', key);
  answerElement.addEventListener('click', checkAnswer);

  return answerElement;
};

/**
 * Create a full question element
 */

export const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);

  const answerContainer = createDOMElement('ol');
  // set classes .
  container.setAttribute('class', 'content-question');
  answerContainer.setAttribute('class', 'list-answers');

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey], answerKey);
    answerContainer.appendChild(answer);
  }
  //create timer element

  const paragraphElement = createDOMElement('p');
  paragraphElement.setAttribute('id', 'timer');
  paragraphElement.text = startTimer();
  container.appendChild(paragraphElement);
  ///end timer element
  container.appendChild(answerContainer);

  return container;
};

/**
 * Creates and returns the next questions button
 */
export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });

  buttonElement.innerText = 'Next question';
  buttonElement.addEventListener('click', nextQuestion);
  // set class for the button
  buttonElement.setAttribute('class', 'button-element');
  return buttonElement;
};

//create timer element
// export const createTimerElement = () => {
//   const paragraphElement = createDOMElement('p', {
//     id: timer,
//   });
//   return paragraphElement;
// };
