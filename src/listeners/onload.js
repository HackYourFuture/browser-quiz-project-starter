import { renderQuestions } from "../handlers/render-questions.js";
import { createQuestionList } from "../views/questions-list.js";

window.addEventListener('DOMContentLoaded', () => {
    const ui = document.getElementById('user-interface');
    const list = createQuestionList();

    renderQuestions(ui, list);
});
