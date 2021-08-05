import {quizData} from '../data.js'
 
 export  const checkAnswer = function selectedAnswer(e) {
  //const buttonTarget = e.target.id;
  console.log(this.id);
  if (this.id === quizData.questions[quizData.currentQuestionIndex].correct){
    this.classList.add("correct-answer");
  } else {
    this.classList.add("wrong-answer");
  }
};