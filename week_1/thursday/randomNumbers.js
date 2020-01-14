let randomNumbers = [];

const generateNumbers = (count) => {
    for(i = 0; i < count; i++)
        randomNumbers.push(Math.ceil(Math.random() * 50));

    console.log(randomNumbers.join());
}

generateNumbers(6);