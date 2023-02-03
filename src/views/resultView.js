export const createResultElement = (correctAnswerCount) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
      <p class="result-paragraph">Thank you! You have completed this quiz!</p>
      <p class="result-score">You've answered ${correctAnswerCount} out of 10 questions</p>
    `;
  return element;
};
