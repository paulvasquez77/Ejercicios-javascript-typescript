// Leer un número entero de dos dígitos y mostrar en pantalla todos los enteros comprendidos entre un dígito y otro.

function numComprendidos(num: number) {
    const newNumber = num.toLocaleString().split('')
    console.log(newNumber)
    if (Number(newNumber[0]) < Number(newNumber[1])) {
        for (let i = Number(newNumber[0]); i <= Number(newNumber[1]); i++) {
            console.log(i)
        }
    } else{
        for (let i = Number(newNumber[0]); i >= Number(newNumber[1]); i--) {
            console.log(i)
        }
    }
    
}

console.log(numComprendidos(92))