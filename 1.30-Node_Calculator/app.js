const readline = require("readline-sync")

var num1 = readline.question("Please enter your first number  ");

var num2 = readline.question("Please enter your second number  ");

var operation = readline.question("Select an operation (+ , - , * , /)  ");

var calculate = function(){ 
    if (operation === "+"){
        return 1*num1 + 1*num2
    } else if (operation === "-"){
        return num1 - num2
    } else if (operation === "*"){
        return num1 * num2
    } else if (operation === "/"){
        return num1 / num2
    } else {
    return "Error"
    }
}

console.log("The Result is:  " + calculate())