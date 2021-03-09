import { quizData } from "../data.js";

export function createQuestionList() {
//    const list = document.createElement('ul');
  
//      quizData.questions.forEach(item =>{
//          const questionsLi = document.createElement('li')
//          list.appendChild(questionsLi)
//          questionsLi.textContent = item.text
//      // console.log(item.text)
//  })
  
    
  
// //   // TODO: actually put things into the list
//    return list;
}

export function getRandomQuestion(item){
  const randomQuestion = Math.floor(Math.random(item) * item.length) 
  return item[randomQuestion]
};

export function displayQuestion(){
  const question = getRandomQuestion(quizData.questions);
  console.log(question.text);
  const questionArea = document.getElementsByClassName('question');
  console.log(questionArea);
  questionArea.innerHTML = question.text;
  document.body.append(question.text);
  return questionArea;
}

displayQuestion()