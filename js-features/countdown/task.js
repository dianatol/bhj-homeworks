const timerElement = document.getElementById("timer");
let secondsRemaining = parseInt(timerElement.textContent);
const countdown = () => {
    if (secondsRemaining > 0) {
        secondsRemaining --;
        timerElement.textContent = secondsRemaining;
    }
};

let timerID = setInterval(countdown, 1000);
setTimeout(() => { clearInterval(timerID); alert ('Вы победили в конкурсе')}, 60000);