'use strict';

import setupQuizHTML from '../views/setupQuizHTML.js';
import getDOMElement from '../utils/getDOMElement.js';
import showCurrentQuestion from './showCurrentQuestion.js';
import showScore from './showScore.js';



const handleInitializer = () => {

const userInterfaceContainer = getDOMElement('user-interface');

userInterfaceContainer.appendChild(setupQuizHTML());

showCurrentQuestion();
showScore();

}

export default handleInitializer;
