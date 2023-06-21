/*
 The constants file is used to store anything 
 that multiple files use, that should ALWAYS be the same
 
 It is an industry standard to make these variables fully capitalised
*/

export const USER_INTERFACE_ID = 'user-interface';
export const START_QUIZ_BUTTON_ID = 'start-quiz-button';
export const ANSWERS_LIST_ID = 'answers-list';
export const NEXT_QUESTION_BUTTON_ID = 'next-question-button';


export const Hint_Button = 'hint-button';
export const Hint_Text = 'hint-text';

// Answer buttons ID & class
export const ANSWER_BUTTONS = "answer-buttons";
export const buttons = document.querySelectorAll("btn")


// Score elements ID
// export const SCORE_ELEMENT = "score";
export const SCORE_BUTTON = "score-btn";
export const SCORE_RESULT = "score-result";
// export const SCORE_NUM = "score-num"


// Score elements classes
export const circle = document.getElementsByClassName("circle-bg-color-anim score-circular")
export const score_inner = document.getElementsByClassName("circle-bg-color-anim score-inner")
export const score_number = document.getElementsByClassName("score-number")
export const score_text = document.getElementsByClassName("circle-text-color-anim score-text")
export const score_circle = document.getElementsByClassName("score-circle")
export const progress_right = document.getElementsByClassName("circle-bg-color-anim score-bar progress-right")
export const score_progress = document.getElementsByClassName("circle-bg-color-anim score-progress")
export const progress_left = document.getElementsByClassName("circle-bg-color-anim score-bar progress-left")
export const score_progress_2 = document.getElementsByClassName("score-progress")