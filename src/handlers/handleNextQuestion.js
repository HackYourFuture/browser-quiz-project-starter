'use strict';

import showCurrentQuestion from './showCurrentQuestion.js';
import { quizData } from '../data.js';
let progressCounter = 1;
export const progressBar = document.createElement('div');
progressBar.classList.add('hide');
document.body.appendChild(progressBar);
progressBar.innerText = `Your Current Question is ${progressCounter} out of ${quizData.questions.length}`;

const handleNextQuestion = () => {
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    progressCounter++;
    progressBar.innerText = '';
    progressBar.innerText = `Your Current Question is ${progressCounter} out of ${quizData.questions.length}`;

    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    showCurrentQuestion();
  } else {
    console.log('hellooooo');
  } //else {another function to show the results}
};

export default handleNextQuestion;
