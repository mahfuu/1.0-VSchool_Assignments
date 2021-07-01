var fruits = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]

console.log("fruits: ", fruits)
console.log("vegetables: ", vegetables)

var arrayMethods = function(){
    var stepOne = vegetables.pop()
    stepOne
    console.log(stepOne)
    
    var stepTwo = fruits.shift()
    stepTwo
    console.log(stepTwo)

    var stepThree = fruits.indexOf("orange")
    stepThree
    console.log(stepThree)
    
    var stepFour = fruits.push(stepThree)
    stepFour
    console.log(stepFour)

    var stepFive = vegetables.length
    stepFive
    console.log(stepFive)

    var stepSix = vegetables.push(vegetables.length)
    stepSix
    console.log(stepSix)
    
    var food = fruits.concat(vegetables)
    console.log(food)

    var stepEight = food.splice(4,3,food[6])
    stepEight
    console.log(food)

    var stepNine = food.reverse()
    stepNine
    console.log(food)

    var stepTen = food.toString()
    stepTen
    console.log(stepTen)
}

arrayMethods()