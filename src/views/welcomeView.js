'use strict';

import {START_QUIZ_BUTTON_ID} from '../constants.js';

export const createWelcomeElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
    <button id="${START_QUIZ_BUTTON_ID}">Start quiz!</button>
    `;
    return element;
}
