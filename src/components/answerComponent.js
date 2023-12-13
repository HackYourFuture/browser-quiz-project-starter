import { ANSWER_LIST_ITEM } from '../constants';
/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerComponent = (key, answerText) => {
  const element = document.createElement('li');
  element.id = key;
  element.classList.add(ANSWER_LIST_ITEM);
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  return element;
};
