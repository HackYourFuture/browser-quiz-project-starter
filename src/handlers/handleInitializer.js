'use strict';

import setupQuizHTML from '../views/setupQuizHTML.js';
import getDOMElement from '../utils/getDOMElement.js';
import showCurrentQuestion from './showCurrentQuestion.js';
import showScore from './showScore.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import handleTimer from './handleTimer.js';
import handleNextQuestion from './handleNextQuestion.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

const handleInitializer = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  clearDOMElement(userInterfaceContainer);
  userInterfaceContainer.appendChild(setupQuizHTML());

  showCurrentQuestion();
  showScore();
  handleTimer(true);
  handleNextQuestion(getDOMElement(NEXT_QUESTION_BUTTON_ID));
};

export default handleInitializer;
