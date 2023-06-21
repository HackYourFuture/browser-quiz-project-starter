import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';

import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

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

const Hint_Button = document.getElementById('hint-button');
const Hint_Text = document.getElementById('hint-text');
Hint_Text.style.display = 'none'
Hint_Button.addEventListener('click', function () {
  Hint_Text.style.display = 'block';
});

};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};

import { ANSWER_BUTTONS } from '../constants.js';
import { SCORE_ELEMENT } from '../constants.js';
import { SCORE_BUTTON } from '../constants.js';
import { SCORE_RESULT } from '../constants.js';
// import { SCORE_NUM } from '../constants.js';

let score = 0


const ANSWER_BUTTONS = document.getElementById("answer-buttons")
ANSWER_BUTTONS.forEach(button => {
    button.addEventListener("click", checkAnswer)
})

const SCORE_BUTTON = document.getElementById("score-btn")
SCORE_BUTTON.addEventListener("click", showScoreResult)

function checkAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.classList.contains("correct")

    if(isCorrect){
        selectedBtn.innerHTML = "You got a point"
        selectedBtn.classList.add("disabled")
        score++
        updateScore()
    } else {
        selectedBtn.innerHTML = "Sorry, no point"
        selectedBtn.classList.add("disabled")
    }
}

const SCORE_ELEMENT = document.getElementById("score")
function updateScore(){
  let score = parseInt(SCORE_ELEMENT.textContent);
  let newScore = score + 1
  SCORE_ELEMENT.textContent = newScore.toString()
}

const SCORE_RESULT = document.getElementById("score-result")
function showScoreResult(){
  SCORE_RESULT.innerHTML = updateScore()
  // SCORE_ELEMENT.style.disply = "block"
}






