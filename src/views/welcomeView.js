/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeView = (props) => {
  const { onStartClick } = props;
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <button id="btnStart">start quiz</button>
  `;
  element.querySelector('#btnStart').addEventListener('click', onStartClick);
  return { element };
};
