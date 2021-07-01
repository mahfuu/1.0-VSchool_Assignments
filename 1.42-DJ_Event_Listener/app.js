var funSquare = document.getElementById("square")

function mouseOver() {
    funSquare.style.backgroundColor = "blue"
}

function mouseDown() {
    funSquare.style.backgroundColor = "red"
}

function mouseUp() {
    funSquare.style.backgroundColor = "yellow"
}

function dblClick() {
    funSquare.style.backgroundColor = "green"
}

function mouseOut() {
    funSquare.style.backgroundColor = "orange"
}


funSquare.addEventListener("mouseover", mouseOver)

funSquare.addEventListener("mousedown", mouseDown)

funSquare.addEventListener("mouseup", mouseUp)

funSquare.addEventListener("dblclick", dblClick)

funSquare.addEventListener("mouseout", mouseOut)

// Keydown events below

window.addEventListener("keydown", shortcut)

function shortcut(KeyboardEvent) {
    if (KeyboardEvent.key == "b") {
        funSquare.style.backgroundColor = "blue"
    } else if (KeyboardEvent.key == "r") {
        funSquare.style.backgroundColor = "red"
    } else if (KeyboardEvent.key == "y") {
        funSquare.style.backgroundColor = "yellow"
    } else if (KeyboardEvent.key == "g") {
        funSquare.style.backgroundColor = "green"
    } else if (KeyboardEvent.key == "o") {
        funSquare.style.backgroundColor = "orange"
    }
}