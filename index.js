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

let chooseCard21 = document.getElementById('box-card-21')
let chooseCard22 = document.getElementById('box-card-22')
let chooseCard23 = document.getElementById('box-card-23')
let chooseCard24 = document.getElementById('box-card-24')
let chooseCard25 = document.getElementById('box-card-25')
let chooseCard26 = document.getElementById('box-card-26')
let chooseCard27 = document.getElementById('box-card-27')
let chooseCard28 = document.getElementById('box-card-28')
let chooseCard29 = document.getElementById('box-card-29')
let chooseCard210 = document.getElementById('box-card-210')
let chooseCard211 = document.getElementById('box-card-211')
let chooseCard212 = document.getElementById('box-card-212')
let chooseCard213 = document.getElementById('box-card-213')

leftFirstBox1 = document.querySelector('#left-second1');
leftFirstBox2 = document.querySelector('#left-third1');
rightFirstBox1 = document.querySelector('#right-second1');
rightFirstBox2 = document.querySelector('#right-third1');
leftSecondBox1 = document.querySelector('#left-second2');
leftSecondBox2 = document.querySelector('#left-third2');
rightSecondBox1 = document.querySelector('#right-second2');
rightSecondBox2 = document.querySelector('#right-third2');
let revealCard = document.querySelector('#card-one')


const x = document.getElementById('container');
const y = document.querySelector('.containerTwo');
const z = document.querySelector('.containerThree');

var firstCardOne = document.getElementById("firstCardOne")
function randomEmoji() {
    random = Math.floor(Math.random() *5);
    return random
}


function startTheGame(){
     /* firstCardOne.textContent = cards[randomEmoji()] */
     x.style.display = "none";
     y.style.display = "flex";
}
function backHomeOne() {
    y.style.display = "none";
    document.querySelector('.startTheGame').style.display = 'none';
    document.querySelector('.restartTheGame').style.display = 'none';
    document.querySelector('.plusCard1').style.display = 'none';
    document.querySelector('.plusCard2').style.display = 'none';
    document.querySelector('.player1').style.display = 'none';
    document.querySelector('.player2').style.display = 'none';
    document.querySelector('.containerThree').style.display = 'flex';
}
function backHomeTwo() {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = 'none';
    document.querySelector('.startTheGame').style.display = 'none';
    document.querySelector('.restartTheGame').style.display = 'none';
    document.querySelector('.plusCard1').style.display = 'none';
    document.querySelector('.plusCard2').style.display = 'none';
    document.querySelector('.player1').style.display = 'none';
    document.querySelector('.player2').style.display = 'none';
    document.querySelector('#left-second1').style.display = 'none';
    document.querySelector('#left-third1').style.display = 'none';
    document.querySelector('#right-second1').style.display = 'none';
    document.querySelector('#right-third1').style.display = 'none';
    document.querySelector('#left-second2').style.display = 'none';
    document.querySelector('#left-third2').style.display = 'none';
    document.querySelector('#right-second2').style.display = 'none';
    document.querySelector('#right-third2').style.display = 'none';
}

