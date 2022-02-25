let cards = [];
let blackJack = false;
let isAlive = false ;   
let message = "";

//getting elements form HTML
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("card-el");

function startGame() {
    isAlive = true;
    cards.push(getRandomCard());
    cards.push(getRandomCard());
    renderGame();
}

function renderGame() {
    let sum = 0;
    cards.forEach(value => sum += value);
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
        isAlive = false;
    }
    
    messageEl.innerText = message;
}

function newCard() {
    if(isAlive === true && blackJack === false)
    {
        cards.push(getRandomCard());
        renderGame();
    }
}

function getRandomCard() {
    let num =  Math.floor(Math.random() * 13) + 1 ;

    if(num === 1) {
        return 11;
    }
    else if(num >= 11)
    {
        return 10;
    }
    else
    {
        return num;
    }  
}