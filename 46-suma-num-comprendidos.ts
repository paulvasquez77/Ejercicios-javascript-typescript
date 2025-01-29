// Leer un número entero y determinar a cuánto es igual la suma de todos los enteros comprendidos entre 1 y el número leído.

function sumNumeros(num: number) { 
    let temp: number = 0
    for (let i = 1; i <= num; i++) {
        console.log(temp += i)
    }
}

console.log(sumNumeros(35))

function sumNumeros2(num: number) { 
    let temp: number = 0
    for (let i = 1; i <= num; i++) {
        console.log(temp += i)
    }
}

console.log(sumNumeros2(35))