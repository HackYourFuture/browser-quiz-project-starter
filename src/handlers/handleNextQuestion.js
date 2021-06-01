'use strict';

import { showCurrentQuestion } from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import createDOMElement from '../utils/createDOMElement.js';
import { questionContainer } from '../handlers/showCurrentQuestion.js';
import {
  numberOfCorrectAnswers,
  score,
} from '../views/createQuestionElement.js';
import getDOMElement from '../utils/getDOMElement.js';

let progressCounter = 1;
export const progressBar = document.createElement('div');
progressBar.classList.add('hide');
document.body.appendChild(progressBar);
progressBar.innerText = `Your Current Question is ${progressCounter} out of ${quizData.questions.length}`;

const handleNextQuestion = () => {
  if (quizData.currentQuestionIndex == quizData.questions.length - 2) {
    // check if we are on the question before the last question
    console.log(quizData.currentQuestionIndex, quizData.questions.length);
    const resultBtn = createDOMElement('button', { id: 'result-btn' });
    resultBtn.innerText = 'RESULT';
    const nextBtn = getDOMElement('next-question-button');
    nextBtn.classList.add('hide');
    questionContainer.parentElement.appendChild(resultBtn);

    // result btn function
    resultBtn.addEventListener('click', () => {
      console.log(numberOfCorrectAnswers);
      console.log(questionContainer.parentElement.childNodes);
      console.log(questionContainer);

      questionContainer.parentElement.childNodes.forEach((item) =>
        item.classList.add('hide')
      );

      const resultContainer = createDOMElement('div', {
        className: 'result-container',
      });
      resultContainer.appendChild(score);
      // loop through the correct questions answered array to initialize a new div with h2 and h4
      numberOfCorrectAnswers.forEach((item, i) => {
        const newQuestionContainer = createDOMElement('div');
        const correctQuestion = createDOMElement('h2');
        const correctAnswer = createDOMElement('h4');
        correctQuestion.innerText = `${i + 1}- ${item.text}`;

        newQuestionContainer.appendChild(correctQuestion);

        //loop through the answers object to get only the correct answer
        for (const answerKey in item.answers) {
          if (item.correct == answerKey) {
            console.log(item.answers[answerKey]);
            correctAnswer.innerText = `${item.correct}: ${item.answers[answerKey]}`;
            newQuestionContainer.appendChild(correctAnswer);
          }
        }
        resultContainer.appendChild(newQuestionContainer);
      });
      questionContainer.parentElement.appendChild(resultContainer);
    });
  }
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    progressCounter++;
    progressBar.innerText = '';
    progressBar.innerText = `Your Current Question is ${progressCounter} out of ${quizData.questions.length}`;

    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

    showCurrentQuestion();
  }
};

export default handleNextQuestion;
