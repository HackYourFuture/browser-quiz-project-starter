
import { setNextQuestion } from "../handlers/setNextQuestion.js";
import { data } from '../data.js';
import { quizData } from '../data.js';

export function startGame() {

    const startButton = document.getElementById('start-btn')
    startButton.classList.add('hide')

    /* data.randomQuestions = quizData.questions.sort(() => Math.random() - 0.5); */

    const questionContainerElement = document.getElementById('question-container')  
    questionContainerElement.classList.remove('hide')   
    
    setNextQuestion()
}