// Leer un número entero y determinar cuántas veces tiene el dígito 1.

function numUno(num: number, repetido: string) {
    const numeroUno = num.toString().split("")
    const nuevoNumero = numeroUno.filter(valor => valor === repetido).length
    return `Este numero se repite ${nuevoNumero} veces`
}

console.log(numUno(312411231, '1'))