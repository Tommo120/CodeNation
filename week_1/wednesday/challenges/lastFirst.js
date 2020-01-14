let word;

const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    })

function start() {
    readline.question("Input a word:\n", (reply) => {
        readline.close();
        word = reply;
        checkFirstLastSame();
    })
}

function checkFirstLastSame()
{
    let length = word.length - 1;
    if(word.charAt(0) == word.charAt(length))
        console.log('It\'s true!');
    else
        console.log('It\'s False!');
}

start();