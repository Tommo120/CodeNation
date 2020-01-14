let startingPoint = 90283743503594;

const findLargestPalindrome = () => {
    for(let i = startingPoint; i >= 0; i--)
        if(checkPalindrome(String(i)))
            return i;
}

const checkPalindrome = (num) =>
{
    reverseNum = reverseString(num);
    if (num == reverseNum)
        return true;
    else
        false;
}

const reverseString = (string) =>
{
    let length = string.length;
    let reverseNum = new String;
    for(let i = length; i >= 0; i--)
        reverseNum = reverseNum + string.charAt(i);
    return reverseNum;
}

console.log(findLargestPalindrome());