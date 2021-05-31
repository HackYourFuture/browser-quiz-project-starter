'use strict';
import showResults from './showResults.js';
import showCurrentQuestion from './showCurrentQuestion.js';
import { quizData } from '../data.js';

const handleNextQuestion = (buttonElement) => {
  buttonElement.innerText = 'Check The Answer';
  buttonElement.dataset.status = 'checkAnswer';
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  if (quizData.currentQuestionIndex < quizData.questions.length) {
    showCurrentQuestion();
  } else {
    showResults();
  }
};

export default handleNextQuestion;
