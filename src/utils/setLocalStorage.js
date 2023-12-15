export const setLocalStorage = (currentQuestion, quizData, key) => {
  let answeredQuestions = localStorage.getItem('answeredQuestions');
  currentQuestion.selected = key;
  if (answeredQuestions) {
    answeredQuestions = JSON.parse(answeredQuestions);
    answeredQuestions[quizData.currentQuestionIndex] = currentQuestion.selected;
    localStorage.setItem(
      'answeredQuestions',
      JSON.stringify(answeredQuestions)
    );
  } else {
    let answeredQuestions = [];
    answeredQuestions[quizData.currentQuestionIndex] = currentQuestion.selected;
    localStorage.setItem(
      'answeredQuestions',
      JSON.stringify(answeredQuestions)
    );
  }
};
