const dice1 = "img/dice1.png";
const dice2 = "img/dice2.png";
const dice3 = "img/dice3.png";
const dice4 = "img/dice4.png";
const dice5 = "img/dice5.png";
const dice6 = "img/dice6.png";

const buttonRoll = document.getElementById("roll-button");
const buttonPlay = document.getElementById("play-button");
const playerScoreText = document.getElementById("score");
const playerStatus = document.getElementById("status");
const imageHolder = document.getElementById("dice-image");

let Number, playerScore = 0;

buttonRoll.disabled = true;

const play = () => {
    buttonPlay.disabled = true;
    buttonRoll.disabled = false;
    playerScoreText.innerText = "SCORE: 0";
    playerScore = 0;
    imageHolder.src = "";
    playerStatus.innerText = "";
}

const rollDice = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    imageHolder.src = getImageName(num);
    playerScore += num;
    playerScoreText.innerText = `SCORE: ${playerScore}`;
    if(num == 1) {
        loseGame();
    } else if (playerScore >= 20) {
        winGame();
    }
}

const winGame = () => {
    buttonRoll.disabled = true;
    buttonPlay.disabled = false;
    playerStatus.innerText = "You win!";
    buttonPlay.innerText = `PLAY AGAIN`;
}

const loseGame = () => {
    buttonRoll.disabled = true;
    buttonPlay.disabled = false;
    playerStatus.innerText = "You lose!";
    buttonPlay.innerText = `PLAY AGAIN`;
}

const getImageName = (num) => {
    switch(num) {
        case 1:
            return dice1;
        case 2:
            return dice2;
        case 3:
            return dice3;
        case 4:
            return dice4;
        case 5:
            return dice5;
        case 6:
            return dice6;
        default:
            return;
    }
}

buttonRoll.addEventListener("click", () => {
    rollDice();
});

buttonPlay.addEventListener("click", () => {
    play();
});