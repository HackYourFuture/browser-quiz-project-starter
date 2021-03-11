import { quizData } from '../data.js';
import { updateQuiz } from './quiz.handler.js';
import { scoreView } from '../views/score.view.js';

export const footerHandler = (event) => {
  //debugger;
  console.log(quizData.quiz.currentQuestion, quizData.questions.length);
  const quizContainer = document.querySelector('.quizContainer');
  quizContainer.remove();

  if (event.target.id === 'nextButton') {
    if (quizData.quiz.currentQuestion < quizData.questions.length) {
      quizData.quiz.currentQuestion++;
    }
    if (quizData.quiz.currentQuestion === quizData.questions.length) {
      console.log('end');
      scoreView(quizData.quiz);
    } else {
      updateQuiz(
        quizData.questions[quizData.quiz.currentQuestion],
        quizData.quiz.currentQuestion
      );
    }
  } else if (event.target.id === 'prevButton') {
    if (quizData.quiz.currentQuestion >= 0) {
      quizData.quiz.currentQuestion -= 1;
    }
    if (quizData.quiz.currentQuestion === -1) {
      console.log('first');
    } else {
      updateQuiz(
        quizData.questions[quizData.quiz.currentQuestion],
        quizData.quiz.currentQuestion
      );
    }
  }
};
