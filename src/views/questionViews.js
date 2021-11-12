'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { nextQuestion, selectedAnswer } from '../listeners/questionListeners.js';
import { createDOMElement } from '../utils/DOMUtils.js';
import { quizData } from '../data.js'

/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText) => {
  const answerElement = createDOMElement('li');
  answerElement.innerText = answerText;
  answerElement.addEventListener('click', selectedAnswer);
  return answerElement;
};

// Create UpToDate Score Element
export const createScoreElement = (currentTotalScore) => {
  const quizStatusBar = createDOMElement('div', { className: 'quiz-status' });
  const currentScore = createDOMElement('a', { className: 'current-score' });
  quizStatusBar.appendChild(currentScore);

  currentScore.text = currentTotalScore;
  return currentScore;
}

// Create a Question Card
export const createQuestionElement = (question) => {
  const outerCardContainer = createDOMElement('div');
  outerCardContainer.className = 'outer-container';

  const innerCardContainer = createDOMElement('div');
  innerCardContainer.className = 'inner-container';

  outerCardContainer.appendChild(innerCardContainer);

  // Create a the Questions Card and give the proper className

  const card_10 = createDOMElement('div', { className: 'card card10 inactive' });
  const card_9 = createDOMElement('div', { className: 'card card9 inactive' });
  const card_8 = createDOMElement('div', { className: 'card card8 inactive' });
  const card_7 = createDOMElement('div', { className: 'card card7 inactive' });
  const card_6 = createDOMElement('div', { className: 'card card6 inactive' });
  const card_5 = createDOMElement('div', { className: 'card card5 inactive' });
  const card_4 = createDOMElement('div', { className: 'card card4 inactive' });
  const card_3 = createDOMElement('div', { className: 'card card3 inactive' });
  const card_2 = createDOMElement('div', { className: 'card card2 inactive' });

  const card_1 = createDOMElement('div', { className: 'card card1' });

  const progressContainer = createDOMElement('div');
  progressContainer.classList.add('progress-container');
  const step = createDOMElement('div', { id: 'step' });

  progressContainer.appendChild(step);

  card_1.appendChild(progressContainer);

  card_10.appendChild(card_9);
  card_9.appendChild(card_8);
  card_8.appendChild(card_7);
  card_7.appendChild(card_6);
  card_6.appendChild(card_5);
  card_5.appendChild(card_4);
  card_4.appendChild(card_3);
  card_3.appendChild(card_2);
  card_2.appendChild(card_1);

  innerCardContainer.appendChild(card_10);

  const content = createDOMElement('div');
  content.className = 'content';

  card_1.appendChild(content);

  const title = createDOMElement('h1');
  title.innerText = question.text;

  content.appendChild(title);

  const answerContainer = createDOMElement('ol');

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey]);
    answerContainer.appendChild(answer);
  }

  content.appendChild(answerContainer);

  return outerCardContainer;
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

  return buttonElement;
};
