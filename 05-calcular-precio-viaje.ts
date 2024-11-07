// Calcula el precio de un viaje sabiendo que este se paga por km y cada km se paga por 2000 pesos

const precioKm: number = 2000;

function calcularPrecio(kmRecorridos: number) {
    const precioFinal = kmRecorridos * precioKm
    console.log(`el precio del recorrido es de ${precioFinal} pesos`)
    return precioFinal
}

calcularPrecio(75)