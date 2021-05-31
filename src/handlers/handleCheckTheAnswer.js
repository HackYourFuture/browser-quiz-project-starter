'use strict';

import { quizData } from '../data.js';
import { addClass, removeClass } from '../utils/manageClass.js';
import showScore from './showScore.js';

const handleCheckTheAnswer = (buttonElement) => {
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    buttonElement.innerText = 'Next Question';
    buttonElement.dataset.status = 'nextQuestion';
  } else {
    buttonElement.innerText = 'Show results';
    buttonElement.dataset.status = 'showResults';
  }

  const selectedAnswer =
    quizData.questions[quizData.currentQuestionIndex].selected;
  const correctAnswer =
    quizData.questions[quizData.currentQuestionIndex].correct;
  const selectedElement = document.querySelector('.selected');
  if (selectedElement) {
    removeClass(selectedElement, 'selected');
  }

  if (selectedAnswer === correctAnswer) {
    addClass(selectedElement, 'correct');
    quizData.correctAnswerScore++;
    showScore();
  } else {
    if (selectedElement) {
      addClass(selectedElement, 'wrong');
    }

    const correctAnswerElement = document.querySelector(
      `[data-answer='${correctAnswer}']`
    );

    addClass(correctAnswerElement, 'correct');
  }
};

export default handleCheckTheAnswer;
