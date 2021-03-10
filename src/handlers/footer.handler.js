import { quizData } from '../data.js';
import { updateQuiz } from './quiz.handler.js';


export const footerHandler = (event) => {
  console.log(quizData.quiz.currentQuestion, quizData.questions.length);
  const quizContainer = document.querySelector('.quizContainer');
  quizContainer.remove();

  if (event.target.id === 'nextButton') {
    if (quizData.quiz.currentQuestion !== quizData.questions.length - 1) {
      quizData.quiz.currentQuestion++;
    }
  } else {
    if (quizData.quiz.currentQuestion !== 0) {
      quizData.quiz.currentQuestion--;
    }
  }
  updateQuiz(quizData.questions[quizData.quiz.currentQuestion], quizData.quiz.currentQuestion);
};
