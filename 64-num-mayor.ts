// Leer dos números enteros y determinar cuál es el mayor.

function numMayor(num1: number, num2: number): string {
    if (num1 > num2) {
        return "El primer (1er) numero ingresado es mayor"
    } else {
        return "el segundo (2do) numero ingresado es mayor"
    }
}

console.log(numMayor(322, 42));
