/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('li');
  element.innerHTML = String.raw`
    ${key}: ${answerText};
  `;

  // This code will work after merge with Anastacia repo
  // answerButton.addEventListener('click', () => {
  //   if (key === quizData.questions[quizData.currentQuestionIndex].correctAnswer) {
  //     quizData.score++; // increase score by 1 if answer is correct
  //   }
  //   document.getElementById(NEXT_QUESTION_BUTTON_ID).click();
  // });

  
  return element;
};
