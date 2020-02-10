const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// DEBUG ELEMENTS
const debugVelX = document.getElementById("velocity-x");
const debugVelY = document.getElementById("velocity-y");
const debugVelMag = document.getElementById("velocity-magnitude");

class vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.magnitude = 0;
        this.normalized_x = 0;
        this.normalized_y = 0;
    
        this.updateMagnitude = function() {
            this.magnitude =  Math.sqrt((this.x * this.x) + (this.y * this.y));
            return this.magnitude;
        }

        this.normalize = function() {
            if(this.magnitude > 0) {
                this.normalized_x = this.x / this.magnitude;
                this.normalized_y = this.y / this.magnitude;
            }
        }

        this.limitVelocity = function(squaredMaxVel) {
            this.updateMagnitude();
            this.normalize();
            this.x = this.normalized_x * squaredMaxVel;
            this.y = this.normalized_y * squaredMaxVel;
        }

        this.zero = function() {
            return new vector2(0, 0);
        }
    }
}

class object {
    constructor(width, height, pos, imgSrc, maxSpeed, active) {
        this.width = width;
        this.height = height;
        this.pos = pos;
        this.maxSpeed = maxSpeed;
        this.active = active;

        this.sqrMaxSpeed = maxSpeed * maxSpeed;

        this.angle = 0;
        this.velocity = new vector2(0,0);

        this.imgSrc = imgSrc;
        this.img = new Image();
        this.img.src = this.imgSrc;

        this.updatePosition = function() {
            if(this.velocity.updateMagnitude() > this.sqrMaxSpeed)
                this.velocity.limitVelocity(this.sqrMaxSpeed);

            this.pos.x += this.velocity.x;
            this.pos.y += this.velocity.y;   
        }

        this.collisionCheck = function() {
            for(let i = 0; i < asteroids.length; i++) {
                if(this.object != asteroids[i])
                {
                    
                }
            }
        }

        //All objects should wrap? ~MAYBE~
        this.wrap = function() {
            if(this.pos.x < 0 - this.width / 2)
                this.pos.x = canvas.width + this.width / 2;
            else if(this.pos.x > canvas.width + this.width / 2)
                this.pos.x = 0 - this.width / 2;

            if(this.pos.y < 0 - this.height / 2)
                this.pos.y = canvas.height + this.height / 2;
            else if(this.pos.y > canvas.height + this.height / 2)
                this.pos.y = 0 - this.height / 2;
        }

        this.update = function() {
            if(this.active) {
                this.updatePosition();
                //this.collisionCheck();
                this.wrap();
                ctx.save();
                ctx.translate(this.pos.x, this.pos.y);
                ctx.rotate(this.angle);
                ctx.drawImage (this.img, this.width / -2, this.height / -2, this.width, this.height);
                ctx.restore();
            }
        }
    }
}

class shipObject extends object {
    constructor (width, height, pos, imgSrc, maxSpeed, active) {
        super(width, height, pos, imgSrc, maxSpeed, active);

        this.moveAngle = 0; //Ship specific for turning
        this.accel = 0; //Ship specific for handling accelerating forward

        this.move = function() {
            this.angle += this.moveAngle * Math.PI / 180; //Ship specific for turning

            this.velocity.x += this.accel * Math.sin(this.angle); //Ship specific
            this.velocity.y -= this.accel * Math.cos(this.angle); //Ship specific
        }

        this.fireProjectile = function() {
            bullets[0].init();
        }
    }
}

class bulletObject extends object {
    constructor () {
        super(5, 5, new vector2(30, 30), 'js/img/bullet.svg', 30, false);
        this.speed = 5;

        this.init = () => {
            this.velocity.x = (this.speed * Math.sin(shipObj.angle)) + shipObj.velocity.x;
            this.velocity.y = -(this.speed * Math.cos(shipObj.angle)) + shipObj.velocity.y;
            this.pos.x = shipObj.pos.x;
            this.pos.y = shipObj.pos.y - shipObj.height / 2;
            this.active = true;
            bullets.unshift(bullets.pop());
            setTimeout(this.disable, 2500);
        }

        this.disable = () => {
            this.active = false;
        }
    }
}

let bullets = [];
const bulletCount = 25;

for(let i = 0; i < bulletCount; i++) {
    bullets.push(new bulletObject());
}

let asteroids = [];
const asteroidCount = 1;

for(let i =0; i < asteroidCount; i++) {
    asteroids.push(new object(80, 80, new vector2(50, 50), 'js/img/asteroid.svg', 10, true));
}

// User input
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let spacePressed = false;

let shipObj = new shipObject(40, 40, new vector2(canvas.width / 2, canvas.height / 2), 'js/img/ship.svg', 2, true);
const shipAccel = 0.03;
const shipDrag = 0.01;
const shipTurningRate = 2.5;

const handleInput = () => {
    if(leftPressed) {
        shipObj.moveAngle = -shipTurningRate;
    } else if (rightPressed) {
        shipObj.moveAngle = shipTurningRate;
    } else {
        shipObj.moveAngle = 0;
    }
    
    if(upPressed) {
        shipObj.accel = shipAccel;
    } else {
        shipObj.accel = 0;
    }
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    handleInput();
    shipObj.move();
    shipObj.update();

    for(let i = 0; i < bullets.length; i++)
        bullets[i].update();

    for(let i = 0; i < asteroids.length; i++)
        asteroids[i].update();
    
    outputDebug();
    requestAnimationFrame(draw);
}

const outputDebug = () => {
    debugVelX.innerText = `Velocity X :${shipObj.velocity.x}`;
    debugVelY.innerText = `Velocity Y :${shipObj.velocity.y}`;
    debugVelMag.innerText = `Velocity Magnitude :${shipObj.velocity.magnitude}`;
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight")
        rightPressed = true;
    else if(e.key == "Left" || e.key == "ArrowLeft")
        leftPressed = true;
    else if(e.key == "Up" || e.key == "ArrowUp")
        upPressed = true;
    else if(e.key == "Down" || e.key == "ArrowDown")
        downPressed = true;
    else if(e.key == " ") {
        if(!spacePressed) {
            spacePressed = true;
            shipObj.fireProjectile();
        }
    }
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
    else if(e.key == " ")
        spacePressed = false;
}

draw();