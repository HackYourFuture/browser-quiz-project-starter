'use strict';

import { quizHandler } from '../handlers/quiz.handler.js';

/**
 * @startQuiz button
 * starts the quiz by displaying the first question
 */
document.getElementById('start').addEventListener('click', quizHandler);