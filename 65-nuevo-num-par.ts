// Leer dos números enteros de dos dígitos y determinar si la suma de los dos números origina un número par.

function sumNumPares(num1: number, num2: number) {
    const sum = num1 + num2
    if (sum % 2 === 0) {
        return `La suma de los numero es ${sum} y es un numero par✅`
    } else {
        return "La suma no es un numero par❌"
    }
}

console.log(sumNumPares(32, 12))