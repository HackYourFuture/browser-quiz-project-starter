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

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex]; //need current question

    const questionElement = createQuestionElement(currentQuestion.text);

    userInterface.appendChild(questionElement);

    const answersListElement = document.getElementById(ANSWERS_LIST_ID);

    for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
        const answerElement = createAnswerElement(key, answerText); //need this also

        //=========================
        //add attr to answerElement (ul-li)
        answerElement.setAttribute('data-answer', key);

        //Add an eventListener here for checking the answers
        answersListElement.addEventListener('click', (e) => {

            const clickedAnswer = e.target.getAttribute('data-answer');
            const index = Array.from(answersListElement.children).indexOf(e.target);

            // be sure that the selected property is correctly assigned
            currentQuestion.selected = clickedAnswer;


            if (clickedAnswer === currentQuestion.correct) {

                answersListElement.children[index].style.boxShadow = '0 0 10px 10px #00FF00';
                answersListElement.children[index].style.transition = 'none';
            } else {

                answersListElement.children[index].style.boxShadow = '0 0 10px 10px #FF0000';

                const correctAnswer = document.querySelector(`[data-answer="${currentQuestion.correct}"]`);
                correctAnswer.style.boxShadow = '0 0 10px 10px #00FF00';
            }

            disableClick(); //define it Don't forget
        });
        //========================
        answersListElement.appendChild(answerElement);
    }

    document
        .getElementById(NEXT_QUESTION_BUTTON_ID)
        .addEventListener('click', nextQuestion);

    vidBackground();
};



//==============
const disableClick = () => {
    const liElements = document.querySelectorAll(`#${ANSWERS_LIST_ID}`);//answersListElement
    for (let el of liElements) {
        el.style.pointerEvents = 'none';
    }
};
//=============

const nextQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const selectedAnswer = currentQuestion.selected;

  // Check if the selected answer is correct
  if (selectedAnswer === currentQuestion.correct) {
    quizData.userScore += currentQuestion.points; // Add points to the user's score
  }

  quizData.currentQuestionIndex += 1; // Move to the next question

 // Debugging logs
  console.log('userScore:', quizData.userScore);
  console.log('currentQuestion:', currentQuestion);
  console.log('selectedAnswer:', selectedAnswer);

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


