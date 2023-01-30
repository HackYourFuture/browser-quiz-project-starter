import { quizData } from '../data.js';
import { playSound } from './playSound.js'

export const checker = function (){
        
  const answers = document.querySelectorAll('li');
  const correctAnswer = quizData.questions[quizData.currentQuestionIndex].correct; 

  const clickChecker = function () {
    answers.forEach(answer => answer.addEventListener('click', (e)=> {
      const clickedAnswer = e.target.dataset.key;
      if (correctAnswer  === clickedAnswer) {
        document.body.style.background = 'green'
      }
      else document.body.style.background = 'red'
      playSound();
    }));    
  }
  
  const keydownChecker = function (){
    window.addEventListener('keydown', (e) => {
      if (e.key === 'a' || e.key === 'b' || e.key === 'c' || e.key === 'd') {
        if(e.key === correctAnswer) {
          document.body.style.background = 'green'
        }
        else {document.body.style.background = 'red'}
        playSound();
      }
    })
  }
  clickChecker();      
  keydownChecker();  
}
