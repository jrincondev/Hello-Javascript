// 1. Crea un array que almacene cinco animales

let myArrayAnimal = []
myArrayAnimal = [
    "perro",
    "gato",
    "caballo",
    "vaca",
    "araña"
]

console.log(myArrayAnimal)

// 2. Añade dos más. Uno al principio y otro al final

myArrayAnimal.unshift("mariposa")
myArrayAnimal.push("paloma")
console.log(myArrayAnimal)


// 3. Elimina el que se encuentra en tercera posición
let myNewArray = myArrayAnimal.splice(3, 1) // Elimina en posicion
console.log(myNewArray)
console.log(myArrayAnimal)


// 4. Crea un set que almacene cinco libros
let mySet = new Set()
mySet = new Set(["Cien años de soledad", "1984", "El nombre del viento", "Sapiens: De animales a dioses", "Los hombres me explican cosas"])
console.log(mySet)


// 5. Añade dos más. Uno de ellos repetido
mySet.add("La sombra del viento")
mySet.add("1984") // El set no admite duplicados 
console.log(mySet)


// 6. Elimina uno concreto a tu elección
console.log(mySet.delete("1984"))
console.log(mySet)


// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map()
myMap = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
])


// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has(5))
console.log(myMap.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let arrayMonth = ["January", "February", "March"]
myMap.set("Verano", arrayMonth)// Forma de hacerlo tomando los datos del array que creamos 
console.log(myMap)
myMap.set("Verano", [1,2,3])// Forma de hacerlo tomando las claves del map ya creado
console.log(myMap)



// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ["Johan", "Beatriz", "Rosalba", "Amanda", "Andres"] //Creamos el array
let mySetNew = new Set(myArray) // Lo transformamos al set
let myMapNew = new Map() 
myMapNew.set("Nombres", mySetNew) // Amacenamos a un map

console.log(myMapNew)

