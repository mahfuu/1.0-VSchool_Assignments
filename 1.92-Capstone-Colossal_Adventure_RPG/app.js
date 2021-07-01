const readline = require("readline-sync")

// Game Constructors

function Player(name, attack, hp, isAlive, inventory) {
    this.name = name,
    this.attack = attack,
    this.hp = hp,
    this.isAlive = isAlive,
    this.inventory = inventory
}

function Monster(name, rarity, attack, hp, itemDrop, initialHP) {
    this.name = name,
    this.rarity = rarity,
    this.attack = attack,
    this.hp = hp,
    this.itemDrop = itemDrop,
    this.initialHP = initialHP
}

function Items(name, ability) {
    this.name = name,
    this.ability = ability
}

// Load Content
        // Abilities for healing items
// const healFull = function(){
//     player.hp += (100 - player.hp)
// }
        //Items
// const potionFull = new Items("Full Potion", healFull)
const blackFeather = "Black Feather"
const vultureEye = "Vulture Eye"
const blueGoo = "Blue Goo"

        // User
const player = new Player("hero", 10, 400, false, [])
        // Enemies
const crow = new Monster("Crow", 0, 15, 30, blackFeather, 30)
const vulture = new Monster("Vulture", 70, 30, 70, vultureEye, 70)
const ghost = new Monster("Poltergeist", 90, 60, 180, blueGoo, 180)

let steps = 0
let playerWins = false

function stepsCount() {
    if (steps > 100){
        playerWins = true
    }
}
// Start the Game

function startGame() {
    if (readline.keyInYN("Do you want to play a Role Playing Game?  ")){
        player.isAlive = true
        const userName = readline.question("what is the name of your character?  ")
        player.name = userName
        greeting()
    }
    runGame()
}

// Run the Game after Startup

function runGame() {
    while (player.isAlive == true) {
        explore()
        kill()
    }
}

// Game Interaction
        // Explore by walking and accessing menu
function explore() {
    if (player.hp <= 0){
        kill()
        console.log(player.name + " was killed by a monster.")
    } else if (player.hp > 500){
        player.hp = 500
        stepsCount
    } else {
        stepsCount
    }
    if (playerWins == true){
        playerWin()
        kill()
    } else {
        const exploreOptions = readline.keyIn("Press 'w' to walk or press 'p' to view the player menu. [You can kill yourself with 'k'] ", {limit: "wpk"})
        if (exploreOptions == "w"){
            steps += 3
            let walk = Math.floor(Math.random()*100)
            console.log("\nstep, step, step\nLike ghosts the shadows rise and fall...\n")
            if (walk < 25){
                battle()
            }
        } else if (exploreOptions == "p"){
            playerMenu()
        } else if (exploreOptions == "k"){
            console.log("The wise live to be 120, but you became a poltergeist.")
            kill()
        }else {
            console.log(player)
        }
    }
    runGame()
}
        // Menu Interaction
function playerMenu() {
        console.log("\n\nPlayer Status: \nName: " + player.name + ", HP: " + player.hp + ", Atk: " + player.attack)
        console.log("Here are the items you have: " + player.inventory)
    if (readline.keyInYN("\nDo you want to use an Item?  ")){
        console.log("This feature has not been unlocked.\n")
    }
}
        // Function that selects an enemy for battles
function enemySelector() {
    let randomEnemy = Math.floor(Math.random()*100)
    if (randomEnemy >= ghost.rarity){
        return ghost
    } else if (randomEnemy >= vulture.rarity){
        return vulture
    } else {
        return crow
    }
}
        // Controls Battle Interaction
function battle() {
    readline.keyIn("Get Ready!!! Here comes a monster...")
    let monster = enemySelector()
    let lockedinBattle = true
    while (player.hp > 0 && lockedinBattle == true && player.isAlive == true){
        console.log("\n\nPlayer Status: \nName: " + player.name + ", HP: " + player.hp + ", Atk: " + player.attack)
        console.log("\nEnemy Status: \nName: " + monster.name + ", HP: " + monster.hp + ", Atk: " + monster.attack)
        let battleOptions = readline.keyIn("\nIf you want to run then press 'r' but if you will fight press 'f'. [You can kill yourself with 'k']  ", {limit: "rfk"})
        if (battleOptions == "r") {
            console.log("run away")
            let enemyAttack = (Math.floor(Math.random()*(monster.attack)) + monster.attack)
            console.log("Monster caused " + enemyAttack + " damage.")
            player.hp -= enemyAttack
            console.log(player.hp)
            if (Math.floor(Math.random()*100) < 50){
                monster.hp = 0
                monster.hp += monster.initialHP
                return lockedinBattle = false
            }

        } else if (battleOptions == "f") {
            console.log("You choose to fight...\n")
            let playerAttack = (Math.floor(Math.random()*(player.attack)) + player.attack)
            monster.hp -= playerAttack
            console.log(player.name + " caused " + playerAttack + " damage to " + monster.name + " HP.  ")
            let enemyAttack = (Math.floor(Math.random()*(monster.attack)) + monster.attack)
            player.hp -= enemyAttack
            console.log(monster.name + " caused " + enemyAttack + " damage to " + player.name + " HP.  ")
            readline.keyIn("Press a key to continue.")
            if (monster.hp <= 0){
                console.log("\nYou killed the monster!\n")
                if (Math.floor(Math.random()*100) < 75){
                    let item = monster.itemDrop
                    player.inventory.push(item)
                    console.log("You received an item: " + item)
                }
                monster.hp = 0
                monster.hp += monster.initialHP
                player.hp += monster.hp
                console.log("You received " + monster.initialHP + " HP for defeating the enemy!")
                return lockedinBattle = false
            }
        } else if (battleOptions == "k") {
            console.log("you take the easy way out")
            kill()
        } else {
            console.log(monster.attack)
            kill()
        }
    }
    
}

        //  Suicide if code should fail
function kill() {
    delete player.isAlive
}

// Difficulty Settings

// Math.floor(Math.random()*100)

// Storyline

function greeting() {
    totheLake()
    console.log("\nWalk through the forest to get to the lake...\n")
}

function totheLake() {
    console.log("\nIn spring of youth it was my lot to haunt of the wide earth a spot the which I could not love the less— so lovely was the loneliness of a wild lake, with black rock bound, and the tall pines that tower’d around.  But when the Night had thrown her pall upon that spot, as upon all, and the mystic wind went by murmuring in melody— then—ah then I would awake to the terror of the lone lake.  Yet that terror was not fright, but a tremulous delight— a feeling not the jewelled mine could teach or bribe me to define— nor love—although the love were thine.  Death was in that poisonous wave, and in its gulf a fitting grave for him who thence could solace bring to his lone imagining— whose solitary soul could make an Eden of that dim lake.")
}

function playerWin(){
    console.log("The happiest day-the happiest hour mine eyes shall see-have ever seen the brightest glance of pride and power when to the lake I have been...\n\nCONGRATULATIONS!!! YOU WIN!!!\n\n")
}

// Command Below for Startup

startGame()