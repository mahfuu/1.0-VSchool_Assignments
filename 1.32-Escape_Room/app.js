const readline = require("readline-sync");
const userName = readline.question("What is my name?  ");
console.log("Hello " + userName + "!" );
var playerIsDead = true
var doorIsLocked = true;
var roomOptions = ["open the door", "put my hand in the hole" , "grab my key"];


if(readline.keyInYN("Do you want to play?  ")){
    var playerIsDead = false;
    console.log("\n\n  I have been sucked into another dimension and I'm trapped.\nBehind me is a magical door back to my home.  Between my feet is a small hole filled with a black liquid but it looks dangerous.  I left my key on the coffee table last I remember but I'm so dizzy.");
    while(playerIsDead === false){
        var roomQuestion = readline.keyInSelect(roomOptions, "Doormamu, I've come to bargain...", {cancel : "Give Doormamu the time stone."});
        if(roomOptions[roomQuestion] === "open the door"){
            if(readline.keyInYN("\nIt needs a key. Are you sure you can open the door?  ")){
                if(doorIsLocked === true){
                    console.log("\nThe door is locked.")
                } else if (doorIsLocked === false){
                    console.log("YOU ESCAPED!");
                    playerIsDead = true
                }
            } else {
                console.log("\nI like my room.  I'm beginning to learn to levitate.")
            }
        } else if(roomOptions[roomQuestion] === "put my hand in the hole"){
            console.log("\nThe liquid spreads over my entire body and I melt away! [Game Over]");
            playerIsDead = true
        } else if(roomOptions[roomQuestion] === "grab my key"){
            console.log("\nFinally, I can get out of here.");
            doorIsLocked = false
        } else {
            console.log("\n" + userName + " was meant to be the best of us...\n");
            playerIsDead = true
        }
    }
} else {
    console.log("Open your mind!")
}