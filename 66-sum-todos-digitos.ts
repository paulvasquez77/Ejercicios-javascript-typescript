// Leer dos números enteros de dos dígitos y determinar a cuánto es igual la suma de todos los dígitos.

function sumAllDigitos(num1: number, num2: number) {
    const digitos1 = num1.toString().split("")
    const digitos2 = num2.toString().split("")
   
    return `La suma total de los digitos es: ${Number(digitos1[0]) + Number(digitos1[1]) + Number(digitos2[0]) + Number(digitos2[1])}`
}

console.log(sumAllDigitos(32, 12))