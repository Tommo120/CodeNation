class card {
    constructor(title, coreClock, memSize, memClock, directX, openGL) {
        this._title = title;
        this._coreClock = coreClock;
        this._memSize = memSize;
        this._memClock = memClock;
        this._directX = directX;
        this._openGL = openGL;
    }
    get title() { return this._title; }
    get coreClock() { return this._coreClock; }
    get memSize() { return this._memSize; }
    get memClock() { return this._memClock; }
    get directX() { return this._directX; }
    get openGL() { return this._openGL; }
}

class categoryPosition {
    constructor(name, y, height) {
        this._name = name;
        this._y = y;
        this._height = height;
    }
    get name() { return this._name; }
    get y() { return this._y; }
    get height() { return this._height; }
}

const deckOfCards = [new card('nVidia 8800 GTX', 575, 768, 900, 10, 3.3),
new card('nVidia GTX 970', 1050, 4096, 1752.5, 12, 4.5),
new card('nVidia GTX 560Ti', 822, 2048, 1002, 11, 4.5),
new card('nVidia RTX 2060', 1365, 6144, 1750, 12, 4.6),
new card('nVidia GTX 1660', 1530, 6144, 2001, 12, 4.6),
new card('nVidia GTX 1050', 1354, 2048, 1752, 12, 4.5),
new card('nVidia GTX 750', 1020, 2048, 1250, 12, 4.5),
new card('nVidia GTX 780', 863, 6144, 1502, 11, 4.5),
new card('nVidia GTX 680', 1006, 4096, 1502, 11, 4.5),
new card('nVidia GTX 660', 980, 3072, 1502, 11, 4.5),
new card('nVidia GTX 460', 675, 768, 900, 11, 4.5),
new card('nVidia GeForce 210', 520, 1024, 1000, 10.1, 3.3),
new card('nVidia GeForce GT 640', 900, 4096, 891, 11, 4.5),
new card('nVidia GTX 285', 648, 1024, 1242, 10, 3.3),
new card('nVidia TITAN V CEO Edition', 1200, 32000, 1700, 12, 4.6),
new card('Radeon RX 570', 1168, 8192, 1750, 12, 4.5),
new card('Radeon RX Vega 56', 1471, 8192, 1600, 12, 4.5),
new card('Radeon R9 350', 925, 2048, 1125, 12, 4.3),
new card('Radeon HD 7990', 950, 3072, 1500, 11.2, 4.4),
new card('Radeon HD 7870', 1000, 2048, 1200, 11.2, 4.4),
new card('Radeon RX 580', 1257, 8192, 2000, 12, 4.5),
new card('Radeon RX 470', 926, 8192, 1650, 12, 4.5),
new card('Radeon R9 270X', 1000, 4096, 1400, 12, 4.4),
new card('Radeon HD 6870', 900, 2048, 1050, 11, 4.4),
new card('Radeon HD 5770', 650, 2048, 400, 11, 4.4),
new card('Radeon HD 7670', 800, 1024, 1000, 11, 4.4),
new card('Radeon R9 350', 925, 2048, 1125, 12, 4.3),
new card('Radeon RX 540', 1219, 4096, 1500, 12, 4.5),
new card('Radeon HD 5870', 850, 2048, 1200, 11, 4.4),
new card('Radeon R7 450', 1050, 2048, 1125, 12, 4.3)];


const canvasPlayer1 = document.getElementById("player1-card");
const canvasPlayer2 = document.getElementById("player2-card");
const ctx1 = canvasPlayer1.getContext('2d');
const ctx2 = canvasPlayer2.getContext('2d');

const playButton = document.getElementById("play-button");
const drawPlayer1 = document.getElementById("player1-draw");
const drawPlayer2 = document.getElementById("player2-draw");
const cardsRemaining1 = document.getElementById("player1-remaining");
const cardsRemaining2 = document.getElementById("player2-remaining");
const player1Instructions = document.getElementById("p1Instruction");
const player2Instructions = document.getElementById("p2Instruction");
const limboCardCount = document.getElementById("limbo-count");

