var enemies = ["Lex", "Batman", "Darkseid", "Brainiac", "General Zod", "Doomsday"];

var clarkKent = true;

var superman = false;

var isThereKryptonite = false;

function enemyName(){
    if (i % 2 === 0) {
        isThereKryptonite = true;
        console.log(isThereKryptonite)
    } else {
        isThereKryptonite = false;
        console.log(isThereKryptonite)
    }
};

function whoWins(isThereKryptonite,enemyName){
    if (isThereKryptonite){
        return "Superman beats " + enemyName + ", of course";
    } else {
        return "Depends on how quick Superman can get rid of the Kryptonite. " + enemyName + " could possibly win this one.";
    }
};

for (var i = 0 ; i < enemies.length; i++){
    isThereKryptonite;
    console.log(whoWins(isThereKryptonite,enemies[i]));
};

function HowAttractedIsLoisLaneToMe ()
{
    // 1 is not at all attracted, 10 is "super" attracted...
    return Math.floor((Math.random()*10)+1);
};

console.log( HowAttractedIsLoisLaneToMe());

while (clarkKent){
    var phoneBoothQuickChange = Math.random();
    if (phoneBoothQuickChange >= 0.5) {
        clarkKent=false;
        superman=true;
        console.log("Now I'm Superman!");
    }
}