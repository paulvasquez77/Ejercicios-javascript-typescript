// Leer un número entero y mostrar todos los pares comprendidos entre 1 y el número leído.

const numPares = (num) => {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}

numPares(50)