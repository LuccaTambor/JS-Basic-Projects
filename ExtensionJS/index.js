const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("list");

let myLeads = [];
const localLeads = JSON.parse(localStorage.getItem("myLeads"));

if(localLeads) {
    myLeads = localLeads;
    renderLeads();
}

inputBtn.addEventListener("click", saveLead);
deleteBtn.addEventListener("dblclick", deleteLeads);

function saveLead() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads();
}

function deleteLeads () {
    localStorage.clear();
    myLeads = [];
    renderLeads();
}

function renderLeads() {
    listEl.innerHTML = " ";
    myLeads.forEach(element => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = element;
        a.innerHTML = element;
        a.target = "_blank";
        li.appendChild(a);
        listEl.appendChild(li);
    })
}
