// Leer un número entero y determinar si tiene 3 dígitos

function numeroEntero(num: number) {
    if (num > 99) {
        return 'CORRECTO!!!, El numero ingresado tiene 3 digitos'
    } else{
        return 'ERROR, menor a 3 digitos'
    }
}

console.log(numeroEntero(21))