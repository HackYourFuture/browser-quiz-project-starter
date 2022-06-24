'use strict';

import { USER_PROGRESS_ID } from "../constants.js";

export const createProgressElement = (
  numberOfQuestions,
  questionIndex,
  numberOfCorrects
) => {
  const element = document.createElement('div');
  element.setAttribute('id',`${USER_PROGRESS_ID}`);

  element.appendChild(createProgressBar(questionIndex, numberOfQuestions));
  element.appendChild(
    createNumberOfCorrectElement(questionIndex, numberOfCorrects)
  );
  element.appendChild(createScoreElement(numberOfCorrects));

  return element;
};

export const createProgressBar = (questionIndex, numberOfQuestions) => {
  const element = document.createElement('div');
  element.classList.add('progress-item');
  element.innerHTML = String.raw`
      <h2 id="progress-text">Question ${questionIndex}/${numberOfQuestions}</h2>
      <div id="progress-bar">
        <div id="progress-bar-inside">
        </div>
      </div>
      `;
  const progressBarInside = element.querySelector('#progress-bar-inside');
  progressBarInside.style.width = `${
    (questionIndex / numberOfQuestions) * 100
  }%`;
  return element;
};

export const createNumberOfCorrectElement = (
  questionIndex,
  numberOfCorrects
) => {
  const element = document.createElement('div');
  element.classList.add('progress-item');
  element.innerHTML = String.raw`
    <ul class="fa-ul">
      <li><span class="fa-li"><i class="fa-solid fa-xmark" style="color:#e03131"></i></span>: ${
        questionIndex - numberOfCorrects - 1
      }</li>
      <li><span class="fa-li"><i class="fa-solid fa-check" style="color:rgb(11, 223, 36)"></i></span>: ${numberOfCorrects}</li>
    </ul>`;
  return element;
};
export const createScoreElement = (numberOfCorrects) => {
  const element = document.createElement('div');
  element.classList.add('progress-item');
  element.innerHTML = String.raw`
    <h2 id="score-text">Score</h2>
    <h2 id="score">${numberOfCorrects * 10}</h2>
    `;
  return element;
};
