let count = 0;
let entriesEl = document.getElementById("entries");
let countEl = document.getElementById("count-el");

//functions
function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    console.log(count);
    entriesEl.textContent += count + " - ";
    restart();
}

function restart()
{
    count = 0;
    countEl.innerText = count;
}