let timer;
let timeLeft = 0;
let isRunning = false;

const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

// Update Display Function
function updateDisplay(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    display.textContent = `${String(min)}:${String(sec)}`;
}

// Start Timer
startBtn.addEventListener("click", () => {
    if (isRunning) return;
    
    let min = parseInt(minutesInput.value) || 0;
    let sec = parseInt(secondsInput.value) || 0;
    timeLeft = min * 60 + sec;

    if (timeLeft <= 0) {
        alert("Enter a valid time!");
        return;
    }

    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay(timeLeft);
        } else {
            clearInterval(timer);
            alert("Time's up!");
            isRunning = false;
        }
    }, 1000);
});

// Pause Timer
pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

// Reset Timer
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 0;
    updateDisplay(0);
    minutesInput.value = "";
    secondsInput.value = "";
});

// Initialize Display
updateDisplay(0);
    