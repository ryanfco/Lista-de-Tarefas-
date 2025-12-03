
const tasklist = document.getElementById("tasklist");
const taskImput = document.getElementById("task");
const clickButton = document.getElementById("submit");

const listaTasks = [];
clickButton.addEventListener("click",() => {
    listaTasks.push(taskImput.value);
    addTask()
    console.log(listaTasks);
    
});


function addTask() {
   var p = document.createElement("p");
    listaTasks.forEach(element => {
        p.innerHTML = `<p>${element}</p>`;
    });
    console.log(p);
    tasklist.appendChild(p);
}