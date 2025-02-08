// Leer un número entero de tres dígitos y determinar a cuánto es igual la suma de sus dígitos.

function sum3Digitos(num: number) {
    if (num < 99 || num > 999) {
        return "Numero invalido"
    } else{
        const digitos = num.toString().split("")
        const sumDigitos = Number(digitos[0]) + Number(digitos[1]) + Number(digitos[2])
        return `La Suma de los digitos es: ${sumDigitos}`
    }
}

console.log(sum3Digitos(912))