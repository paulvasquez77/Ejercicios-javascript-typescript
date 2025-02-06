// Leer un número entero de dos dígitos y determinar si ambos dígitos son pares.

function digitosPares(num: number) {
    const newDigitos = num.toString().split("")
    if (Number(newDigitos[0]) % 2 === 0 && Number(newDigitos[1]) % 2 === 0) {
        return "Ambos digitos son pares"
    }   else if (Number(newDigitos[0]) % 2 === 0){
        return "(1er) primer digito es Par"
    } else if(Number(newDigitos[1]) % 2 === 0) {
        return "(2do) segundo digito es Par"
    } else{
        return "Ninguno de los 2 digitos es par"
    }
}

console.log(digitosPares(11))