import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  ANSWER_OPTION_BUTTON_ID,
  SKIP_QUESTION_BUTTON_ID,
  SCORE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { skipQuestion } from './skip.js';
import { startTimer, resetTimer, timeUP } from './timer.js';

import { shuffle } from '../shuffling.js';
export const initQuiz = () => {
  // Shuffle the questions
  quizData.questions = shuffle(quizData.questions);

  initQuestionPage();
};

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);

    //   ID generate forEach answer button
    const optionalAnswer = `${ANSWER_OPTION_BUTTON_ID}-${key}`;
    document.getElementById(optionalAnswer).addEventListener('click', () => {
      optionalAnswerClicked(key);
    });
  }

  document
    .getElementById(SKIP_QUESTION_BUTTON_ID)
    .addEventListener('click', skipQuestion);

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  startTimer(() => timeUP(currentQuestion));
};

const moveToNextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
};
export const nextQuestion = () => {
  // Re-enable the "Next Question" button
  document.getElementById(NEXT_QUESTION_BUTTON_ID).disabled = false;
  resetTimer();
  moveToNextQuestion();
  initQuestionPage();
};
// function-disable answer-buttons function apart
export const disableAnswerButtons = (currentQuestion) => {
  for (const [key] of Object.entries(currentQuestion.answers)) {
    const restButtons = document.getElementById(
      `${ANSWER_OPTION_BUTTON_ID}-${key}` //   `${ANSWER_OPTION_BUTTON_ID}-${anOtherKey}` when inside optionalAnswerClicked
    );
    restButtons.disabled = true;
  }
};

//  correct-answer highlight-function
export const highlightCorrectAnswer = (currentQuestion) => {
  const correctAnswerButton = document.getElementById(
    `${ANSWER_OPTION_BUTTON_ID}-${currentQuestion.correct}`
  );
  correctAnswerButton.style.backgroundColor = 'green';
};

const optionalAnswerClicked = (key) => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  disableAnswerButtons(currentQuestion);
  resetTimer();
  //  selected answer is correct
  const isCorrect = key === currentQuestion.correct;

  const selectedAnswerButton = document.getElementById(
    `${ANSWER_OPTION_BUTTON_ID}-${key}`
  );

  if (isCorrect) {
    //  * Or: CSS approach commented:
    // selectedAnswerButton.classList.add('correct-answer');
    selectedAnswerButton.style.backgroundColor = 'green';
    // Increment the score
    quizData.score += 1;
    // Update the score display
    scoreRealTime();
  } else {
    // selectedAnswerButton.classList.add('wrong-answer');
    selectedAnswerButton.style.backgroundColor = 'red';
    const correctAnswerButton = document.getElementById(
      `${ANSWER_OPTION_BUTTON_ID}-${currentQuestion.correct}`
    );
    //correctAnswerButton.classList.add('correct-answer');
    correctAnswerButton.style.backgroundColor = 'green';
  }
  currentQuestion.selected = key;
  // Log for debugging purposes
  console.log(`Answer ${key} selected for question ${currentQuestion.text}`);
};

export const scoreRealTime = () => {
  let scored = document.getElementById(SCORE_ID);
  scored.innerText = `SCORE: ${quizData.score}`;
};
