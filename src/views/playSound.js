import { quizData } from '../data.js';

export const playSound = function () {
  const wrongAnswerSound = document.querySelector('#wrong-answer-audio');
  const rightAnswerSound = document.querySelector('#right-answer-audio');

  const selectedAnswer =
    quizData.questions[quizData.currentQuestionIndex].selected;

  const correctAnswer =
    quizData.questions[quizData.currentQuestionIndex].correct;

  if (selectedAnswer === correctAnswer) {
    rightAnswerSound.play();
  } else {
    wrongAnswerSound.play();
  }
};
