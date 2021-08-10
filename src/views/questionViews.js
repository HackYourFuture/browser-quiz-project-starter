'use strict';

import { NEXT_QUESTION_BUTTON_ID, QUIZ_Interface_BOX } from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { clearDOMElement, createDOMElement } from '../utils/DOMUtils.js';
import { checkAnswer } from '../listeners/questionListeners.js';
import { startingPage } from '../init/initializeQuiz.js';
import { quizData } from '../data.js';

export const showResult = () => {
  const quizQuestionItems = QUIZ_Interface_BOX.children;
  for (const questionItem of quizQuestionItems) {
    questionItem.style.display = 'none';
  }

  const theFinalScore = quizData.score;
  const showScore = createDOMElement('h1', { id: 'showScore' });

  const wizardImg = createDOMElement('img');

  if (theFinalScore < 5) {
    showScore.innerHTML = `Game Over!!! your score is <span>${theFinalScore}<span>`;
    wizardImg.src =
      'https://i.postimg.cc/1zy7HQZf/d8ee68d4f24e481c3c534e7286fd4352.gif';

    wizardImg.setAttribute('height', '250');
  } else {
    showScore.innerHTML = `Hooray!!! you passed !!!!your score is <span>${theFinalScore}<span>`;
    wizardImg.src =
      'https://i.postimg.cc/ZnGkVMT0/Vast-Opulent-Lark-max-1mb.gif';
  }
  QUIZ_Interface_BOX.append(showScore, wizardImg);

  const newButton = createDOMElement('button', { id: 'try-again' });
  newButton.innerText = 'Try again';
  QUIZ_Interface_BOX.appendChild(newButton);

  newButton.addEventListener('click', restartGame);
};

const restartGame = () => {
  clearDOMElement(QUIZ_Interface_BOX);
  startingPage();
};

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText, key) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;

  answerElement.setAttribute('class', 'answer-options');
  answerElement.setAttribute('data-value', key);

  answerElement.addEventListener('click', checkAnswer);

  return answerElement;
};

/**
 * Create a full question element
 */

export const createQuestionElement = (question) => {
  const container = createDOMElement('div');
  container.setAttribute('class', 'content-question');

  const title = createDOMElement('h1');
  container.appendChild(title);

  const answerContainer = createDOMElement('ol');
  answerContainer.setAttribute('class', 'list-answers');

  if (question !== undefined) {
    for (const answerKey in question.answers) {
      const answer = createAnswerElement(
        question.answers[answerKey],
        answerKey
      );
      answerContainer.appendChild(answer);
    }

    title.innerText = question.text;
    container.appendChild(answerContainer);
  } else {
    showResult();
  }

  return container;
};

/**
 * Creates and returns the next questions button
 */
export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });

  buttonElement.setAttribute('class', 'button-element');
  buttonElement.innerText = 'Next question';

  buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};
