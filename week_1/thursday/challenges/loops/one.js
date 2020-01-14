let numbers = [];
let sumOfNumbers = new Number;

for(let i = 0; i < 1000; i++)
{
    if(i % 3 == 0 || i % 5 == 0)
        numbers.push(i);
}

numbers.forEach(function(num){
    sumOfNumbers += num;
})

console.log(sumOfNumbers);