let categoryPositions = [new categoryPosition('coreClock', 280, 15),
                        new categoryPosition('memSize', 310, 15),
                        new categoryPosition('memClock', 340, 15),
                        new categoryPosition('directX', 370, 15),
                        new categoryPosition('openGL', 400, 15)];

class canvasCard {
    constructor (
        playerID, x = 10, y = 10, width = 280, height = 430
    )

    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.playerID = playerID;
    }

    draw (playerCard) {
        const {
          x, y, width, height, playerID
        } = this
    
        switch(playerID) {
            case 1:
                ctx1.beginPath();
                ctx1.fillStyle = 'lightgrey';
                ctx1.rect(x, y, width, height);
                ctx1.fill();
                ctx1.stroke();
                ctx1.closePath();
                ctx1.fillStyle = 'black'
                ctx1.font = 'bold 24px ubuntu';
                ctx1.textAlign = 'center';
                ctx1.textBaseline = 'alphabetic';
                ctx1.fillText(playerCard.title, canvasPlayer1.width / 2, 40);
                ctx1.font = 'bold 20px ubuntu';
                ctx1.fillText('Core Clock:   ' + playerCard.coreClock + "Mhz", canvasPlayer1.width / 2, 280);
                ctx1.fillText('Memory Size:   ' + playerCard.memSize + 'MB', canvasPlayer1.width / 2, 310);
                ctx1.fillText('Memory Clock:   ' + playerCard.memClock + 'Mhz', canvasPlayer1.width / 2, 340);
                ctx1.fillText('DirectX:   ' + playerCard.directX, canvasPlayer1.width / 2, 370);
                ctx1.fillText('OpenGL:   ' + playerCard.openGL, canvasPlayer1.width / 2, 400);
                break;
            case 2:
                ctx2.beginPath();
                ctx2.fillStyle = 'lightgrey';
                ctx2.rect(x, y, width, height);
                ctx2.fill();
                ctx2.stroke();
                ctx2.closePath();
                ctx2.fillStyle = 'black'
                ctx2.font = 'bold 24px ubuntu';
                ctx2.textAlign = 'center';
                ctx2.textBaseline = 'alphabetic';
                ctx2.fillText(playerCard.title, canvasPlayer2.width / 2, 40);
                ctx2.font = 'bold 20px ubuntu';
                ctx2.fillText('Core Clock:   ' + playerCard.coreClock + "Mhz", canvasPlayer2.width / 2, 280);
                ctx2.fillText('Memory Size:   ' + playerCard.memSize + 'MB', canvasPlayer2.width / 2, 310);
                ctx2.fillText('Memory Clock:   ' + playerCard.memClock + 'Mhz', canvasPlayer2.width / 2, 340);
                ctx2.fillText('DirectX:   ' + playerCard.directX, canvasPlayer2.width / 2, 370);
                ctx2.fillText('OpenGL:   ' + playerCard.openGL, canvasPlayer2.width / 2, 400);
                break;
            default:
                break;
        }
    }
}

let player1CanvasCard = new canvasCard(1);
let player2CanvasCard = new canvasCard(2);

let temporaryDeck = [];

let player1Cards = [];
let player2Cards = [];
let limboCards = [];

let player1CategoryChoice = true;
let player2CategoryChoice = false;
let currentCategory;

let roundInProgress = false;

const initialise = () => {
    playButton.disabled = false;
    drawPlayer1.disabled = true;
    drawPlayer2.disabled = true;
}

const dealCards = () => {
    limboCards = [];
    player1Cards = [];
    player2Cards = [];
    temporaryDeck = deckOfCards.slice();

    //shuffle cards
    temporaryDeck.sort(() => Math.random() - 0.5);

    let playerCardCount = temporaryDeck.length / 2;

    for(let i = 0; i < playerCardCount; i++)
    {
        player1Cards.push(temporaryDeck.pop());
        player2Cards.push(temporaryDeck.pop());
    }
    updateCardCount();
}

