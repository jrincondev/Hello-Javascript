// Strings

// Concatenacion
let myName = "Johan"
let greeting = "Hola, " + myName + "!"

console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[7])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Johan"))
console.log(greeting.indexOf("Johandev"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Johan"))
console.log(greeting.includes("Johandev"))
console.log(greeting.slice(0, 4))
console.log(greeting.replace("Hola", "Hola amigo"))

// Template literals (plantillas literales)

let message = `Hola, soy nuevo 
en el curso de JavaScript
con ganas de aprender
y ser un desarrollador
de software`

console.log(message)

let email = "johanrincon@johandev.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)