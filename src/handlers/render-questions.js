

import { createQuestionList } from '../views/questions-list.js';

export function renderQuestions() {
    const list = createQuestionList()
    document.body.appendChild(list);
}



