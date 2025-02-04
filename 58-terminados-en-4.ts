// Leer un número entero y determinar si es un número terminado en 4.

function terminados(num: number) {
    if (num % 10 === 4) {
        return `Termina en 4, ${num}`
    }else {
        return "Error, no termina en 4"
    }
}

console.log(terminados(4))