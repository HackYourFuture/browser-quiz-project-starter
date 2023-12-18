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
  totalScore: 0,
  timerId: null,
  // the questions in the quiz
  questions: [
    {
      id: 1,
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
      id: 2,
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
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    {
      id: 3,
      text: 'What is a closure in JavaScript?',
      answers: {
        a: 'A function inside another function',
        b: 'A variable that can be accessed outside its scope',
        c: 'A function bundled with its lexical scope',
        d: 'A type of loop',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/closure',
        },
      ],
    },
    {
      id: 4,
      text: 'What is the difference between == and === in JavaScript?',
      answers: {
        a: '== checks for value equality, === checks for value and type equality',
        b: '== is a typo, === is the correct equality operator',
        c: '== checks for value and type equality, === checks for value equality',
        d: 'There is no difference',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/comparison',
        },
      ],
    },
    {
      id: 5,
      text: 'What is the purpose of JavaScript arrow functions?',
      answers: {
        a: 'To write shorter function syntax',
        b: 'To create new scope',
        c: 'To replace traditional function expressions',
        d: 'None of the above',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/arrow-functions-basics',
        },
      ],
    },
    {
      id: 6,
      text: 'What is a Promise in JavaScript?',
      answers: {
        a: 'A data type that represents a future value',
        b: 'A function that runs asynchronously',
        c: 'An object that links producing code and consuming code',
        d: 'A method that delays the execution of a function',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/promise-basics',
        },
      ],
    },
    {
      id: 7,
      text: 'What is the use of the map function in JavaScript?',
      answers: {
        a: 'To mutate the original array',
        b: 'To loop through each item in an array',
        c: 'To create a new array with the results of calling a function for every array element',
        d: 'To reduce an array to a single value',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/array-methods#map',
        },
      ],
    },
    {
      id: 8,
      text: 'What is the purpose of the "this" keyword in JavaScript?',
      answers: {
        a: 'To refer to the current object',
        b: 'To create a new object',
        c: 'To refer to the global object',
        d: 'To declare a variable',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/object-methods#object-method-this',
        },
      ],
    },
    {
      id: 9,
      text: 'What is a JavaScript callback function?',
      answers: {
        a: 'A function that is passed as an argument to another function',
        b: 'A function that is called after a certain event has occurred',
        c: 'Both a and b',
        d: 'None of the above',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Glossary/Callback_function',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/callbacks',
        },
      ],
    },
    {
      id: 10,
      text: 'What is the difference between null and undefined in JavaScript?',
      answers: {
        a: 'Null is an object, undefined is a type',
        b: 'Undefined means a variable has been declared but has not yet been assigned a value, null is an assignment value',
        c: 'There is no difference',
        d: 'Undefined is an object, null is a type',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null',
        },
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#null-and-undefined',
        },
      ],
    },
    // Add more questions here
  ],
};
