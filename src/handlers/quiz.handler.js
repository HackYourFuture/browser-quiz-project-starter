import { questionView } from '../views/question.view.js';

import { quizData } from '../data.js';
import { createFooter } from '../views/footer.view.js';

export const quizHandler = (event) => {
  const startContainer = document.querySelector('.startContainer');
  startContainer.remove();

  // const quizContainer = document.querySelector('.quizContainer');
  // quizContainer.classList.add('showQuiz');

  const quizContainer = questionView(quizData.questions[0]);
  // const button = event.target;
  // const parent = button.parentNode;

  // parent.insertBefore(questionDOM, button);
  // button.remove();

  const quizFooter = createFooter(1, quizData.questions.length);
  quizContainer.appendChild(quizFooter);
  document.body.appendChild(quizContainer);
};
