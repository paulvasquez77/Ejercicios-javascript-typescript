// Un algoritmo que muestre los pares que hay entre 1 y N

function numPares(num1: number, num2: number){
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }}

console.log(numPares(1, 100))