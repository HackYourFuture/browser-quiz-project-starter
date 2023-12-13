import { quizData } from '../data.js';

export const checkAnswer = (questionNum) => {
  const answer = localStorage.getItem(questionNum);
  const correctAnswer = quizData.questions[questionNum - 1].correct;
  if (answer === correctAnswer) {
    return true;
  }
  return false;
};