randomCards = document.querySelectorAll('.box111');
randomCards.forEach(function(box){
    box.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        let cards1 =["🦇", "🐥", "🐊","💩", "🦍"];
        let cards2 =["🐢", "🐩", "🦭", "🦀", "🐝"];
        let cards3 =["🤖", "🐘", "🐸", "🕷","🐆"];
        let cards4 = ["🦕", "🦁", "💰", "💯", "📢"];
        let cards5 = ["📹", "🔄", "🔅", "🔎", "🔌"];
        let cards6 = ["🔑", "🔒", "🔓", "🔟", "🔪"];
        let cards7 = ['🔫', "🔱", "🔴", "🕌", "🕔"];
        let cards8 = ['🕸', "🗣", "🗼", "😈", "😓"];
        let cards9 = ["😕", "😡", "😭", "🙃", "🚩"];
        let cards10 = ["🚮", "🚽", "🛸", "🤑", "🤡"];
        let cards11 = ["🤢", "🤧", "🤬", "🤧", "🤮"];
        let cards12 = ["🤶", "🥒", "🥝", "🥣", "🦉"];
        let cards13 = ["🦊", "🦋", "🦌", "🦐", "🦔"];

        if(styles.contains('box1')){
            cardOne1 =  cards1[randomEmoji()];
            chooseCard1.textContent = cardOne1;
            return cardOne1;
        } else if (styles.contains('box2')){
            cardOne2 =  cards2[randomEmoji()];
            chooseCard2.textContent = cardOne2;
            return cardOne2;
        } else if (styles.contains('box3')){
            cardOne3 =  cards3[randomEmoji()];
            chooseCard3.textContent = cardOne3;
            return cardOne3;
        } else if (styles.contains('box4')){
            cardOne4 =  cards4[randomEmoji()];
            chooseCard4.textContent = cardOne4;
            return cardOne4;
        } else if (styles.contains('box5')){
            cardOne5 =  cards5[randomEmoji()];
            chooseCard5.textContent = cardOne5;
            return cardOne5;
        } else if (styles.contains('box6')){
            cardOne6 =  cards6[randomEmoji()];
            chooseCard6.textContent = cardOne6;
            return cardOne6;
        } else if (styles.contains('box7')){
            cardOne7 =  cards7[randomEmoji()];
            chooseCard7.textContent = cardOne7;
            return cardOne7;
        } else if (styles.contains('box8')){
            cardOne8 =  cards8[randomEmoji()];
            chooseCard8.textContent = cardOne8;
            return cardOne8;
        } else if (styles.contains('box9')){
            cardOne9 =  cards9[randomEmoji()];
            chooseCard9.textContent = cardOne9;
            return cardOne9;
        } else if (styles.contains('box10')){
            cardOne10 =  cards10[randomEmoji()];
            chooseCard10.textContent = cardOne10;
            return cardOne10;
        } else if (styles.contains('box11')){
            cardOne11 =  cards11[randomEmoji()];
            chooseCard11.textContent = cardOne11;
            return cardOne11;
        } else if (styles.contains('box12')){
            cardOne12 =  cards12[randomEmoji()];
            chooseCard12.textContent = cardOne12;
            return cardOne12;
        } else{
            cardOne13 =  cards13[randomEmoji()];
            chooseCard13.textContent = cardOne13;
            return cardOne13;
        };

    });
});

