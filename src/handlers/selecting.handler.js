import { questionView } from '../views/question.view.js';
import { quizData } from '../data.js';


export const selectingHandler = (event) => {

// const newArrays = Object.values(quizData.questions[i].answers)
// const quesAnswersKeys = Object.keys(quizData.questions[i].answers)
// console.log(newArrays)
// console.log(quesAnswersKeys)

let i = 1; // i will be currentQuestion
let numOfCorrectAnswer = 0 ;
const quesCorrect = Object.values(quizData.questions[quizData.quiz.currentQuestion].correct)
console.log('the correct answer is in ' + `${quesCorrect}`)

const correctAnswer = quizData.questions[quizData.quiz.currentQuestion].answers[quesCorrect];

console.log(event.target.innerText)
console.log(quizData.questions[i].answers[quesCorrect]);

// console.log(typeof(event.target.innerText))
// console.log((typeof(quizData.questions[i].answers[quesCorrect])));

const answerButtons = document.querySelectorAll('.answerButtons button');

if (event.target.innerText === correctAnswer ){
   console.log('correct')
   for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].classList.add('btn-danger');
   }   
   event.target.classList.remove('btn-danger');
   event.target.classList.add('btn-success');
   numOfCorrectAnswer ++ ;
   console.log(numOfCorrectAnswer)
}
else{
   console.log('incorrect')
   event.target.classList.add('btn-danger');

}

  }
