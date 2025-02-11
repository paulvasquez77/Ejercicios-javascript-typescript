// Leer un número entero de cuatro dígitos y determinar a cuanto es igual la suma de sus dígitos.

function sum4Digitos(num: number) {
    if (num < 1000 || num > 10000) {
        return "Numero invalido"
    } else{
        const digitos = num.toString().split("")
        const sumDigitos = Number(digitos[0]) + Number(digitos[1]) + Number(digitos[2]) + Number(digitos[3])
        return `La Suma de los digitos es: ${sumDigitos}`
    }
}

console.log(sum4Digitos(1201))