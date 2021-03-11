
import { quizData } from "../data.js";
import { selectAnswer } from "../handlers/select-answer.js";

export function createQuestionList() {}

export function getRandomQuestion(item) {
  const randomQuestion = Math.floor(Math.random(item) * item.length);
  return item[randomQuestion];
}

export function displayQuestion() {

  const question = getRandomQuestion(quizData.questions);
  const answers = question.answers;

  const questionArea = document.getElementById('question');
  questionArea.innerHTML = question.text;
  
  for (const answerEntry of Object.entries(answers)) {
    const button = document.createElement('button');
    button.classList.add(answerEntry[0]);
    
    if (answerEntry[0] === question.correct) {
      button.dataset.correct = answerEntry.correct;
    }
    button.innerText = answerEntry[1];
    button.classList.add('btn');

    button.addEventListener('click', selectAnswer);
    const answerButtonsElement = document.getElementById('answer-buttons');
    answerButtonsElement.appendChild(button);
  };
  
  return questionArea;
}
