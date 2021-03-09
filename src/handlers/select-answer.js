import { data } from '../data.js';
import { setClass } from '../views/set-status.js';

export function selectAnswer(event){
    const selectedButton = event.target;
    let correct = selectedButton.dataset.correct;
    
    //2. if the answer is correct
    if (correct) {
        document.getElementById('question-correct').classList.remove('hide');
    }

    Array.from(document.getElementById('answer-buttons').children).forEach(
    (button) => {
        setClass(button, button.dataset.correct);
    }
    );

    if (data.shuffledQuestions.length > data.currentQuestionIndex + 1) {
    document.getElementById('next-btn').classList.remove('hide');
    } else {
    document.getElementById('start-btn').innerText = 'Repeat';
    document.getElementById('start-btn').classList.remove('hide');
    }

  
}