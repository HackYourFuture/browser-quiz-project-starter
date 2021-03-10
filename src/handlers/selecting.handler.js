import { questionView } from '../views/question.view.js';
import { quizData } from '../data.js';


export const selectingHandler = (event) => {
let i = 1; // i will be currentQuestion
let numOfCorrectAnswer = 0 ;
const quesCorrect = Object.values(quizData.questions[quizData.quiz.currentQuestion].correct)
console.log('the correct answer is in ' + `${quesCorrect}`)
const correctAnswer = quizData.questions[quizData.quiz.currentQuestion].answers[quesCorrect];
const answerButtons = document.querySelectorAll('.answerButtons button');

if (event.target.innerText === correctAnswer ){
   for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].classList.add('btn-danger');
   }   
   event.target.classList.remove('btn-danger');
   event.target.classList.add('btn-success');
   numOfCorrectAnswer ++ ;
}
else{
   event.target.classList.add('btn-danger');
}
 }
