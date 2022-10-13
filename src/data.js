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
  finalScore: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'Which is the smallest planet within our solar system?',
      answers: {
        a: 'Earth',
        b: 'Mars',
        c: 'Mercury',
        d: 'Saturn'
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'icebreakerideas.com',
          href: 'https://icebreakerideas.com/space-trivia/',
        }
      ],
    },
    {
      text: "Which is the brightest planet in the night's sky?",
      answers: {
        a: 'Earth',
        b: 'Venus',
        c: 'Uranus',
        d: 'Neptune',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'icebreakerideas.com',
          href: 'https://icebreakerideas.com/space-trivia/',
        }
      ],
    },

    {
      text: 'Which planet has the most volcanoes?',
      answers: {
        a: 'Earth',
        b: 'Venus',
        c: 'Saturn',
        d: 'Neptune',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'icebreakerideas.com',
          href: 'https://icebreakerideas.com/space-trivia/',
        }
      ],
    },
    {
      text: 'When was Pluto removed from the list of planets?',
      answers: {
        a: '2000',
        b: '2006',
        c: '2008',
        d: '2010',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },

      ],
    },
    {
      text: 'The atmosphere in Mars is mostly composed of:  ... ?',
      answers: {
        a: 'Oxygen',
        b: 'Helium',
        c: 'Nitrogen',
        d: 'Carbon dioxide',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        }
      ]
    },
    {
      text: 'Approximately how many miles (or kilometres) are there in a light-year?',
      answers: {
        a: '5.9 million (9.5 million km)',
        b: '590,000 (950,000 km)',
        c: '5.9 billion (9.5 billion km)',
        d: '5.9 trillion (9.5 trillion km)',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://www.britannica.com/quiz/astronomy-and-space-quiz',
        }
      ],
    },
    {
      text: 'What is the name of the first space tourist?',
      answers: {
        a: 'Mark Shuttleworth',
        b: 'Richard Garriott',
        c: 'Dennis Tito',
        d: 'Greg Olsen',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
      ],
    },
    {
      text: 'Which is the oldest planet in our solar system',
      answers: {
        a: 'Earth',
        b: 'Jupiter',
        c: 'Mercury',
        d: 'Saturn'
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'icebreakerideas.com',
          href: 'https://icebreakerideas.com/space-trivia/',
        },
      ]
    },

    {
      text: 'Who was the first man in space?',
      answers: {
        a: 'Neil Armstrong',
        b: 'Elon Musk',
        c: 'Yuri Gargarin',
        d: 'Buzz Aldrin'
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'icebreakerideas.com',
          href: 'https://icebreakerideas.com/space-trivia/',
        }

        // Add more questions here
      ],
    },
    {
      text: 'Who was the first to suggest the idea of an artificial satellite?',
      answers: {
        a: 'Johannes Kepler',
        b: 'Galileo Galilei',
        c: 'Leonardo da Vinci',
        d: 'Sir Isaac Newton'
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'icebreakerideas.com',
          href: 'https://icebreakerideas.com/space-trivia/',
        }
      ]
    }
  ]
};
