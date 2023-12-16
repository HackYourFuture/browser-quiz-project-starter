import { quizData } from '../data';
export const checkAnswer = (questionIndex) => {
  const userAnswers = JSON.parse(localStorage.getItem('answeredQuestions'));
  const userCurrentSelected = userAnswers[questionIndex];
  const correctAns = quizData.questions[questionIndex].correct;
  if (userCurrentSelected == correctAns) {
    console.log(true);
  } else {
    console.log(false);
  }
};
