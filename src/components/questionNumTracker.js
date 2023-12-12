import { QUESTION_NUMBER_TRACKER_ID } from '../constants';

/**
 * Create a full question element
 * @returns {Element}
 */

export const questionNumberTracker = (
  currentQuestionNumber,
  totalQuestions
) => {
  const element = document.createElement('div'); // I use String.raw just to get fancy colors for the HTML in VS Code.

  element.innerHTML = String.raw`
    <div id="${QUESTION_NUMBER_TRACKER_ID}">Question ${currentQuestionNumber} of ${totalQuestions}</div>
  `;
  return element;
};