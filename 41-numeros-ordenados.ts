// Leer 20 números y almacenarlos de manera ordenada en un vector.

function ordenarNums(numeros: number[]){
    const numOrdenados = numeros.sort((a, b) => {
        return a - b
    })
    return numOrdenados
}

console.log(ordenarNums([5,3,13,6,41,7,15,1]))