// Leer un número entero de dos dígitos y determinar si los dos dígitos son iguales.

function digitosIguales(num: number): string {
    const newDigitos = num.toString().split("")
    if (Number(newDigitos[0]) === Number(newDigitos[1])) {
        return "Ambos digitos son iguales✅"
    } else{
        return "Los digitos NO son iguales❌"
    }
}

console.log(digitosIguales(22))