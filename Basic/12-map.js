// Map

// Declaración
let myMap = new Map()
console.log(myMap)


// Inicialización
myMap = new Map([
    ["name", "Johan"],
    ["email", "johanrincon@sebasdev.com"],
    ["age", 23]
])

console.log(myMap)

// Métodos y propiedades

// Set
myMap.set("alias", "sebasdev")
myMap.set("name", "Johan Rincon")
console.log(myMap)


// Get
console.log(myMap.get("name"))
console.log(myMap.get("lastname"))


// Has
console.log(myMap.has("age")) // Si una necesidad existe o no existe
console.log(myMap.has("lastname")) // Si una necesidad existe o no existe


// Delete
myMap.delete("email")
console.log(myMap)


// Keys, values y entries
console.log(myMap.keys()) // Nos retorna un listado solo con las claves
console.log(myMap.values()) // Nos retorna un listado solo con los valores
console.log(myMap.entries()) // Nos retorna todo el listado claves y valores


// Size
console.log(myMap.size) // Mediante un numero cual es el tamaño del MAP


// Clear
myMap.clear()
console.log(myMap)