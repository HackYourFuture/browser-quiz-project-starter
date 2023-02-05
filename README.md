# Hobbits Quiz App

This application provides an interface of a Quiz-App.

- In this, user is shown ten questions with four multiple answers for each question. The user has to select correct answer (It directly shows whether the answer is correct or wrong (red/green color-code) and proceed with Next button.

- Also during whole process, there is a timer running, after that time lapse, all response has been recorded and according to user performance, its Result has been shown on final screen.

- To be successful in the Quiz, user have to fulfill below condition:
  The accuracy should be greater than 60%.

# App Demo

- Our web application is live on: https://ozgur2096.github.io/hobbits-quiz-project/

# Development

- To run this web application locally, you will need to open index.html in your browser using a local server. LiveServer, http-server or any other local static server will work.

# Installing Dependencies

- There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript.

# Structure

- Let's run through the folders:

```
public
src
└── pages
  |__welcomePage.js
  |__questionPage.js
  |__resultsPage.js
└── views
  |__welcomeView.js
  |__questionVew.js
  |__answerView.js
  |__resultsView.js
  |__questionCounterView.js
  |__checker.js
  |__playSound.js
  |__timer.js
  |__willBar.js
  |__writeStory.js
  |__loadBackgrounds.js
  |__soundOnOff.js
└── app.js
└── constants.js
└── data.js
|__dataTheme.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
  - `pages` this folder contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
    it also contains our code that links up our handler code to the DOM.
  - `views` this contains code to define what the DOM will look like.
  - `app.js` this file our initialisation code. Generally this code should only run once and starts the application
  - `data.js` this is our data model. Anything we need to store in the browser we place inside the data file

# Goal and Backlog

## must have features

- [x] A user can see one question at a time, stepping through the quiz
- [x] A user can select an answer for each question
- [x] A user can know which questions they got correct and incorrect (immediately)
- [x] Added a favicon

## should have features

- [x] (should have) A user can see what the correct answer is after they selected their answer.
- [x] (should have) A user can see their score update in real-time as they select answers
- [ ] (should have) A user can refresh the page and still have his/her given answers available

## could have features

- [ ] (could have) A user can "skip" the question and learn the correct answer, this forfeits the question
- [ ] (could have) Transition between pages or question look fancy like TypeForm for example

# Hobbit's Team

This app is made by a group of Hobbit's team. The group of Hobbit consists of:

- Obada
- Ozgur
- Doga
- Badar
