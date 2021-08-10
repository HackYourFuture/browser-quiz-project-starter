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
  questionItem: 0,
  score: 0,
  timer: 0.1,

  // the questions in the quiz
  questions: [
    {
      text: 'During the JS module how many times did Eyad call the police 😆?',
      answers: {
        a: '3',
        b: '10',
        c: '15',
      },
      correct: 'a',
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
    {
      text:
        'which of the following allows you to call a function based on an elapsed time?',
      answers: {
        a: 'setElapsedTime ()',
        b: 'Timeout()',
        c: 'setTimeout()',
        d: 'setTime()',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime ',
        },
        {
          text: 'tutorials point',
          href: 'https://www.tutorialspoint.com/javascript/date_settime.htm',
        },
      ],
    },
    {
      text:
        'You Work on a JavaScript project. How do you prompt users with messages and at the same time requesting user inputs?',
      answers: {
        a: 'alert()',
        b: 'display()',
        c: 'prompt()',
        d: 'confirm()',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'W3School',
          href: 'https://www.w3schools.com/jsref/met_win_prompt.asp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt',
        },
      ],
    },
    {
      text: 'Which of the following is the correct syntax of FOR?',
      answers: {
        a: 'for (increment; initialize; test)',
        b: 'for (initialize; test), increment',
        c: 'for (initialize; test; increment )',
        d: 'for (test; initialize; increment)',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'W3School',
          href: 'https://www.w3schools.com/js/js_loop_for.aspp',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for',
        },
      ],
    },
    {
      text:
        'You work on a JavaScript project. Which of the following correctly describe the relationships of JavaScript and “objects”?',
      answers: {
        a: 'JavaScript is Object-oriented',
        b: 'JavaScript is Object-based',
        c: 'JavaScript is Object-driven',
        d: 'JavaScript has no relationship with objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model',
        },
        {
          text: 'Wikibooks',
          href:
            'https://en.wikibooks.org/wiki/JavaScript/Object-based_programming',
        },
      ],
    },
    {
      text:
        'In your JavaScript code, how do you find out which characters occurs at the 5th position in a string “How are You “?',
      answers: {
        a: 'Substring()',
        b: 'String()',
        c: 'StringLength()',
        d: 'CharAt()',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt',
        },
        {
          text: 'meduim.com',
          href:
            'https://medium.com/nerd-for-tech/basics-of-javascript-string-charat-method-51c2f92740fb',
        },
      ],
    },
    {
      text: `Do you know what will be the output of this code?
      let array = [1, 2, 3];
      array[6] = 9;
      console.log(array[5])`,
      answers: {
        a: '1',
        b: '2',
        c: '9',
        d: 'undefined',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays',
        },
        {
          text: 'W3School',
          href: 'https://www.w3schools.com/js/js_arrays.asp',
        },
      ],
    },
    {
      text: 'The JavaScript statement a = new Array(2,4)',
      answers: {
        a: 'defines a new two-dimensional array a whose dimensions are 2 and 4',
        b: 'defines an array a and assigns the values 2 and 4 to a[1] and a[2]',
        c: 'defines an array a and assigns the values 2 and 4 to a[0] and a[1]',
        d:
          'defines a three-element array whose elements have indexes 2 through 4',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array',
        },
        {
          text: 'javaScript.info',
          href: 'https://javascript.info/array',
        },
      ],
    },
  ],
};
const extraQuizData = {
  questions: [
    {
      text: `Consider the following sequence of JavaScript statements:
      let a = new Array();
      a[0]= 12; a[1]= false; a[2]= 'test'; a[3]= a;
      Which line in this code will cause an error?`,
      answers: {
        a: 'Line 3',
        b: 'Line 4',
        c: 'Line 5',
        d: 'This code will execute without errors',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'codinggame',
          href:
            'https://www.codingame.com/playgrounds/6181/javascript-arrays---tips-tricks-and-examples',
        },
      ],
    },
    {
      text: `After executing the JavaScript statement a= (new Array(10)).toString();
      What is the value of a?`,
      answers: {
        a: 'string “10”',
        b: 'array of 10 empty strings',
        c: 'string “,,,,,,,,,”',
        d: 'This statement will cause an error',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'coderwall',
          href:
            'https://coderwall.com/p/h4xm0w/why-never-use-new-array-in-javascript',
        },
      ],
    },
    {
      text: `Do you know what will be the output of this code? console.log(1 +  "2" + "2");`,
      answers: {
        a: '122',
        b: '32',
        c: 'NaN',
        d: 'NaN2',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'stackOverflow',
          href:
            'https://stackoverflow.com/questions/25056330/why-is-1-1-11-but-11-1',
        },
      ],
    },
    {
      text: `The opposite to onmouseover is:`,
      answers: {
        a: 'onmouseoff',
        b: 'onmouseout',
        c: 'onmouseunder',
        d: 'onnotmouseover',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javsScript.info',
          href:
            'https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave',
        },
        {
          text: 'W3School',
          href: 'https://www.w3schools.com/jsref/event_onmouseout.asp',
        },
      ],
    },
    {
      text: `Which of the following is not a mouse event?`,
      answers: {
        a: 'onmousescroller',
        b: 'onclick',
        c: 'onmouseover',
        d: 'onmousemove',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent',
        },
        {
          text: 'W3School',
          href: 'https://www.w3schools.com/jsref/obj_mouseevent.asp',
        },
      ],
    },
    {
      text: `A property is the object oriented equivalent of:`,
      answers: {
        a: 'a function',
        b: 'an if statement',
        c: 'a variable',
        d: 'a reversed word',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS',
        },
      ],
    },
    {
      text: `Which of the following is not a property of the window object?`,
      answers: {
        a: 'document',
        b: 'menu',
        c: 'navigator',
        d: 'history',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Window',
        },
      ],
    },
    {
      text: `What is the result of NaN === NaN;? `,
      answers: {
        a: 'true',
        b: 'false',
        c: 'typerror',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN',
        },
      ],
    },
    {
      text: `Alert helps find errors by …`,
      answers: {
        a: 'displaying current values of variables',
        b: 'indicating execution path',
        c: 'pausing execution',
        d: 'all of the above',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'MDN',
          href: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/alert',
        },
      ],
    },
    {
      text: `How would you change the date to one week later?`,
      answers: {
        a: 'myDate.chgDate(7)',
        b: 'myDate.setDate(myDate.getDate()+7)',
        c: 'myDate.setDate(+7)',
        d: 'myDate.chgDate(myDate.grtDate()+7)',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date',
        },
      ],
    },
    {
      text: `How can you reference part of a string?`,
      answers: {
        a: 'txt.substr(5,6)',
        b: 'text.part(5,6)',
        c: 'text.piece(5,6)',
        d: 'text.split(5,6)',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr',
        },
      ],
    },
    {
      text: `Which of the following type of variable takes precedence over other if names are same?`,
      answers: {
        a: 'global variable',
        b: 'local variable',
        c: 'Both of the above',
        d: 'None of the above',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'digitalocean',
          href:
            'https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript',
        },
      ],
    },
  ],
};
