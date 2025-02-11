// Leer un número entero de cuatro dígitos y determinar cuántos dígitos pares tiene.

function digitos4Pares(num: number) {
    if (num < 1000 || num > 10000) {
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

console.log(digitos4Pares(2223))