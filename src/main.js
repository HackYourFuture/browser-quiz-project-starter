import quizData from './data.js'

const QUESTIONS = quizData.map(element => element.question)

const ANSWERS = quizData.map(element => element.answers)


const CORRECT_ANSWERS = quizData.map(element => element.correct)
console.log()

let CURRENT_QUESION = 1;

let goodAnswer = 0

let randomQuestion = Math.floor(Math.random() * 8) + 1;


const container = document.getElementById("container")

function newQuestion(CURRENT_QUESION) {
  container.textContent = ""
  if (CURRENT_QUESION > (CORRECT_ANSWERS.length - 1)) {
    const h2 = document.createElement("h2")
    container.appendChild(h2).innerText = "Thank you for taking JavaScript Quiz !"
    return
  }
  displayPage()
}
newQuestion(CURRENT_QUESION)


function displayPage() {
  let x = 0
  const h1 = document.createElement("h1")
  container.appendChild(h1)
  container.style.backgroundColor = "lightgrey"
  document.body.style.backgroundColor = "lightblue"
  h1.textContent = QUESTIONS[CURRENT_QUESION]
  const h3 = document.createElement("h3")
  h1.appendChild(h3)
  h3.textContent = `${CURRENT_QUESION}/8`
  const h2 = document.createElement("h3")
  h1.appendChild(h2)
  h2.textContent = `You got ${goodAnswer} correct answer(s) from 8`
  const values = Object.values(ANSWERS[CURRENT_QUESION])
  const keys = Object.keys(ANSWERS[CURRENT_QUESION])
  values.forEach(answers => {
    const option = document.createElement("option");
    container.append(option);
    option.classList.add("div-class")
    option.textContent = answers
    option.setAttribute("value", `${keys[x]}`)
    x = x + 1
    option.style.backgroundColor = "lightblue"
  })
}

function events() {
  const choseOption = document.querySelectorAll('.div-class')
  choseOption.forEach(el => el.addEventListener('click', () => { choseAnswer(); getMatch(event) }))

}
events()

function getMatch(event) {
  let chosenOption = event.target.value
  if (chosenOption === CORRECT_ANSWERS[CURRENT_QUESION]) {
    goodAnswer++
    console.log(goodAnswer)
  }
}

function choseAnswer() {
  let x = 0
  container.textContent = ""
  const h1 = document.createElement("h1")
  container.appendChild(h1)
  h1.textContent = QUESTIONS[CURRENT_QUESION]
  const h3 = document.createElement("h3")
  h1.appendChild(h3)
  h3.textContent = `${CURRENT_QUESION}/8`
  const h2 = document.createElement("h3")
  h1.appendChild(h2)
  h2.textContent = `You got ${goodAnswer} correct answer(s) from 8`
  const values = Object.values(ANSWERS[CURRENT_QUESION])
  const keys = Object.keys(ANSWERS[CURRENT_QUESION])
  values.forEach(answers => {
    const option = document.createElement("option");
    container.append(option);
    option.classList.add("div-class")
    option.textContent = answers
    option.setAttribute("value", `${keys[x]}`)
    x++
    document.body.style.backgroundColor = "red"
    if (option.value === CORRECT_ANSWERS[CURRENT_QUESION]) {
      option.style.background = "green"

    } else {
      option.style.background = "red"
    }
  })

  const button = document.createElement("button")
  container.appendChild(button).textContent = "NEXT"
  button.style.backgroundColor = "lightblue"
  button.addEventListener('click', () => {
    CURRENT_QUESION++
    newQuestion(CURRENT_QUESION)
    events()
  })
}