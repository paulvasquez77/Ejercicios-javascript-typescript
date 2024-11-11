// Convertir una distancia en metros a kilómetros

function convertir(distancia: number){
    const result = distancia * (0.001)
    return `La distancia equivale a  ${result} kilometro(s)`
}

console.log(convertir(10000))

