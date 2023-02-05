import { quizData } from '../data.js';

let questionNumber = 0;

export function counterQuestion() {
  questionNumber++;
  const totalQuestions = quizData.questions.length;
  document.getElementById(
    'question-counter'
  ).innerText = `${questionNumber}/${totalQuestions}`;
}

export function removeQuestionCounter() {
  document.getElementById('question-counter').remove();
}
