messageEl = document.getElementById('message-el')
cardsEl = document.getElementById('cards-el')
sumEl = document.getElementById('sum-el')
let firstCards = getRandomCard()
let secondCards = getRandomCard()
let cards = [firstCards , secondCards]
let sum = firstCards + secondCards
let message = ""

function getRandomCard(){
    let randomNumer = Math.floor(Math.random()*13) + 1
    if (randomNumer > 10){
        return 10
    }   else if (randomNumer === 1 ){
        return 11
    } else {
        return randomNumer
    }
}

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum   
    if (sum <= 20){
        message = "Do you wish to draw a new Card?"
    } else if (sum === 21){
        message = "You got a BlackJack"
    } else{
        message = "You are out of the game"
    }
    messageEl.textContent = message
}

function newCard(){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()

}

