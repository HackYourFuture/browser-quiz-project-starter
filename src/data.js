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
  currentQuestionAnswer: null,
  // the questions in the quiz
  questions: [
    {
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
        d: 'var, constant, let',
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
    {
      text: 'How does a FOR loop start?',
      answers: {
        a: 'for(let i=0; i<10; i++)',
        b: 'for(i<10; i++)',
        c: 'while(let i=0; i<10; i++)',
        d: 'for(i=0; i>5; i--)',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'W3 Schools',
          href: 'https://www.w3schools.com/js/js_loop_for.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration?retiredLocale=tr#for_statement',
        },
      ],
    },
    {
      text: 'How do you round the number 7.25, to the nearest integer?',
      answers: {
        a: 'Math(7.25)',
        b: 'Round(7.25)',
        c: 'Math.round(7.25)',
        d: 'Math.Round(7.25)',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/numbers',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round',
        },
      ],
    },
    {
      text: 'Which of the following function of Array object extracts a section of an array and returns a new array?',
      answers: {
        a: 'reverse()',
        b: 'shift()',
        c: 'slice()',
        d: 'some()',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'W3 Schools',
          href: 'https://www.w3schools.com/jsref/jsref_slice_array.asp',
        },
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
        },
      ],
    },
    {
      text: 'How do you find the minimum of x and y using JavaScript?',
      answers: {
        a: ' min(x,y);',
        b: ' Math.min(x,y)', 
        c: 'Math.min(xy)',
        d: ' min(xy);',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min',
        },
        {
          text: 'W3 CUP',
          href: 'https://docs.w3cub.com/javascript/global_objects/math/min',
        },
      ],
    },
    {
      text: 'Which JavaScript label catches all the values, except for the ones specified?',
      answers: {
        a: 'catch',
        b: ' label',
        c: ' try',
        d: ' default',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label',
        },
        {
          text: 'W3 Resource',
          href: 'https://www.w3resource.com/javascript/statements/label.php',
        },
      ],
    },
    {
      text: 'GetMonth() returns the month as:',
      answers: {
        a: 'Int',
        b: 'Float',
        c: 'Char',
        d: 'String',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth',
        },
        {
          text: 'W3',
          href: 'https://www.w3schools.com/jsref/jsref_getmonth.asp',
        },
      ],
    },
    {
      text: 'Which of the dialog box display a message and a data entry field?',
      answers: {
        a: 'Alert()',
        b: 'Prompt()',
        c: 'Confirm()',
        d: 'Msg()',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'JavatPoint',
          href: 'https://www.javatpoint.com/javascript-prompt-dialog-box',
        },
        {
          text: 'Rip Tutorial',
          href: 'https://riptutorial.com/javascript/example/11156/usage-of-prompt--',
        },
      ],
    },
    {
      text: 'What happens in one minute?',
      answers: {
        a: 'Google is sked 2.4 million questions',
        b: '3 million videos watched on Snapchat',
        c: ' A new JavaScript framework appears',
        d: 'All of them',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Google',
          href: 'https://www.productmanagementexercises.com/2425/calculate-the-number-of-queries-answered-google-per-second',
        },
        {
          text: 'Quora',
          href: 'https://www.quora.com/What-is-a-JavaScript-framework',
        },
      ],
    },
  ],
};
