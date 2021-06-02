'use strict';

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
  correctAnswers: [],
  wrongAnswers: [],
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
      text: 'Inside which HTML element do we put the JavaScript?',
      answers: {
        a: '<scripting>',
        b: '<javascript>',
        c: '<script>',
        d: '<js>',
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
      text: 'Where is the correct place to insert a JavaScript?',
      answers: {
        a: 'Both the <head> section and the <body> section are correct',
        b: 'The <body> section',
        c: 'The <head> section',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'W3Schools.info',
          href: 'https://www.w3schools.com/js/js_whereto.asp',
        },
      ],
    },
    {
      text:
        'What is the correct syntax for referring to an external script called "xxx.js"?',
      answers: {
        a: '<script href="xxx.js">',
        b: '<script src="xxx.js">',
        c: '<script name="xxx.js">',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'W3Schools.info',
          href: 'https://www.w3schools.com/tags/att_script_src.asp',
        },
      ],
    },
    {
      text: 'How do you write "Hello World" in an alert box?',
      answers: {
        a: 'msg("Hello World")',
        b: 'alert("Hello World")',
        c: 'msgBox("Hello World")',
        d: 'alertBox("Hello World")',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'W3Schools',
          href: 'https://www.w3schools.com/jsref/met_doc_write.asp',
        },
      ],
    },
    {
      text: 'How do you create a function in JavaScript?',
      answers: {
        a: 'function:myFunction()',
        b: 'function myFunction()',
        c: 'function = myFunction()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'W3Schools',
          href: 'https://www.w3schools.com/js/js_functions.asp',
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
          text: 'w3Shools',
          href: 'https://www.w3schools.com/js/js_datatypes.asp',
        },
      ],
    },
    {
      text: 'How to write an IF statement in JavaScript?',
      answers: {
        a: 'if(i==5)',
        b: 'if i = 5',
        c: 'if i = 5 then',
        d: 'if i == 5 then',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3Schools',
          href: 'https://www.w3schools.com/js/js_if_else.asp',
        },
      ],
    },
    {
      text: 'How does a WHILE loop start?',
      answers: {
        a: 'while (i <= 10; i++)',
        b: 'while (i <= 10)',
        c: 'while i = 1 to 10',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'w3School',
          href:
            'https://www.w3schools.com/jsref/jsref_while.asp#:~:text=First%2C%20we%20set%20a%20variable,incremented%20by%20one%20(i%2B%2B)',
        },
      ],
    },
    {
      text: 'How can you add a comment in a JavaScript?',
      answers: {
        a: '// this is a comment',
        b: '"this is a comment',
        c: '<!--This is a comment-->',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'w3Schools',
          href:
            'https://www.w3schools.com/js/js_comments.asp#:~:text=Multi%2Dline%20comments%20start%20with,will%20be%20ignored%20by%20JavaScript.',
        },
      ],
    },
    // Add more questions here
  ],
};
