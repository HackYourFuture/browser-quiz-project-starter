import { quizData } from "../data.js";
export function createQuestionList() {
  const list = document.createElement('ul');
  document.body.appendChild(list);
  const fakeLi = document.createElement('li');
  list.appendChild(fakeLi);
  console.log(quizData.questions);
  // TODO: actually put things into the list
  return list;
}
