const dice1 = "img/dice1.png";
const dice2 = "img/dice2.png";
const dice3 = "img/dice3.png";
const dice4 = "img/dice4.png";
const dice5 = "img/dice5.png";
const dice6 = "img/dice6.png";

const buttonRoll = document.getElementById("roll-button");
const buttonRoll2 = document.getElementById("roll-button2")
const buttonHold = document.getElementById("hold-button");
const buttonHold2 = document.getElementById("hold-button2")
const buttonPlay = document.getElementById("play-button");
const buttonPlay2 = document.getElementById("play-button2");
const playerScoreText = document.getElementById("score");
const playerScoreText2 = document.getElementById("score2");
const playerStatus = document.getElementById("status");
const playerStatus2 = document.getElementById("status2");
const imageHolder = document.getElementById("dice-image");
const imageHolder2 = document.getElementById("dice-image2");

const scoreToWin = 20;
let playerScore = 0;
let playerScore2 = 0;
let player2Turn = false;



const play = () => {
    buttonPlay.disabled = true;
    disablePlayersButtons(1, false);
    disablePlayersButtons(2, true);
    player2Turn = false;
    playerScoreText.innerText = "SCORE: 0";
    playerScoreText2.innerText = "SCORE: 0";
    playerStatus.innerText = "";
    playerStatus2.innerText = "";
    playerScore = 0;
    playerScore2 = 0;
    imageHolder.src = "";
    imageHolder2.src = "";
}

const rollDice = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    imageHolder.src = getImageName(num);
    playerScore += num;
    playerScoreText.innerText = `SCORE: ${playerScore}`;

    if(num == 1) {
        resetScore(1);
    } else if (playerScore >= scoreToWin) {
        winGame(1);
        loseGame(2);
    }
}

const rollDice2 = () => {
    let num = Math.floor(Math.random() * 6) + 1;
    imageHolder2.src = getImageName(num);
    playerScore2 += num;
    playerScoreText2.innerText = `SCORE: ${playerScore2}`;

    if(num == 1) {
        resetScore(2);
    } else if (playerScore2 >= scoreToWin) {
        winGame(2);
        loseGame(1);
    }
}

const resetScore = (playerID) => {
    if(playerID == 1)
        playerScore = 0;
    else if(playerID == 2)
        playerScore2 = 0;
}

const switchPlayers = () => {
    player2Turn = !player2Turn;
    disablePlayersButtons(1, player2Turn);
    disablePlayersButtons(2, !player2Turn);
}

const winGame = (playerID) => {
    disablePlayersButtons(0, true);
    if(playerID == 1) {
        playerStatus.innerText = "You win!";
    } else if(playerID == 2) {
        playerStatus2.innerText = "You win!";
    }
    buttonPlay.innerText = `PLAY AGAIN`;
    buttonPlay.disabled = false;
}

const loseGame = (playerID) => {
    disablePlayersButtons(0, true);
    if(playerID == 1) {
        playerStatus.innerText = "You lose!";
    } else if(playerID == 2) {
        playerStatus2.innerText = "You lose!";
    }
    buttonPlay.innerText = `PLAY AGAIN`;
    buttonPlay.disabled = false;
}

const disablePlayersButtons = (playerID, state) => {
    if(playerID == 1) {
        buttonRoll.disabled = state;
        buttonHold.disabled = state;
    } else if(playerID == 2) {
        buttonRoll2.disabled = state;
        buttonHold2.disabled = state;
    } else {
        buttonRoll.disabled = state;
        buttonHold.disabled = state;
        buttonRoll2.disabled = state;
        buttonHold2.disabled = state;
    }
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

disablePlayersButtons(0, true);

buttonRoll.addEventListener("click", () => {
    rollDice();
});

buttonRoll2.addEventListener("click", () => {
    rollDice2();
})

buttonHold.addEventListener("click", () => {
    switchPlayers();
})

buttonHold2.addEventListener("click", () => {
    switchPlayers();
})

buttonPlay.addEventListener("click", () => {
    play();
});