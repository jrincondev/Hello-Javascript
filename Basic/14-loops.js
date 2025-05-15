// Loops o bucles

// For
for (let index = 0; index < 5; index++) {
    console.log(`Hola ${index}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let index = 0; index < numbers.length; index++) {
    console.log(`Elemento: ${numbers[index]}`)
}

// While
let i = 0

while (i < 5) {
    console.log(`Hola ${i}`)
    i++;
}


// Bucle infinito
// while (true) {

// }

// Do while
i = 7

do {
    console.log(`Hola ${i}`)
    i++;
} while (i < 5)


// For of
let myArray = ["Johan", "Rincon", "sebasdev", 38, true]

let mySet = new Set(["Johan", "Rincon", "sebasdev", 35, true, "johanrincon@sebasdev.com"])

let myMap = new Map([
    ["name", "Johan"],
    ["email", "johanrincon@sebasdev.com"],
    ["age", 23]
])

let myString = ["Hola, JavaScript"]

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

for (let valor of myString) {
    console.log(valor)
}

// Buenas practicas

for (let index = 0; index < 10; index++) {
    if (index == 5) {
        continue
    } else if (index == 7) {
        break
    }
    console.log(`Hola ${index}`)

}