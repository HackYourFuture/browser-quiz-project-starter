import { quizData } from '../data.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { USER_INTERFACE_ID } from '../constants.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
  // logic to remove "next question" and to add "view results button"
  if(quizData.currentQuestionIndex === 9){
    const resultButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
    resultButton.textContent = "View results";
    resultButton.id = 'show-results-button'
    document
    .getElementById('show-results-button')
    .addEventListener('click', initResultsPage);
  }
};
