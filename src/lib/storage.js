'use strict';

import { QUIZ_TIME } from "../constants.js";

export const addAnswerToStorage = (answer, index) => {
  let answers = getAnswersFromStorage();
  answers[index] = answer;
  localStorage.setItem('answers', JSON.stringify(answers));
};
export const getAnswersFromStorage = () => {
  let answers;
  localStorage.getItem('answers') === null
    ? (answers = [])
    : (answers = JSON.parse(localStorage.getItem('answers')));
  return answers;
};

export const addStartTimeToStorage = () => {
  const time = new Date().getTime();
  localStorage.setItem('startTime', JSON.stringify(time));
};
export const getTimerFromStorage = () => {
  const startTime = JSON.parse(localStorage.getItem('startTime'));
  const currentTime = new Date().getTime();
  const timer = QUIZ_TIME - (currentTime - startTime) / 1000;
  return Math.floor(timer);
};

export const addNumberOfCorrectsToStorage = (number) => {
  let numberOfCorrects = getNumberOfCorrectsFromStorage();
  numberOfCorrects = number;
  localStorage.setItem('numberOfCorrects', numberOfCorrects.toString());
};

export const getNumberOfCorrectsFromStorage = () => {
  let numberOfCorrects;
  localStorage.getItem('numberOfCorrects') === null
    ? (numberOfCorrects = 0)
    : (numberOfCorrects = Number(localStorage.getItem('numberOfCorrects')));
  return numberOfCorrects;
};
export const clearAllDataFromStorage = () => {
  localStorage.clear('answers');
  localStorage.clear('startTime');
  localStorage.clear('numberOfCorrects');
};
