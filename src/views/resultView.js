/**
 * Create the result screen
 * @returns {Element}
 */
export const createResultView = (onRestartClick) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Okay you've done</h1>
    <button id="btnRestart">restart the quiz</button>
  `;
  element
    .querySelector('#btnRestart')
    .addEventListener('click', onRestartClick);
  return element;
};