revealOne = document.querySelector('.revealOne')
revealOne.addEventListener('click', function() {
        a = cardOne1;
        b = cardOne2;
        c = cardOne3;
        d = cardOne4;
        e = cardOne5;
        f = cardOne6;
        g = cardOne7;
        h = cardOne8;
        i = cardOne9;
        j = cardOne10;
        k = cardOne11;
        l = cardOne12;
        m = cardOne13;

        let randomCardsReveal = [a, b, c, d, e, f, g, h, i, j, k, l, m];
        randomEmojiCard = Math.floor(Math.random() *13);
        document.querySelector('.plusCard1').style.display = 'block';
        document.querySelector('.cardOne1').textContent = randomCardsReveal[randomEmojiCard];
        revealOne.style.display = 'none';
        document.querySelector('#left-second1').textContent= "Power";
        document.querySelector('#left-third1').textContent = "Weakness";
        document.querySelector('#left-second1').style.display = 'block';
        document.querySelector('#left-third1').style.display = 'block';

        if (randomCardsReveal[randomEmojiCard] === "🦇") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦇"
            document.querySelector('.leftPowerComment1').innerHTML = "Yes Walang pasok may covid +10 POINTS"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🦇"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦇"
            document.querySelector('.rightPowerComment1').innerHTML = "Yes Walang pasok may covid +10 POINTS"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦇"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🐥") {
            document.querySelector('.leftPowerEmoji1').textContent = "🐥"
            document.querySelector('.leftPowerComment1').textContent = "Napanalunan mo kay tatay  +20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🐥"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🐥"
            document.querySelector('.rightPowerComment1').textContent = "Napanalunan mo kay tatay  +20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🐥"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] ==="🐊") {
            document.querySelector('.leftPowerEmoji1').textContent = "🐊"
            document.querySelector('.leftPowerComment1').textContent = "Alaga mo +25 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🐊"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🐊"
            document.querySelector('.rightPowerComment1').textContent = "Alaga mo +25 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🐊"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "💩") {
            document.querySelector('.leftPowerEmoji1').textContent = "💩"
            document.querySelector('.leftPowerComment1').textContent = "Hindi mo natapakan +10 points, blessing!"
            document.querySelector('.leftWeaknessEmoji1').textContent = "💩"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "💩"
            document.querySelector('.rightPowerComment1').textContent = "Hindi mo natapakan +10 points, blessing!"
            document.querySelector('.rightWeaknessEmoji1').textContent = "💩"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦍") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦍"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo +20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🦍"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦍"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo +20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦍"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🐢") {
            document.querySelector('.leftPowerEmoji1').textContent = "🐢"
            document.querySelector('.leftPowerComment1').textContent = "Trust the process + 30"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🐢"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🐢"
            document.querySelector('.rightPowerComment1').textContent = "Trust the process + 30"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🐢"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🐩") {
            document.querySelector('.leftPowerEmoji1').textContent = "🐩"
            document.querySelector('.leftPowerComment1').textContent = "Puppy Love +20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🐩"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🐩"
            document.querySelector('.rightPowerComment1').textContent = "Puppy Love +20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🐩"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦭") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦭"
            document.querySelector('.leftPowerComment1').textContent = "Nakipaglaro ka +20"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🦭"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦭"
            document.querySelector('.rightPowerComment1').textContent = "Nakipaglaro ka +20"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦭"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦀") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦀"
            document.querySelector('.leftPowerComment1').textContent = "Naninipit ng bayag + 20"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🦀"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦀"
            document.querySelector('.rightPowerComment1').textContent = "Naninipit ng bayag + 20"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦀"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🐝") {
            document.querySelector('.leftPowerEmoji1').textContent = "🐝"
            document.querySelector('.leftPowerComment1').textContent = "Masarap kasi honney +20"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🐝"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🐝"
            document.querySelector('.rightPowerComment1').textContent = "Masarap kasi honney +20"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🐝"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤖") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤖"
            document.querySelector('.leftPowerComment1').textContent = "Thank you AI +25"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🤖"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤖"
            document.querySelector('.rightPowerComment1').textContent = "Thank you AI +25"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤖"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🐘") {
            document.querySelector('.leftPowerEmoji1').textContent = "🐘"
            document.querySelector('.leftPowerComment1').textContent = "Friendly + 20"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🐘"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🐘"
            document.querySelector('.rightPowerComment1').textContent = "Friendly + 20"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🐘"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🐸") {
            document.querySelector('.leftPowerEmoji1').textContent = "🐸"
            document.querySelector('.leftPowerComment1').textContent = "Froggy"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🐸"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🐸"
            document.querySelector('.rightPowerComment1').textContent = "Froggy"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🐸"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🕷") {
            document.querySelector('.leftPowerEmoji1').textContent = "🕷"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🕷"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🕷"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🕷"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🐆") {
            document.querySelector('.leftPowerEmoji1').textContent = "🐆"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🐆"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🐆"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🐆"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦕") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦕"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🦕"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦕"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦕"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦁") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦁"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🦁"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦁"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦁"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "💰") {
            document.querySelector('.leftPowerEmoji1').textContent = "💰"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "💰"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "💰"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "💰"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "💯") {
            document.querySelector('.leftPowerEmoji1').textContent = "💯"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "💯"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "💯"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "💯"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "📢") {
            document.querySelector('.leftPowerEmoji1').textContent = "📢"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "📢"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "📢"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "📢"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "📹") {
            document.querySelector('.leftPowerEmoji1').textContent = "📹"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "📹"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "📹"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "📹"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔄") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔄"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🔄"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔄"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔄"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔅") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔅"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🔅"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔅"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔅"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔎") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔎"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🔎"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔎"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔎"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔌") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔌"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔌"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔌"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔌"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔑") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔑"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔑"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔑"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔑"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔒") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔒"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔒"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔒"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔒"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔓") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔓"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔓"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔓"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔓"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔟") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔟"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔟"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔟"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔟"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔪") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔪"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔪"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔪"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔪"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === '🔫') {
            document.querySelector('.leftPowerEmoji1').textContent = "🔫"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔫"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔫"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔫"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔱") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔱"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔱"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔱"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔱"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🔴") {
            document.querySelector('.leftPowerEmoji1').textContent = "🔴"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🔴"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🔴"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🔴"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🕌") {
            document.querySelector('.leftPowerEmoji1').textContent = "🕌"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🕌"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🕌"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🕌"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🕔") {
            document.querySelector('.leftPowerEmoji1').textContent = "🕔"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🕔"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🕔"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🕔"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === '🕸') {
            document.querySelector('.leftPowerEmoji1').textContent = "🕸"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🕸"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🕸"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🕸"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🗣") {
            document.querySelector('.leftPowerEmoji1').textContent = "🗣"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🗣"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🗣"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🗣"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🗼") {
            document.querySelector('.leftPowerEmoji1').textContent = "🗼"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🗼"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🗼"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🗼"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "😈") {
            document.querySelector('.leftPowerEmoji1').textContent = "😈"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "😈"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "😈"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "😈"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "😓") {
            document.querySelector('.leftPowerEmoji1').textContent = "😓"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "😓"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "😓"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "😓"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "😕") {
            document.querySelector('.leftPowerEmoji1').textContent = "😕"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "😕"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "😕"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "😕"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "😡") {
            document.querySelector('.leftPowerEmoji1').textContent = "😡"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "😡"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "😡"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "😡"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "😭") {
            document.querySelector('.leftPowerEmoji1').textContent = "😭"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "😭"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "😭"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "😭"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🙃") {
            document.querySelector('.leftPowerEmoji1').textContent = "🙃"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🙃"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🙃"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🙃"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🚩") {
            document.querySelector('.leftPowerEmoji1').textContent = "🚩"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🚩"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🚩"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🚩"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🚮") {
            document.querySelector('.leftPowerEmoji1').textContent = "🚮"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🚮"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🚮"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🚮"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🚽") {
            document.querySelector('.leftPowerEmoji1').textContent = "🚽"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🚽"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🚽"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🚽"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🛸") {
            document.querySelector('.leftPowerEmoji1').textContent = "🛸"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🛸"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🛸"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🛸"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤑") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤑"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🤑"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤑"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤑"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤡") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤡"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🤡"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤡"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤡"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤢") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤢"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🤢"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤢"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤢"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤧") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤧"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🤧"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤧"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤧"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤬") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤬"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🤬"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤬"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤬"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤧") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤧"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🤧"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤧"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤧"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤮") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤮"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🤮"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤮"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤮"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🤶") {
            document.querySelector('.leftPowerEmoji1').textContent = "🤶"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🤶"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🤶"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🤶"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🥒") {
            document.querySelector('.leftPowerEmoji1').textContent = "🥒"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🥒"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🥒"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🥒"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🥝") {
            document.querySelector('.leftPowerEmoji1').textContent = "🥝"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🥝"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🥝"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🥝"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🥣") {
            document.querySelector('.leftPowerEmoji1').textContent = "🥣"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🥣"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🥣"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🥣"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦉") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦉"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🦉"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦉"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦉"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦊") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦊"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🦊"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦊"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦊"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦋") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦋"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🦋"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦋"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦋"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦌") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦌"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
                        document.querySelector('.leftWeaknessEmoji1').textContent = "🦌"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦌"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦌"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        } else if (randomCardsReveal[randomEmojiCard] === "🦔") {
            document.querySelector('.leftPowerEmoji1').textContent = "🦔"
            document.querySelector('.leftPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.leftWeaknessEmoji1').textContent = "🦔"
            document.querySelector('.leftWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
            document.querySelector('.rightPowerEmoji1').textContent = "🦔"
            document.querySelector('.rightPowerComment1').textContent = "Kamukha mo -20 points"
            document.querySelector('.rightWeaknessEmoji1').textContent = "🦔"
            document.querySelector('.rightWeaknessComment1').innerHTML = "3 years may covid wtf -10 POINTS"
        }
});

