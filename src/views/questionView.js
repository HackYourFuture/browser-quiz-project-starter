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
    count,
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
    <h1 id="counterDisplay">${count}</h1> 
    <button id="btnNext">
      ${btnText}
    </button>
  `;

  const {
    answerList,
    btnNext,
    scoreDisplay,
    counterDisplay,
  } = findElementsWithIds(element);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const { element: answerElement } = createAnswerElement({ key, answerText });
    answerList.appendChild(answerElement);
    answerElement.addEventListener('click', () => {
      handleAnswer(currentQuestion, key);
    });
  }

  btnNext.addEventListener('click', onNextClick);

  const showCount = (count) => {
    counterDisplay.textContent = count;
  };

  const showAnswer = (currentQuestion, score) => {
    console.log({ currentQuestion }, score);
    scoreDisplay.textContent = 'Score: ' + score;

    const answers = element.querySelectorAll('.answer-item');
    answers.forEach((answer) => {
      answer.classList.add('disabled');
      if (answer.id === currentQuestion.selected) {
        if (currentQuestion.correct === currentQuestion.selected) {
          answer.classList.add('correct');
        } else {
          answer.classList.add('wrong');
          answers.forEach((answerSecond) => {
            if (answerSecond.id === currentQuestion.correct) {
              answerSecond.classList.add('correct');
            }
          });
        }
      }

      if (
        currentQuestion.selected === 'no answer' &&
        answer.id === currentQuestion.correct
      ) {
        answer.classList.add('correct');
      }
    });
  };

  return { element, showAnswer, showCount };
};
