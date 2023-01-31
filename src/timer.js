export function timerSecond() {
  var seconds = 91;
  var el = document.createElement('div');
  el.className = 'seconds-counter';
  document.body.append(el);

  function decreaseSeconds() {
    seconds -= 1;
    el.innerText = seconds;

    if (seconds === 0) {
      clearInterval(intervalId);
    }
  }
  var intervalId = setInterval(decreaseSeconds, 1000);
}

export function removeElement() {
  var el = document.querySelector('.seconds-counter');
  el.remove();
}
