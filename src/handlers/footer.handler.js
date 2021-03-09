import { quizData } from '../data.js';
import { updateQuiz } from './quiz.handler.js';

let currentQuestion = 0;
export const footerHandler = (event) => {
  console.log(currentQuestion, quizData.questions.length);
  const quizContainer = document.querySelector('.quizContainer');
  quizContainer.remove();

  if (event.target.id === 'nextButton') {
    if (currentQuestion !== quizData.questions.length - 1) {
      currentQuestion++;
    }
  } else {
    if (currentQuestion !== 0) {
      currentQuestion--;
    }
  }
  updateQuiz(quizData.questions[currentQuestion], currentQuestion);
};
