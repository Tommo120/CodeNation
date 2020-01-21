function keycode() {
    var key = event.keyCode;
    console.log(key);
}

const eventKey = document.getElementById("event-key");
const eventWhich = document.getElementById("event-which");
const eventCode = document.getElementById("event-code");

document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
    eventKey.innerText = e.key;
    eventWhich.innerText = e.which;
    eventCode.innerText = e.code;
}