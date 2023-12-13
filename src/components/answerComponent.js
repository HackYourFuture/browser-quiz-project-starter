/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerComponent = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;
  element.addEventListener('click', disableClick)
  return element;
};

const disableClick = (e) => {
  e.target.parentElement.style.cssText += 'pointer-events: none; opacity: 0.5';
}
