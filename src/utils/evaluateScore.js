export const evaluateScore = (score) => {
  let evaluation;
  switch (score) {
    case 0: {
      evaluation = 'Knock! knock! knock! are you there?';
      break;
    }
    case 10: {
      evaluation =
        "Ops! Something is wrong, but don't worry, you'll get there.";
      break;
    }
    case 20: {
      evaluation = 'A little room for improvement, keep going!';
      break;
    }
    case 30: {
      evaluation = "Nice try! You're on the right track.";
      break;
    }
    case 40: {
      evaluation = 'Good effort! Keep pushing for excellence.';
      break;
    }
    case 50: {
      evaluation = "Not bad at all! You're making progress.";
      break;
    }
    case 60: {
      evaluation = "Well done! You're getting the hang of it.";
      break;
    }
    case 70: {
      evaluation = "Impressive! You're really mastering this.";
      break;
    }
    case 80: {
      evaluation = "Fantastic! You're almost there, keep it up!";
      break;
    }
    case 90: {
      evaluation = "Amazing! You're a quiz whiz!";
      break;
    }
    case 100: {
      evaluation = "Wow! You're crushing it! You're a true quiz master!";
      break;
    }
    default:
      break;
  }
  return evaluation;
};
