// Leer un número entero y mostrar en pantalla su tabla de multiplicar.

function numTabla(num: number) {
    for (let i = 1; i <= 10 ; i++) {
        console.log(`${num} x ${i} = ${num * i}`)
    }
}

console.log(numTabla(4))