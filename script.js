const $remain = document.getElementById("remain");
const $toggleButton = document.getElementById("toggleButton");
const $resetButton = document.getElementById("resetButton");

const alarm = new Audio('alarm.mp3');

let time = -1;
let setTime = -1;

working = false;

$toggleButton.onclick = function() {
    if(time === -1) {
        setTime = document.getElementById("studySet").value * 60;
        time = setTime;
    }

    if(working){
        clearInterval(move);
        $toggleButton.textContent = "start";
    } else {
        update();
        move = setInterval(update, 1000);
        $toggleButton.textContent = "stop";
    }

    working = working ? false : true;
}

$resetButton.onclick = function() {
    if(working) $toggleButton.textContent = "start";
    working = false;
    time = -1;
    clearInterval(move);
    $remain.textContent = "00:00";
}

function showTime() {

    min = String(Math.floor((time/60)));
    sec = String(Math.floor((time%60)));

    if(min.length === 1) min = '0' + min;
    if(sec.length === 1) sec = '0' + sec;

    $remain.textContent = min + ':' + sec;

    document.getElementById("progress").value = time/setTime;
}

studied = true;

function update() {
    showTime();
    if(time <= 0){
        alarm.play();

        if(studied){
            setTime = document.getElementById("breakSet").value * 60;
            time = setTime;
        } else {
            setTime = document.getElementById("studySet").value * 60;
            time = setTime;
        }

        studied = studied ? false : true;
    }

    time--;
}

function getValues() {
    window.$studySet = document.getElementById("studySet");
    window.$breakSet = document.getElementById("breakSet");
}
