import { data } from '../data.js';
import { setStatusClass } from '../views/set-status.js';
/*import { displayQuestion } from "../views/questions-list.js"; */

 export function selectAnswer(event){
    const selectedButton = event.target;
    let correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct)

    Array.from(document.getElementById('answer-buttons').children).forEach(
    (button) => {
      setStatusClass(button, button.dataset.correct);
      }
    );    
}