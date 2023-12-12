import {
    ANSWERS_LIST_ID,
    NEXT_QUESTION_BUTTON_ID,
    USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initEndPage } from './endPage.js'; //importing initEndPage 

export const initQuestionPage = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

    const questionElement = createQuestionElement(currentQuestion.text);

    userInterface.appendChild(questionElement);

    const answersListElement = document.getElementById(ANSWERS_LIST_ID);

    for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
        const answerElement = createAnswerElement(key, answerText);
        answersListElement.appendChild(answerElement);
    }

    document
        .getElementById(NEXT_QUESTION_BUTTON_ID)
        .addEventListener('click', nextQuestion);

    vidBackground();
};


const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1; // moving to the next question

  if (quizData.currentQuestionIndex < quizData.questions.length) {
    initQuestionPage();
  } else {
    // If there are no more questions, quiz is completed, go to the end page
    quizData.quizCompleted = true;
    initEndPage(); // calls the initEndPage function and displaying a congratulations message
  }
};


//Add a video background 
const vidBackground = () => {
    //<video autoplay loop> 
    //<source src=.. type=..> </vid>
    const videoBG = document.createElement('video'); //<video>
    videoBG.setAttribute('autoplay', true);
    videoBG.setAttribute('loop', true);

    const vidSource = document.createElement('source');
    vidSource.setAttribute('src', '/assets/neon-light.mp4');
    vidSource.setAttribute('type', 'video/mp4');

    videoBG.appendChild(vidSource);
    document.body.appendChild(videoBG);
};


