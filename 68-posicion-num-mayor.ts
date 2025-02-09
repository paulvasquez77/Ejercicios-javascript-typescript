// Leer un número entero de tres dígitos y determinar en qué posición está el mayor dígito.

function numMayor(num: number) {
    let count: number = 0
    if (num < 99 || num > 999) {
        return "Numero Invalido"
    } else {
        const digitos = num.toString().split("")
        const maximoNum = Math.max(Number(digitos[0]), Number(digitos[1]), Number(digitos[2]))
        if (maximoNum === Number(digitos[0])) {
            return "El numero mayor es " + maximoNum + " y esta en la primera posición"
        } else if (maximoNum === Number(digitos[1])) {
            return "El numero mayor es " + maximoNum + " y esta en la segunda posición"
        } else {
            return "El numero mayor es " + maximoNum + " y esta en la tercera posición"
        }
        return maximoNum
    }
}

console.log(numMayor(211))