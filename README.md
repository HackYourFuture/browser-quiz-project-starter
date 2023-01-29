# Hobbits quiz app

a quick description

# App Demo

you need to put some link here

# Structure

Let's run through the folders:

```
public
src
└── pages
└── views
└── app.js
└── constants.js
└── data.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
  - `pages` this folder contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
    it also contains our code that links up our handler code to the DOM.
  - `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the pages do.
  - `app.js` this file our initialisation code. Generally this code should only run once and starts the application
  - `data.js` this is our data model. Anything we need to store in the browser we place inside the data file

# Goal and Backlog

## must have features

- [x] (must have) A user can see one question at a time, stepping through the quiz
- [ ] (must have) A user can select an answer for each question
- [ ] (must have) Change the <title>
- [ ] (must have) add a favicon
- [ ] (should have) A user can see what the correct answer is after they selected their answer.
- [ ] (should have) A user can see their score update in real-time as they select answers
- [ ] (should have) A user can refresh the page and still have his/her given answers available

## must have features

- [ ] (could have) A user can "skip" the question and learn the correct answer, this forfeits the question
- [ ] (could have) Transition between pages or question look fancy like TypeForm for example

You should create tasks that fit with your goal, these tasks serve just as an example.
