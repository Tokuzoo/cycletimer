const $remain = document.getElementById("remain");
const $toggleButton = document.getElementById("toggleButton");
const $resetButton = document.getElementById("resetButton");

const click = new Audio('click.mp3');
const alarm = new Audio('alarm.mp3');

let time = -1;

working = false;

$toggleButton.onclick = function() {
    if(time === -1) time = document.getElementById("studySet").value * 60; 
    click.play();

    if(working){
        clearInterval(move);
        $toggleButton.textContent = "start";
    } else {
        move = setInterval(update, 1000);
        $toggleButton.textContent = "stop";
    }

    working = working ? false : true;
}

$resetButton.onclick = function() {
    working = false;
    click.play();
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
}

studied = true;

function update() {
    time--;
    showTime();

    if(time <= 0){
        alarm.play();

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
