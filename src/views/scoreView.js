





export const createScoreElement = (currentScore,topScore)=>{
    const element = document.createElement('div');
    element.innerHTML = `${currentScore} Out of  ${topScore} Correct`;
    return element
  }