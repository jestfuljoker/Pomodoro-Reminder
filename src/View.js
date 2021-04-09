const View = {
  render({ minutes, seconds }) {
    const text = document.getElementById("text")
    const timer = document.getElementById("timer")
    
    text.innerHTML = `<p>Next Pomodoro</p>`;
    timer.innerHTML = `<span>${minutes}:${seconds}</span>`
  }
}

export { View };