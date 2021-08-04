'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText) => {
  const answerElement = createDOMElement('li');
  const answerButton = createDOMElement("button");
  answerElement.appendChild(answerButton);
  answerButton.innerText = answerText;
  
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
 

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey]);
    answerContainer.appendChild(answer);
  }

  // here we put a unique Id for every button
  let answerKeyNumber = 0;
  let buttonsEl = answerContainer.querySelectorAll("button");
  for (const answerKey in question.answers) {
    buttonsEl[answerKeyNumber].id = answerKey;
    answerKeyNumber++
  }
  
  //!important
  //buttonsEl.addEventListener("click", checkAnswer); we need to check later
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

  return buttonElement;
};
