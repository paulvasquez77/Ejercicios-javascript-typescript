// Leer un número entero y determinar si tiene 3 dígitos.

function digitos(num: number) {
    return num > 99 && num <= 999 ? "El numero tiene 3 digitos" : "ERROR, el numero no tiene 3 digitos"
}

console.log(digitos(199))