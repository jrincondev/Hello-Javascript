// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Johan", "Rincon", "sebasdev", 38, true]
myArray2 = new Array("Johan", "Rincon", "sebasdev", 38, true)

console.log(myArray)
console.log(myArray2)


myArray2 = new Array(3)
myArray2[0] = "Johan"
// myArray2[1] = "Rincon"
myArray2[2] = "sebasdev"

console.log(myArray2)

myArray = []
myArray2[0] = "Johan"
// myArray2[1] = "Rincon"
myArray2[2] = "sebasdev"

console.log(myArray2)

// Metodos comunes

myArray = []

// push y pop

myArray.push("Johan") // este agrega elementos en el array al final
myArray.push("Rincon") // este agrega elementos en el array al final
myArray.push("sebasdev") // este agrega elementos en el array al final
myArray.push(54) // este agrega elementos en el array al final
console.log(myArray)


console.log(myArray.pop()) // Elimina el ultimo y lo devuelve
myArray.pop()
console.log(myArray)

// shift y unshift

console.log(myArray.shift()) // Elimina desde el primer elemento
console.log(myArray)

myArray.unshift("Johan", "sebasdev") // Agrega desde el principio elementos 
console.log(myArray)

// length

console.log(myArray.length) // nos muestra la longitud de nuestro array

// Clear

myArray = []
myArray.length = 0 // Alternativa
console.log(myArray)

// Slice

myArray = ["Johan", "Rincon", "sebasdev", 38, true]

let myNewArray = myArray.slice(1, 2) // extrae una porción de un array o una cadena de texto y devolverla como un nuevo array o cadena.
myArray.slice(1, 2)
console.log(myArray)
console.log(myNewArray)

// Splice

myArray.splice(1, 3) // Elimina un elemnto en una posicion especifica
console.log(myArray)

myArray = ["Johan", "Rincon", "sebasdev", 38, true]

myArray.splice(1, 2, "Nueva entrada al ARRAY")
console.log(myArray)