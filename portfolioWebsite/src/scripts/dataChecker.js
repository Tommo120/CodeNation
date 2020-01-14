const dataChecker = (string, rank) => {
    if(string == 'codenation' && rank == 1)
        return `The string ${string} and rank ${rank} are both correct!`;
    else if(string == 'codenation' && rank != 1)
        return `The string ${string} is correct, but rank ${rank} is incorrect!`;
    else
        return `The string ${string} is incorrect!`;
}

console.log(dataChecker('codenation', 1));
console.log(dataChecker('codenation', 4));
console.log(dataChecker('vapenation', 3));