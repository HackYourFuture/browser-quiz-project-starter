/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  score: 0,
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

/**

As for your question about `key`, it gets its value from this block of code:

Let's break it down:

- `Object.entries(currentQuestion.answers)` returns an array of key-value pairs for the `answers` object in the current question.
  
  For example, if `currentQuestion.answers` is `{ a: "Answer 1", b: "Answer 2" }`, `Object.entries(currentQuestion.answers)` would return `[["a", "Answer 1"], ["b", "Answer 2"]]`.

- The `for` loop iterates through this array of key-value pairs. In each iteration, `key` gets the first element of a pair (like `"a"` or `"b"`), and `answerText` gets the second element (like `"Answer 1"` or `"Answer 2"`).

- Inside the loop, an event listener is attached to each button with an ID formed by `${ANSWER_OPTION_BUTTON_ID}-${key}` (e.g., if `ANSWER_OPTION_BUTTON_ID` is `"answerButton"`, then IDs would be `"answerButton-a"`, `"answerButton-b"`, etc.).

- When one of these buttons is clicked, the function `optionalAnswerClicked(key)` is called, and the current `key` ("a", "b", etc.) is passed in as an argument. This is how `key` gets its value in the `optionalAnswerClicked` function.
 */
