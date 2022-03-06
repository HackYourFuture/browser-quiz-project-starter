'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.classList.add('choice-container');
  element.innerHTML = String.raw`
  <p class="choice-prefix">${key}</p>
  <p class="choice-text">${answerText}</p>
  `;
  return element;
};
