// Leer un número entero de tres dígitos y determinar si el primer dígito es igual al último.

function primerUltimo(num: number) {
    if (num < 99 || num > 999) {
        return "Numero invalido"
    } else{
        const digitos = num.toString().split("")
        if (Number(digitos[0]) === Number(digitos[2])) {
            return "El primer y ultimo numero son iguales"
        } else {
            return "Todos los numeros son diferentes"
        }
    }
}

console.log(primerUltimo(242))