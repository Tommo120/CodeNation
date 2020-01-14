const inquirer = require('inquirer');
const numberRange = 15;

const questions = [
    {
        type: 'confirm',
        name: 'playChanceGame',
        message: 'Would you like to play an electronic game of chance?',
        default: true
    },
    {
        type: 'confirm',
        name: 'playAgain',
        message: 'Would you like to play again?',
        default: true
    },
    {
        type: 'confirm',
        name: 'confirmChanceGame',
        message: 'Are you sure?',
        default: false
    },
    {
        type: 'number',
        name: 'playersNumber',
        message: String(`Pick a number between 1 and %i:`, numberRange)
    }
]

function start()
{
    inquirer.prompt(questions[0]).then(answers => {
        if(answers.playChanceGame)
            playGame();
        else
            askAgain();
    })
}

function askAgain()
{
    inquirer.prompt(questions[2]).then(answers => {
        if(answers.confirmChanceGame)
            exitGame();
        else
            start();
    })
}

function playAgain()
{
    inquirer.prompt(questions[1]).then(answers => {
        if(answers.playAgain)
            playGame();
        else
            areYouSure();
    })
}

function areYouSure()
{
    inquirer.prompt(questions[2]).then(answers => {
        if(answers.confirmChanceGame)
            exitGame();
        else
            playAgain();
    })
}

function playGame()
{
    inquirer.prompt(questions[3]).then(answers => {
        let randomNumber = Math.ceil((Math.random() * numberRange));
        console.log('You picked the number %i', answers.playersNumber);
        console.log('I picked the number %i', randomNumber);
        if(answers.playersNumber < 1 || answers.playersNumber > numberRange)
        {
            console.log(`Try again, but pick a number between 1 and ${numberRange} this time...`);
        }
        else if(randomNumber == answers.playersNumber)
        {
            console.log('You win')
        }
        else
        {
            console.log('Loser!');
        }
        playAgain();
    })
}

function exitGame()
{
    console.log('Thanks for playing :)');
    process.exit();
}

start();



// let userReply;
// let userNumber = 0;

// const readline = require('readline').createInterface(
//     {
//         input: process.stdin,
//         output: process.stdout
//     })

// PlayGame();

// function PlayGame() {
//     readline.question("Would you like to play an electronic game of chance?\n", (reply) => {
//         readline.close();
//         userReply = reply;
//         Response();
//     })
// }

// function Response() {
//     switch (userReply.toLowerCase()) {
//         case 'yes':
//             GameOfChance();
//             break;
//         case 'no':
//             PlayGame();
//             break;
//         default:
//             console.log("Invalid resonse! Try again...");
//             PlayGame();
//             break;
//     }
// }

// function GameOfChance() {
//     readline.question("Pick a number between 1 and 100:\n", (num) => {
//         readline.close();
//         userNumber = ParseInt(num);
//         CheckAnswer();
//     })
// }

// function CheckAnswer() {
//     let randomNumber = Math.ceil((Math.random * 100));
//     console.log("You said %i, the correct number is %i.", userNumber, randomNumber);
//     if (userNumber == randomNumber)
//         console.log("You win!");
//     else
//         console.log("Better luck next time!");
//     PlayGame();
// }