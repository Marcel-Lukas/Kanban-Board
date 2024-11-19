let tasks = [];
let progress = [];
let completed = [];


function init() {
  getFromLocalStorage();
  renderOpenTasks();
  renderInProgess();
  renderDone();
  theTime();
}


function theTime() {
  updateDateTime();
  setInterval(updateDateTime, 1000);
};


function getFromLocalStorage() {
  let storedObenTasks = JSON.parse(localStorage.getItem("TasksStorage"));
  let storedInProgess = JSON.parse(localStorage.getItem("ProgessStorage"));
  let storedDoneTask = JSON.parse(localStorage.getItem("DoneTaskStorage"));

  if (storedObenTasks !== null) {
    tasks = storedObenTasks;
  }
  if (storedInProgess !== null) {
    progress = storedInProgess;
  }
  if (storedDoneTask !== null) {
    completed = storedDoneTask;
  }
}



function renderOpenTasks() {
  let taskContent = document.getElementById('open-task');
  taskContent.innerHTML = "";

  for (let indexTasks = 0; indexTasks < tasks.length; indexTasks++) {
    taskContent.innerHTML += TaskTemplate(indexTasks);
  }
}



function renderInProgess() {
  let progesscontent = document.getElementById('in-progess');
  progesscontent.innerHTML = "";

  for (let indexProgess = 0; indexProgess < progress.length; indexProgess++) {
    progesscontent.innerHTML += InProgessTemplate(indexProgess);
  }
}



function renderDone() {
  let donecontent = document.getElementById('done');
  donecontent.innerHTML = "";

  for (let indexDone = 0; indexDone < completed.length; indexDone++) {
    donecontent.innerHTML += DoneTemplate(indexDone);
  }
}



function addNewTask() {
  let taskInput = document.getElementById('text-input');

  if (taskInput.value !== "") {
    tasks.push(taskInput.value);
  }

  saveToLocalStorage();
  renderOpenTasks();

  taskInput.value = "";
}


function saveToLocalStorage() {
  localStorage.setItem("TasksStorage", JSON.stringify(tasks));
  localStorage.setItem("ProgessStorage", JSON.stringify(progress));
  localStorage.setItem("DoneTaskStorage", JSON.stringify(completed));
}


function moveToInProgress(indexTasks) {
  let MoveToProgress = tasks.splice(indexTasks, 1)[0];
  progress.push(MoveToProgress);
  saveToLocalStorage();
  renderOpenTasks();
  renderInProgess();
}


function moveToDone(indexProgess) {
  let moveToDone = progress.splice(indexProgess, 1)[0];
  completed.push(moveToDone);
  saveToLocalStorage();
  renderInProgess();
  renderDone();
}


function deleteDoneTasks(indexDone) {
  completed.splice(indexDone, 1);
  saveToLocalStorage();
  renderDone();
}

function deleteTasks(indexTasks) {
  tasks.splice(indexTasks, 1);
  saveToLocalStorage();
  renderOpenTasks();
}
