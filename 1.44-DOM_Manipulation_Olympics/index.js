// Qualifier - This writes the header

const header = document.getElementById("header")
const author = document.createElement("span")
const subheader = document.createElement("span")
const headerBox = document.createElement("div")
header.className += "header"
header.textContent = "JavaScript made this!!"
header.append(headerBox)
author.className += "name"
headerBox.append(author)
headerBox.append(subheader)
author.textContent = "Timothy Mixon"
subheader.textContent = " wrote this JavaScript"

// Bronze - Changes the text message content or clears the messages

const message = document.getElementsByClassName("message")

author.addEventListener("click", e => {
    e.preventDefault()
    for (var i = 0; i < message.length; i++) {
        var sh = 0
        message[sh].textContent = "I am here for you"
        sh++
        message[sh].textContent = "Thanks :) That means so much to me because I'm really going through alot"
        sh++
        message[sh].textContent = "This is your Uber driver to pick you up"
        sh++
        message[sh].textContent = "Oh"
    }
})

var clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", e => {
    e.preventDefault()
    for (var i = 0; i < message.length; i++) {
        while (message.length > 0) {
            message[i].remove()
        }
    }
})

// Silver - Drop downs with Dark Mode and Light Mode

var left = document.getElementsByClassName("left")
var right = document.getElementsByClassName("right")
const dropDown = document.getElementById("theme-drop-down")
var modeSelect = document.querySelectorAll("option[value]")
for (var i = 0; i < modeSelect.length; i++) {
    dropDown.addEventListener("change", function(e){
        if (e.target.value == "theme-one") {
            left[0].style.backgroundColor = "burlywood"
            right[0].style.backgroundColor = "lightblue"
            left[1].style.backgroundColor = "burlywood"
            right[1].style.backgroundColor = "lightblue"
            right[0].style.color = "black"
            right[1].style.color = "black"
        } else if (e.target.value == "theme-two") {
            left[0].style.backgroundColor = "red"
            right[0].style.backgroundColor = "black"
            left[1].style.backgroundColor = "red"
            right[1].style.backgroundColor = "black"
            right[0].style.color = "white"
            right[1].style.color = "white"
        }
    })
}

// Gold - Add messages - will finish later

// var sendForm = document["message"]

// sendForm.addEventListener("submit", function(e){
//     e.preventDefault()
//   return console.log( sendForm.input.value)
// })
