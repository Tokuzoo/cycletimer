const $remain = document.getElementById("remain");
const $startButton = document.getElementById("startButton");
const $stopButton = document.getElementById("stopButton");
clearInterval(update);

const sound = new Audio('end.mp3');

let time = -1;

$startButton.onclick = function() {
    if(time === -1) time = document.getElementById("studySet").value * 60; 
    sound.play();
    move = setInterval(update, 1000);
}

$stopButton.onclick = function() {
    sound.play();
    clearInterval(move);
}

function showTime() {

    min = String(Math.floor((time/60)));
    sec = String(Math.floor((time%60)));

    if(min.length === 1) min = '0' + min;
    if(sec.length === 1) sec = '0' + sec;

    $remain.textContent = min + ':' + sec;
}

function update() {
    time--;
    showTime();

    if(time === 0){
        clearInterval(move);
        sound.play();
    }
}
