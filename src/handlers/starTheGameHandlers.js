import { getDOMElement } from '../utils/DOMUtils.js';
import { initializeQuiz } from '../init/initializeQuiz.js';
const quizContainerEl =getDOMElement('startText')
const starterEl = getDOMElement('starter');
const scoreEl = getDOMElement('btn-2');
const timerEl = getDOMElement('btn-3');
const nextEl = getDOMElement('btn-4');
const imgGifEl = getDOMElement('ninja-gif'); 
export const startTheGame = () => {
  const hideButton = () => {
    starterEl.classList.add('hide');
    quizContainerEl.classList.add('hide');
    imgGifEl.classList.add("hide");
  };
  const unHideButton = () => {
    scoreEl.classList.remove("hide");
    timerEl.classList.remove("hide");
    nextEl.classList.remove("hide");
  };
  starterEl.addEventListener('click', initializeQuiz);
  starterEl.addEventListener('click', hideButton);
  starterEl.addEventListener('click', unHideButton);
  
  return starterEl;
};