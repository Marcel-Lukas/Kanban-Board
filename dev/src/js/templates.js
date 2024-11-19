
function TaskTemplate(indexTasks) {
  return `<li>${tasks[indexTasks]}</li>
  <button class="btn todo" 
  onclick="moveToInProgress(${indexTasks})">In Arbeit verschieben</button>
  <button class="xbtn" 
  onclick="deleteTasks(${indexTasks})">X</button>`;
}


function InProgessTemplate(indexProgess) {
  return `<li>${progress[indexProgess]}</li>
  <button class="btn in-work" 
  onclick="moveToDone(${indexProgess})">In Erledigt verschieben</button>`;
}


function DoneTemplate(indexDone) {
  return `<li id=done-line-through>${completed[indexDone]}</li> 
  <button class="btn done" 
  onclick="deleteDoneTasks(${indexDone})">Löschen</button>`;
}