export function timerSecond() {
  let seconds = 91;
  let el = document.createElement('div');
  el.className = 'seconds-counter';
  document.body.append(el);

  function decreaseSeconds() {
    seconds -= 1;
    el.innerText = seconds;

    if (seconds === 0) {
      clearInterval(intervalId);
    }
  }
  let intervalId = setInterval(decreaseSeconds, 1000);
}

export function removeElement() {
  let el = document.querySelector('.seconds-counter');
  el.remove();
}
