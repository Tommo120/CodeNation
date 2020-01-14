let priceString = 'Ticket price is'
let juniorPrice = 8;
let regularPrice = 10.95;
let pensionerPrice = 7.50;

const readline = require('readline').createInterface(
    {
        input: process.stdin,
        output: process.stdout
    })

function start() {
    readline.question("Input your age:\n", (reply) => {
        readline.close();
        let price = getTicketPrice(reply);
        if(!!price)
            console.log(`${priceString} £${price}`);
        else
            console.log(`${reply} is an invalid age`);
    })
}

function getTicketPrice(age)
{
    if(age < 18)
        return juniorPrice;
    else if(age < 60)
        return regularPrice;
    else if(age >= 60)
        return pensionerPrice;
    else
        return null;
}

start();