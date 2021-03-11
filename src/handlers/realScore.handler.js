import { quizData } from '../data.js';
export const updateRealScore = () => {
  const realScoreText = document.querySelector('#realScoreText');
  realScoreText.innerText = `Your answered ${quizData.quiz.correct} correct and ${quizData.quiz.wrong} wrong`;
};
