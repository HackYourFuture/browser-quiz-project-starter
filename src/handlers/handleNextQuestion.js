'use strict';

import showCurrentQuestion from "./showCurrentQuestion.js";
import { quizData } from '../data.js';

const handleNextQuestion = () => {
    if(quizData.currentQuestionIndex< quizData.questions.length-1){

        quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
        showCurrentQuestion();
    }else {console.log('hellooooo')} //else {another function to show the results}

}

export default handleNextQuestion;