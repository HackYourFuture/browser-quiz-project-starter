import { quizData } from '../data.js';

export const answerChecker = (questionNum) => {
  const answer = localStorage.getItem(questionNum);
  const correctAnswer = quizData.questions[questionNum - 1].correct;
  if (answer === correctAnswer) {
    console.log('correct');
    return true;
  }
  console.log('wrong');
  return false;
};
