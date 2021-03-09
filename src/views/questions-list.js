import { quizData } from "../data.js";

export function createQuestionList() {
  const list = document.createElement('ul');
  
    quizData.questions.forEach(item =>{
        const questionsLi = document.createElement('li')
        list.appendChild(questionsLi)
        questionsLi.textContent = item.text
    // console.log(item.text)
})
  
    
  
  // TODO: actually put things into the list
  return list;
}
