'use strict';

import { REFERENCE_LIST_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createResultElement = () => {
    const element = document.createElement('div');
    element.innerHTML = String.raw`
        <h1>Congratulations!</h1>
        <p>You have finished the quiz about JavaScript.</p>
        <p>Correct answers: ${quizData.correctSum}</p>
        <p>Wrong answers: ${quizData.wrongSum}</p>
        <p>For more about JavaScript, visit:</p>
        <ol id="${REFERENCE_LIST_ID}"></ol>
    `;
    return element;
}
