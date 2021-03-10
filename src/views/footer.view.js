export const createFooter = (currentQuestion, totalQuestions) => {
  //currentQuestion++;
  const quizFooter = document.createElement('div');
  quizFooter.classList.add('quizFooter');
  quizFooter.innerHTML = `<a id="prevButton" href="#" class="prevBtn"
  ><i class="fa fa-arrow-left prevArrow"></i> Pervious</a
>
<div class="quizFooterText">${currentQuestion + 1}/${totalQuestions}</div>
<a id="nextButton" href="#" class="nextBtn"
  >Next <i class="fa fa-arrow-right nextArrow"></i
></a>`;
  return quizFooter;
};
