// Elaborar un programa que muestre 100 números enteros a partir del 1 excepto los pares

function primerosNumeros() {
    for (let i = 1; i <= 100; i++) {
        if(i % 2 !== 0)
        console.log(i)

    }
}

console.log(primerosNumeros())