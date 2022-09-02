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
    currentQuestionIndex < questionLength - 1
      ? 'Next question'
      : 'View my results';
  // I use String.raw just to get fancy colors for the HTML in VS Code.
  const getQuestionLinks = (links) => {
    return links
      .map((link) => {
        return `<a href="${link.href}" target="_blank"> ${link.text}</a>`;
      })
      .join(' & ');
  };
  element.innerHTML = String.raw`
    <h1 class="questionCount">${
      currentQuestionIndex + 1
    } / ${questionLength}</h1>
    <h1 class="question">${currentQuestion.text}</h1>

    <ul id="answerList">
    </ul>
    <div id="hint"> 
      ${getQuestionLinks(currentQuestion.links)}
    </div>
    <h1 id="scoreDisplay">Your score: ${score}</h1>
    <h1 id="counterDisplay">${count}</h1> 
    <button id="btnNext">
      ${btnText}
    </button>
  `;

  const { answerList, btnNext, scoreDisplay, counterDisplay } =
    findElementsWithIds(element);

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
    scoreDisplay.textContent = 'Your score: ' + score;

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
