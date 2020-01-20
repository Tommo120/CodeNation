let canvas = document.getElementById("snakeCanvas");
let ctx = canvas.getContext("2d");
const playButton = document.getElementById("play-button");
const scoreText = document.getElementById("score");

// Screen block variables
const blockSize = 24;
const blockPadding = 2;

let tickRate = 0.5;
let gameRunning = false;


// Calculate pixel blocks
let horizontalBlocks = Math.floor(canvas.width / (blockSize + blockPadding));
let verticalBlocks = Math.floor(canvas.height / (blockSize + blockPadding));

// User inputs
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// Snake position
let snakeX = Math.floor(horizontalBlocks / 2);
let snakeY = Math.floor(verticalBlocks / 2);

// Snake movement direction (-1 left/up +1 right/down)
let snakeDeltaX = 1;
let snakeDeltaY = 0;

let snakeLength = 3;
let snakeBlocks = [];
for(let s = 0; s < snakeLength; s++) {
    snakeBlocks.unshift({x: snakeX - s, y: snakeY})
}

let score = 0;
const maxScore = (horizontalBlocks * verticalBlocks) - snakeLength;

//Apples
let generateNewApple = true;

// console.log(`Horizontal: %i - Vertical: %i`, horizontalBricks, verticalBricks);

let blocks = [];
for(let h = 0; h < horizontalBlocks; h++) {
    blocks[h] = [];
    for(let v = 0; v < verticalBlocks; v++) {
        blocks[h][v] = {x: 0, y: 0, status: 0};
    }
}

function handleInput() {
    if(leftPressed) {snakeDeltaX = -1; snakeDeltaY = 0;}
    else if(rightPressed) {snakeDeltaX = 1; snakeDeltaY = 0;}
    else if(downPressed) {snakeDeltaX = 0; snakeDeltaY = 1;}
    else if(upPressed) {snakeDeltaX = 0; snakeDeltaY = -1;}
}

function generateApple()
{
    let h = Math.floor(Math.random() * horizontalBlocks);
    let v = Math.floor(Math.random() * verticalBlocks);

    if (blocks[h][v].status != 0)
        generateApple();
    else {
        blocks[h][v].status = 2;
        generateNewApple = false;
        console.log(`Apple at %i %i`, h, v);
    }
}

function moveSnake() {
    console.log('Tick');

    snakeX += snakeDeltaX;
    snakeY += snakeDeltaY;

    if(snakeX == -1 || snakeY == -1 || 
        snakeX >= horizontalBlocks || snakeY >= verticalBlocks) {
        endGame();
    } else if(blocks[snakeX][snakeY].status == 1) {
        endGame();
    }else if(blocks[snakeX][snakeY].status == 2) {
        console.log('POINT');
        score++;
        scoreText.innerHTML = "SCORE: " + score;
        snakeLength++;
        snakeBlocks.unshift({x: snakeBlocks[0].x, y: snakeBlocks[0].y});
        if(score == maxScore)
            winGame();
        generateApple();
    }

    let lastBlock = snakeBlocks.shift();
    blocks[lastBlock.x][lastBlock.y].status = 0;

    snakeBlocks.push({x: snakeX, y: snakeY});

    if(gameRunning)
    setTimeout(moveSnake, tickRate * 1000);
}

function endGame() {
    gameRunning = false;
    alert("You have died :(");
    document.location.reload();
}

function winGame() {
    gameRunning = false;
    alert("You just won! Congratulations!");
    document.location.reload();
}

function drawSnakeBlocks() {
    snakeBlocks.forEach(block => blocks[block.x][block.y].status = 1);
}

function updateSpeed() {
    if(score / 10 == 1)
        tickRate = 0.45
    
    if(score / 20 == 1)
        tickRate = 0.4;

    if(score / 30 == 1)
        tickRate = 0.35;

    if(score / 40 == 1)
        tickRate = 0.3;

    if(score / 50 == 1)
        tickRate == 0.25;
}

function drawBlocks()
{
    for(let h = 0; h < horizontalBlocks; h++) {
        for(let v = 0; v < verticalBlocks; v++) {
            var blockX = (h * (blockSize + blockPadding));
            var blockY = (v * (blockSize + blockPadding));
            blocks[h][v].x = blockX;
            blocks[h][v].y = blockY;
            ctx.beginPath();
            ctx.rect(blockX, blockY, blockSize, blockSize);
            if(blocks[h][v].status == 0)
                ctx.fillStyle = "#BABABA";
            else if(blocks[h][v].status == 1)
                ctx.fillStyle = "#55B41F"
            else
                ctx.fillStyle = "#EE4A2A";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handleInput();
    drawBlocks();
    drawSnakeBlocks();
    if(generateNewApple)
        generateApple();
    updateSpeed();
    requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
playButton.addEventListener("click", () => {
    startGame();
});

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight")
        rightPressed = true;
    else if(e.key == "Left" || e.key == "ArrowLeft")
        leftPressed = true;
    else if(e.key == "Up" || e.key == "ArrowUp")
        upPressed = true;
    else if(e.key == "Down" || e.key == "ArrowDown")
        downPressed = true;
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight")
        rightPressed = false;
    else if(e.key == "Left" || e.key == "ArrowLeft")
        leftPressed = false;
    else if(e.key == "Up" || e.key == "ArrowUp")
        upPressed = false;
    else if(e.key == "Down" || e.key == "ArrowDown")
        downPressed = false;
}

function startGame() {
    if(!gameRunning) {
        gameRunning = true;
        moveSnake();
    }
}

draw();