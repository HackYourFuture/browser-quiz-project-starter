'use strict';

/**
 * creates a `div` element that displays a question
 * each line in the provided array will be mirrored around the separator
 * @param {{}} question - an array of strings, each one will be mirrored around the separator on a new line
 * @return {HTMLDivElement} a PRE element with the rendered string content
 */
export const questionView = (question = {}) => {
     
    const questionDiv = document.createElement('div');
    questionDiv.innerText = 'I am a nice question';
  
    return questionDiv;
  };
  