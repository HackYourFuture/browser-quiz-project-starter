import { questionView } from '../views/question.view.js';

export const quizHandler = (event) => {
    const questionDOM = questionView();
    const button = event.target;
    const parent = button.parentNode;

    parent.insertBefore(questionDOM, button);
    button.remove();
};