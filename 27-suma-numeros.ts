// Calcular y visualizar la suma de los números comprendidos entre 20 y N(ambos incluidos)

function sumaNumeros(numN: number) {

    let acum = 0
    for (let i = 20; i <= numN; i++) {
        acum += i;
    }
    return acum
}

console.log(sumaNumeros(35))