let password;

const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    })

function start() {
    readline.question("Input a password:\n", (reply) => {
        readline.close();
        password = reply;
        checkPasswordValid();
    })
}

function checkPasswordValid()
{
    if(password.length < 8)
        console.log("The provided password is too short!")
    else
        console.log(`${password} is a valid password!`);
}

start();