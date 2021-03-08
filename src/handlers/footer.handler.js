import { questionView } from '../views/question.view.js';
import { quizData } from '../data.js';
import { createFooter } from '../views/footer.view.js';

let currentQuestion = 0;
export const footerHandler = (event) => {
  //console.log(event.target, currentQuestion++);
  const quizContainer = document.querySelector('.quizContainer');
  quizContainer.remove();


  if (event.target.id === 'nextButton') {
    currentQuestion++;
    const currentContainer = questionView(quizData.questions[currentQuestion]);
    const quizFooter = createFooter(currentQuestion, quizData.questions.length);
    currentContainer.appendChild(quizFooter);
    document.body.appendChild(currentContainer);

 
    
  } else {
    currentQuestion--;
  }

  // function showSlide(n) {
  //   const quizContainer = document.querySelector('.quizContainer');
  //   quizContainer.remove();
  //   slides[n].classList.add('active-slide');
  //   currentSlide = n;
  //   if(currentSlide === 0){
  //     previousButton.style.display = 'none';
  //   }
  //   else{
  //     previousButton.style.display = 'inline-block';
  //   }
  //   if(currentSlide === slides.length-1){
  //     nextButton.style.display = 'none';
  //     submitButton.style.display = 'inline-block';
  //   }
  //   else{
  //     nextButton.style.display = 'inline-block';
  //     submitButton.style.display = 'none';
  //   }
  // }

  // function showNextSlide() {
  //   showSlide(currentSlide + 1);
  // }

  // function showPreviousSlide() {
  //   showSlide(currentSlide - 1);
  // }

  //event.
  return 
};
