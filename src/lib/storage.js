'use strict';

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
  const realTime = new Date().getTime();
  const timer = 300 - (realTime - startTime) / 1000;
  return Math.floor(timer);
};

export const addNumberOfCorrectsToStorage = (number) => {
  let numberOfCorrects = getNumberOfCorrectsFromStorage();
  numberOfCorrects = number;
  localStorage.setItem('numberOfCorrects', JSON.stringify(numberOfCorrects));
};

export const getNumberOfCorrectsFromStorage = () => {
  let numberOfCorrects;
  localStorage.getItem('numberOfCorrects') === null
    ? (numberOfCorrects = 0)
    : (numberOfCorrects = JSON.parse(localStorage.getItem('numberOfCorrects')));
  return numberOfCorrects;
};
export const clearAllDataFromStorage = () => {
  localStorage.clear('answers');
  localStorage.clear('startTime');
  localStorage.clear('numberOfCorrects');
};
