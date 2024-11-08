// Mostrar cuantos euros son una cantidad dada por teclado en pesos

const euro: number = 4399

function moneyChange(pesos: number) {
    const valor = pesos / euro
    console.log(valor) 
    return valor
}

moneyChange(5000)