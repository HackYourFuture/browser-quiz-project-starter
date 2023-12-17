import { CORRECT, WRONG } from '../constants';
import { quizData } from '../data';
export const checkAnswer = (questionIndex) => {
  const userAnswers = JSON.parse(localStorage.getItem('answeredQuestions'));
  const userCurrentSelected = userAnswers[questionIndex];
  const correctAns = quizData.questions[questionIndex].correct;
  const answerList = document.querySelectorAll('li');

  if (userCurrentSelected == correctAns) {
    answerList.forEach((answer) => {
      if (answer.id == userCurrentSelected) {
        answer.classList.add(CORRECT);
        quizData.totalScore += 10;
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
