export function createCountsAnswered(data) {
  return `Answered questions: ${data.quiz.answered}`;
}
export function createCountsCorrect(data) {
  return `Correct answers  ${data.quiz.correct}`;
}
