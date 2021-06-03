'use strict';

import startQuiz from '../listeners/startQuiz.js';
import createDOMElement from '../utils/createDOMElement.js';

const setupLandingPage = () => {
  const mainContainer = createDOMElement('div');
  mainContainer.className = 'main-container';
  const imgContainer = createDOMElement('div');
  imgContainer.className = 'img-container';
  const img = createDOMElement('img');
  Object.assign(img, {
    className: 'rocket-img',
    src: 'images/rocket.png',
    alt: 'rocket-img',
  });
  const contentContainer = createDOMElement('div');
  contentContainer.className = 'content-container';
  const heading = createDOMElement('h1');
  heading.innerText =
    'Discover your javascript skills in just 5 questions and get awesome insights on how to improve.';

  const btnContainer = createDOMElement('div');
  btnContainer.className = 'btn-container';

  const startBtn = createDOMElement('button');
  Object.assign(startBtn, {
    className: 'start-btn',
    innerText: 'Start Quiz',
    startBtn: addEventListener('click', startQuiz),
  });

  mainContainer.appendChild(imgContainer);
  mainContainer.appendChild(contentContainer);
  imgContainer.appendChild(img);
  contentContainer.appendChild(heading);
  contentContainer.appendChild(btnContainer);
  btnContainer.appendChild(startBtn);

  return mainContainer;
};

export default setupLandingPage;
