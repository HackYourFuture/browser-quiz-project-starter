import { questionView } from '../views/question.view.js';
import { quizData } from '../data.js';
import { createFooter } from '../views/footer.view.js';

let currentQuestion = 5;
export const footerHandler = (event) => {
  //console.log(event.target, currentQuestion++);
  const quizContainer = document.querySelector('.quizContainer');
  quizContainer.remove();
  if (event.target.id === 'nextButton') {
    console.log(quizData.questions.length);
    currentQuestion++;
    const quizContainer = questionView(quizData.questions[currentQuestion]);
    const quizFooter = createFooter(currentQuestion, quizData.questions.length);
    quizContainer.appendChild(quizFooter);
    document.body.appendChild(quizContainer);
    import('../listeners/footer.listener.js');
  } else {
    currentQuestion--;
  }

  //event.
};
