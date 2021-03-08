import { quizData } from '../data.js';
import { createQuestionList } from '../views/questions-list.js';

export function renderQuestions() {
    for (let i = 0; i < quizData.questions.length; i++) {
      createQuestionList().innerHTML = quizData.questions[i].text;
    }
  }


