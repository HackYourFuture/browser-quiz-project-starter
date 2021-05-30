'use strict';

import createDOMElement from "../utils/createDOMElement.js";

export const createQuestionElement = (question) => {
    const container = createDOMElement('div');
    const title = createDOMElement('h1');
    title.innerText = question.text;
    container.appendChild(title);

    const answerContainer = createDOMElement('ol');

    for (const answerKey in question.answers) {
        const answer = createAnswerElement(question.answers[answerKey]);
        answer.addEventListener('click', (e)=>{console.log(e.target)})
        answerContainer.appendChild(answer);
    }

    container.appendChild(answerContainer);
    
    return container;
}

export const createAnswerElement = (answerText) => {
    const answerElement = createDOMElement('li',{className: 'btn'});
    answerElement.innerText = answerText;

    return answerElement;
}

export default createQuestionElement;