'use strict';

import { quizData } from '../data.js';
import { addClass, removeClass } from '../utils/manageClass.js';
import handleTimer from './handleTimer.js';
import showScore from './showScore.js';

const handleCheckTheAnswer = (buttonElement) => {
  handleTimer(false);
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    buttonElement.innerText = 'Next Question';
    buttonElement.dataset.status = 'nextQuestion';
  } else {
    buttonElement.innerText = 'Show results';
    buttonElement.dataset.status = 'showResults';
  }

  const correctAnswer =
    quizData.questions[quizData.currentQuestionIndex].correct;
  const selectedElement = document.querySelector('.selected');

  if(selectedElement){
    const selectedAnswer = selectedElement.dataset.answer;
    quizData.questions[quizData.currentQuestionIndex].selected = selectedAnswer;
    removeClass(selectedElement, 'selected');
    if (selectedAnswer === correctAnswer) {
      quizData.correctAnswerScore++;
      showScore();
    }else{
      addClass(selectedElement, 'wrong');
    }
  }else{
    quizData.questions[quizData.currentQuestionIndex].selected = null;
  }

  const correctAnswerElement = document.querySelector(
    `[data-answer='${correctAnswer}']`
  );
  addClass(correctAnswerElement, 'correct');

  removeClass(document.querySelector('.hover'), 'hover');
};

export default handleCheckTheAnswer;
