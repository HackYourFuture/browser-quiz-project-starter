import { createAnswerElement } from './answerView.js';
import { findElementsWithIds } from '../helpers/findElementsWithIds.js';

/*
 * Create a full question element
 * @returns {{Element}}
 */
export const createQuestionView = (props) => {
  const {
    currentQuestion,
    onNextClick,
    handleAnswer,
    score,
    currentQuestionIndex,
    questionLength,
  } = props;
  const element = document.createElement('div');
  const btnText =
    currentQuestionIndex < questionLength - 1 ? 'Next Question' : 'Finish';
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>Question: ${currentQuestionIndex + 1} / ${questionLength}</h1>
    <h1>${currentQuestion.text}</h1>

    <ul id="answerList">
    </ul>
    <h1 id="scoreDisplay">Score: ${score}</h1> 
    <button id="btnNext">
      ${btnText}
    </button>
  `;

  const { answerList, btnNext, scoreDisplay } = findElementsWithIds(element);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const { element: answerElement } = createAnswerElement({ key, answerText });
    answerList.appendChild(answerElement);
    answerElement.addEventListener('click', () => {
      handleAnswer(currentQuestion, key);
    });
  }

  btnNext.addEventListener('click', onNextClick);

  const showAnswer = (currentQuestion, score) => {
    console.log({ currentQuestion }, score);
    //-y- if the answer is true, scoreDisplay is updated
    scoreDisplay.innerHTML = 'Score: ' + score;

    const answers = element.querySelectorAll('.answer-item');
    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.add('disabled');
      if (answers[i].id === currentQuestion.selected) {
        if (currentQuestion.correct === currentQuestion.selected) {
          //-y- if answer is correct, option's background set to green
          answers[i].classList.add('correct');
        } else {
          //-y- if answer is wrong, option's background set to red
          answers[i].classList.add('wrong');
          for (let j = 0; j < answers.length; j++) {
            //-y- and correct option's background set to green
            if (answers[j].id === currentQuestion.correct) {
              answers[j].classList.add('correct');
            }
          }
        }
      }
    }
  };

  return { element, showAnswer };
};
