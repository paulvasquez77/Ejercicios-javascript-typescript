// Imprimir los valores comprendidos entre el 460 y 500 en orden inverso.

function numInversos(num1: number, num2: number){
    for (let i = num2; i >= num1; i--) {
        console.log(i)
    }
}

console.log(numInversos(460, 500))