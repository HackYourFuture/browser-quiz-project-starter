document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
      {
        question: 'What is the capital of France?',
        answers: {
          a: 'Berlin',
          b: 'Madrid',
          c: 'Paris',
          d: 'Rome',
        },
        correct: 'c',
      },
      {
        question: 'What is 2 + 2?',
        answers: {
          a: '3',
          b: '4',
          c: '5',
          d: '6',
        },
        correct: 'b',
      },
    ];
  
    let currentQuestionIndex = 0;
    let score = 0;
  
    const questionContainer = document.getElementById('question-container');
    const nextButton = document.getElementById('next-button');
    const scoreDisplay = document.getElementById('score');
  
    const loadQuestion = () => {
      const currentQuestion = quizData[currentQuestionIndex];
      questionContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        ${Object.entries(currentQuestion.answers)
          .map(
            ([key, answer]) => `
          <label class="answer">
            <input type="radio" name="answer" value="${key}">
            ${answer}
          </label>
        `
          )
          .join('')}
      `;
    };
  
    const checkAnswer = () => {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      if (selectedAnswer && selectedAnswer.value === quizData[currentQuestionIndex].correct) {
        score++;
      }
    };
  
    const updateScoreDisplay = () => {
      scoreDisplay.textContent = `Score: ${score}`;
    };
  
    nextButton.addEventListener('click', () => {
      checkAnswer();
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        questionContainer.innerHTML = '<div>Quiz finished!</div>';
        nextButton.style.display = 'none';
      }
      updateScoreDisplay();
    });
  
    loadQuestion();
  });
  