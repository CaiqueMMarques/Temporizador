let time = null;
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const millisecondEl = document.getElementById("millisecond");

function start() {
    stop();
    time = setInterval(timer, 10);
}

function stop() {
    clearInterval(time);
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0; 

    hourEl.innerText = "00";
    minuteEl.innerText = "00";
    secondEl.innerText = "00";
    millisecondEl.innerText = "000";
}

function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
        hourEl.innerText = returnData(hour);
        minuteEl.innerText = returnData(minute);
        secondEl.innerText = returnData(second);
        millisecondEl.innerText = returnData(millisecond);
}
function returnData(n) {
    if (n >= 10) {
        return n;
    } else {
        return "0" + n;
    }
}