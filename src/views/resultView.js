/**
 * Create the result screen
 * @returns {Element}
 */
export const createResultView = (onRestartClick, data) => {
  const element = document.createElement('div');
  let answers = '';
  let yourRate = 0;
  data.questions.forEach((question) => {
    question.correct;
    question.selected;
    if (question.correct === question.selected) {
      yourRate++;
    }
    answers += `For the question : ${question.text} you've select`;
  });
  element.innerHTML = String.raw`
    <h1>Okay you've done</h1>
    ${answers}
    <button id="btnRestart">restart the quiz</button>
  `;
  element
    .querySelector('#btnRestart')
    .addEventListener('click', onRestartClick);
  return element;
};
