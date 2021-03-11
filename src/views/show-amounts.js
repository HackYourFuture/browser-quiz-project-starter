export function createCountsAnswered(data) {
  const span = document.createElement('span');
  span.textContent = `${data.quiz.answered}`;
  return 'Question number ' + span.innerText;
}
export function createCountsCorrect(data) {
  const span = document.createElement('span');
  span.textContent = `${data.quiz.correct}`;
  return 'Correct answers ' + span.innerText;
}
