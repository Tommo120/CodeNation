let iterations = 50;
let randomNumbers = [];

for(i = 0; i < iterations; i++)
{
    randomNumbers.push(Math.random());
    console.log(`#${randomNumbers.length} ${randomNumbers[i]}`);
}

let arrayCopy = randomNumbers.slice(0, randomNumbers.length / 2);

console.log(arrayCopy.join());

let combinedArray = randomNumbers.concat(arrayCopy);

console.log(combinedArray.join(`_`));


