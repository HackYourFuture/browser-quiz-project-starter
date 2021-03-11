import { quizData } from '../data.js';
export const successPercentage = ()=>{
   return Math.floor((quizData.quiz.answered * 60) / 100);
}