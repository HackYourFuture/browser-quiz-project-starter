/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

// export const quizData = {
//   currentQuestionIndex: 0,
//   // the questions in the quiz
//   questions: [
//     {
//       text: 'What are the different ways to declare a JS variable?',
//       answers: {
//         a: 'constant, let, variable',
//         b: 'var, const, let, function',
//         c: 'var, let, const',
//       },
//       correct: 'c',
//       selected: null,
//       links: [
//         {
//           text: 'javascript.info',
//           href: 'https://javascript.info/variables',
//         },
//         {
//           text: 'Tyler McGinnis',
//           href: 'https://ui.dev/var-let-const/',
//         },
//       ],
//     },
//     {
//       text: 'What does `typeof` do?',
//       answers: {
//         a: 'changes the type of a primitive value',
//         b: 'returns a string describing the type of a value',
//         c: 'determines if a value is primitive',
//         d: 'can tell the difference between arrays and objects',
//       },
//       correct: 'b',
//       selected: null,
//       links: [
//         {
//           text: 'javascript.info',
//           href: 'https://javascript.info/types#type-typeof',
//         },
//         {
//           text: 'MDN',
//           href:
//             'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
//         },
//       ],
//     },
//     // Add more questions here
//   ],
// };

// MY JS CODE STARTS FROM HERE ---------------------------------------------------

// fill data and change format for all elements
export const quizData = {
  currentQuestionIndex: 0,
  questions: [
    {
      text:
        'What was the name of the first man-made satellite launched by the Soviet Union in 1957?',
      answers: {
        a: 'Sputnik 1',
        b: 'Soyuz',
        c: 'Mir',
        d: 'Stalin',
      },
      correct: 'a',
    },
    {
      text: 'What modern-day country was Marie Curie born in?',
      answers: {
        a: 'France',
        b: 'Canada',
        c: 'Poland',
        d: 'Italy',
      },
      correct: 'c',
    },
    {
      text: 'At what temperature are Celsius and Fahrenheit equal?',
      answers: {
        a: '-5',
        b: '-40',
        c: '451',
        d: '88',
      },
      correct: 'c',
    },
    {
      text: 'Io is a moon of which planet?',
      answers: {
        a: 'Jupiter',
        b: 'Saturn',
        c: 'Neptune',
        d: 'Mars',
      },
      correct: 'a',
    },
    {
      text: 'In which year did the Apollo 13 space mission take place?',
      answers: {
        a: '1973',
        b: '1980',
        c: '1966',
        d: '1970',
      },
      correct: 'd',
    },
    {
      text: 'What metal is the best conductor of electricity?',
      answers: {
        a: 'Zn',
        b: 'Fe',
        c: 'Cu',
        d: 'Ag',
      },
      correct: 'd',
    },
    {
      text: 'Which planet is the smallest in the Solar System?',
      answers: {
        a: 'Earth',
        b: 'Mercury',
        c: 'Mars',
        d: 'Venus',
      },
      correct: 'b',
    },
    {
      text:
        'What is the name of the black hole at the Galactic Center of Milky Way? ',
      answers: {
        a: 'Libra A*',
        b: 'Sagittarius A*',
        c: 'Gemini A*',
        d: 'Aquarius A*',
      },
      correct: 'b',
    },
    {
      text: 'The closest star to the Sun (of a Solar system) is:',
      answers: {
        a: 'Proxima Centauri',
        b: 'Sirius',
        c: 'Arcturus',
        d: 'Canopus',
      },
      correct: 'a',
    },
    {
      text: 'Which famous British physicist wrote A Brief History of Time?',
      answers: {
        a: 'Ellen Ochoa',
        b: 'Carl Sagan',
        c: 'Neil Tyson',
        d: 'Stephen Hawking',
      },
      correct: 'd',
    },
  ],
};
