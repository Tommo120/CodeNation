const button = document.querySelector('reverse');
const textOutput = document.getElementById("textOutput");

const reverseString = () => {
    input = document.getElementById('textInput').value;
    
    //// String Reverser
    let length = input.length;
    let reverseString = new String;
    for(i = length; i >= 0; i--)
    {
        reverseString = reverseString + input.charAt(i);
    }
    ////

    textOutput.textContent = reverseString;
}