let num;
let divisable;

const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    })

function start() {
    readline.question("Input a number:\n", (reply) => {
        readline.close();
        num = reply;
        checkDivisible();
    })
}

function checkDivisible()
{
    divisable = false;

    if(num % 3 == 0)
        divisable = true;
    
    if(num % 5 == 0)
        divisable = true;

    switch(divisable)
    {
        case true:
            console.log(`${num} is divisable by 3 or 5`);
            break;
        default:
            console.log(`${num} is not divisable by 3 or 5`);
            break;
    }
}

start();