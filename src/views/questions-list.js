import { quizData } from '../data.js';


export function createQuestionList() {}

export function getRandomQuestion(item) {
  const randomQuestion = Math.floor(Math.random(item) * item.length);
  return item[randomQuestion];
}

export function displayQuestion() {

  const question = getRandomQuestion(quizData.questions);
  console.log(question.text);
  const questionArea = document.getElementById('question');
  console.log(questionArea);
  questionArea.innerHTML = question.text;


  return questionArea;
}

displayQuestion();

