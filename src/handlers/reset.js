import { displayQuestion } from '../views/questions-list.js';

export function resetState() {
    const nextButton = document.getElementById('next-btn');
    nextButton.classList.add('hide');
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild);
    }

    displayQuestion()
}