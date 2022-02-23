let cards = [3, 11];
let blackJack = false;
let hasLost = false;   
let message = "";

//getting elements form HTML
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

function startGame() {
    renderGame();
}

function renderGame() {
    let sum = 0;
    cards.forEach(value => sum+=value);
    cardsEl.textContent = "cards: " + cards.join(" ");
    sumEl.textContent = "sum : " + sum;
    if(sum <= 20) {
        message = "Do you want to draw another card?";
    }
    else if(sum === 21) {
        message = "BLACK JACK! YOU WON!";
        blackJack = true;
    }
    else {
        message = "You Lost!";
        hasLost = true;
    }
    
    messageEl.innerText = message;
}

function newCard() {

}