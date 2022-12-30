const $add = document.getElementById("add");
const $confirm = document.getElementById("confirm");
const $tasks_disp = document.getElementById("tasks_disp");
const $task_container = document.getElementById("task_container");
const $task_page = document.getElementById("task_page");
// -----
const $timer_page = document.getElementById("timer_page");
const $remain = document.getElementById("remain");
const $toggleButton = document.getElementById("toggleButton");
const $resetButton = document.getElementById("resetButton");

$add.onclick = function() {
    let div = document.createElement("div");
    div.className = "tasks_div";
    $task_container.appendChild(div);

    let form = document.createElement("input");
    form.className = "tasks_form";
    div.appendChild(form);

    let del = document.createElement("button");
    del.className = "tasks_del";
    del.textContent = "削除"
    div.appendChild(del);

    $tasks_del = document.getElementsByClassName("tasks_del");
    del_handler($tasks_del, "tasks_div");
}

$confirm.onclick = function() {
    for(let i=0; i<$tasks_del.length; i++){
        if(document.getElementsByClassName("tasks_form")[i].value === ""){
            alert("空白のタスクがあります!");
            return;
        }
    }

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
        fin.textContent = "完了"
        div.appendChild(fin);
    
        $disp_fin = document.getElementsByClassName("disp_fin");
        del_handler($disp_fin, "disp_div");

        tasks_count = $tasks_del.length;
    }
}

let remove_count = 0;

const del_handler = (c, f) => {
    c[c.length-1].addEventListener('click', (e) => {
        idx = Array.prototype.indexOf.call(c, e.target);
    
        $div = document.getElementsByClassName(f);

        $div[idx].remove();

        if(c === $disp_fin){
            remove_count++;
            if(remove_count === tasks_count){
                alert("全部終わったよ！よく頑張った^_^")
            }
        }
    })
}

// -----

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
