'use strict';

/**
 * creates a `div` element that displays a question
 * each line in the provided array will be mirrored around the separator
 * @param {{}} question - an array of strings, each one will be mirrored around the separator on a new line
 * @return {HTMLDivElement} a PRE element with the rendered string content
 */
import { quizData } from '../data.js';

export const questionView = (question = {}) => {
  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quizContainer', 'showQuiz');

  const quizHeader = document.createElement('h3');
  quizHeader.innerText = question.title;
  quizContainer.appendChild(quizHeader);

  const questionText = document.createElement('div');
  questionText.classList.add('question', 'm-5');
  questionText.innerText = question.text;
  quizContainer.appendChild(questionText);

  const realScoreText = document.createElement('div');
  realScoreText.setAttribute('id', 'realScoreText');
  realScoreText.classList.add('question', 'm-5');
  quizContainer.appendChild(realScoreText);

  const answerButtons = document.createElement('div');
  answerButtons.classList.add('answerButtons', 'd-grid', 'gap-2', 'mx-5');

  for (const key in question.answers) {
    const answerButton = document.createElement('button');
    answerButton.classList.add('btn', 'btn-primary', 'btn-lg', 'w-100');
    answerButton.setAttribute('data-key', key);
    answerButton.setAttribute('data-correct', question.correct);
    answerButton.innerText = question.answers[key];
    answerButtons.appendChild(answerButton);
  }
  quizContainer.appendChild(answerButtons);
  return quizContainer;
};