const updateCardCount = () => {
    cardsRemaining1.innerText = "Cards remaining: " + player1Cards.length;
    cardsRemaining2.innerText = "Cards remaining: " + player2Cards.length;
    limboCardCount.innerText = "Cards in Limbo: " + limboCards.length;
}

const clearCanvas = (playerID) => {
    switch(playerID) {
        case 0:
            ctx1.clearRect(0, 0, canvasPlayer1.width, canvasPlayer1.height);
            ctx2.clearRect(0, 0, canvasPlayer2.width, canvasPlayer2.height);
            break;
        case 1:
            ctx1.clearRect(0, 0, canvasPlayer1.width, canvasPlayer1.height);
            break;
        case 2:
            ctx2.clearRect(0, 0, canvasPlayer2.width, canvasPlayer2.height);
            break;
        default:
            break;
        
    }
}

const isIntersect = (point, categoryPos) => {
    if(point.y > categoryPos.y - categoryPos.height && point.y < categoryPos.y + categoryPos.height)
    {
        currentCategory = categoryPos.name;
        return true;
    }
}

const compareCards = () => {
    switch(currentCategory){
        case 'coreClock':
            if(player1Cards[0].coreClock > player2Cards[0].coreClock) {
                roundEnd(1);
            } else if(player1Cards[0].coreClock < player2Cards[0].coreClock) {
                roundEnd(2);
            } else {
                roundEnd(0);
            }
            return;
        case 'memSize':
            if(player1Cards[0].memSize > player2Cards[0].memSize) {
                roundEnd(1);
            } else if(player1Cards[0].memSize < player2Cards[0].memSize) {
                roundEnd(2);
            } else {
                roundEnd(0);
            }
            return;
        case 'memClock':
            if(player1Cards[0].memClock > player2Cards[0].memClock) {
                roundEnd(1);
            } else if(player1Cards[0].memClock < player2Cards[0].memClock) {
                roundEnd(2);
            } else {
                roundEnd(0);
            }
            return;
        case 'directX':
            if(player1Cards[0].directX > player2Cards[0].directX) {
                roundEnd(1);
            } else if(player1Cards[0].directX < player2Cards[0].directX) {
                roundEnd(2);
            } else {
                roundEnd(0);
            }
            return;
        case 'openGL':
            if(player1Cards[0].openGL > player2Cards[0].openGL) {
                roundEnd(1);
            } else if(player1Cards[0].openGL < player2Cards[0].openGL) {
                roundEnd(2);
            } else {
                roundEnd(0);
            }
            return;
        default:
            return;
    }
}

const roundEnd = (winnerID) => {
    switch(winnerID) {
        case 0:
            player1Instructions.innerText = "Draw! Cards added to Limbo";
            player2Instructions.innerText = "Draw! Cards added to Limbo";
            limboCards.push(player1Cards.shift());
            limboCards.push(player2Cards.shift());
            updateCardCount();
            playButton.innerText = "Continue";
            playButton.disabled = false;
            player1CategoryChoice = true;
            player2CategoryChoice = false;
            if(player1Cards.length == 0)
                gameEnd(2);
            else if(player2Cards.length == 0)
                gameEnd(1);
            break;
        case 1:
            player1Instructions.innerText = "You win the round!";
            player2Instructions.innerText = "You lose the round!";
            player1Cards.push(player1Cards.shift());
            player1Cards.push(player2Cards.shift());
            if(limboCards.length > 0) {
                for(let i = limboCards.length; i > 0; i--) {
                    player1Cards.push(limboCards.pop());
                    console.log("Limbo card added to player 1");
                }
            }
            updateCardCount();
            playButton.innerText = "Continue";
            playButton.disabled = false;
            player1CategoryChoice = true;
            player2CategoryChoice = false;
            if(player2Cards.length == 0)
                gameEnd(1);
            break;
        case 2:
            player1Instructions.innerText = "You lose the round!";
            player2Instructions.innerText = "You win the round!";
            player2Cards.push(player2Cards.shift());
            player2Cards.push(player1Cards.shift());
            if(limboCards.length > 0) {
                for(let i = limboCards.length; i > 0; i--) {
                    player2Cards.push(limboCards.pop());
                    console.log("Limbo card added to player 2");
                }
            }
            updateCardCount();
            playButton.innerText = "Continue";
            playButton.disabled = false;
            player1CategoryChoice = false;
            player2CategoryChoice = true;
            if(player1Cards.length == 0)
                gameEnd(2);
            break;
        default:
            break;
    }
}

