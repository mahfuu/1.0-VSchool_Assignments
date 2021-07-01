// step one

function lettersUPdown(givenString) {
    let upString = givenString.toUpperCase()
    let downString = givenString.toLowerCase()
    let stepOne = upString + " " + downString
    console.log(stepOne)
    return stepOne
}

// step two

function findMiddleIndex(givenString) {
    let convertToArray = givenString.split("")
    let stepTwo = Math.floor(convertToArray.length / 2)
    return stepTwo
}

// step three

function returnFirstHalf(someString) {
    let middleIndex = findMiddleIndex(someString)
    let stepThree = someString.split("").reverse().join("").slice(middleIndex).split("").reverse().join("")
    return stepThree
}

// step four

function halfBigHalfSmall(fourthString) {
    if (fourthString.length % 2 === 0) {
        let halfBig = returnFirstHalf(fourthString).toUpperCase()
        let halfHalf = findMiddleIndex(fourthString)
        let halfSmall = fourthString.slice(halfHalf).toLowerCase()
        let stepFour = halfBig + halfSmall
        console.log(stepFour)
        return stepFour
    } else {
        let halfBig = returnFirstHalf(fourthString).toUpperCase()
        let halfHalf = findMiddleIndex(fourthString) + 1
        let halfSmall = fourthString.slice(halfHalf)
        let stepFour = halfBig + halfSmall
        console.log(stepFour)
        return stepFour    
    }
}

// optional