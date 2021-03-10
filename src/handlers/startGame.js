
import { setNextQuestion } from "../handlers/setNextQuestion.js"

export function startGame() {

    const startButton = document.getElementById('start-btn')
    startButton.classList.add('hide')

    const questionContainerElement = document.getElementById('question-container')  
    questionContainerElement.classList.remove('hide')   
    
   
       
    setNextQuestion()
}