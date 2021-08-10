'use strict';

import { NEXT_QUESTION_BUTTON_ID, QUIZ_Interface_ELM } from '../constants.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { clearDOMElement, createDOMElement } from '../utils/DOMUtils.js';
import { checkAnswer } from '../listeners/questionListeners.js';
import { initializeQuiz, startingPage } from '../init/initializeQuiz.js';
import { quizData } from '../data.js';

// QUIZ_CONTAINER_ID
export const showResult = () => {
  const quizQuestionItems = QUIZ_Interface_ELM.children;
  for (const questionItem of quizQuestionItems) {
    questionItem.style.display = 'none';
  }
  const theFinalScore = quizData.score;
  const showScore = createDOMElement('h1');
  QUIZ_Interface_ELM.appendChild(showScore);

  if (theFinalScore > 5) {
    showScore.textContent = `Hora🪄,  you passed !!!!your score ${theFinalScore}`;
  } else {
    showScore.textContent = `Game Over🧙‍♂️! your score ${theFinalScore}`;
  }

  // create new game btn
  const newButton = createDOMElement('button', { id: 'try-again' });
  newButton.innerText = 'Try again ';

  QUIZ_Interface_ELM.appendChild(newButton);
  newButton.addEventListener('click', restartGame);
};
//
const restartGame = () => {
  clearDOMElement(QUIZ_Interface_ELM);
  startingPage();
};

/**
 * Create an Answer element
 */

export const createAnswerElement = (answerText, key) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;
  // set class for li
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
  const title = createDOMElement('h1');
  if (question !== undefined) {
    title.innerText = question.text;
    // } else {
    //   showResult();
  }
  container.appendChild(title);
  const answerContainer = createDOMElement('ol');
  // set classes .
  container.setAttribute('class', 'content-question');
  answerContainer.setAttribute('class', 'list-answers');
  // if (QUIZ_Interface_ELM.children.length === 0) {
  //   const linksEl = createDOMElement('div');
  //   linksEl.setAttribute('class', 'link');
  //   QUIZ_Interface_ELM.appendChild(linksEl);
  //   const scoreEl = createDOMElement('div');
  //   scoreEl.setAttribute('class', 'score');
  //   QUIZ_Interface_ELM.appendChild(scoreEl);
  //   const questionEl = createDOMElement('div');
  //   questionEl.setAttribute('class', 'question');
  //   QUIZ_Interface_ELM.appendChild(questionEl);
  // }
  if (question !== undefined) {
    for (const answerKey in question.answers) {
      const answer = createAnswerElement(
        question.answers[answerKey],
        answerKey
      );
      answerContainer.appendChild(answer);
    }
  } else {
    showResult();
  }

  container.appendChild(answerContainer);

  return container;
};

/**
 * Creates and returns the next questions button
 */
export const createNextQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: NEXT_QUESTION_BUTTON_ID,
  });

  buttonElement.innerText = 'Next question';
  buttonElement.addEventListener('click', nextQuestion);
  // set class for the button
  buttonElement.setAttribute('class', 'button-element');
  return buttonElement;
};
