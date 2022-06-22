'use strict'

export const addAnswerToStorage=(answer)=>{
    let answers=getAnswersFromStorage();
    answers.push(answer);
    localStorage.setItem('answers',JSON.stringify(answers));
}
export const getAnswersFromStorage=()=>{
    let answers;
    localStorage.getItem('answers')===null?answers=[]:answers=JSON.parse(localStorage.getItem('answers'))
    return answers;
}
export const clearAnswersFromStorage=()=>localStorage.clear('answers');