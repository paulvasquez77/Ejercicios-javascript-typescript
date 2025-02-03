// Leer 2 números enteros y determinar cuál de los dos tiene mayor cantidad de dígitos.

function mayoresDigitos(num1: number, num2: number) {
    const digitosNum1 = num1.toString().length
    const digitosNum2 = num2.toString().length

    if (digitosNum1 > digitosNum2) {
        return "El primer numero ingresado es mayor"
    } else{
        return "El segundo numero ingresado es mayor"
    }
}

console.log(mayoresDigitos(32, 123))