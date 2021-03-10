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
  const answers = quizData.questions[1].answers;
  console.log(answers)

  const questionArea = document.getElementById('question');
  questionArea.innerHTML = question.text;
  
  for(let answer in answers) {
    const button = document.createElement('button');
    button.innerText = answer;
    button.classList.add('btn');
    if (quizData.questions[3].selected === quizData.questions[2].correct) {
      button.dataset.correct = quizData.questions[2].correct;
      console.log(correct)
    }
    button.addEventListener('click', selectAnswer);
    const answerButtonsElement = document.getElementById('answer-buttons');
    answerButtonsElement.appendChild(button);
  };
  
  return questionArea;
}

displayQuestion()

