export const setLocalStorage = (currentQuestionIndex, selectedAnswer) => {
  let answeredQuestions = localStorage.getItem('answeredQuestions');
  if (answeredQuestions) {
    answeredQuestions = JSON.parse(answeredQuestions);
    answeredQuestions[currentQuestionIndex] = selectedAnswer;
    localStorage.setItem(
      'answeredQuestions',
      JSON.stringify(answeredQuestions)
    );
  } else {
    let answeredQuestions = [];
    answeredQuestions[currentQuestionIndex] = selectedAnswer;
    localStorage.setItem(
      'answeredQuestions',
      JSON.stringify(answeredQuestions)
    );
  }
};
