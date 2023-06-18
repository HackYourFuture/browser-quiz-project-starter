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
      text: 'What is the capital of France?',
      answers: {
        a: 'Paris',
        b: 'Rome',
        c: 'Madrid',
        d: 'London',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'paris.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
    {
      text: 'What is the capital of Australia?',
      answers: {
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Canberra',
        d: 'Perth',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'canberra.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
    {
      text: 'What is the capital of Japan?',
      answers: {
        a: 'Bangkok',
        b: 'Beijing',
        c: 'Seoul',
        d: 'Tokyo',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'tokyo.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
    {
      text: 'What is the capital of Brazil?',
      answers: {
        a: 'Brasília',
        b: 'São Paulo',
        c: 'Rio de Janeiro',
        d: 'Buenos Aires',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'brasília.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
    {
      text: 'What is the capital of Canada?',
      answers: {
        a: 'Toronto',
        b: 'Montreal',
        c: 'Ottawa',
        d: 'Vancouver',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'ottawa.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
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
