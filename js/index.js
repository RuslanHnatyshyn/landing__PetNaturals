let time = 7200;
const timer = document.getElementById("timer");

function updateTimer() {
  if (time <= 0) {
    timer.innerHTML = `0:00:00`;
    clearInterval(timerInterval);

    return;
  }

  const hours = Math.floor(time / 3600) % 24;
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedHours = hours < 10 ? "0" + hours : hours;

  timer.innerHTML = `${formattedHours}:${minutes}:${seconds}`;

  time--;
}

const timerInterval = setInterval(updateTimer, 1000);

document.addEventListener("DOMContentLoaded", () => {
  let inputTel = document.querySelector('input[type="tel"]');

  if (inputTel) {
    const maskOptions = {
      mask: "+{38}(000)000-00-00",
    };

    IMask(inputTel, maskOptions);
  }
});

const data = document.getElementById("orderDate");

if (data) {
  let now = new Date().toLocaleString("ua", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  data.innerHTML = `<p>Order date: ${now}</p>`;
}
