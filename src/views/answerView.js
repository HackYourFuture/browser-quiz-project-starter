/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText,handleRightAnswer) => {

  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText}
  `;
  element.id=key
  element.addEventListener('click', () => {
    handleRightAnswer(key)
  });
  return element;
};

import { ANSWER_BUTTONS } from '../constants.js';
import { SCORE_ELEMENT } from '../constants.js';
import { SCORE_BUTTON } from '../constants.js';
import { SCORE_MESSAGE } from '../constants.js';

let score = 0

ANSWER_BUTTONS.forEach(button => {
    button.addEventListener("click", checkAnswer)
})

SCORE_BUTTON.addEventListener("click", showScoreMessage)

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

function showScoreMessage(){
  SCORE_MESSAGE.innerHTML = `Your score: ${score} points`
}

function updateScore(){
  let score = parseInt(SCORE_ELEMENT.textContent);
  let newScore = score + 1
  SCORE_ELEMENT.textContent = newScore.toString()
}

SCORE_ELEMENT.style.display = "block"