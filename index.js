let chooseCard1 = document.getElementById('box-card-1')
let chooseCard2 = document.getElementById('box-card-2')
let chooseCard3 = document.getElementById('box-card-3')
let chooseCard4 = document.getElementById('box-card-4')
let chooseCard5 = document.getElementById('box-card-5')
let chooseCard6 = document.getElementById('box-card-6')
let chooseCard7 = document.getElementById('box-card-7')
let chooseCard8 = document.getElementById('box-card-8')
let chooseCard9 = document.getElementById('box-card-9')
let chooseCard10 = document.getElementById('box-card-10')
let chooseCard11 = document.getElementById('box-card-11')
let chooseCard12 = document.getElementById('box-card-12')
let chooseCard13 = document.getElementById('box-card-13')
let revealCard = document.getElementById('card-one')
cards = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸"]
let randomEmojiChamp = [memoryCard1, "memoryCard2", "memoryCard3", "memoryCard4", "memoryCard5", "memoryCard6", "memoryCard7", "memoryCard8", "memoryCard9", "memoryCard10", "memoryCard11", "memoryCard12", "memoryCard13" ]

    if (function card1(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard1.textContent = cards[randomEmoji]
    }) {
        chooseCard1.textContent = cards[randomEmoji]
    } else if  (function card2(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard2.textContent = cards[randomEmoji]
        memoryCard2= cards[randomEmoji] 
    }){
        return cards[randomEmoji]
    } else if (
    function card3(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard3.textContent = cards[randomEmoji]
        memoryCard3 = cards[randomEmoji] 
    }) {
        return cards[randomEmoji] 
    } else if (
    function card4(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard4.textContent = cards[randomEmoji]
        memoryCard4 = cards[randomEmoji] 
    }) {
        return cards[randomEmoji] 
    } else if (
    function card5(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard5.textContent = cards[randomEmoji]
        memoryCard5 = cards[randomEmoji] 
    }) {
        return cards[randomEmoji] 
    } else if (
    function card6(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard6.textContent = cards[randomEmoji]
        memoryCard6 = cards[randomEmoji] 
    }) {
        return cards[randomEmoji] 
    } else if (
    function card7(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard7.textContent = cards[randomEmoji]
        memoryCard7 = cards[randomEmoji] 
    }) {
        return cards[randomEmoji] 
    } else if (
    function card8(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard8.textContent = cards[randomEmoji]
        memoryCard8 = cards[randomEmoji] 
    }) {
        return cards[randomEmoji] 
    } else if (
    function card9(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard9.textContent = cards[randomEmoji]
        memoryCard9 = cards[randomEmoji] 
    }) {
        return cards[randomEmoji] 
    } else if (
    function card10(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard10.textContent = cards[randomEmoji]
        memoryCard10 = cards[randomEmoji]
    }) {
        return cards[randomEmoji] 
    } else if (
    function card11(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard11.textContent = cards[randomEmoji]
        memoryCard11 = cards[randomEmoji]
    }) {
        return cards[randomEmoji]
    } else if (
    function card12(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard12.textContent = cards[randomEmoji]
        memoryCard12 = cards[randomEmoji]
    }) {
        return cards[randomEmoji] 
    } else if (
    function card13(){
        randomEmoji = Math.floor(Math.random() * 13) + 1
        chooseCard13.textContent = cards[randomEmoji]
        memoryCard13 = cards[randomEmoji]
    }) {
        return cards[randomEmoji] 
    } else {
        return "N/A"
    }
    
    function cardOne() {
        randomEmoji = Math.floor(Math.random() * 13) + 1
        revealCard.textContent = card1()
    }

