// Leer un número entero y mostrar todos los enteros comprendidos entre 1 y el número leído.

const numIngresado = (num) => {
    console.log(typeof (num))
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}

numIngresado(30)
