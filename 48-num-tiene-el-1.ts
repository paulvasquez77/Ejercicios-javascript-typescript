// Leer un número entero de 3 dígitos y determinar si tiene el dígito 1.

function determinar(num: number) {
    if (num < 100 || num > 999) {
        return "El numero no cumple con la condición"
    } else{
        const newNumber = num.toLocaleString().split('').indexOf("1")
        if (newNumber !== -1) {
            return `El numero está en la posición ${newNumber + 1}`
        }else{
            return "El numero no tiene el numero 1"
        }
       }

}

console.log(determinar(912))