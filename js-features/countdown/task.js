const timerElement = document.getElementById("timer");
let secondsRemaining = parseInt(timerElement.textContent);
const countdown = () => {
    if (secondsRemaining > 0) {
        secondsRemaining --;
        timerElement.textContent = secondsRemaining;
    } else {
        alert("Вы победили в конкурсе")
    }
};

setInterval(countdown, 1000);