plusCard1 = document.querySelector('.plusCard1')
plusCard1.addEventListener('click', function(){

    a = cardOne1;
    b = cardOne2;
    c = cardOne3;
    d = cardOne4;
    e = cardOne5;
    f = cardOne6;
    g = cardOne7;
    h = cardOne8;
    i = cardOne9;
    j = cardOne10;
    k = cardOne11;
    l = cardOne12;
    m = cardOne13;

    let randomCardsReveal = [a, b, c, d, e, f, g, h, i, j, k, l, m];
    randomEmojiCard = Math.floor(Math.random() *13);

    document.querySelector('.plusCard1').style.display = 'block';
    document.querySelector('.cardOne2').textContent = randomCardsReveal[randomEmojiCard];
    plusCard1.style.display = 'none';
    document.querySelector('#right-second1').textContent= "Power";
    document.querySelector('#right-third1').textContent = "Weakness";
    document.querySelector('#right-second1').style.display = 'block';
    document.querySelector('#right-third1').style.display = 'block';
});


randomCards = document.querySelectorAll('.box222');
randomCards.forEach(function(boxes){
    boxes.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        let cards21 =["🦇", "🐥", "🐊","💩", "🦍"];
        let cards22 =["🐢", "🐩", "🦭", "🦀", "🐝"];
        let cards23 =["🤖", "🐘", "🐸", "🕷","🐆"];
        let cards24 = ["🦕", "🦁", "💰", "💯", "📢"];
        let cards25 = ["📹", "🔄", "🔅", "🔎", "🔌"];
        let cards26 = ["🔑", "🔒", "🔓", "🔟", "🔪"];
        let cards27 = ['🔫', "🔱", "🔴", "🕌", "🕔"];
        let cards28 = ['🕸', "🗣", "🗼", "😈", "😓"];
        let cards29 = ["😕", "😡", "😭", "🙃", "🚩"];
        let cards210 = ["🚮", "🚽", "🛸", "🤑", "🤡"];
        let cards211 = ["🤢", "🤧", "🤬", "🤧", "🤮"];
        let cards212 = ["🤶", "🥒", "🥝", "🥣", "🦉"];
        let cards213 = ["🦊", "🦋", "🦌", "🦐", "🦔"];

        if(styles.contains('box21')){
            cardOne21 =  cards21[randomEmoji()];
            chooseCard21.textContent = cardOne21;
            return cardOne21;
        } else if (styles.contains('box22')){
            cardOne22 =  cards22[randomEmoji()];
            chooseCard22.textContent = cardOne22;
            return cardOne22;
        } else if (styles.contains('box23')){
            cardOne23 =  cards23[randomEmoji()];
            chooseCard23.textContent = cardOne23;
            return cardOne23;
        } else if (styles.contains('box24')){
            cardOne24 =  cards24[randomEmoji()];
            chooseCard24.textContent = cardOne24;
            return cardOne24;
        } else if (styles.contains('box25')){
            cardOne25 =  cards25[randomEmoji()];
            chooseCard25.textContent = cardOne25;
            return cardOne25;
        } else if (styles.contains('box26')){
            cardOne26 =  cards26[randomEmoji()];
            chooseCard26.textContent = cardOne26;
            return cardOne26;
        } else if (styles.contains('box27')){
            cardOne27 =  cards27[randomEmoji()];
            chooseCard27.textContent = cardOne27;
            return cardOne27;
        } else if (styles.contains('box28')){
            cardOne28 =  cards28[randomEmoji()];
            chooseCard28.textContent = cardOne28;
            return cardOne28;
        } else if (styles.contains('box29')){
            cardOne29 =  cards29[randomEmoji()];
            chooseCard29.textContent = cardOne29;
            return cardOne29;
        } else if (styles.contains('box210')){
            cardOne210 =  cards210[randomEmoji()];
            chooseCard210.textContent = cardOne210;
            return cardOne210;
        } else if (styles.contains('box211')){
            cardOne211 =  cards211[randomEmoji()];
            chooseCard211.textContent = cardOne211;
            return cardOne211;
        } else if (styles.contains('box212')){
            cardOne212 =  cards212[randomEmoji()];
            chooseCard212.textContent = cardOne212;
            return cardOne212;
        } else{
            cardOne213 =  cards213[randomEmoji()];
            chooseCard213.textContent = cardOne213;
            return cardOne213;
        }
    });
});

