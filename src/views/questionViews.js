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
    let cardContent = undefined;
    if (i != 1) {
      newCard = createDOMElement('div', { className: `card card${i} inactive` });
      cardContent = createDOMElement('div', { className: 'card-content' });
    } else {
      newCard = createDOMElement('div', { className: `card card${i}` });
      cardContent = createDOMElement('div', { className: 'card-content active' });
    }

    // newCard.style.right = `${translateCard}px`;
    // newCard.style.top = `${translateCard}px`;

    if (previousCard) {
      previousCard.appendChild(newCard);
      previousCard.appendChild(cardContent);

      const title = createDOMElement('h1');
      title.innerText = quizData.questions[i].text;
      cardContent.appendChild(title);

      const answerContainer = createDOMElement('ol');

      for (const answerKey in quizData.questions[i].answers) {
        const answer = createAnswerElement(quizData.questions[i].answers[answerKey]);
        answerContainer.appendChild(answer);
      }

      cardContent.appendChild(answerContainer);

    } else {
      innerCardContainer.appendChild(newCard);
      innerCardContainer.appendChild(cardContent);
    }

    previousCard = newCard;
  }

  const progressContainer = createDOMElement('div', { className: 'progress-container' });
  const step = createDOMElement('div', { id: 'step' });

  progressContainer.appendChild(step);

  previousCard.appendChild(progressContainer);

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
