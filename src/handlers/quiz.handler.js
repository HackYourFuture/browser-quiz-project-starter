import { questionView } from '../views/question.view.js';
import { quizData } from '../data.js';
import { createFooter } from '../views/footer.view.js';
import { addFooterListener } from '../listeners/footer.listener.js';
import { addSelectingListener } from '../listeners/selecting.listener.js';
export const quizHandler = (event) => {
  const startContainer = document.querySelector('.startContainer');
  startContainer.remove();
  updateQuiz(quizData.questions[0], 0);
  // const quizContainer = document.querySelector('.quizContainer');
  // quizContainer.classList.add('showQuiz');
};

export const updateQuiz = (quiz, currentQuestion) => {
  const quizContainer = questionView(quiz);
  const quizFooter = createFooter(currentQuestion, quizData.questions.length);
  quizContainer.appendChild(quizFooter);
  document.body.appendChild(quizContainer);

  //reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
  // import('../listeners/footer.listener.js');
 //  import('../listeners/selecting.listener.js');

  addFooterListener();
  addSelectingListener();
};
