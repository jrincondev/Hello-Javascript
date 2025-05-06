// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Johan"
let checkName = "Johan"

if (myName == checkName) {
    console.log(myName)
} else {
    console.log("No toma su valor")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let user = "Johandev"
let password = "johan123"

if (user == "Johandev" && password == "johan123") {
    console.log("Usuario y contraseña correctamente")
} else {
    console.log("Usuario y contraseña no son correctamente")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 0

if (number >= 1) {
    console.log("El numero es positivo")
} else if (number == 0) {
    console.log("El numero es cero")
} else {
    console.log("El numero es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 10
let añosFaltante = 18 - age
if (age >= 18) {
    console.log("Puede votar")
} else {
    console.log(`Le faltan ${añosFaltante} año para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let myAge = 18

const message = myAge >= 18 ? "Es un adulto" : "Es menor"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 2
let dayMonth

switch (month) {
    case 1:
    case 2:
    case 3:
        dayMonth = "Verano"
        break;
    case 4:
    case 5:
    case 6:
        dayMonth = "Otoño"
        break;
    case 7:
    case 8:
    case 9:
        dayMonth = "Invierno"
        break;
    case 10:
    case 11:
    case 12:
        dayMonth = "Primavera"
    default:
        console.log("Mes invalido para mostrar la estacion")
        break;
}

console.log(dayMonth)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let numberDay

switch (month) {
    case 1:  // Enero
    case 3:  // Marzo
    case 5:  // Mayo
    case 7:  // Julio
    case 8:  // Agosto
    case 10: // Octubre
    case 12: // Diciembre
        numberDay = `El mes ${month} tiene 31 dias`;
        break;
    case 4:  // Abril
    case 6:  // Junio
    case 9:  // Septiembre
    case 11: // Noviembre
        numberDay = `El mes ${month} tiene 30 dias`;
        break;
    case 2:  // Febrero
        numberDay = `El mes ${month} tiene 28 dias`;
        break;
    default:
        console.log("Mes inválido para mostrar los dias");
        break;
}

console.log(numberDay)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let lenguage = "español"
let obtain

switch (lenguage) {
    case "ingles":
        obtain = `Hello world in the lenguage ${lenguage}`
        break;
    case "español":
        obtain = `Hola mundo en el idioma ${lenguage}`
        break;
    case "portugués":
        obtain = `hello world na língua ${lenguage}`
        break;
    case "alemán":
        obtain = `hallo Welt in der Sprache ${lenguage}`
        break;
    default:
        console.log(`este idioma ${lenguage} es invalido para esta persona`)
        break;
}

console.log(obtain)


// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7