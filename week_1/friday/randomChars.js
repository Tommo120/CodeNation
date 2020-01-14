let string = new String;
let forwards = true;

const generateChars = () => {
    let num = Math.floor(Math.random() * 65536 - 1);

    if(string.length >= 65)
        forwards = false;
    else if(string.length <= 1)
        forwards = true;

    if(forwards)
        string += String.fromCharCode(num);
    else
        string.replace(string.charAt(string.length - 1), '');
    console.clear();
    console.log(string);
}

const printStrings = setInterval(generateChars, 100);