'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.onclick = (e) => {
    const selectedOption = e.target.innerText[0]
    console.log(selectedOption)
  };
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  return element;
};
