// 6. Leer un número entero de tres dígitos y mostrar todos los enteros comprendidos entre 1 y cada uno de los dígitos.

function numComprendido(num: number){
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}

console.log(numComprendido(111))