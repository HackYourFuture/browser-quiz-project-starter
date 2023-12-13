import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScoreElement } from '../views/scoreView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const savedQuestionIndex = localStorage.getItem('currentQuestionIndex');
  
  quizData.currentQuestionIndex = savedQuestionIndex ? parseInt(savedQuestionIndex, 10) : 0;

  const currentQuestion =  quizData.questions[quizData.currentQuestionIndex];
  localStorage.setItem('currentQuestion', JSON.stringify(currentQuestion));
  const questionElement = createQuestionElement(currentQuestion.text);




  
  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  answersListElement.innerHTML = '';
  const answers = currentQuestion.answers;

  // Function to handle answer selection
  const selectAnswer = (questionIndex, selectedOption, chosenItem) => {
    // Update the selected answer in the quizData object
    quizData.questions[questionIndex].selected = selectedOption;
    let selectedValue = (quizData.questions[questionIndex].selected =
      selectedOption);

    let correctAnswer = quizData.questions[questionIndex].correct;

    document.querySelectorAll(`.answer-list li`).forEach((item) => {
      if (item.innerText.split(': ')[0] == correctAnswer) {
        item.style.background = 'green';
      } else {
        item.style.background = 'red';
      }
    });
  };

  for (const [option, answer] of Object.entries(answers)) {
    const answerElement = createAnswerElement(option, answer);
    answersListElement.appendChild(answerElement);
    answerElement.addEventListener('click', (e) => {
      const selectedOption = e.target.innerText.split(': ')[0];
      const chosenItem = e.target;
      selectAnswer(quizData.currentQuestionIndex, selectedOption, chosenItem);
    });
  }

  const quizBtn = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  quizBtn.addEventListener('click', nextQuiz);
    score();

};

// const showCorrectAnswer = () => {
//   const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
//   const correctAnswer = currentQuestion.correct;
//   const selectedAnswer = currentQuestion.selected;

//   const p = document.createElement('p');
//   p.innerText = `Correct answer is: ${correctAnswer}`;
//   const answerList = document.getElementById(ANSWERS_LIST_ID);

//   if(selectedAnswer != null && selectedAnswer.length > 0) {
//     answerList.appendChild(p);
//   };
// };

const nextQuiz = () => {
 
  if(quizData.currentQuestionIndex == quizData.questions.length - 1){
    quizData.currentQuestionIndex = 0
    localStorage.setItem('currentQuestionIndex', quizData.currentQuestionIndex);
    initQuestionPage();
  }else{
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  localStorage.setItem('currentQuestionIndex', quizData.currentQuestionIndex);
 
  // update the score in the next element
  score();
  initQuestionPage();
}
};

export const score = () =>{
  if(quizData.questions[quizData.currentQuestionIndex].selected === quizData.questions[quizData.currentQuestionIndex].correct){
    currentScore += 1;
    localStorage.setItem(currentScore);
  }
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  
  // Retrieve the current score from local storage using a specific key
  const currentScore = localStorage.getItem('currentScore');

  // If currentScore is null, set it to 0
  const numericScore = currentScore ? parseInt(currentScore, 10) : 0;

  const topScore = quizData.questions.length;
  const scoreElement = createScoreElement(numericScore, topScore);

  // Clear the user interface before appending the score element

  userInterface.appendChild(scoreElement);

  
  
}
;

