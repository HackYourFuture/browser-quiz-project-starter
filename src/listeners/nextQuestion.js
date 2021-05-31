'use strict';

import handleCheckTheAnswer from "../handlers/handleCheckTheAnswer.js";
import handleNextQuestion from "../handlers/handleNextQuestion.js";

const nextQuestion = (event) => {
    const buttonElement = event.currentTarget;
    const status = buttonElement.dataset.status;
   
    if(status === 'checkAnswer'){
        handleCheckTheAnswer(buttonElement)
        
    }else{
        handleNextQuestion(buttonElement);
    }
    
}

export default nextQuestion;