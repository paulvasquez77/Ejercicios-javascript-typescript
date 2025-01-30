// Escribir en pantalla el resultado de sumar los primeros 20 múltiplos de 3.

function SumMultiplosDe3() {
    let temp: number = 0
    for (let i = 1; i <= 20 ; i++) {
         temp += i*3
        }
        console.log(temp)
}

SumMultiplosDe3()