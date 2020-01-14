let tom = { accountNo: 1234, name: "Tom", balance: 45, pin: 1111 };
let adam = {accountNo: 4321, name: "Adam", balance: 200, pin: 2222 };
let jane = {accountNo: 2323, name: "Jane", balance: 50000, pin: 4242};

let accounts = [tom, adam, jane];

const enterPinMessage = `Please enter your PIN:`;
const confirmPinMessage = `Please confirm your current PIN`;

const enterAccountNumber = () => {
    userInput = prompt("Enter your account number:");
    accountIndex = findAccountIndex(userInput);
    if(accountIndex != -1)
        if(enterPinNumber(accountIndex, enterPinMessage))
            mainMenu(accountIndex);
        else
            enterAccountNumber();
    else
    {
        alert(`Incorrect account number, please try again.`)
        enterAccountNumber();
    }
}

const findAccountIndex = accountNo => {
    for (let i = 0; i < accounts.length; i++)
    {
        if( accounts[i].accountNo == accountNo)
            return i;
    }
    return -1;
}

const enterPinNumber = (accountIndex, message) => {
    userInput = prompt(`${message}`);
    
    for(i = 3; i > 0; i--)
    {
        if(userInput != accounts[accountIndex].pin)
            userInput = prompt(`Incorrect PIN. Please try again. (Attempts remaining:${i})`);
        else
            return true;
    }
    if(userInput == accounts[accountIndex].pin)
        return true;

    alert(`Exceeded PIN attempts`);

    return false;
}

const mainMenu = (accountIndex) => {
    userInput = prompt(`Hello, ${accounts[accountIndex].name}! Please enter a number. \n\
1: Check Balance\n2: Withdraw Cash\n3: Deposit Cash\n4: Transfer Cash\n\
5: Change PIN\n6: Cancel`);

    switch(userInput)
    {
        case '1':
            checkBalance(accountIndex);
            break;
        case '2':
            withdrawCash(accountIndex);
            break;
        case '3':
            depositCash(accountIndex);
            break;
        case '4':
            transferCash(accountIndex);
            break;
        case '5':
            changePin(accountIndex);
            break;
        case '6':
            cancel();
            break;
        default:
            alert(`Please enter a valid option (1-6)`);
            mainMenu(accountIndex);
            break;
    }
}

const returnToMenu = (accountIndex) => {
    if(confirm(`Would you like to return to the menu?`))
        mainMenu(accountIndex);
    else
        cancel();
}

const checkBalance = (accountIndex) => {
    alert(`Your current balance is £${accounts[accountIndex].balance}`);
    returnToMenu(accountIndex);
}

const withdrawCash = (accountIndex) => {
    userInput = prompt(`How much would you like to withdraw?`);
    if(userInput <= accounts[accountIndex].balance && userInput > 0)
    {
        accounts[accountIndex].balance -= userInput;
        alert(`You have successfully withdrawn £${userInput}`);
        returnToMenu();
    }
    else if(userInput > accounts[accountIndex].balance)
    {
        alert(`Insufficient funds available.`);
        withdrawCash(accountIndex);
    }
    else
    {
        alert(`Invalid input, please try again.`);
        withdrawCash(accountIndex);
    }
}

const depositCash = (accountIndex) => {
    userInput = prompt(`Please insert some cash:`);
    if(userInput > 0)
    {
        accounts[accountIndex].balance += Number(userInput);
        alert(`You have deposited £${userInput} to your account.`);
        returnToMenu();
    }
    else
    {
        alert(`Please insert some cash.`);
        depositCash(accountIndex);
    }
}

const transferCash = (accountIndex) => {
    userInput = prompt(`Enter the account number you would like to deposit into:`);
    let accountToDepositInto = findAccountIndex(userInput);
    if(accountToDepositInto != -1 && accountToDepositInto != accountIndex)
    {
        userInput = prompt(`Enter the amount you would like to transfer:`);
        while(userInput > accounts[accountIndex].balance || userInput < 0)
            userInput = prompt(`Insufficient funds or invalid input.`)
        accounts[accountIndex].balance -= Number(userInput);
        accounts[accountToDepositInto].balance += Number(userInput);
        alert(`You transfered £${userInput} to account number ${accounts[accountToDepositInto].accountNo}.`);
        returnToMenu(accountIndex);
    }
    else if(accountToDepositInto == accountIndex)
    {
        alert(`You cannot transfer money into your current account`)
        transferCash(accountIndex);
    }
    else
    {
        alert(`Invalid account number or account not found.`);
        if(confirm(`Would you like to try again?`))
            transferCash(accountIndex);
        else
            returnToMenu(accountIndex);
    }
}

const changePin = (accountIndex) => {
    if(enterPinNumber(accountIndex, confirmPinMessage))
    {
        newPin = enterNewPin();
        accounts[accountIndex].pin = parseInt(newPin);
        alert(`PIN successfully changed.`);
        returnToMenu(accountIndex);
    }
    else
        enterAccountNumber();
}

const enterNewPin = () => {
    let newPin;

    pinLoop:
    while(userInput != newPin)
    {
        userInput = prompt(`Please type your new four digit PIN:`);
        if(!isNaN(parseInt(userInput)) && userInput.length == 4)
        {
            newPin = userInput;
            userInput = prompt(`Confirm your new four digit PIN:`);
            if(newPin == userInput)
                return newPin;
            
            alert(`PIN does not match.`)
            continue pinLoop;
        }
        alert(`Please type a valid four digit PIN.`)
    }
    return newPin;
}

const cancel = () => {
    alert(`Thank you for using this cash machine, have a nice day.`);
}

enterAccountNumber();