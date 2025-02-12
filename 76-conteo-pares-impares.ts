// Leer un número entero de 4 dígitos y determinar si tiene más dígitos pares o impares.

function conteoParesImp(num: number) {
    if (num < 1000 || num > 9999) {
        return "Numero invalido: debes ingresar 4 digitos"
    }
        const newNums = num.toString().split("").map(Number)
        console.log(newNums)
        let pares = 0   
        let impares = 0

        for (const newNum of newNums) {
            if (newNum % 2 === 0) {
                pares++
            }else{
                impares++
            }
        
    }
    return `El numero ingresado es ${num} y tiene ${pares} digitos pares y ${impares} digitos impares`
}

console.log(conteoParesImp(2463))