// preliminaries

var count = []
for (var i = 0; i < 10; i++){
    count.push(i)
    console.log(count[i])
}

for (var i = count.length - 1; i >= 0; i--){
    count.push(i)
    console.log(i)
}

const fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}