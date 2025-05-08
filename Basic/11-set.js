// Set

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Johan", "Rincon", "sebasdev", 35, true, "johanrincon@sebasdev.com"])

console.log(mySet)

// Metodos comunes 

// add y delete

mySet.add("https://midu.dev")
console.log(mySet)

mySet.add("true")
console.log(mySet)

mySet.delete(35)
console.log(mySet)

mySet.delete(true)
console.log(mySet)

console.log(mySet.delete("Rincon"))
console.log(mySet.delete(3))

console.log(mySet)

// Has
console.log(mySet.has("Johan"))
console.log(mySet.has("Rincon"))

// Size
console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("johanrincon@sebasdev.com")
mySet.add("johanrincon@sebasdev.com")
mySet.add("johanrincon@sebasdev.com")
mySet.add("JohanRincon@sebasdev.com")
console.log(mySet)