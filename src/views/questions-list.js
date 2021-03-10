import { quizData } from "../data.js";
import { selectAnswer } from "../handlers/select-answer.js";
/* import { selectAnswer} from '../handlers/select-answer.js'; */

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
  const answers = question.answers;

  const questionArea = document.getElementById('question');
  questionArea.innerHTML = question.text;
  
  Object.entries(answers).forEach(answer => {
    const button = document.createElement('button');
    button.classList.add(answer[0]);
    
    if (answer[0] === question.correct) {
      button.dataset.correct = answer.correct;
    }
    button.innerText = answer[1];
    button.classList.add('btn');

    button.addEventListener('click', selectAnswer);
    const answerButtonsElement = document.getElementById('answer-buttons');
    answerButtonsElement.appendChild(button);
  });
 
  return questionArea;
}


