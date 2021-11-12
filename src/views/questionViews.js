'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { nextQuestion, selectedAnswer } from '../listeners/questionListeners.js';
import { createDOMElement } from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;
  answerElement.addEventListener('click', selectedAnswer);
  return answerElement;
};

// Create a Reference Element
export const createReferenceElement = (linkData) => {
  const referenceElement = createDOMElement('li');
  const referenceLink = createDOMElement('a');
  referenceElement.appendChild(referenceLink);

  referenceLink.text = linkData.text;
  referenceLink.href = linkData.href;
  return referenceLink;
};

// Create a Question Card
export const createQuestionElement = (question) => {
  const outerCardContainer = createDOMElement('div');
  outerCardContainer.className = 'outer-container';

  const innerCardContainer = createDOMElement('div');
  innerCardContainer.className = 'inner-container';

  outerCardContainer.appendChild(innerCardContainer);

  const card_10 = createDOMElement('div');
  card_10.classList.add('card', 'card10', 'inactive');
  const card_9 = createDOMElement('div');
  card_9.classList.add('card', 'card9', 'inactive');
  const card_8 = createDOMElement('div');
  card_8.classList.add('card', 'card8', 'inactive');
  const card_7 = createDOMElement('div');
  card_7.classList.add('card', 'card7', 'inactive');
  const card_6 = createDOMElement('div');
  card_6.classList.add('card', 'card6', 'inactive');
  const card_5 = createDOMElement('div');
  card_5.classList.add('card', 'card5', 'inactive');
  const card_4 = createDOMElement('div');
  card_4.classList.add('card', 'card4', 'inactive');
  const card_3 = createDOMElement('div');
  card_3.classList.add('card', 'card3', 'inactive');
  const card_2 = createDOMElement('div');
  card_2.classList.add('card', 'card2', 'inactive');

  const card_1 = createDOMElement('div');
  card_1.classList.add('card', 'card1');

  const progressContainer = createDOMElement('div');
  progressContainer.classList.add('progress-container');
  const step = createDOMElement('div', { id: 'step' });

  progressContainer.appendChild(step);

  card_1.appendChild(progressContainer);

  card_10.appendChild(card_9);
  card_9.appendChild(card_8);
  card_8.appendChild(card_7);
  card_7.appendChild(card_6);
  card_6.appendChild(card_5);
  card_5.appendChild(card_4);
  card_4.appendChild(card_3);
  card_3.appendChild(card_2);
  card_2.appendChild(card_1);

  innerCardContainer.appendChild(card_10);

  const content = createDOMElement('div');
  content.className = 'content';

  card_1.appendChild(content);

  const title = createDOMElement('h1');
  title.innerText = question.text;

  content.appendChild(title);

  const answerContainer = createDOMElement('ol');

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey]);
    answerContainer.appendChild(answer);
  }

  content.appendChild(answerContainer);

  const referenceContainer = createDOMElement('ul');

  for (const referenceLink in question.links) {
    const link = createReferenceElement(question.links[referenceLink]);
    referenceContainer.appendChild(link);
  }

  content.appendChild(referenceContainer);

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
