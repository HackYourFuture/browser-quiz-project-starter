'use strict';

import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
import { nextQuestion } from '../listeners/questionListeners.js';
import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';
import { checkAnswer } from '../views/answer-selection.js';
/**
 * Create an Answer element
 */
export const createAnswerElement = (answerText, letters) => {
  const answerElement = createDOMElement('div');
  answerElement.className = 'choice-container';
  const choiceLetter = createDOMElement('p');
  choiceLetter.className = 'prefixer-container';
  choiceLetter.innerText = letters.toUpperCase();
  answerElement.appendChild(choiceLetter);
  const answerButton = createDOMElement('button');
  answerElement.appendChild(answerButton);
  answerButton.innerText = answerText;

  return answerElement;
};

/**
 * Create a full question element
 */

export const createQuestionElement = (question) => {
  const container = document.createElement('div');
  container.className = 'container';
  const mainWrapper = document.createElement('div');
  container.id = 'main-wrapper';
  container.appendChild(mainWrapper);
  const questionText = document.createElement('h2');
  container.id = 'question-container';
  questionText.id = 'question';
  questionText.innerText = question.text;
  mainWrapper.appendChild(questionText);
  const answersContainer = document.createElement('div');
  answersContainer.className = 'questions-wrapper';
  answersContainer.id = 'user-interface';
  mainWrapper.appendChild(answersContainer);

  for (const answerKey in question.answers) {
    const answer = createAnswerElement(question.answers[answerKey], answerKey);
    answersContainer.appendChild(answer);
  }

  // here we put a unique Id for every button
  let answerKeyNumber = 0;
  let buttonsEl = container.querySelectorAll('button');
  for (const answerKey in question.answers) {
    buttonsEl[answerKeyNumber].id = answerKey;
    answerKeyNumber++;
  }

  //!important
  buttonsEl.forEach((button) => button.addEventListener('click', checkAnswer)); //we need to check later
  //container.appendChild(answerContainer);

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
  //buttonElement.addEventListener('click', nextQuestion);

  return buttonElement;
};
