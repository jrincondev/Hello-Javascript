// if, else if, else

// if (si)
let age = 37

if (age == 37) {
    console.log("La edad es de 37")
}

// else (si no)

if (age == 37) {
    console.log("La edad es de 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si)

if (age == 37) {
    console.log("La edad es de 37")
} else if (age < 18) {
    console.log("¡Es menor de edad!")
} else {
    console.log("La edad no es 37 y es menor de edad ")
}

// Operador ternario

const message = age == 37 ? "La edad es de 37" : "La edad no es 37"
console.log(message)

// Switch

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break;
    case 1:
        dayName = "Martes"
        break;
    case 2:
        dayName = "Miercoles"
        break;
    case 3:
        dayName = "Jueves"
        break;
    case 4:
        dayName = "Viernes"
        break;
    case 5:
        dayName = "Sabado"
        break;
    case 6:
        dayName = "Domingo"
        break;
    default:
        dayName = "Numero de dia incorrecto"
        break;
}

console.log(dayName)