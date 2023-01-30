/**
 * Create an Answer element
 * @returns {Element}
 */

// We can also use same idea here and change the HTML elements if needed.
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
