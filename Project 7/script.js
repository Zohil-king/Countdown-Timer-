const startBtn = document.getElementById("startBtn");
const datetimeInput = document.getElementById("datetime");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

let countdownInterval;

startBtn.addEventListener("click", () => {
  const selectedTime = new Date(datetimeInput.value).getTime();
  const now = new Date().getTime();

  if (!datetimeInput.value || selectedTime <= now) {
    alert("Please select a valid future date and time!");
    return;
  }

  // Clear any previous interval
  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = selectedTime - now;

    if (distance <= 0) {
      clearInterval(countdownInterval);
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      alert("⏰ Countdown finished!");
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }, 1000);
});

const themeSwitcher = document.getElementById("themeSwitcher");
const resetBtn = document.getElementById("resetBtn");

// Toggle dark mode
themeSwitcher.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeSwitcher.checked);
});

// Reset countdown
resetBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
  datetimeInput.value = "";
  daysEl.textContent = "00";
  hoursEl.textContent = "00";
  minutesEl.textContent = "00";
  secondsEl.textContent = "00";
});
