function esPrimo(num: number): boolean {
    if (num < 2) return false; // 0 y 1 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function sumaNumPrimos(num: number): boolean {
    // Convertir número a string, separarlo en dígitos y sumarlos
    const sumaDigitos = num
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, val) => acc + val, 0);

    // Verificar si la suma de los dígitos es un número primo
    return esPrimo(sumaDigitos);
}

// Ejemplo de uso
console.log(sumaNumPrimos(23)); // true (2 + 3 = 5, y 5 es primo)
console.log(sumaNumPrimos(99)); // false (9 + 9 = 18, y 18 no es primo)
console.log(sumaNumPrimos(17)); // true (1 + 7 = 8, y 8 no es primo)
