'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import {
  clearDOMElement,
  createDOMElement,
  getDOMElement,
} from '../utils/DOMUtils.js';
import { checkAnswer } from '../listeners/questionListeners.js';
import { initializeQuiz } from '../init/initializeQuiz.js';
export const showResult = () => {
  const parentDiv = getDOMElement('user-interface');
  const removeChildren = parentDiv.children;
  for (const child of removeChildren) {
    child.style.display = 'none';
  }
  const newButton = createDOMElement('button', { id: 'try-again' });
  newButton.textContent = 'Try again ';
  parentDiv.appendChild(newButton);
  newButton.addEventListener('click', restartGame);
};

const restartGame = () => {
  const parentDiv = getDOMElement('user-interface');
  clearDOMElement(parentDiv);
  initializeQuiz();
};

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
  if (question !== undefined) {
    title.innerText = question.text;
  } else {
    showResult();
  }
  container.appendChild(title);
  const answerContainer = createDOMElement('ol');
  // set classes .
  container.setAttribute('class', 'content-question');
  answerContainer.setAttribute('class', 'list-answers');
  const linksEl = createDOMElement('div');
  linksEl.setAttribute('class', 'link');
  const linksContainer = getDOMElement('user-interface');
  linksContainer.appendChild(linksEl);
  const scoreEl = createDOMElement('div');
  scoreEl.setAttribute('class', 'score');
  linksContainer.appendChild(scoreEl);
  const questionEl = createDOMElement('div');
  questionEl.setAttribute('class', 'question');
  linksContainer.appendChild(questionEl);
  if (question !== undefined) {
    for (const answerKey in question.answers) {
      const answer = createAnswerElement(
        question.answers[answerKey],
        answerKey
      );
      answerContainer.appendChild(answer);
    }
  } else {
    showResult();
  }

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
