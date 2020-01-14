let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';

for(i = string.length; i >= 0; i--)
{
    if(checkIfVowel(string.charAt(i)))
    {
        console.log(`${i} is the index of the final vowel`);
        break;
    }
}

function checkIfVowel(char)
{
    switch(char)
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}