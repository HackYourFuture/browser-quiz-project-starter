import { quizData } from '../data.js';
import { updateQuiz } from './quiz.handler.js';
import { scoreView } from '../views/score.view.js';
import { updateRealScore } from '../handlers/realScore.handler.js';

export const footerHandler = (event) => {
  const quizContainer = document.querySelector('.quizContainer');
  quizContainer.remove();

  if (event.target.id === 'nextButton') {
    if (quizData.quiz.currentQuestion < quizData.questions.length) {
      quizData.quiz.currentQuestion++;
    }
    if (quizData.quiz.currentQuestion === quizData.questions.length) {
      scoreView(quizData.quiz);
    } else {
      updateQuiz(
        quizData.questions[quizData.quiz.currentQuestion],
        quizData.quiz.currentQuestion
      );
      updateRealScore();
    }
  } else if (event.target.id === 'prevButton') {
    if (quizData.quiz.currentQuestion >= 0) {
      quizData.quiz.currentQuestion--;
    }
    if (quizData.quiz.currentQuestion === -1) {
      updateQuiz(quizData.questions[0], 0);
      quizData.quiz.currentQuestion = 0;
    } else {
      updateQuiz(
        quizData.questions[quizData.quiz.currentQuestion],
        quizData.quiz.currentQuestion
      );
    }
    updateRealScore();
  }
};
