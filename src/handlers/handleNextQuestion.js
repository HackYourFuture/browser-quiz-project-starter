'use strict';

import showCurrentQuestion from "./showCurrentQuestion.js";
import { quizData } from '../data.js';

const handleNextQuestion = (buttonElement) => {
    buttonElement.innerText = "Check The Answer";
    buttonElement.dataset.status = "checkAnswer";
    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    
    showCurrentQuestion();
}

export default handleNextQuestion;