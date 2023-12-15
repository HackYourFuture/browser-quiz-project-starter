/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerComponent = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    <label for="${key}">
      <input type="radio" name="answerItem" value=${key} id="${key}" />
    ${answerText}
    </label>
  `;
  element.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    disableClick();
  });
  return element;
};
const disableClick = () => {
  const answerList = document.querySelectorAll('li [name="answerItem"]');
  answerList.forEach((element) => {
    element.disabled = true;
    element.parentElement.parentElement.style.cssText += 'opacity: 0.5';
  });
};
