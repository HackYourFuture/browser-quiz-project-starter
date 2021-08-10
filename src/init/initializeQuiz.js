'use strict';

import {
  QUESTION_CONTAINER_ID,
  QUIZ_CONTAINER_ID,
  QUIZ_Interface_ELM,
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
  QUIZ_Interface_ELM.style.border = 'none';
  QUIZ_Interface_ELM.style.boxShadow = 'none';

  const startPageContainer = createDOMElement('div', {
    id: 'startPageContainer',
  });

  QUIZ_Interface_ELM.appendChild(startPageContainer);

  const gifImage = createDOMElement('img', { id: 'gifImage' });
  gifImage.src = '../public/images/Wizard.gif';
  const canvasElm = createDOMElement('canvas', { id: 'canv' });
  canvasElm.setAttribute('width', '600');
  canvasElm.setAttribute('height', '250');

  const startingBtns = createDOMElement('div', {
    id: 'startingBtns',
  });

  startPageContainer.append(gifImage, canvasElm, startingBtns);

  const easyBtn = createDOMElement('button', {
    id: 'easyBtn ',
  });
  easyBtn.textContent = 'Easy JS quiz';
  //

  const mediumBtn = createDOMElement('button', {
    id: 'mediumBtn',
  });
  mediumBtn.textContent = 'Medium JS quiz';
  const hardBtn = createDOMElement('button', {
    id: 'hardBtn',
  });
  hardBtn.textContent = 'Hard JS quiz';
  startingBtns.append(easyBtn, mediumBtn, hardBtn);
  easyBtn.addEventListener('click', chooseTheGameLevel);
  mediumBtn.addEventListener('click', chooseTheGameLevel);
  hardBtn.addEventListener('click', chooseTheGameLevel);
  //www.geeksforgeeks.org/how-to-create-a-curve-text-using-css3-canvas/
  function roundJSText() {
    let canvas = document.getElementById('canv');
    let context = canvas.getContext('2d');
    context.font = '60px Rajdhani ,sans-serif';
    context.fillStyle = '#e5e5e5';
    context.textAlign = 'center';
    let string = 'JavaScript';
    let angle = Math.PI * 0.6; // in radians
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
const chooseTheGameLevel = (event) => {
  const easyLevel = getDOMElement('easyBtn ');
  const mediumLevel = getDOMElement('mediumBtn');
  const hardLevel = getDOMElement('hardBtn');
  if (event.target === easyLevel) {
    quizData.timer = 1;
  } else if (event.target === mediumLevel) {
    quizData.timer = 0.5;
  } else if (event.target === hardLevel) {
    quizData.timer = 0.2;
  }

  QUIZ_Interface_ELM.style.border = '1px solid #eee';
  QUIZ_Interface_ELM.style.boxShadow = ' 0 0.1em 1em -0.1em #eee';

  clearDOMElement(QUIZ_Interface_ELM);
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

  quizContainer.appendChild(questionContainer);
  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);
  QUIZ_Interface_ELM.appendChild(quizContainer);

  const linksEl = createDOMElement('div');
  linksEl.setAttribute('class', 'link');
  QUIZ_Interface_ELM.appendChild(linksEl);
  //
  const scoreEl = createDOMElement('div');
  scoreEl.setAttribute('class', 'score');
  QUIZ_Interface_ELM.appendChild(scoreEl);
  //
  const questionEl = createDOMElement('div');
  questionEl.setAttribute('class', 'question');
  QUIZ_Interface_ELM.appendChild(questionEl);
};

window.addEventListener('load', startingPage);
