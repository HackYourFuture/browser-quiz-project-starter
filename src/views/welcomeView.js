/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeView = (props) => {
  const { onStartClick } = props;
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1 id=h1Start>Marvel Cinematic Universe<span>Questionary</span></h1>
    <button id="btnStart">Go</button>
  `;
  element.querySelector('#btnStart').addEventListener('click', onStartClick);
  return { element };
};
