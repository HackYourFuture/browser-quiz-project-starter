  'use strict';

  import {QUESTION_CONTAINER_ID} from '../constants.js';
  import {createQuestionElement} from '../views/questionViews.js';
  import {clearDOMElement, createDOMElement, getDOMElement} from '../utils/DOMUtils.js';
  import {quizData} from '../data.js';
  import {LAST_QUESTION_BUTTON_ID, NEXT_QUESTION_BUTTON_ID} from '../constants.js';


  export const showCurrentQuestion = () => {
    
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionDOM = createQuestionElement(currentQuestion);
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);

  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
  if (quizIsEnded() === true) {
    const nextQuestionBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    const lastQuestionBtn = getDOMElement(LAST_QUESTION_BUTTON_ID);
    nextQuestionBtn.style.visibility = 'hidden';
    lastQuestionBtn.style.visibility = 'visible';
  } else {
    restartBtnSetup();
  };
  }

  const {questions} = quizData;
  const lengthOfArray = questions.length - 1;


  export const handleNextQuestion = () => {
  if (quizIsEnded() === true) {
    quizData.currentQuestionIndex = 0;
    const nextQuestionBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    const lastQuestionBtn = getDOMElement(LAST_QUESTION_BUTTON_ID);
    nextQuestionBtn.style.visibility = 'hidden';
    lastQuestionBtn.style.visibility = 'visible';
  } else {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  };
  showCurrentQuestion();
};

export const handleCheckAnswer = (selectedAnswer) => {
const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
let clickedAnswer = selectedAnswer.innerText

let currentCorrectAnswer = currentQuestion.answers[currentQuestion.correct];

if(clickedAnswer === currentCorrectAnswer){
  selectedAnswer.style.cssText = "background-color: green; color: white;"
} else {
selectedAnswer.style.cssText = "background-color: red; color: white;"
}
}

export const quizIsEnded = () => {
  return quizData.currentQuestionIndex >= lengthOfArray;
  };

/**
 * The restartBtnSetup function resets the buttons when the test is restarted.
 */
  const restartBtnSetup = () => {
    const nextQuestionBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    const lastQuestionBtn = getDOMElement(LAST_QUESTION_BUTTON_ID);
    nextQuestionBtn.style.visibility = 'visible';
    lastQuestionBtn.style.visibility = 'hidden';
  };