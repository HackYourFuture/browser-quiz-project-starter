import { START_QUIZ_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js'

export const createFinishElement = () => {
    const element = document.createElement('div');
    element.style.width = '60rem';
    element.style.height = '40rem';
    element.style.position = 'relative';
    element.innerHTML = String.raw`
        <br>
        <br>
        <h1>The result</h1>
        <hr>
        <br>
        <p class="result-paragraph" style="background: green;">Right answers: ${quizData.result.right}</p>
        <br>
        <p class="result-paragraph" style="background: red;">Wrong answers: ${quizData.result.wrong}</p>
        <br>
        <p class="result-paragraph" style="background: orange;">Skipped questions: ${quizData.result.skipped}</p>
        <br>
        <hr>
        <br>
        <h1>Give it another try</h1>
        <button id="${START_QUIZ_BUTTON_ID}">start again</button>`;

    return element;
};