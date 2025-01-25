// 5. Leer dos números y mostrar todos los números terminados en 4 comprendidos entre ellos.

function numTerminados(num1: number, num2: number): number[] {
    let result: number[] = []
    for (let i = num1; i <= num2; i++) {
        if(i % 10 === 4){
             result.push(i)
        }
    }
    return result
}

console.log(numTerminados(2, 62))



function numTerminados2(num1: number, num2: number) {
    for (let i = num1; i <= num2; i++) {
        if(i % 10 === 4){
             console.log(i)
        }
    }
}

console.log(numTerminados2(2, 62))