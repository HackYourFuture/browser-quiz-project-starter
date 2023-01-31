export function timerSecond() {
  var seconds = 90;
  var el = document.getElementById('seconds-counter');

  function decreaseSeconds() {
    seconds -= 1;
    el.innerText = seconds;

    if (seconds === 0) {
      clearInterval(intervalId);
    }
  }
  var intervalId = setInterval(decreaseSeconds, 1000);
}

// let time = 60;
// export const timer = setInterval(() => {
//     if (time > 0) {
//       time--;
//       console.log(time);
//     } else {
//       console.log("Time's up!");
//       clearInterval(timer);
//     }
//   }, 1000);
