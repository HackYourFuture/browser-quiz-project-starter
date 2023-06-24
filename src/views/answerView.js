/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText,handleRightAnswer) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  element.id=key
  element.addEventListener('click', () => {
    handleRightAnswer(key)
  });
  return element;
};
