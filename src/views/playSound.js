import { quizData } from '../data.js';

export const playSound = function() {
  const answers = document.querySelectorAll('li');
  const wrongAnswerSound = document.querySelector('#wrong-answer-audio')
  const rightAnswerSound = document.querySelector('#right-answer-audio')
  
  const selectedAnswer =  quizData.questions[quizData.currentQuestionIndex].selected

  const correctAnswer =  quizData.questions[quizData.currentQuestionIndex].correct

    if (selectedAnswer === correctAnswer) {
      rightAnswerSound.currentTime = 0;
      rightAnswerSound.play()
    }
    else {
      wrongAnswerSound.currentTime = 0;
      wrongAnswerSound.play()
    }
}