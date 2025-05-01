// 1. Crea una variable para cada operación aritmética

let a = 2
let b = 10
let c = 5
let d = 6
let e = 3
let f = 7

console.log("La suma es: " + (a + b))
console.log("La Resta es: " + (b - c))
console.log("La Multiplicacion es: " + (d * e))
console.log("La Division es: " + (a / f))
console.log("El Modulo es: " + (c % f))
console.log("El Exponente es: " + (b ** e))

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas

let myVariable = a 
myVariable += 2
console.log("El nuevo valor es: " + myVariable)

let myVariable1 = b
myVariable1 -= 5
console.log("El nuevo valor es: " + myVariable1)

let myVariable2 = c
myVariable2 *= 5
console.log("El nuevo valor es: " + myVariable2)

let myVariable3 = d
myVariable3 /= 10
console.log("El nuevo valor es: " + myVariable3)

let myVariable4 = e
myVariable4 %= 6
console.log("El nuevo valor es: " + myVariable4)

let myVariable5 = f
myVariable5 **= 8
console.log("El nuevo valor es: " + myVariable5)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(e < 10)
console.log(a != 10)
console.log(b <= 10)
console.log(f == "7")
console.log(a === 2)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(e < a)
console.log(a > d)
console.log(b <= f)
console.log(f === "7")
console.log(a !== 2)

// 5. Utiliza el operador lógico and

console.log(a < b && b > c)
console.log(e >= c && f >= a)
console.log(a == b && d < f)
console.log(a < b && b > c && e === f)

// 6. Utiliza el operador lógico or
console.log(a > b || b < c)
console.log(e >= c || f >= a)
console.log(a == b || d < f)
console.log(a < b || b > c || e === f)

// 7. Combina ambos operadores lógicos
console.log(a > b || b < c)
console.log(e >= c && a > b || f >= a)
console.log(a == b || d < f && e >= c)
console.log(a < b || b > c && e === f)

// 8. Añade alguna negación
console.log(!(a > b || b < c))
console.log(e >= c && a > b || f >= a)
console.log(a == b || d < f && e >= c)
console.log(a < b || b > c && e === f)

// 9. Utiliza el operador ternario
const myMother = false
const isMyMother = !myMother

isMyMother ? console.log("Ella es mi madre biologica") : console.log("Ella es mi madre adoptiva")

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((a+b) >= (b-c) && (d*e) == (f/a) || (c**b) <= (e%f))
// console.log((12 >= 5 && 18 == 3.5) || 9765625 <= 3)
// console.log(true && false || false)
// console.log(false || false)
// console.log(false)

