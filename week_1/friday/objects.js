const person = {
    name: 'Tom',
    age: 28,
    faveBands: [
        'Meshuggah',
        'Caravan Palace',
        'Queens of the Stone Age'
    ],
    sayHi(){
        return `Hello, my name is ${this.name} and I like listening to ${this.randomBand()}`;
    },
    randomBand(){
        let index = new Number(Math.random() * this.faveBands.length);
        return this.faveBands[index];
    }
};

const getKeyData = (key) => {
    return person[key];
}

// console.log(getKeyData('name'));
// console.log(getKeyData('age'));
// console.log(getKeyData('faveBands'));
console.log(person.sayHi());