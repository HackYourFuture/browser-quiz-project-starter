'use strict';

/**
 * creates a `div` element that displays a question
 * each line in the provided array will be mirrored around the separator
 * @param {{}} question - an array of strings, each one will be mirrored around the separator on a new line
 * @return {HTMLDivElement} a PRE element with the rendered string content
 */
export const questionView = (question = {}) => {
  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quizContainer');
  quizContainer.classList.add('showQuiz');
  const quizHeader = document.createElement('h3');
  quizHeader.innerText = 'Question1';
  quizContainer.appendChild(quizHeader);

  const questionText = document.createElement('div');
  questionText.classList.add('question');
  questionText.classList.add('m-5');
  questionText.innerText = question.text;
  quizContainer.appendChild(questionText);

  // const answerList = document.createElement('ul');

  // for (const key in question.answers) {
  //   const answer = question.answers[key];
  //   const answerListItem = document.createElement('li');

  //   answerListItem.innerText = answer;

  //   answerList.appendChild(answerListItem);
  // }

  // questionDiv.appendChild(textDiv);
  // questionDiv.appendChild(answerList);

  return quizContainer;
};
