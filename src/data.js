/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const  quizData = {
  currentQuestionIndex: 0,
  score:0,
  // the questions in the quiz
  questions: [
    {
      img:"https://i.ibb.co/RyR5tpT/img1.jpg",
      answers: {
        a: 'Western',
        b: 'Thriller',
        c: 'Sci-fi',
        d: 'Drama',
      },
      correct: 'd',
      hint:['Washed-out actor and his stunt double try to survive the evolving Hollywood life in 1960ss.']
    },
    {
      img:"https://i.ibb.co/mtL2s1n/img2.jpg",
      answers: {
        a: 'Comdey',
        b: 'Drama',
        c: 'Adventure',
        d: 'Fantasy',
      },
      correct: 'a',
      hint:[ ' Political rivals who are running for the same seat and will stop at nothing to outdo each other during their campaigns.']
    },
    {
      img:"https://i.ibb.co/k2K8VGZ/img3.jpg",
      answers: {
        a: 'Historical',
        b: 'Romance',
        c: 'Comedy',
        d: 'Sci-fi',
      },
      correct: 'c',
      hint:['A CIA analyst works behind the desk owing to her expertise in high-tech equipment. When an agent is compromised, she volunteers to be a spy.']
    },
    {
      img:"https://i.ibb.co/MgKZY0x/img4.jpg",
      answers: {
        a: 'Musical',
        b: 'Romance',
        c: 'Crime',
        d: 'Historical',
      },
      correct: 'd',
      hint:[ 'Two Catholic missionaries travel to Japan in search of their missing mentor, Ferreira, who is believed to have been promoting Catholicism by going against the law.']
    },
    {
      img:"https://i.ibb.co/2g7HnFf/img5.jpg",
      answers: {
        a: 'Thriller',
        b: 'Romance',
        c: 'Crime',
        d: 'Sports',
      },
      correct: 'a',
      hint:['Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.']
    },
    {
      img:"https://i.ibb.co/jW8pPjm/img6.jpg",
      answers: {
        a: 'Comedy',
        b: 'Western',
        c: 'Fantasy',
        d: 'Action',
      },
      correct: 'b',
      hint:['A bounty hunter and his captured fugitive are caught in the middle of a snowstorm. They seek refuge at a small lodge and encounter a twisted turn of events there.']
    },
    {
      img:"https://i.ibb.co/Jr4T2bz/img7.jpg",
      answers: {
        a: 'Mystery',
        b: 'Romance',
        c: 'Crime',
        d: 'Historical',
      },
      correct: 'a',
      hint:['Following three friends who witness a murder, become suspects themselves, and uncover one of the most outrageous plots in American history.']
    },
    {
      img:"https://i.ibb.co/3T5KCpy/img8.jpg",
      answers: {
        a: 'Adventure',
        b: 'Romance',
        c: 'Musical',
        d: 'Horror',
      },
      correct: 'b',
      hint:['Elisa, a lonely janitor, stumbles upon an amphibious creature that is held captive in a secret research facility. She then develops a unique relationship with the creature.']
    },
    {
      img:"https://i.ibb.co/R70z20r/img9.jpg",
      answers: {
        a: 'Action',
        b: 'Crime',
        c: 'Romance',
        d: 'Comedy',
      },
      correct: 'c',
      hint:['Elisa, a lonely janitor, stumbles upon an amphibious creature that is held captive in a secret research facility. She then develops a unique relationship with the creature.']
    },
    {
      img:"https://i.ibb.co/tQrCNFv/img10.jpg",
      answers: {
        a: 'Action',
        b: 'Adventure',
        c: 'Comedy',
        d: 'Musical',
      },
      correct: 'd',
      hint:['Washed-out actor and his stunt double try to survive the evolving Hollywood life in 1960ss.']
    },
  ],
};
