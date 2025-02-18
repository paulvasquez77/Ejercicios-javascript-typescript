// Leer tres números enteros y determinar si el último dígito de los tres números es igual.

function numFinalIguales(num1: number, num2: number, num3: number) {
    const numFinal1 = num1.toString().split("")
    const numFinal2 = num2.toString().split("")
    const numFinal3 = num3.toString().split("")

    if (numFinal1[1] === numFinal2[1]) {
        return `El numero final del numero 1: ${numFinal1[1]} es igual al numero final 2: ${numFinal2[1]}`
    } else if(numFinal1[1] === numFinal3[1]){
        return `El numero final del numero 1: ${numFinal1[1]} es igual al numero final 3: ${numFinal3[1]}`
    } else if(numFinal2[1] === numFinal3[1]){
        return `El numero final del numero 2: ${numFinal1[1]} es igual al numero final 3: ${numFinal3[1]}`
    } else {
        return `Todos los numeros finales son diferentes`
    }
}


console.log(numFinalIguales(31, 32, 24))