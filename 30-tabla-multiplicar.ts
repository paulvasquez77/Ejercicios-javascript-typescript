// Realizar un algoritmo que realice la tabla de multiplicar del 1 al 10 de un numero ingresado

function tablaMultiplicar(num: number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

console.log(tablaMultiplicar(4))