// step one

function stepOne(arrayofNumbers) {
    let testedValue = arrayofNumbers[0]
    for (let i = 1; i < arrayofNumbers.length; i++) {
        if (arrayofNumbers[i] > testedValue) {
            testedValue = arrayofNumbers[i]
        }
    }
    return testedValue
}

// console.log(stepOne([6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 2, ]))

// step two
