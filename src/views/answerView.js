/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (props) => {
  const { key, answerText } = props;
  const element = document.createElement('li');
  //y - added classname to each li element (answer-item)
  element.classList.add('answer-item');
  element.innerHTML = String.raw`
    <span>${key}</span> ${answerText}
  `;
  //-y- added id for matching key with correct and selected
  element.setAttribute('id', `${key}`);
  return { element };
};
