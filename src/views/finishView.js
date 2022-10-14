'use strict';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createFinishElement = () => {
  const finalScore = localStorage.getItem('finalScore');
  const element = document.createElement('div');
  const failImg = "./public/images/false.gif";
  const successImg = "./public/images/true.gif";
  element.innerHTML = String.raw`
    <h1 class="finishScore">SCORE: ${finalScore ? finalScore : 0}/10</h1>
    <img style="width: 300px;" src=${finalScore >= 6 ? successImg : failImg} alt="">
    <div class='againButtonDiv'>
      <button class="btn btn-success" id="tryAgain">
        Try Again
      </button>
    </div>
    `;
  element.classList.add("startDiv");

  return element;
};

