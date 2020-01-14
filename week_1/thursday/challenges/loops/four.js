let aString = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
let hi = [];

for(let i = 0; i < aString.length; i ++)
{
    if(aString.charAt(i) == 'h')
        if(aString.charAt(i + 1) == 'i')
            hi.push(i);
}

console.log(`Hi appears a total of ${hi.length} times at the following positions: ${hi.join(', ')}`);