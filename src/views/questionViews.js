'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { nextQuestion, selectedAnswer } from '../listeners/questionListeners.js';
import { createDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;
  answerElement.addEventListener('click', selectedAnswer);
  return answerElement;
};

// Create Stackable Question Cards
export const createQuestionElement = (question) => {
  const outerCardContainer = createDOMElement('div', { className: 'outer-container' });
  const innerCardContainer = createDOMElement('div', { className: 'inner-container' });
  outerCardContainer.appendChild(innerCardContainer);

  // Create the Questions Card, Give the proper className & Translate
  const numberOfCard = quizData.questions.length;
  let previousCard = undefined;
  for (let i = numberOfCard; i > 0; i--) {
    const translateCard = 8 * i;
    let newCard = undefined;
    if (i != 1) {
      newCard = createDOMElement('div', { className: `card card${i} inactive` });
    } else {
      newCard = createDOMElement('div', { className: `card card${i}` });
    }

    newCard.style.right = `${translateCard}px`;
    newCard.style.top = `${translateCard}px`;

    if (previousCard) {
      previousCard.appendChild(newCard);
    } else {
      innerCardContainer.appendChild(newCard);
    }

    previousCard = newCard;
  }

  const progressContainer = createDOMElement('div', { className: 'progress-container' });
  const step = createDOMElement('div', { id: 'step' });

  progressContainer.appendChild(step);

  previousCard.appendChild(progressContainer);

  const cardContent = createDOMElement('div', { className: 'card-content' });
  previousCard.appendChild(cardContent);

  const title = createDOMElement('h1');
  title.innerText = question.text;

  cardContent.appendChild(title);

  const answerContainer = createDOMElement('ol');

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey]);
    answerContainer.appendChild(answer);
  }

  cardContent.appendChild(answerContainer);

  return outerCardContainer;
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
