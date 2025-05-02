// 1. Concatena dos cadenas de texto

let myName = "Johan"
let myLastName = "Rincon"
let myNameTeacher = "Brais Moure"

let greeting = "Hola, " + myName + " " + myLastName + ", Como te esta yendo"
console.log(greeting)

// 2. Muestra la longitud de una cadena de texto
console.log(greeting.length) // 37

// 3. Muestra el primer y último carácter de un string
console.log(greeting[0])
console.log(greeting[36])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(greeting.toUpperCase()) // Mayuscula
console.log(greeting.toLowerCase()) // Minuscula

// 5. Crea una cadena de texto en varias líneas
let message = `Practicando los ejercicios
que deja Brais Moure para ser
mejor cada dia`

// 6. Interpola el valor de una variable en un string

console.log(`Hola profe, ${myNameTeacher}, me parecen muy bien explicado 
    sus clases de JavaScript, mi nombre es ${myName}, saludos desde colombia`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(message.replaceAll(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(message.includes("Moure"))

// 9. Comprueba si dos strings son iguales
console.log(myName.localeCompare(myLastName))

// 10. Comprueba si dos strings tienen la misma longitud
console.log(myName.length === myNameTeacher.length)
