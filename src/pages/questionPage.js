// Import statements
import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  RESTART_BUTTON_ID,
  START_QUIZ_BUTTON_ID,
  SCORE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createEnding } from '../views/endingView.js'; // Adjust path as needed
import { initWelcomePage } from './welcomePage.js';
// if the option clicked ++score

// Define functions
export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';
  // write if: if the correct answer and selected answer are the same, increment score
  // if selected===answer ++score
  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    userInterface.appendChild(createEnding());
    const restartButton = document.getElementById(START_QUIZ_BUTTON_ID);
    if (restartButton) {
      restartButton.addEventListener('click', restartQuiz);
    }
    


// add conditon to check if the selected answer is the correct answer
// if correct itirate the score
// if (selectedAnswer === correctAnswer) {
//   score++;
// }

// show the scroe endignpage and endignview
// add the score to the ending page

const correctAnswer = quizData.questions[quizData.currentQuestionIndex].correct;
const selectedAnswer = quizData.questions[quizData.currentQuestionIndex].selected;
    if (correctAnswer === selectedAnswer) {
      score++;
      console.log(score)
    }
    return;
  }

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);
  
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  if (answersListElement) {
    answersListElement.innerHTML = ''; // Clear previous answers

   for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    // const correctAnswer = currentQuestion.correct;
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

  }
  }

  const nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  if (nextQuestionButton) {
    nextQuestionButton.addEventListener('click', nextQuestion);
  }
};

const nextQuestion = () => {
  quizData.currentQuestionIndex++;
  initQuestionPage();
};

const restartQuiz = () => {
  quizData.currentQuestionIndex = 0;
  initQuestionPage();
};

// Ensure the DOM is fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
  initWelcomePage();
});
