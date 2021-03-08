import { quizData } from "../data.js";

export function renderQuestions() {
    
    const list = document.createElement('ul');
    document.body.appendChild(list);
    for (let i = 0; i < quizData.questions.length; i++){
            const questionsLi = document.createElement('li');
            list.appendChild(questionsLi);
            questionsLi.innerHTML = quizData.questions[i].text;
            console.log(quizData.questions[i].text);
        }
            
        
    
        // TODO: actually put things into the list
    
        return list;
    }

    




