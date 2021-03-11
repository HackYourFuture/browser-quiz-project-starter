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

  const menuBars = document.createElement('div');
  menuBars.classList.add('menuBars');
  menuBars.innerHTML = `<a id='menuBtn' class="navbar-icon">
                        <i class="fa fa-bars"></i>
                      </a>`;
  quizContainer.appendChild(menuBars);

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.setAttribute('id', 'overlay_navbar');
  overlay.innerHTML = `<a id='closeBtn' class="closebtn">&times;</a>
                      <div class="overlay-content">
                        <h4>Hint</h4>
                        <a href="${question.links[0].href}" target="_blank">${question.links[0].text}</a>
                        <a href="${question.links[1].href}" target="_blank">${question.links[1].text}</a>
                      </div>`;
  quizContainer.appendChild(overlay);

  const quizHeader = document.createElement('h3');
  quizHeader.innerText = question.title;
  quizContainer.appendChild(quizHeader);

  const questionText = document.createElement('div');
  questionText.classList.add('question', 'm-5');
  questionText.innerText = question.text;
  quizContainer.appendChild(questionText);

  const answerButtons = document.createElement('div');
  answerButtons.classList.add('answerButtons', 'd-grid', 'gap-2', 'm-5');

  for (const key in question.answers) {
    const answerButton = document.createElement('button');
    answerButton.classList.add('btn', 'btn-primary', 'btn-lg', 'w-100');
    answerButton.setAttribute('data-key', key);
    answerButton.setAttribute('data-correct', question.correct);
    answerButton.innerText = question.answers[key];
    answerButtons.appendChild(answerButton);
  }
  quizContainer.appendChild(answerButtons);

  const realScoreText = document.createElement('div');
  realScoreText.setAttribute('id', 'realScoreText');
  realScoreText.classList.add('realScoreText');
  quizContainer.appendChild(realScoreText);

  return quizContainer;
};
