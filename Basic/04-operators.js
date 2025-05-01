// Operadores

// Operadores Aritmeticos

let a = 5
let b = 10

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicacion
console.log(a / b) // Division

console.log(a % b) // Modulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable) 
myVariable -= 2
console.log(myVariable) 
myVariable *= 2
console.log(myVariable) 
myVariable /= 2
console.log(myVariable) 
myVariable %= 2
console.log(myVariable) 
myVariable **= 2
console.log(myVariable)

// Operadores de comparación

console.log(a > b) 
console.log(a < b) 
console.log(a >= b) 
console.log(a <= b) 
console.log(a == b) 
console.log(a == 6) // Igualdad por valor 
console.log(a == "6") // Igualdad por valor 
console.log(a == a)
console.log(a === a) // Igualdad por identidad (por tipo y valor)
console.log(a === 6)
console.log(a === "6")
console.log(a != 6)
console.log(a !== "6")
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)
console.log(0 == "")
console.log(0 == " ")
console.log(0 == '')
console.log(0 == "Hola")
console.log(0 === "")
console.log(undefined == null)


// Truthy values (valores verdaderos)

// Todos los numeros positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El boolean true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El boolean false
// Cadenas de texto vacías

// Operadores logicos
console.log("Operadores Logicos")
let c = 20
let d = 30
let e = 40
let f = 50

// and (&&)
console.log(a > b && c > d)
console.log(a < b && c < d)
console.log(a > b && c < d)
console.log(a > b && c > d && e > f)

// or (||)
console.log(a > b || c > d)
console.log(a < b || c < d)
console.log(a > b || c < d)
console.log(a > b || c > d || e > f)

// not (!)
console.log(!(a > b && c > d))
console.log(!(a > b || c > d))

// Operadores ternearios

const isRaining = false

isRaining ? console.log("Pasaste la materia") : console.log("Reprobaste la materia")