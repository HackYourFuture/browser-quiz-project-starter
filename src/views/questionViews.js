'use strict';

import {NEXT_QUESTION_BUTTON_ID, LAST_QUESTION_BUTTON_ID, ANSWER_CONTAINER_ID} from '../constants.js';
import {nextQuestion, checkAnswer} from '../listeners/questionListeners.js';
import {createDOMElement} from '../utils/DOMUtils.js';

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText, elementID) => {
  const answerElement = createDOMElement('li', {
      id: elementID,
  });
  answerElement.innerText = answerText;
  answerElement.setAttribute('class', 'answers-default')
  answerElement.style.cursor = "pointer";
  answerElement.addEventListener("click", checkAnswer, { passive: true })
  
  return answerElement;
};


/**
 * Create a full question element
 */
export const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  const title = createDOMElement('h1');
  title.innerText = question.text;
  title.setAttribute('class', 'question-title')
  container.appendChild(title);

    const answerContainer = createDOMElement('ol', {
        id: ANSWER_CONTAINER_ID,
    });

    for (const answerKey in question.answers) {
        const answer = createAnswerElement(question.answers[answerKey], answerKey);
        answerContainer.appendChild(answer);
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
    return buttonElement;

};

/**
 * Creates and returns the restart test button
 */

export const createLastQuestionButtonElement = () => {
    const buttonLastElement = createDOMElement('button', {
        id: LAST_QUESTION_BUTTON_ID,
    });


    buttonLastElement.innerText = 'Restart Test';
    buttonLastElement.addEventListener('click', nextQuestion);
    return buttonLastElement;
};