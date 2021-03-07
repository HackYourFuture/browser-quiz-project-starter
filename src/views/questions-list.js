import { quizData } from "../data.js";

export function createQuestionList() {
    const list = document.createElement('ul');

    const fakeLi = document.createElement('li');
    fakeLi.textContent = 'Hello world!';
    list.appendChild(fakeLi);

    console.log(quizData.questions);

    // TODO: actually put things into the list

    return list;
}
