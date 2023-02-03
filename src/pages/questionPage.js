import {
  ANSWERS_LIST_ID,
  CORRECT_ANSWER_RATE_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  //COUNTER_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
//import { initCounter } from '../views/countdownView.js';
//import { countdownInterval } from '../views/countdownView.js';
import { resultPage } from '../pages/resultPage.js';
import { initQuestionProgress } from '../views/progressView.js';
import { createCorrectAnswerViewElement } from '../views/correctAnswerCountView.js';
import { timer } from '../timer.js';

let correctAnswerCount = 0;
let isCurrentAnswerCorrect = false;

export const initQuestionPage = (correctAnswerCount) => {
  timer();
  isCurrentAnswerCorrect = false;
  correctAnswerCount = correctAnswerCount ?? 0;
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  function answerSelection(answer) {
    let theAnswer = [];
    if (answer.target.tagName === 'LI') {
      const userAnswer = answer.target.id;

      theAnswer[quizData.currentQuestionIndex] =
        currentQuestion.answers[userAnswer];
      if (userAnswer === currentQuestion.correct) {
        console.log('true');
        answer.target.style.backgroundColor = 'green';
      } else {
        console.log(false);

        answer.target.style.backgroundColor = 'red';
      }
    }
  }

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const correctAnswerElement = createCorrectAnswerViewElement();
  userInterface.appendChild(correctAnswerElement);
  const correctAnswerCountElement = document.getElementById(
    CORRECT_ANSWER_RATE_ID
  );
  correctAnswerCountElement.innerText = `Correct answer: ${correctAnswerCount}`;

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [answerLetter, answerText] of Object.entries(
    currentQuestion.answers
  )) {
    const answerElement = createAnswerElement(answerLetter, answerText);
    answerElement.className = 'answer-list-item';
    answersListElement.appendChild(answerElement);

    document
      .getElementById(ANSWERS_LIST_ID)
      .addEventListener('click', answerSelection);

    // making answers clickable
    answerElement.addEventListener('click', function () {
      const correctAnswer = currentQuestion.correctAnswer;
      currentQuestion.selected = answerLetter;
      clearInterval(countdownInterval);
      const counter = document.getElementById(COUNTER_ID);
      counter.classList.add('hidden');
      Array.from(answersListElement.children).forEach((element) => {
        element.classList.add('deactivated-answer');
      });
      if (answerLetter == correctAnswer) {
        Array.from(answersListElement.children).forEach((element) => {
          element.classList.remove('red');
        });
        answerElement.classList.add('green');
        isCurrentAnswerCorrect = true;
      } else {
        Array.from(answersListElement.children)
          .find((child) => child.innerText.charAt(0) == correctAnswer)
          .classList.add('green');
        Array.from(answersListElement.children).forEach((element) => {
          element.classList.remove('red');
        });
        answerElement.classList.add('red');
        isCurrentAnswerCorrect = false;
      }
    });
  }
  initQuestionProgress();
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

export const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  //clearInterval(interval);
  if (isCurrentAnswerCorrect) {
    correctAnswerCount++;
  }
  if (quizData.currentQuestionIndex >= quizData.questions.length) {
    resultPage(correctAnswerCount);
  } else {
    initQuestionPage(correctAnswerCount);
    timer();
  }
};
