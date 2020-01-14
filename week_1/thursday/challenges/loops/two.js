let aString = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let firstInstance
let lastInstance;

const findFirstHi = () => {
    for(let i = 0; i < aString.length; i++)
    {
        if(aString.charAt(i) == 'h' && aString.charAt(i + 1) == 'i')
        {
            firstInstance = i;
            break;
        }
    }
}

const findLastHi = () => {
    for(let i = aString.length; i > 0; i--)
    {
        if(aString.charAt(i) == 'i' && aString.charAt(i - 1) == 'h')
        {
            lastInstance = i;
            break;
        }
    }
}

findFirstHi();
findLastHi();

console.log(`The first 'hi' is at character number ${firstInstance}\nThe last 'hi' is at character number ${lastInstance}`);