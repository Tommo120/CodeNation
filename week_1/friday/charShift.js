let spaces = 1;
let forwards = true;
const maxLength = 150;
const charMulti = 15;

const generateChars = () => {
    let num = Math.floor(Math.random() * charMulti + 33);

    if(spaces > maxLength || spaces < 1)
        forwards = !forwards;

    if(forwards)
        spaces++;
    else
        spaces--;

    console.clear();
    string = `${generateSpaces()}${String.fromCharCode(num)}`;
    console.log(string);
}

const generateSpaces = () => {
    stringOfSpaces = new String;
    for(let i = 0; i < spaces; i++)
        stringOfSpaces += " ";
    
    return stringOfSpaces;
}

const printStrings = setInterval(generateChars, 35);