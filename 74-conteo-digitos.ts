// Leer un número entero menor que mil y determinar cuántos dígitos tiene.

function conteo(num: number) {
    if (num > 1000) {
        return "Num Invalido"
    } else {
        const newNum = num.toString().split("").length
        console.log(newNum)
        return `El numero ingresado tiene ${newNum} digitos`        
    }
}

console.log(conteo(423))