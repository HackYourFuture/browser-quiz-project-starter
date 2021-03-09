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
  quizHeader.innerText = question.title;
  quizContainer.appendChild(quizHeader);

  const questionText = document.createElement('div');
  questionText.classList.add('question');
  questionText.classList.add('m-5');
  questionText.innerText = question.text;
  quizContainer.appendChild(questionText);
  const answerButtons = document.createElement('div');
  answerButtons.classList.add('answerButtons');
  answerButtons.classList.add('d-grid');
  answerButtons.classList.add('gap-2');
  answerButtons.classList.add('mx-5');
  for (const key in question.answers) {
    const answerButton = document.createElement('button');
    answerButton.classList.add('btn');
    answerButton.classList.add('btn-primary');
    answerButton.classList.add('btn-lg');
    answerButton.classList.add('w-100');
    answerButton.innerText = question.answers[key];
    answerButtons.appendChild(answerButton);
  }

  // quizFooter.classList.add('quizFooter');
  // const prevButton = document.createElement('a');
  // prevButton.id = 'prevButton';
  // prevButton.classList.add('prevBtn');
  // const arrowLeft = document.createElement('i');
  // arrowLeft.classList.add('fa');
  // arrowLeft.classList.add('fa-arrow-left');
  // arrowLeft.classList.add('prevArrow');

  quizContainer.appendChild(answerButtons);

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
