// Leer dos números entero y mostrar todos los múltiplos de 5 comprendidos entre el menor y el mayor.

function numMultiplos(num1: number, num2: number) {
    for (let i = num1; i <= num2; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

console.log(numMultiplos(12, 87))