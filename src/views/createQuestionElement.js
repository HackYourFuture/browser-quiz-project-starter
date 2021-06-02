'use strict';

import createDOMElement from '../utils/createDOMElement.js';
import selectAnswer from '../listeners/selectAnswer.js';
import { addClass } from '../utils/manageClass.js';

const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  container.appendChild(title);

  const answerContainer = createDOMElement('ol');
  addClass(answerContainer, 'hover');
  for (const answerKey in question.answers) {
    const answer = createAnswerElement(answerKey, question.answers[answerKey]);
    answerContainer.appendChild(answer);
  }

  container.appendChild(answerContainer);

  return container;
};

const createAnswerElement = (answerKey, answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;
  answerElement.dataset.answer = answerKey;
  answerElement.addEventListener('click', selectAnswer);
  return answerElement;
};

export default createQuestionElement;
