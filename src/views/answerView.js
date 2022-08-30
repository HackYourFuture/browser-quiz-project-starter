/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  //y - added classname to each li element (answer-item)
  element.classList.add('answer-item');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return { element };
};
