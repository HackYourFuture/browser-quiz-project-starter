'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  element.setAttribute('id', key);
  return element;
};
