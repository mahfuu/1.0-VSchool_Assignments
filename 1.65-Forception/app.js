var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(var1, var2){
    var forceptionArray = []
    var newArray = Array.from(var2.split(""))
    for (var i = 0; i < var1.length; i++) {
        forceptionArray.push(var1[i])
        for (var j = 0; j < var2.length; j++){
            forceptionArray.push(newArray[j])
        }
    }
    console.log(forceptionArray)
}

forception(people, alphabet)