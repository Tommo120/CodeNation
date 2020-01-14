let num;

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
    if(num % 3 == 0 && num % 5 == 0)
        console.log(`Fizz Buzz`);
    else if(num % 3 == 0)
        console.log(`Fizz`);
    else if(num % 5 == 0)
        console.log(`Buzz`);
    else
        console.log(`${num}`);
}

start();