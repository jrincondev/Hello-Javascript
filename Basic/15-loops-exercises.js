// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let index = 1; index <= 20; index++) {
    console.log(`Numero ${index}`)
}


// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let total = 0

for (let index = 1; index <= 100; index++) {
    total += index;
}
console.log(`Suma total de los numeros ${total}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let index = 1; index <= 50; index++) {
    if (index % 2 == 0) {
        console.log(`Es par ${index}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let myArray = ["Johan", "Luis", "Rosa", "Alberto", "Roberto"]

for (const element of myArray) {
    console.log(`Nombres de mi array: ${element}`)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let vocales = "johanRInconquintero";
let contador = 0;

for (let index = 0; index < vocales.length; index++) {
    const abece = ["a", "e", "i", "o", "u"]
    const letra = vocales[index].toLocaleLowerCase();
    if (abece.includes(letra)) {
        contador++;
    }
}
console.log(contador)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbers = [1, 2, 3, 4, 5, 6]
let product = 1

for (let index = 0; index < numbers.length; index++) {
    product *= numbers[index]
}

console.log(product)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let index = 1; index <= 10; index++) {
    const multiply = 5 * index
    console.log(`5 x ${index} = ${multiply}`)
}

// 8. Usa un bucle para invertir una cadena de texto
let nickname = "sebasdev"
let reserved = ""

for (let index = nickname.length - 1; index >= 0; index--) {
    reserved += nickname[index]
}
console.log(reserved)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1

for (let index = 2; index <= 11; index++) {
    const sum = a + b // 1
    a = b // a toma el valor de b, entonces a queda valiendo 1
    b = sum // b toma el vallor de la variable sum, entonces b que valiendo 1
    console.log(sum)
    
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let number = [1, 20, 32, 43, 51, 6, 3, 76, 10]
let newArray = []

for (let index = 0; index < number.length; index++) {
    if (number[index] >= 10) {
        newArray.push(number[index])
        newArray.sort()
    }    
    console.log(newArray)
}
