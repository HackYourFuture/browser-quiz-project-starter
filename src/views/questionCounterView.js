import { quizData } from '../data.js';

export function createQuestionCounterElement() {
  const questionElement = document.createElement('div');

  questionElement.innerHTML = String.raw`
    <div class="question-counter">why</div>
  `;

  return questionElement;
}

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
