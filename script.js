const $add = document.getElementById("add");
const $task_container = document.getElementById("task_container");
const $task_page = document.getElementById("task_page");
const $timer_page = document.getElementById("timer_page");
const $remain = document.getElementById("remain");
const $toggleButton = document.getElementById("toggleButton");
const $resetButton = document.getElementById("resetButton");
const $confirm = document.getElementById("confirm");
const $tasks_disp = document.getElementById("tasks_disp");

$add.onclick = function() {
    let div = document.createElement("div");
    div.className = "tasks_div";
    $task_container.appendChild(div);

    let form = document.createElement("input");
    form.className = "tasks_form";

    let del = document.createElement("button");
    del.className = "tasks_del";

    div.appendChild(form);
    div.appendChild(del);

    $tasks_del = document.getElementsByClassName("tasks_del");
    del_handler($tasks_del);
}

$confirm.onclick = function() {
    $task_page.classList.add("hidden");
    $timer_page.classList.toggle("hidden");

    for(let i=0; i<$tasks_del.length; i++){
        let div = document.createElement("div");
        div.className = "disp_div";
        $tasks_disp.appendChild(div);

        let task = document.createElement("p");
        task.textContent = document.getElementsByClassName("tasks_form")[i].value;
        task.className = "disp_task";
        div.appendChild(task);

        let fin = document.createElement("button");
        fin.className = "disp_fin";
        div.appendChild(fin);

        $disp_fin = document.getElementsByClassName("disp_fin");
        fin_handler($disp_fin);
    }
}

let time = -1;
let setTime = -1;

working = false;

$toggleButton.onclick = function() {
    let none = new Audio('none.mp3');

    if(none.readyState < 4){
        none.load();
    }

    none.play();

    alarm = new Audio('alarm.mp3');

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
        alarm.load();
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

let k;

const del_handler = (c) => {
    c[c.length-1].addEventListener('click', (e) => {
        k = Array.prototype.indexOf.call(c, e.target);
    
        $div = document.getElementsByClassName("tasks_div");

        $div[k].remove();
    })
}

const fin_handler = (c) => {
    c[c.length-1].addEventListener('click', (e) => {
        k = Array.prototype.indexOf.call(c, e.target);

        $div = document.getElementsByClassName("disp_div");

        $div[k].remove();
    })
}
