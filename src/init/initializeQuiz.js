'use strict';

import {
  QUESTION_CONTAINER_ID,
  QUIZ_CONTAINER_ID,
  QUIZ_Interface_BOX,
} from '../constants.js';
import { showCurrentQuestion } from '../handlers/questionHandlers.js';
import {
  clearDOMElement,
  createDOMElement,
  getDOMElement,
} from '../utils/DOMUtils.js';
import { createNextQuestionButtonElement } from '../views/questionViews.js';
import { quizData } from '../data.js';

export const startingPage = () => {
  QUIZ_Interface_BOX.style.border = 'none';
  QUIZ_Interface_BOX.style.boxShadow = 'none';

  const startPageContainer = createDOMElement('div', {
    id: 'startPageContainer',
  });
  QUIZ_Interface_BOX.appendChild(startPageContainer);

  const gifImage = createDOMElement('img', { id: 'gifImage' });
  gifImage.src = 'https://i.postimg.cc/59L9FKsL/Wizard.gif';

  const canvasElm = createDOMElement('canvas', { id: 'canv' });
  canvasElm.setAttribute('width', '600');
  canvasElm.setAttribute('height', '250');

  const startingBtns = createDOMElement('div', { id: 'startingBtns' });

  startPageContainer.append(gifImage, canvasElm, startingBtns);

  const easyBtn = createDOMElement('button', { id: 'easyBtn ' });
  easyBtn.textContent = 'Easy JS quiz';

  const mediumBtn = createDOMElement('button', { id: 'mediumBtn' });
  mediumBtn.textContent = 'Medium JS quiz';

  const hardBtn = createDOMElement('button', { id: 'hardBtn' });
  hardBtn.textContent = 'Hard JS quiz';

  startingBtns.append(easyBtn, mediumBtn, hardBtn);

  easyBtn.addEventListener('click', chooseTheGameLevel);
  mediumBtn.addEventListener('click', chooseTheGameLevel);
  hardBtn.addEventListener('click', chooseTheGameLevel);

  //--------------------- www.geeksforgeeks.org/how-to-create-a-curve-text-using-css3-canvas/-------------//
  function roundJSText() {
    let canvas = document.getElementById('canv');
    let context = canvas.getContext('2d');
    context.font = '60px Rajdhani ,sans-serif';
    context.fillStyle = '#e5e5e5';
    context.textAlign = 'center';
    let string = 'JavaScript';
    let angle = Math.PI * 0.6;
    let radius = 200;
    context.translate(300, 300);
    context.rotate((-1 * angle) / 1.9);
    for (let i = 0; i < string.length; i++) {
      context.rotate(angle / string.length);
      context.save();
      context.translate(0, -1 * radius);
      context.fillText(string[i], 0, 0);
      context.restore();
    }
  }
  roundJSText();
};
//---------------------------------- ENDING FUNCTION GEEKSFORGEEKS ---------------------------------//

const chooseTheGameLevel = (event) => {
  const easyLevel = getDOMElement('easyBtn ');
  const mediumLevel = getDOMElement('mediumBtn');
  const hardLevel = getDOMElement('hardBtn');

  switch (event.target) {
    case easyLevel:
      quizData.timer = 1;
      break;

    case mediumLevel:
      quizData.timer = 0.5;
      break;

    case hardLevel:
      quizData.timer = 0.1;
      break;
  }

  QUIZ_Interface_BOX.style.border = '1px solid #eee';
  QUIZ_Interface_BOX.style.boxShadow = ' 0 0.1em 1em -0.1em #eee';

  clearDOMElement(QUIZ_Interface_BOX);
  initializeQuiz();
};

export let initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;
  quizData.questionItem = 0;
  quizData.score = 0;

  setupQuizHTML();
  showCurrentQuestion();
};

const setupQuizHTML = () => {
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });
  const nextQuestionButton = createNextQuestionButtonElement();

  quizContainer.append(questionContainer, nextQuestionButton);

  const linksEl = createDOMElement('div');
  linksEl.setAttribute('class', 'link');

  const scoreEl = createDOMElement('div');
  scoreEl.setAttribute('class', 'score');

  const questionEl = createDOMElement('div');
  questionEl.setAttribute('class', 'question');

  QUIZ_Interface_BOX.append(quizContainer, linksEl, scoreEl, questionEl);
};

window.addEventListener('load', startingPage);
