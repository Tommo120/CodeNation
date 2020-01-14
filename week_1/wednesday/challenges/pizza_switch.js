let inquirer = require('inquirer');

let questions = [
    {
        type: 'input',
        name: 'pizzaTopping',
        message: 'Name a pizza topping:'
    }
]

function askAboutToppings()
{
    inquirer.prompt(questions[0]).then(answers => {
        isToppingGood(answers.pizzaTopping.toLowerCase());
    })
}

function isToppingGood(topping)
{
    switch(topping.toLowerCase())
    {
        case 'sausage':
        case 'bacon':
        case 'pepperoni':
        case 'chicken':
        case 'ham':
            console.log(`${topping} is a pretty amazing pizza topping!`);
            askAboutToppings();
            break;
        case 'onion':
        case 'mushrooms':
        case 'egg':
        case 'sweetcorn':
            console.log(`${topping} is an alright pizza topping, I guess....`);
            askAboutToppings();
            break;
        case 'pineapple':
        case 'olives':
        case 'sardines':
        case 'anchovies':
            console.log(`${topping} is an awful pizza topping! Get out!`);
            askAboutToppings();
            break;
        case 'exit':
            process.exit();
        default:
            console.log(`${topping} is an invalid pizza topping, why don\'t you try that again?`);
            askAboutToppings();
            break;
    }
}

askAboutToppings();