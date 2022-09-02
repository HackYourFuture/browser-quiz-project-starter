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
  element.style.border = "1px solid black";
  element.style.margin = "20px";
  element.style.width = "600px";
  element.style.height = "35px";
  element.style.fontSize = "25px";
  element.style.paddingTop = "5px";

  return element;
};