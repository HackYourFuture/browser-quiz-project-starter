export const createAnswerElement = (key, answerText) => {
  const label = document.createElement('label');
  label.className = 'answer';

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'answer';
  input.value = key;

  label.appendChild(input);
  label.appendChild(document.createTextNode(answerText));

  return label;
};
