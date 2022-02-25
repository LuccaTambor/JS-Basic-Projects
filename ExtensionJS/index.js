const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("list");

let myLeads = [];

inputBtn.addEventListener("click", saveLead);

function saveLead() {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
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
