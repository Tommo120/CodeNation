const helloCN = () => {
    return "Hello Code Nation!";
}

const funcLooper = (loopNum, fn) => {
    for(let i = 0; i < loopNum; i++) {
        console.log(fn());
    }
}

funcLooper(20, helloCN);