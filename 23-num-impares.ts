// Imprimir todos los números IMPARES desde 1 hasta 300.

function numImpares(num: number){
    for (let i = 1; i <= num; i++) {
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}

console.log(numImpares(300))