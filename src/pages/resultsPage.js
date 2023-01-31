
submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correct</h2>
          
          <button onclick ="location.reload()">Reload</button>
          `;
    }
  }
});