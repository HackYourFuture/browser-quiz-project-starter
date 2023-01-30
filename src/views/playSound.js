export const playSound = function() {
  const answers = document.querySelectorAll('li');
  const wrongAnswerSound = document.querySelector('#wrong-answer-audio')
  const rightAnswerSound = document.querySelector('#right-answer-audio')
  
    if (document.body.style.background === 'red') {
      wrongAnswerSound.currentTime = 0;
      wrongAnswerSound.play()
    }
    else {
      rightAnswerSound.currentTime = 0;
      rightAnswerSound.play()
    }
}