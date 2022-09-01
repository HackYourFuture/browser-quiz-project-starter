import { findElementsWithIds } from '../helpers/findElementsWithIds.js';

/**
 * Create the result screen
 * @returns {Element}
 */
export const createResultView = (props) => {
  const { data, onRestartClick } = props;
  const element = document.createElement('div');
  let resultText = '';
  let score = 0;
  data.questions.forEach((question) => {
    score += question.correct === question.selected ? 1 : 0;
    const className =
      question.correct === question.selected ? 'right' : 'wrong';
    resultText += String.raw`
      <p>
        <cite>${question.text}</cite>
        <br>
        <answer class=${className}>${
      question.answers[question.selected]
    }</answer>
      </p>
    `;
    if (question.correct !== question.selected) {
      resultText += String.raw`
      <p>
        Correct answer was: ${question.answers[question.correct]}
      </p>`;
    }
  });
  element.innerHTML = String.raw`
    <h1>Okay you've done</h1>
    ${resultText}
    <h3> Your score is ${score}</h3>
    <button id="btnRestart">restart the quiz</button>
  `;

  const { btnRestart } = findElementsWithIds(element);
  btnRestart.addEventListener('click', onRestartClick);
  return { element };
};
