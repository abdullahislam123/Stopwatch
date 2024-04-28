let timerDisplay = document.querySelector('.counter');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');
let msec = 0;
let sec = 0;
let min = 0;
let timerId = null;

startbtn.addEventListener('click', function() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopbtn.addEventListener('click', function() {
    clearInterval(timerId);
});

resetbtn.addEventListener('click', function() {
    clearInterval(timerId);
    msec = 0;
    sec = 0;
    min = 0;
    timerDisplay.textContent = formatTime(min) + ":" + formatTime(sec) + ":" + formatTime(msec);
});

function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
        }
    }
    timerDisplay.textContent = formatTime(min) + ":" + formatTime(sec) + ":" + formatTime(msec);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
