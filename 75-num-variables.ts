// Leer un número entero de dos dígitos, guardar cada dígito en una variable diferente y luego mostrarlas en pantalla.

function numVariables(num: number) {
    const newNum = num.toString().split("")
    const newNumber1 = Number(newNum[0])
    const newNumber2 = Number(newNum[1])
    return `Numero en variable 1: ${newNumber1}, Numero en variable 2: ${newNumber2}, `
}

console.log(numVariables(35))