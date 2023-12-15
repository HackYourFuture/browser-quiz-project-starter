export const createEndElement = () => {
    // Create a new HTML div element
    const element = document.createElement('div');
    element.innerHTML = `
  <h1>Congratulations! You've completed the quiz!</h1>

<div class="count-div">
  <div class="count1">
    <div class="number1">${quizData.correctAnswersCount}</div>
  </div>
  <p>From</p>
  <div class="count2">
    <div class="number2">${quizData.questions.length}</div>
  </div>
</div>

  <p>Thank you for participating.</p>
`;
    return element;
};
