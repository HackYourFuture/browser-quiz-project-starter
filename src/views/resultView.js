import { findElementsWithIds } from '../helpers/findElementsWithIds.js';

/**
 * Create the result screen
 * @returns {Element}
 */
export const createResultView = (props) => {
  const { data, onRestartClick } = props;
  const element = document.createElement('div');
  let resultText = '';
  data.questions.forEach((question) => {
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
    if (question.correct === question.selected) {
      resultText += String.raw`
      <p>
        Correct answer was: ${question.answers[question.selected]}
      </p>`;
    }
  });
  element.innerHTML = String.raw`
    <h1>Okay you've done</h1>
    <h3> Your score is ${data.score}</h3>
    ${resultText}
    
    <button id="btnRestart">restart the quiz</button>
  `;

  const { btnRestart } = findElementsWithIds(element);
  btnRestart.addEventListener('click', onRestartClick);
  return { element };
};
