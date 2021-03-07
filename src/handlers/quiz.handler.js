import { questionView } from '../views/question.view.js';

import { quizData } from '../data.js';

export const quizHandler = (event) => {
    const questionDOM = questionView(quizData.questions[0]);
    const button = event.target;
    const parent = button.parentNode;

    parent.insertBefore(questionDOM, button);
    button.remove();
};