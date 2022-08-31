'use strict';

import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  // for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
  //   const answerElement = createAnswerElement(key, answerText);
  //   answersListElement.appendChild(answerElement);
  //   answerElement.addEventListener('click', checkAnswer);
  //   const checkAnswer = (e) => {
  //     const selectedAnswer = key;
  //     // console.log('DATA', quizData);
  //     // If current question .selected is null, it means the user hasn't clicked on any answer
  //     if (currentQuestion.selected === null) {
  //       // give this value because it is null
  //       currentQuestion.selected = selectedAnswer;
  //       // now its not null
  //       if (selectedAnswer === currentQuestion.correct) {
  //         e.target.style.background = 'green';
  //       } else {
  //         e.target.style.background = 'red';
  //       }
  //     }
  //   }
  // }

  // for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
  //   const answerElement = createAnswerElement(key, answerText);

  //   const correctAnswer = currentQuestion.correct;
  //   if (correctAnswer === key) {
  //     answerElement.id = 'right-answer';
  //     answersListElement.appendChild(answerElement);
  //   } else {
  //     answerElement.className = 'wrong-answer';
  //     answersListElement.appendChild(answerElement);
  //   }
  // }

  // for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
  //   const answerElement = createAnswerElement(key, answerText);
  //   answersListElement.appendChild(answerElement);
  //   answerElement.addEventListener('click', () => {
  //     const correctAnswer = currentQuestion.correct;
  //     if (correctAnswer === key) {
  //       answerElement.id = 'right-answer';
  //     } else {
  //       answerElement.className = 'wrong-answer';
  //     }
  //   })
  // }

  // const right = document.getElementById('right-answer');
  // right.style.background = 'green';
  // quizData.rightAnswers++;

  // const wrong = document.getElementsByClassName('wrong-answer');
  // for (let i = 0; i < wrong.length; i++) {
  //   wrong[i].style.background = 'red';
  //   right.style.background = 'green';
  // }

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);

    // const correctAnswer = currentQuestion.correct;
    const selectedAnswer = currentQuestion.correct;

    if (selectedAnswer === key) {
      answerElement.id = 'right-answer';
      answersListElement.appendChild(answerElement);
    } else {
      answerElement.className = 'wrong-answer';
      answersListElement.appendChild(answerElement);
    }
  }

  const right = document.getElementById('right-answer');
  right.addEventListener('click', () => {
    // if (currentQuestion.selected === null) {
    //   currentQuestion.selected = selectedAnswer;
    // }
    console.log('DATA', quizData);
    right.style.background = 'green';
    quizData.rightAnswers++;
  })

  const wrong = document.getElementsByClassName('wrong-answer');
  for (let i = 0; i < wrong.length; i++) {
    wrong[i].addEventListener('click', () => {
      // if (currentQuestion.selected === null) {
      //   currentQuestion.selected = selectedAnswer;
      // }
      console.log('DATA', quizData);
      wrong[i].style.background = 'red';
      right.style.background = 'green';
    })
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
}