revealTwo = document.querySelector('.revealTwo')
revealTwo.addEventListener('click', function() {
        aa = cardOne21;
        ba = cardOne22;
        ca = cardOne23;
        da = cardOne24;
        ea = cardOne25;
        fa = cardOne26;
        ga = cardOne27;
        ha = cardOne28;
        ia = cardOne29;
        ja = cardOne210;
        ka = cardOne211;
        la = cardOne212;
        ma = cardOne213;

        let randomCardsReveal = [aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma];
        randomEmojiCard = Math.floor(Math.random() *13);
        document.querySelector('.plusCard2').style.display = 'block';
        document.querySelector('.cardTwo1').textContent = randomCardsReveal[randomEmojiCard];
        revealTwo.style.display = 'none';
        document.querySelector('#left-second2').textContent= "Power";
        document.querySelector('#left-third2').textContent = "Weakness";
        document.querySelector('#left-second2').style.display = 'block';
        document.querySelector('#left-third2').style.display = 'block';
        if (aa === "🦖") {
            console.log('snake')
        } else if (aa === "🐥") {
            console.log("duck")
        } else if ( aa ==="🐊") {
            console.log('crocodile')
        } else if (aa === "💩") {
            console.log("tae")
        } else {
            console.log('unggoy')
        }
});

