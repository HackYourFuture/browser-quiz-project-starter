import {
    ANSWERS_LIST_ID,
    NEXT_QUESTION_BUTTON_ID,
    USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { initEndPage } from './endPage.js'; //importing initEndPage 

let videoLoaded = false;

export const initQuestionPage = () => {
   //  if(document.getElementById('coolBackground')){
   //   document.body.removeChild(document.getElementById('coolBackground'));
   //   videoLoaded = false;
    //}

    //document.body.style.backgroundImage = ‘none’;
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const currentQuestion = quizData.questions[quizData.currentQuestionIndex]; //need current question

    const questionElement = createQuestionElement(currentQuestion.text);

    userInterface.appendChild(questionElement);

    const answersListElement = document.getElementById(ANSWERS_LIST_ID);

    let selectedAnswer = null; // Added variable to store the selected answer
    let myImg1 = document.querySelector(".img-1");
    let myImg2 = document.querySelector(".img-2");

    for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
        const answerElement = createAnswerElement(key, answerText); //need this also

        //=========================
        //add attr to answerElement (ul-li)
        answerElement.setAttribute('data-answer', key);

        //Add an eventListener here for checking the answers
       answersListElement.addEventListener('click', (e) => {
        if (selectedAnswer === null) {
        const clickedAnswer = e.target.getAttribute('data-answer');
        const index = Array.from(answersListElement.children).indexOf(e.target);

        //The error you're encountering indicates that the answersListElement.children[index] is returning undefined at some point. This could happen if the index value is not within the valid range of children elements in your answersListElement.
        if (index !== -1) {
            if (clickedAnswer === currentQuestion.correct) {
                quizData.correctAnswersCount++;
                myImg1.src = "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif";
                myImg1.style.display = "block"
                myImg2.src = "https://cliply.co/wp-content/uploads/2021/09/CLIPLY_372109170_FREE_FIREWORKS_400.gif";
                myImg2.style.display = "block"
                answersListElement.children[index].style.boxShadow = '0 0 10px 10px #00FF00';
                answersListElement.children[index].style.transition = 'none';
            } else {
                answersListElement.children[index].style.boxShadow = '0 0 10px 10px #FF0000';

                const correctAnswer = document.querySelector(`[data-answer="${currentQuestion.correct}"]`);
                if (correctAnswer) {
                    correctAnswer.style.boxShadow = '0 0 10px 10px #00FF00';
                }
            }

            disableClick();
            selectedAnswer = clickedAnswer;
        }
    }
});

        //========================
        answersListElement.appendChild(answerElement);
    }

    document
        .getElementById(NEXT_QUESTION_BUTTON_ID)
        .addEventListener('click', nextQuestion);

    vidBackground();

    clearInterval(countDown);

    // Start the timer with a duration of 5 seconds
    quizTimer(15,currentQuestion);
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
    if(!videoLoaded){
    //<video autoplay loop> 
    //<source src=.. type=..> </vid>
    const videoBG = document.createElement('video'); //<video>
    videoBG.setAttribute('autoplay', true);
    videoBG.setAttribute('loop', true);
    videoBG.setAttribute('id', 'coolBackground');
    //we need to remove it from body, we need a welcome backgronud. give an id, videoBG get this back, u need a reference. removechild method


    const vidSource = document.createElement('source');
    vidSource.setAttribute('src', '/assets/neon-light.mp4');
    vidSource.setAttribute('type', 'video/mp4');

    videoBG.appendChild(vidSource);
    document.body.appendChild(videoBG);
    videoLoaded = true ;
    }
};


let myTimer = document.querySelector(".time");
let countDown;

function quizTimer(duration,count) {
    let minutes;
    let seconds;
    countDown = setInterval(function () {
    minutes = parseInt(duration / 60);
    seconds = parseInt(duration % 60);

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    myTimer.innerHTML = `${minutes}:${seconds}`;
    document.querySelector(".quiz-timer").style.display = "block"

    if (--duration < 0) {
        clearInterval(countDown);
        nextQuestion();
    }
}, 1000);
}

export const stopTimer = () => {
    clearInterval(countDown);
    document.querySelector(".quiz-timer").style.display = "none";
};