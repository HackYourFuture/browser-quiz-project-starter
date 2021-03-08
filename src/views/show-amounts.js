export function createCounts(data) {
  const counts = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = `Answered questions: ${data.quiz.answered}. Correct answers: ${data.quiz.correct}.`;
  counts.appendChild(p);
  return counts;
}
