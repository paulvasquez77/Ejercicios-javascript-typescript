// Leer un entero y mostrar todos los múltiplos de 5 comprendidos entre 1 y el número leído.

function multiplos5(num: number) {
    for (let i = 1; i <= num; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

console.log(multiplos5(32))