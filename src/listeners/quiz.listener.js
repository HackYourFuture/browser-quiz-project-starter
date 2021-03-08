'use strict';

import { quizHandler } from '../handlers/quiz.handler.js';

/**
 * @startQuiz button
 * starts the quiz by displaying the first question
 */

const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', quizHandler);
