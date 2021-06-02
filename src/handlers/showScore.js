"use strict";

import { SCORE_ID } from "../constants.js";
import { quizData } from "../data.js";
import getDOMElement from "../utils/getDOMElement.js";


const showScore = () => {
    const scoreContentElement  = getDOMElement(SCORE_ID);
    scoreContentElement.innerText = `Your Score : ${quizData.correctAnswerScore} / ${quizData.numberOfQuestions}`;

};

export default showScore;