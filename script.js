const $remain = document.getElementById("remain");
const $startButton = document.getElementById("startButton");
const $stopButton = document.getElementById("stopButton");
const $toggleButton = document.getElementById("toggleButton");

const sound = new Audio('end.mp3');

let time = -1;

working = false;

$toggleButton.onclick = function() {
    if(time === -1) time = document.getElementById("studySet").value * 60; 
    sound.play();

    if(working){
        clearInterval(move);
        $toggleButton.textContent = "start";
    } else {
        move = setInterval(update, 1000);
        $toggleButton.textContent = "stop";
    }

    working = working ? false : true;
}

function showTime() {

    min = String(Math.floor((time/60)));
    sec = String(Math.floor((time%60)));

    if(min.length === 1) min = '0' + min;
    if(sec.length === 1) sec = '0' + sec;

    $remain.textContent = min + ':' + sec;
}

studied = true;

function update() {
    time--;
    showTime();

    if(time <= 0){
        sound.play();

        if(studied){
            time = document.getElementById("breakSet").value * 60;
        } else {
            time = document.getElementById("studySet").value * 60;
        }

        studied = studied ? false : true;
    }
}

function getValues() {
    window.$studySet = document.getElementById("studySet");
    window.$breakSet = document.getElementById("breakSet");
}
