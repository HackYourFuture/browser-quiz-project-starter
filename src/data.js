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
      text: 'What is the capital city of France?',
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
      text: 'What is the capital city of Australia?',
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
      text: 'What is the capital city of Japan?',
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
      text: 'What is the capital city of Brazil?',
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
      text: 'What is the capital city of Canada?',
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
      text: 'What is the capital city of Indonesia?',
      answers: {
        a: 'Jakarta',
        b: 'Surabaya',
        c: 'Bandung',
        d: 'Bangkok',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'jakarta.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
    {
      text: 'What is the capital city of Nepal?',
      answers: {
        a: 'Taipei',
        b: 'Karachi',
        c: 'Kathmandu',
        d: 'Dhaka',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'kathmandu.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
    {
      text: 'What is the capital city of Russia?',
      answers: {
        a: 'St. Petersburg',
        b: 'Minsk',
        c: 'Vilnius',
        d: 'Moscow',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'moscow.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
    {
      text: 'What is the capital city of Mexico?',
      answers: {
        a: 'Guadalajara',
        b: 'Monterrey',
        c: 'Mexico City',
        d: 'Cancun',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'mexico_city.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
    {
      text: 'What is the capital city of Morocco?',
      answers: {
        a: 'Marrakesh',
        b: 'Rabat',
        c: 'Casablanca',
        d: 'Tangier',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'rabat.wikipedia',
          href: 'https://www.worlddata.info/capital-cities.php',
        },
        
      ],
    },
  ]
};