'use strict';

import { quizData } from './data.js';
import { initQuestionPage, } from './pages/questionPage.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  const storedIndex = localStorage.getItem('currentQuestionIndex');
  quizData.currentQuestionIndex = storedIndex ? parseInt(storedIndex) : 0;
  const storedFinalScore = localStorage.getItem('finalScore');
  quizData.finalScore = storedFinalScore ? parseInt(storedFinalScore) : 0;

  if (storedIndex) {
    initQuestionPage();
    const selectedAnswer = localStorage.getItem('selectedAnswer');
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const correctAnswerElement = document.getElementById(currentQuestion.correct);
    const selectedAnswerElement = document.getElementById(selectedAnswer);
    const liTags = document.getElementsByTagName('li');
    if (selectedAnswer === currentQuestion.correct) {
      correctAnswerElement.style.backgroundColor = 'green';
      correctAnswerElement.style.color = 'white';
    } else {
      correctAnswerElement.style.backgroundColor = 'green';
      correctAnswerElement.style.color = 'white';
      selectedAnswerElement.style.backgroundColor = 'red';
      selectedAnswerElement.style.color = 'white';
    }
    for (let liTag of liTags) {
      liTag.style.pointerEvents = 'none'
    }
  } else {
    initWelcomePage();
  }

};

window.addEventListener('load', loadApp);
