/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    // Add more questions here
  ],
};


// MY JS CODE STARTS FROM HERE ---------------------------------------------------



const quizData = [
  {
     question: " question 1 ",
     a: " 1 ",
     b: " 2 ",
     c: " 3 ",
     d: " 4 ",
     correct: "1",
  },
  {
      question: " question 2 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
   },
   {
      question: " question 3 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
   },
   {
      question: " question 4 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
    },
   {
      question: " question 5 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
   },
   {
      question: " question 6 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
   },
   {
      question: " question 7 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
   },
   {
      question: " question 8 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
   },
   {
      question: " question 9 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
   },
   {
      question: " question 10 ",
      a: " 1 ",
      b: " 2 ",
      c: " 3 ",
      d: " 4 ",
      correct: "1",
   },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
  
  deselectAnswer()
  
  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function deselectAnswer(){
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
          if(answerEl.checked){
              answer = answerEl.id
          }
      })
      return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer){
      if (answer === quizData[currentQuiz].correct){
          score++
      }
      currentQuiz++
      if(currentQuiz < quizData.length){
          loadQuiz()
      } else {
          quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correct</h2>
          
          <button onclick ="location.reload()">Reload</button>
          `
      }
  }
})