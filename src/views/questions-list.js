import { quizData } from "../data.js";

export function createQuestionList() {
    const list = document.createElement('ul');

    
    
    
    for (let i = 0; i < quizData.questions.length; i++){
        const fakeLi = document.createElement('li');
        list.appendChild(fakeLi);
        fakeLi.innerHTML = quizData.questions[i].text;
        console.log(quizData.questions.text)
    }
        
    console.log(quizData.questions);

    // TODO: actually put things into the list

    return list;
}
