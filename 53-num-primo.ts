// Leer un número entero y determinar cuántos dígitos tiene.

function numDigitos(num: number) { 
    const digitos = num.toString().length
    console.log(`Tiene ${digitos} digitos`)
}

console.log(numDigitos(22334))