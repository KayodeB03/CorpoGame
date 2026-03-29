document.addEventListener("DOMContentLoaded", () => {

  let time = 60;
  let timerInterval = null;

  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");

  function updateDisplay() {
    timerDisplay.textContent = time;
  }

  function startTimer() {
    if (timerInterval) return;

    timerInterval = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        alert("Time's up!");
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 60;
    updateDisplay();
  }

  startBtn.addEventListener("click", startTimer);
  pauseBtn.addEventListener("click", pauseTimer);
  resetBtn.addEventListener("click", resetTimer);

  updateDisplay();
});