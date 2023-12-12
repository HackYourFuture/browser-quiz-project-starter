/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'answer';
  input.value = key;
  element.appendChild(input);
  element.innerHTML += `${key}: ${answerText}`;
  return element;
};