const gameEnd = (playerID) => {
    playButton.innerText = "Play again";
    playButton.disabled = false;
    switch(playerID) {
        case 1:
            player1Instructions.innerText = "You win!";
            player2Instructions.innerText = "You lose!";
            break;
        case 2:
            player1Instructions.innerText = "You lose!";
            player2Instructions.innerText = "You win!";
            break;
        default:
            break;
    }
    roundInProgress = false;
}

const printCardList = () => {
    for(let i = 0; i < player1Cards.length; i++)
    {
        console.log("Player 1: " + player1Cards[i].title);
    }

    for(let i = 0; i < player2Cards.length; i++)
    {
        console.log("Player 2: " + player2Cards[i].title);
    }
    if(limboCards.length > 0) {
        for(let i = 0; i < limboCards.length; i++)
        {
            console.log("Limbo: " + limboCards[i].title);
        }
    } else {
        console.log("Limbo empty");
    }
}

playButton.addEventListener("click", () => {
    if(!roundInProgress) {
        clearCanvas(0);
        dealCards();
        if(player1CategoryChoice) {
            drawPlayer1.disabled = false;
            player1Instructions.innerText = "Draw your card";
            player2Instructions.innerText = "";
        } else {
            drawPlayer2.disabled = false;
            player1Instructions.innerText = "";
            player2Instructions.innerText = "Draw your card";
        }
        playButton.disabled = true;
        roundInProgress = true;
    } else {
        if(player1CategoryChoice) {
            drawPlayer1.disabled = false;
            player1Instructions.innerText = "Draw your card";
            player2Instructions.innerText = "";
        } else {
            drawPlayer2.disabled = false;
            player1Instructions.innerText = "";
            player2Instructions.innerText = "Draw your card";
        }
        playButton.disabled = true;
        clearCanvas(0);
    }
})

drawPlayer1.addEventListener("click", () => {
    player1CanvasCard.draw(player1Cards[0]);
    drawPlayer1.disabled = true;
    if(player1CategoryChoice) {
        player1Instructions.innerText = "Select a category";
    } else {
        compareCards();
    }
})

drawPlayer2.addEventListener("click", () => {
    player2CanvasCard.draw(player2Cards[0]);
    drawPlayer2.disabled = true;
    if(player2CategoryChoice) {
        player2Instructions.innerText = "Select a category";
    } else {
        compareCards();
    }
})

canvasPlayer1.addEventListener("click", function(e){
    if(player1CategoryChoice)
    {
        let rect = canvasPlayer1.getBoundingClientRect();
        let pos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        categoryPositions.forEach(category => {
            if(isIntersect(pos, category)) {
                player1CategoryChoice = false;
                player1Instructions.innerText = "";
                player2Instructions.innerText = "Draw your card";
                drawPlayer2.disabled = false;
            }
        })
    }
})

canvasPlayer2.addEventListener("click", function(e){
    if(player2CategoryChoice)
    {
        let rect = canvasPlayer1.getBoundingClientRect();
        let pos = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        categoryPositions.forEach(category => {
            if(isIntersect(pos, category)) {
                player2CategoryChoice = false;
                player1Instructions.innerText = "Draw your card";
                player2Instructions.innerText = "";
                drawPlayer1.disabled = false;
            }
        })
    }
})

initialise();

// dealCards();

// player1CanvasCard.draw(player1Cards[0]);
// player2CanvasCard.draw(player2Cards[0]);

// clearCanvas(0);

// debugPrintHand();

// debugPrintDeck();

