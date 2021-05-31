'use strict';

import { quizData } from "../data.js";
import { addClass, removeClass } from "../utils/manageClass.js";

const handleCheckTheAnswer = (buttonElement) => {
    buttonElement.innerText = "Next Question";
    buttonElement.dataset.status = "nextQuestion";
    const selectedAnswer = quizData.questions[quizData.currentQuestionIndex].selected;
    const correctAnswer = quizData.questions[quizData.currentQuestionIndex].correct;
    const selectedElement = document.querySelector('.selected');
    removeClass(selectedElement, 'selected');
    if(selectedAnswer === correctAnswer){
        addClass(selectedElement, 'correct');
        
    }else{
       
        addClass(selectedElement, 'wrong')
        const correctAnswerElement = document.querySelector(`[data-answer='${correctAnswer}']`);
        
        addClass(correctAnswerElement, 'correct')
    }
}

export default handleCheckTheAnswer;