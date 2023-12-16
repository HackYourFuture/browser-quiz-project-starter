export const setLocalStorage = (
  currentQuestionIndex,
  selectedAnswer,
  checkAnswer
) => {
  let answeredQuestions =
    JSON.parse(localStorage.getItem('answeredQuestions')) || [];
  if (answeredQuestions) {
    answeredQuestions[currentQuestionIndex] = selectedAnswer;
    localStorage.setItem(
      'answeredQuestions',
      JSON.stringify(answeredQuestions)
    );
  } else {
    answeredQuestions[currentQuestionIndex] = selectedAnswer;
    localStorage.setItem(
      'answeredQuestions',
      JSON.stringify(answeredQuestions)
    );
  }
  checkAnswer(currentQuestionIndex);
};
