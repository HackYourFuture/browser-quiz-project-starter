'use strict';

import { showCurrentQuestion } from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import createDOMElement from '../utils/createDOMElement.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import { questionContainer } from '../handlers/showCurrentQuestion.js';
import { numberOfCorrectAnswers } from '../views/createQuestionElement.js';
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
    resultBtn.addEventListener('click', (e) => {
      console.log(numberOfCorrectAnswers);
      console.log(questionContainer.parentElement.childNodes);
      console.log(questionContainer);

      questionContainer.parentElement.childNodes.forEach((item) =>
        item.classList.add('hide')
      );

      const resultContainer = createDOMElement('div', {
        className: 'result-container',
      });
      numberOfCorrectAnswers.forEach((item) => {
        // console.log(item.correct);
        const correctQuestion = createDOMElement('h2');
        const correctAnswer = createDOMElement('h4');
        correctQuestion.innerText = item.text;
        resultContainer.appendChild(correctQuestion);
        for (const answerKey in item.answers) {
          if (item.correct == answerKey) {
            console.log(item.answers[answerKey]);
            correctAnswer.innerText = `${item.correct}: ${item.answers[answerKey]}`;
            resultContainer.appendChild(correctAnswer);
          }
        }
      });
      //   resultContainer.innerText = `${numberOfCorrectAnswers}`;
      questionContainer.parentElement.appendChild(resultContainer);
    });
  }
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    progressCounter++;
    progressBar.innerText = '';
    progressBar.innerText = `Your Current Question is ${progressCounter} out of ${quizData.questions.length}`;

    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

    showCurrentQuestion();
  } else {
    console.log('helloooo');
  } //else {another function to show the results}
};

export default handleNextQuestion;
