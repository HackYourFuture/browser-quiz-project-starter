import { CORRECT, WRONG } from '../constants';
import { quizData } from '../data';
export const checkAnswer = (questionIndex) => {
  const userAnswers = JSON.parse(localStorage.getItem('answeredQuestions'));
  const userCurrentSelected = userAnswers[questionIndex];
  const correctAns = quizData.questions[questionIndex].correct;
  const answerList = document.querySelectorAll('li');

  const fireworkBefore = document.getElementById('firework_before');
  const fireworkAfter = document.getElementById('firework_after');
  if (userCurrentSelected == correctAns) {
    answerList.forEach((answer) => {
      if (answer.id == userCurrentSelected) {
        answer.classList.add(CORRECT);
        quizData.totalScore += 10;
        fireworkAfter.classList.add('after');
        fireworkBefore.classList.add('before');
      }
    });
  } else {
    answerList.forEach((answer) => {
      if (answer.id == userCurrentSelected) {
        answer.classList.add(WRONG);
      }
      if (answer.id == correctAns) {
        answer.classList.add(CORRECT);
      }
    });
  }
};
