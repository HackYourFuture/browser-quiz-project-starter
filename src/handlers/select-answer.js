import { setStatusClass } from '../views/set-status.js';
/*import { displayQuestion } from "../views/questions-list.js"; */

 export function selectAnswer(event){
    const selectedButton = event.target;
    let correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)

    const answerButton = document.getElementById('answer-buttons').children;
    for(const button of [...answerButton]) {
      setStatusClass(button, button.dataset.correct);
      }  
    
    const nextButton = document.getElementById('next-btn');
    nextButton.classList.remove('hide');
}