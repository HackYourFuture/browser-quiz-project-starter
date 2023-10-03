import { nextQuestion } from './questionPage.js';
import { quizData } from '../data.js';

export const skipQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  if (currentQuestion) {
    const skipBox = document.createElement('div');
    // skipBox.id = 'skipBox'; // Add this line here

    document.body.appendChild(skipBox);

    skipBox.innerText = ` The right answer for question ${
      quizData.currentQuestionIndex + 1
    } is: ${currentQuestion.correct}. `;

    skipBox.style.cssText = `
    
    `;

    // if (quizData.currentQuestionIndex >= quizData.questions.length - 1) {}
    // to remove after 2.5 seconds
    setTimeout(() => {
      document.body.removeChild(skipBox);
      nextQuestion(); // Move this inside the setTimeout
    }, 2500);
  }
};
