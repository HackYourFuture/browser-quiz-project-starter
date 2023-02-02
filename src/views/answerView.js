/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText) => {
  const listItem = document.createElement('li');
  const answerInput = document.createElement('input');
  const label = document.createElement('label');
  listItem.appendChild(answerInput);
  answerInput.setAttribute('type', 'radio');
  answerInput.setAttribute('id', key);
  answerInput.setAttribute('name', 'answer');
  answerInput.setAttribute('value', answerText);
  answerInput.appendChild(label);
  label.setAttribute('for', key);
  label.innerText = answerText;

  return listItem;
};