plusCard2 = document.querySelector('.plusCard2')
plusCard2.addEventListener('click', function(){

    aa = cardOne21;
    ba = cardOne22;
    ca = cardOne23;
    da = cardOne24;
    ea = cardOne25;
    fa = cardOne26;
    ga = cardOne27;
    ha = cardOne28;
    ia = cardOne29;
    ja = cardOne210;
    ka = cardOne211;
    la = cardOne212;
    ma = cardOne213;

    let randomCardsReveal = [aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma];
    randomEmojiCard = Math.floor(Math.random() *13);

    document.querySelector('.plusCard2').style.display = 'block';
    document.querySelector('.cardTwo2').textContent = randomCardsReveal[randomEmojiCard];
    plusCard2.style.display = 'none';
    document.querySelector('#right-second2').textContent= "Power";
    document.querySelector('#right-third2').textContent = "Weakness";
    document.querySelector('#right-second2').style.display = 'block';
    document.querySelector('#right-third2').style.display = 'block';
});

let leftPower1 = document.querySelector('#left-second1');
let leftWeakness1 = document.querySelector('#left-third1');
let rightPower1 = document.querySelector('#right-second1');
let rightWeakness1 = document.querySelector('#right-third1');
let leftPower2 = document.querySelector('#left-second2');
let leftWeakness2 = document.querySelector('#left-third2');
let rightPower2 = document.querySelector('#right-second2');
let rightWeakness2 = document.querySelector('#right-third2');

leftPower1.addEventListener('click', function() {
    document.querySelector('.leftPower1').style.display = 'block';
});

leftWeakness1.addEventListener('click', function() {
    document.querySelector('.leftWeakness1').style.display = 'block';
});

rightPower1.addEventListener('click', function() {
    document.querySelector('.rightPower1').style.display = 'block';
});

rightWeakness1.addEventListener('click', function() {
    document.querySelector('.rightWeakness1').style.display = 'block';
});

leftPower2.addEventListener('click', function() {
    document.querySelector('.leftPower2').style.display = 'block';
});

leftWeakness2.addEventListener('click', function() {
    document.querySelector('.leftWeakness2').style.display = 'block';
});

rightPower2.addEventListener('click', function() {
    document.querySelector('.rightPower2').style.display = 'block';
});

rightWeakness2.addEventListener('click', function() {
    document.querySelector('.rightWeakness2').style.display = 'block';
});

const ex = document.querySelectorAll('.eks');
ex.forEach(function(eks){
    eks.addEventListener('click', function(ey) {
        styling = ey.currentTarget.classList;
        if (styling.contains('leftPowerIcon1')) {
            document.querySelector('.leftPower1').style.display = 'none';
        } else if (styling.contains('leftWeaknessIcon1')) {
            document.querySelector('.leftWeakness1').style.display = 'none';
        } else if (styling.contains('rightPowerIcon1')) {
            document.querySelector('.rightPower1').style.display = 'none';
        } else if (styling.contains('rightWeaknessIcon1')) {
            document.querySelector('.rightWeakness1').style.display = 'none';
        } else if (styling.contains('leftPowerIcon2')) {
            document.querySelector('.leftPower2').style.display = 'none';
        } else if (styling.contains('leftWeaknessIcon2')) {
            document.querySelector('.leftWeakness2').style.display = 'none';
        } else if (styling.contains('rightPowerIcon2')) {
            document.querySelector('.rightPower2').style.display = 'none';        
        } else if (styling.contains('rightWeaknessIcon2')) {
            document.querySelector('.rightWeakness2').style.display = 'none';
        }
    });
});
