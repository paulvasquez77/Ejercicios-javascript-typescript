// Se solicita al usuario que ingrese tres números enteros cualesquiera.En base a estos números, mostrar por pantalla cual es el mayor de todos.

let acum: number = 0

function mayorNum(numeros: number[]) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > acum) {
            acum = numeros[i]
        }
    }
    return acum
}

console.log(mayorNum([13,34,25]))