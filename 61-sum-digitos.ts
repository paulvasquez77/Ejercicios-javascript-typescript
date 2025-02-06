// Leer un número entero de dos dígitos y determinar a cuánto es igual la suma de sus dígitos.

function sumDigitos(num: number) {
    const newDigitos = num.toString().split("")
    const suma = Number(newDigitos[0]) + Number(newDigitos[1])
    return `La suma de los digitos es ${suma}`
}

console.log(sumDigitos(41))