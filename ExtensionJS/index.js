const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("list");

let myLeads = [];

const localLeads = JSON.parse(localStorage.getItem("myLeads"));

if(localLeads) {
    myLeads = localLeads;
    render(myLeads);
}

inputBtn.addEventListener("click", saveLead);
deleteBtn.addEventListener("click", deleteLeads);
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

function saveLead() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
}

function deleteLeads () {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
}

function render(leads) {
    listEl.innerHTML = " ";
    leads.forEach(element => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = element;
        a.innerHTML = element;
        a.target = "_blank";
        li.appendChild(a);
        listEl.appendChild(li);
    })
}
