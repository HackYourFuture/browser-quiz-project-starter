'use strict';

/**
 * creates a `div` element that displays a question
 * each line in the provided array will be mirrored around the separator
 * @param {{}} question - an array of strings, each one will be mirrored around the separator on a new line
 * @return {HTMLDivElement} a PRE element with the rendered string content
 */
export const questionView = (question = {}) => {
     
    const questionDiv = document.createElement('div');
    const textDiv = document.createElement('div');
    textDiv.innerText = question.text;

    

    const answerList = document.createElement('ul');

    for(const key in question.answers) {
      const answer = question.answers[key];
      const answerListItem = document.createElement('li');

      answerListItem.innerText = answer;

      answerList.appendChild(answerListItem);
    }

    questionDiv.appendChild(textDiv);
    questionDiv.appendChild(answerList);

    return questionDiv;
  };
  