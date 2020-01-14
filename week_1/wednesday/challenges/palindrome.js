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
        checkPalindrome();
    })
}

function checkPalindrome()
{
    if (num == reverseString(num))
        console.log(`${num} is a palindrome!`)
    else
        console.log(`${num} is not a palindrome!`)
}

function reverseString(string)
{
    let length = string.length;
    let reverseNum = new String;
    for(i = length; i >= 0; i--)
    {
        reverseNum = reverseNum + string.charAt(i);
    }
    return reverseNum;
}

start();