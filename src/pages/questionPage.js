import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  SCORE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { createEnding } from '../views/endingView.js';
import { quizData } from '../data.js';
import { nextQuestion } from './nextQuestion.js';
import { restartQuiz } from './restartQuiz.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    userInterface.appendChild(createEnding(quizData.score));
    const restartButton = document.getElementById(START_QUIZ_BUTTON_ID);
    if (restartButton) {
      restartButton.addEventListener('click', restartQuiz);
    }
    return;
  }

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  if (answersListElement) {
    answersListElement.innerHTML = '';

    for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
      const answerElement = createAnswerElement(key, answerText);
      answersListElement.appendChild(answerElement);

      answerElement.querySelector('input').addEventListener('click', () => {
        if (key === currentQuestion.correct) {
          quizData.score++;
        }
        nextQuestion();
      });
    }
  }

  const scoreDisplay = document.getElementById(SCORE_ID);
  if (scoreDisplay) {
    scoreDisplay.textContent = `Score: ${quizData.score}`;
  }
};
