'use strict';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createFinishElement = () => {
  const finalScore = localStorage.getItem('finalScore');
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>SCORE: ${finalScore ? finalScore : 0}/10</h1>
    <img style="width: 200px;" src="./public/images/false.gif" alt="">
    <img style="width: 200px;" src="./public/images/true.gif" alt="">
    <div class='againButtonDiv'>
      <button class="btn btn-success" id="tryAgain">
        Try Again
      </button>
    </div>
    `;
  element.classList.add("startDiv");

  return element;
};

