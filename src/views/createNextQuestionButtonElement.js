'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import nextQuestion from '../listeners/nextQuestion.js';
import createDOMElement from '../utils/createDOMElement.js';
import { addClass } from '../utils/manageClass.js';

const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });
  addClass(buttonElement, 'btn');
  buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};

export default createNextQuestionButtonElement;
