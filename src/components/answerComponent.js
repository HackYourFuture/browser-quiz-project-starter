/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerComponent = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
