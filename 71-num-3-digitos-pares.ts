// Leer un número entero de tres dígitos y determinar cuántos dígitos pares tiene.

function digitosPares(num: number) {
    if (num < 100 || num > 999) {
        return "Numero invalido"
    }else {
        const digitos = num.toString().split('')
        let cantidadPares = 0;
        
        for (const digito of digitos) {
            if (Number(digito) % 2 === 0) {
                cantidadPares++
            }
        }
        return `El número ${num} tiene ${cantidadPares} dígito${cantidadPares === 1 ? '' : 's'} par${cantidadPares === 1 ? '' : 'es'}`;
    }
}

console.log(digitosPares(212))