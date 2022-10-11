'use strict';

/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  // element.innerHTML = String.raw`
  //   ${key}: ${answerText};
  // `;
  element.innerHTML = String.raw`
    
    <button class="test" id=${key}>${key}: ${answerText}</button>
  `;
  
  return element;
};
