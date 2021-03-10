'use strict';

import { selectingHandler } from '../handlers/selecting.handler.js';

// const pressAnswerButton = 
export const addSelectingListener = () => {
    const pressAnswerButtons = document.querySelectorAll('.answerButtons button');
    pressAnswerButtons.forEach(element => {
    element.addEventListener('click', selectingHandler);
});
}